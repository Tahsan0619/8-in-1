<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function index(): JsonResponse
    {
        $products = Product::with('seller')->where('is_active', true)->latest()->paginate(20);
        return response()->json($products);
    }

    public function show(Product $product): JsonResponse
    {
        return response()->json($product->load('seller'));
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name'        => 'required|string|max:255',
            'description' => 'required|string',
            'price'       => 'required|numeric|min:0',
            'images'      => 'nullable|array',
            'category'    => 'required|string|max:100',
            'stock'       => 'required|integer|min:0',
            'sku'         => 'nullable|string|max:100|unique:products,sku',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();
        $data['seller_id'] = auth()->id();

        $product = Product::create($data);

        return response()->json(['message' => 'Product created', 'product' => $product], 201);
    }

    public function update(Request $request, Product $product): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name'        => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'price'       => 'sometimes|numeric|min:0',
            'images'      => 'nullable|array',
            'category'    => 'sometimes|string|max:100',
            'stock'       => 'sometimes|integer|min:0',
            'is_active'   => 'boolean',
            'sku'         => 'nullable|string|max:100|unique:products,sku,' . $product->id,
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $product->update($validator->validated());

        return response()->json(['message' => 'Product updated', 'product' => $product]);
    }

    public function destroy(Product $product): JsonResponse
    {
        $product->delete();
        return response()->json(['message' => 'Product deleted']);
    }

    public function search(Request $request): JsonResponse
    {
        $query = Product::with('seller')->where('is_active', true);

        if ($request->filled('q'))        $query->where('name', 'like', "%{$request->q}%");
        if ($request->filled('category')) $query->where('category', $request->category);
        if ($request->filled('min_price')) $query->where('price', '>=', $request->min_price);
        if ($request->filled('max_price')) $query->where('price', '<=', $request->max_price);
        if ($request->filled('seller_id')) $query->where('seller_id', $request->seller_id);

        return response()->json($query->latest()->paginate(20));
    }

    public function getByCategory(string $category): JsonResponse
    {
        $products = Product::with('seller')
                           ->where('category', $category)
                           ->where('is_active', true)
                           ->latest()
                           ->paginate(20);
        return response()->json($products);
    }
}
