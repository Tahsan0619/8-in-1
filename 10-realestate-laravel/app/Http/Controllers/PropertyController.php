<?php

namespace App\Http\Controllers;

use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class PropertyController extends Controller
{
    public function index(): JsonResponse
    {
        $properties = Property::with('agent')->latest()->paginate(12);
        return response()->json($properties);
    }

    public function show(Property $property): JsonResponse
    {
        return response()->json($property->load('agent'));
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title'       => 'required|string|max:255',
            'description' => 'required|string',
            'price'       => 'required|numeric|min:0',
            'type'        => 'required|in:house,apartment,condo,land,commercial',
            'status'      => 'required|in:for-sale,for-rent,sold,rented',
            'bedrooms'    => 'nullable|integer|min:0',
            'bathrooms'   => 'nullable|integer|min:0',
            'area'        => 'nullable|numeric|min:0',
            'images'      => 'nullable|array',
            'address'     => 'required|string',
            'city'        => 'required|string',
            'state'       => 'nullable|string',
            'lat'         => 'nullable|numeric',
            'lng'         => 'nullable|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();
        $data['agent_id'] = auth()->id();

        $property = Property::create($data);

        return response()->json(['message' => 'Property created', 'property' => $property], 201);
    }

    public function update(Request $request, Property $property): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title'       => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'price'       => 'sometimes|numeric|min:0',
            'type'        => 'sometimes|in:house,apartment,condo,land,commercial',
            'status'      => 'sometimes|in:for-sale,for-rent,sold,rented',
            'bedrooms'    => 'nullable|integer|min:0',
            'bathrooms'   => 'nullable|integer|min:0',
            'area'        => 'nullable|numeric|min:0',
            'images'      => 'nullable|array',
            'address'     => 'sometimes|string',
            'city'        => 'sometimes|string',
            'state'       => 'nullable|string',
            'lat'         => 'nullable|numeric',
            'lng'         => 'nullable|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $property->update($validator->validated());

        return response()->json(['message' => 'Property updated', 'property' => $property]);
    }

    public function destroy(Property $property): JsonResponse
    {
        $property->delete();
        return response()->json(['message' => 'Property deleted']);
    }

    public function search(Request $request): JsonResponse
    {
        $query = Property::with('agent');

        if ($request->filled('type'))   $query->where('type', $request->type);
        if ($request->filled('status')) $query->where('status', $request->status);
        if ($request->filled('city'))   $query->where('city', 'like', "%{$request->city}%");
        if ($request->filled('min_price')) $query->where('price', '>=', $request->min_price);
        if ($request->filled('max_price')) $query->where('price', '<=', $request->max_price);
        if ($request->filled('bedrooms'))  $query->where('bedrooms', '>=', $request->bedrooms);

        return response()->json($query->latest()->paginate(12));
    }
}
