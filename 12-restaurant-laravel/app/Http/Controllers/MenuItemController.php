<?php

namespace App\Http\Controllers;

use App\Models\MenuItem;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class MenuItemController extends Controller
{
    public function index(): JsonResponse
    {
        $items = MenuItem::latest()->paginate(20);
        return response()->json($items);
    }

    public function show(MenuItem $menuItem): JsonResponse
    {
        return response()->json($menuItem);
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name'             => 'required|string|max:255',
            'description'      => 'nullable|string',
            'price'            => 'required|numeric|min:0',
            'category'         => 'required|string|max:100',
            'image'            => 'nullable|string',
            'is_available'     => 'boolean',
            'customizations'   => 'nullable|array',
            'preparation_time' => 'nullable|integer|min:0',
            'calories'         => 'nullable|integer|min:0',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $item = MenuItem::create($validator->validated());

        return response()->json(['message' => 'Menu item created', 'item' => $item], 201);
    }

    public function update(Request $request, MenuItem $menuItem): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name'             => 'sometimes|string|max:255',
            'description'      => 'nullable|string',
            'price'            => 'sometimes|numeric|min:0',
            'category'         => 'sometimes|string|max:100',
            'image'            => 'nullable|string',
            'is_available'     => 'boolean',
            'customizations'   => 'nullable|array',
            'preparation_time' => 'nullable|integer|min:0',
            'calories'         => 'nullable|integer|min:0',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $menuItem->update($validator->validated());

        return response()->json(['message' => 'Menu item updated', 'item' => $menuItem]);
    }

    public function destroy(MenuItem $menuItem): JsonResponse
    {
        $menuItem->delete();
        return response()->json(['message' => 'Menu item deleted']);
    }

    public function getByCategory(string $category): JsonResponse
    {
        $items = MenuItem::where('category', $category)
                         ->where('is_available', true)
                         ->get();
        return response()->json($items);
    }
}
