<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Property;
use App\Models\SavedProperty;
use Illuminate\Http\Request;

class PropertyController extends Controller
{
    public function index(Request $request)
    {
        $query = Property::active()->with('agent')
            ->when($request->type,         fn($q, $v) => $q->where('type', $v))
            ->when($request->listing_type, fn($q, $v) => $q->where('listing_type', $v))
            ->when($request->min_price,    fn($q, $v) => $q->where('price', '>=', $v))
            ->when($request->max_price,    fn($q, $v) => $q->where('price', '<=', $v))
            ->when($request->bedrooms,     fn($q, $v) => $q->where('bedrooms', '>=', $v))
            ->when($request->bathrooms,    fn($q, $v) => $q->where('bathrooms', '>=', $v))
            ->when($request->city,         fn($q, $v) => $q->where('city', $v))
            ->when($request->min_area,     fn($q, $v) => $q->where('area_sqft', '>=', $v))
            ->when($request->max_area,     fn($q, $v) => $q->where('area_sqft', '<=', $v));

        return response()->json($query->latest()->paginate(12));
    }

    public function show(Property $property)
    {
        $property->increment('views');
        return response()->json($property->load(['agent', 'reviews']));
    }

    public function featured()
    {
        return response()->json(
            Property::active()->where('is_featured', true)->with('agent')->limit(6)->get()
        );
    }

    public function search(Request $request)
    {
        $request->validate(['q' => 'required|string|min:2']);

        $props = Property::active()
            ->where(fn($q) =>
                $q->where('title',   'like', "%{$request->q}%")
                  ->orWhere('city',    'like', "%{$request->q}%")
                  ->orWhere('address', 'like', "%{$request->q}%")
            )
            ->with('agent')
            ->limit(10)
            ->get();

        return response()->json($props);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'        => 'required|string|max:255',
            'description'  => 'required|string',
            'type'         => 'required|in:apartment,house,villa,office,land,commercial',
            'listing_type' => 'required|in:sale,rent',
            'price'        => 'required|numeric|min:0',
            'bedrooms'     => 'integer|min:0',
            'bathrooms'    => 'integer|min:0',
            'area_sqft'    => 'numeric|min:0',
            'address'      => 'required|string',
            'city'         => 'required|string',
            'state'        => 'required|string',
            'zip_code'     => 'required|string',
            'latitude'     => 'nullable|numeric',
            'longitude'    => 'nullable|numeric',
            'amenities'    => 'array',
            'images'       => 'array',
            'is_featured'  => 'boolean',
        ]);

        if (!$request->user()->agent) {
            return response()->json(['message' => 'You must have an agent profile to create listings.'], 403);
        }

        $data['agent_id'] = $request->user()->agent->id;

        return response()->json(Property::create($data), 201);
    }

    public function update(Request $request, Property $property)
    {
        $data = $request->validate([
            'title'       => 'string|max:255',
            'description' => 'string',
            'price'       => 'numeric|min:0',
            'status'      => 'in:active,sold,rented,inactive',
            'is_featured' => 'boolean',
            'amenities'   => 'array',
            'images'      => 'array',
        ]);

        $property->update($data);
        return response()->json($property);
    }

    public function destroy(Property $property)
    {
        $property->delete();
        return response()->json(['message' => 'Property deleted']);
    }

    public function save(Request $request, Property $property)
    {
        SavedProperty::firstOrCreate([
            'user_id'     => $request->user()->id,
            'property_id' => $property->id,
        ]);
        return response()->json(['message' => 'Property saved']);
    }

    public function unsave(Request $request, Property $property)
    {
        SavedProperty::where([
            'user_id'     => $request->user()->id,
            'property_id' => $property->id,
        ])->delete();

        return response()->json(['message' => 'Property removed from saved']);
    }

    public function savedProperties(Request $request)
    {
        return response()->json(
            Property::whereHas('savedByUsers', fn($q) => $q->where('user_id', $request->user()->id))
                ->with('agent')
                ->paginate(12)
        );
    }

    public function neighborhoods()
    {
        return response()->json(Property::active()->select('city')->distinct()->pluck('city'));
    }

    public function agentProperties(Request $request)
    {
        $agentId = $request->user()->agent?->id;
        if (!$agentId) {
            return response()->json(['message' => 'Agent profile not found.'], 403);
        }
        return response()->json(Property::where('agent_id', $agentId)->latest()->paginate(12));
    }
}
