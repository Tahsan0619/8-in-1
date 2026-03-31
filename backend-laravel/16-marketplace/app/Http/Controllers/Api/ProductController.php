<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::active()->with(['seller', 'category'])
            ->when($request->category_id, fn($q, $v) => $q->where('category_id', $v))
            ->when($request->seller_id,   fn($q, $v) => $q->where('seller_id', $v))
            ->when($request->min_price,   fn($q, $v) => $q->where('price', '>=', $v))
            ->when($request->max_price,   fn($q, $v) => $q->where('price', '<=', $v))
            ->when($request->rating,      fn($q, $v) => $q->where('rating', '>=', $v))
            ->when($request->in_stock,    fn($q) => $q->where('stock', '>', 0));

        return response()->json($query->latest()->paginate(20));
    }

    public function show(Product $product)
    {
        $product->increment('views');
        return response()->json($product->load(['seller', 'category', 'reviews.user']));
    }

    public function featured()
    {
        return response()->json(
            Product::active()->where('is_featured', true)->with(['seller', 'category'])->limit(8)->get()
        );
    }

    public function topSelling()
    {
        return response()->json(
            Product::active()->orderByDesc('sales_count')->with(['seller', 'category'])->limit(8)->get()
        );
    }

    public function search(Request $request)
    {
        $request->validate(['q' => 'required|string|min:2']);
        return response()->json(
            Product::active()
                ->where(fn($q) =>
                    $q->where('name',        'like', "%{$request->q}%")
                      ->orWhere('description', 'like', "%{$request->q}%")
                )
                ->with(['seller', 'category'])
                ->limit(20)
                ->get()
        );
    }

    public function byCategory(string $slug)
    {
        $category = Category::where('slug', $slug)->firstOrFail();
        return response()->json([
            'category' => $category,
            'products' => Product::active()
                ->where('category_id', $category->id)
                ->with('seller')
                ->paginate(20),
        ]);
    }

    public function categories()
    {
        return response()->json(
            Category::withCount(['products' => fn($q) => $q->active()])
                ->orderBy('name')
                ->get()
        );
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name'        => 'required|string|max:255',
            'description' => 'required|string',
            'price'       => 'required|numeric|min:0',
            'sale_price'  => 'nullable|numeric|min:0',
            'stock'       => 'required|integer|min:0',
            'sku'         => 'nullable|string|unique:products',
            'category_id' => 'required|exists:categories,id',
            'images'      => 'nullable|array',
            'thumbnail'   => 'nullable|string',
            'weight'      => 'nullable|numeric',
            'is_featured' => 'boolean',
        ]);

        $data['seller_id'] = $request->user()->seller->id;

        return response()->json(Product::create($data), 201);
    }

    public function update(Request $request, Product $product)
    {
        $data = $request->validate([
            'name'       => 'string|max:255',
            'price'      => 'numeric|min:0',
            'sale_price' => 'nullable|numeric|min:0',
            'stock'      => 'integer|min:0',
            'is_active'  => 'boolean',
            'is_featured'=> 'boolean',
        ]);
        $product->update($data);
        return response()->json($product);
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(['message' => 'Product deleted']);
    }

    public function toggleActive(Product $product)
    {
        $product->update(['is_active' => !$product->is_active]);
        return response()->json($product);
    }

    public function storeReview(Request $request)
    {
        $data = $request->validate([
            'product_id' => 'required|exists:products,id',
            'rating'     => 'required|integer|min:1|max:5',
            'comment'    => 'nullable|string|max:500',
            'images'     => 'nullable|array',
        ]);
        $data['user_id'] = $request->user()->id;

        $review = \App\Models\Review::create($data);

        // Update product average rating
        $avg = \App\Models\Review::where('product_id', $data['product_id'])->avg('rating');
        Product::find($data['product_id'])->update(['rating' => round($avg, 1)]);

        return response()->json($review, 201);
    }
}
