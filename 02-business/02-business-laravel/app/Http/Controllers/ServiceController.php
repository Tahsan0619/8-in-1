<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class ServiceController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $services = Service::query()
            ->when($request->category, fn($q) => $q->where('category', $request->category))
            ->when($request->boolean('featured'), fn($q) => $q->where('is_featured', true))
            ->when($request->search, fn($q) => $q->where('title', 'like', "%{$request->search}%"))
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json(['services' => $services]);
    }

    public function show(Service $service): JsonResponse
    {
        return response()->json(['service' => $service]);
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title'       => 'required|string|max:255',
            'description' => 'required|string',
            'category'    => 'required|string|max:100',
            'price'       => 'required|numeric|min:0',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $service = Service::create($request->all());

        return response()->json(['message' => 'Service created successfully', 'service' => $service], 201);
    }

    public function update(Request $request, Service $service): JsonResponse
    {
        $service->update($request->all());

        return response()->json(['message' => 'Service updated successfully', 'service' => $service]);
    }

    public function destroy(Service $service): JsonResponse
    {
        $service->delete();

        return response()->json(['message' => 'Service deleted successfully']);
    }
}
