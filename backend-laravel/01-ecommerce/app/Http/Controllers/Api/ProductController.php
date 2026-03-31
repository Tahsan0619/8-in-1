<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::with(['category', 'reviews'])
            ->when($request->category_id, fn($q, $v) => $q->where('category_id', $v))
            ->when($request->min_price, fn($q, $v) => $q->where('price', '>=', $v))
            ->when($request->max_price, fn($q, $v) => $q->where('price', '<=', $v))
            ->when($request->search, fn($q, $v) => $q->where('name', 'like', "%{$v}%"));

        return response()->json($query->paginate(12));
    }

    public function show(Product $product)
    {
        return response()->json($product->load(['category', 'reviews.user']));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name'        => 'required|string|max:255',
            'description' => 'required|string',
            'price'       => 'required|numeric|min:0',
            'stock'       => 'required|integer|min:0',
            'category_id' => 'required|exists:categories,id',
            'image'       => 'nullable|image|max:2048',
            'is_featured' => 'boolean',
        ]);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('products', 'public');
        }

        $product = Product::create($data);
        return response()->json($product, 201);
    }

    public function update(Request $request, Product $product)
    {
        $data = $request->validate([
            'name'        => 'string|max:255',
            'description' => 'string',
            'price'       => 'numeric|min:0',
            'stock'       => 'integer|min:0',
            'category_id' => 'exists:categories,id',
            'is_featured' => 'boolean',
        ]);

        $product->update($data);
        return response()->json($product);
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(['message' => 'Product deleted']);
    }

    public function search(Request $request)
    {
        $products = Product::where('name', 'like', "%{$request->q}%")
            ->orWhere('description', 'like', "%{$request->q}%")
            ->with('category')->limit(20)->get();

        return response()->json($products);
    }

    public function featured()
    {
        return response()->json(
            Product::where('is_featured', true)->with('category')->limit(8)->get()
        );
    }
}
