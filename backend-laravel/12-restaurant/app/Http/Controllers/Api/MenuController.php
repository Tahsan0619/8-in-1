<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\MenuItem;
use App\Models\Category;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function index(Request $request)
    {
        $query = MenuItem::where('is_available', true)
            ->with('category')
            ->when($request->category,     fn($q, $v) => $q->whereHas('category', fn($c) => $c->where('slug', $v)))
            ->when($request->search,       fn($q, $v) => $q->where('name', 'like', "%{$v}%"))
            ->when($request->vegetarian,   fn($q, $v) => $q->where('is_vegetarian', true))
            ->when($request->vegan,        fn($q, $v) => $q->where('is_vegan', true))
            ->when($request->min_price,    fn($q, $v) => $q->where('price', '>=', $v))
            ->when($request->max_price,    fn($q, $v) => $q->where('price', '<=', $v));

        return response()->json($query->orderBy('order')->paginate(20));
    }

    public function show(MenuItem $menuItem)
    {
        return response()->json($menuItem->load(['category', 'reviews']));
    }

    public function featured()
    {
        return response()->json(
            MenuItem::where('is_available', true)
                ->where('is_featured', true)
                ->with('category')
                ->orderBy('order')
                ->limit(8)
                ->get()
        );
    }

    public function byCategory(string $slug)
    {
        $category = Category::where('slug', $slug)->firstOrFail();
        return response()->json([
            'category' => $category,
            'items'    => MenuItem::where('category_id', $category->id)
                ->where('is_available', true)
                ->orderBy('order')
                ->get(),
        ]);
    }

    public function categories()
    {
        return response()->json(Category::withCount(['menuItems' => fn($q) => $q->where('is_available', true)])->get());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name'             => 'required|string|max:255',
            'description'      => 'nullable|string',
            'price'            => 'required|numeric|min:0',
            'category_id'      => 'required|exists:categories,id',
            'image'            => 'nullable|string',
            'is_available'     => 'boolean',
            'is_featured'      => 'boolean',
            'is_vegetarian'    => 'boolean',
            'is_vegan'         => 'boolean',
            'is_spicy'         => 'boolean',
            'allergens'        => 'array',
            'preparation_time' => 'integer|min:1',
            'calories'         => 'nullable|integer',
            'order'            => 'integer',
        ]);
        return response()->json(MenuItem::create($data), 201);
    }

    public function update(Request $request, MenuItem $menuItem)
    {
        $data = $request->validate([
            'name'          => 'string|max:255',
            'description'   => 'nullable|string',
            'price'         => 'numeric|min:0',
            'is_available'  => 'boolean',
            'is_featured'   => 'boolean',
            'order'         => 'integer',
        ]);
        $menuItem->update($data);
        return response()->json($menuItem);
    }

    public function destroy(MenuItem $menuItem)
    {
        $menuItem->delete();
        return response()->json(['message' => 'Menu item deleted']);
    }

    public function toggleAvailability(MenuItem $menuItem)
    {
        $menuItem->update(['is_available' => !$menuItem->is_available]);
        return response()->json($menuItem);
    }

    public function reviews()
    {
        return response()->json(\App\Models\Review::with('user')->latest()->paginate(10));
    }

    public function storeReview(Request $request)
    {
        $data = $request->validate([
            'menu_item_id' => 'required|exists:menu_items,id',
            'rating'       => 'required|integer|min:1|max:5',
            'comment'      => 'nullable|string|max:500',
        ]);
        $data['user_id'] = $request->user()->id;
        return response()->json(\App\Models\Review::create($data), 201);
    }
}
