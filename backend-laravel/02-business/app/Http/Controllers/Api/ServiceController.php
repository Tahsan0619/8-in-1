<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        return response()->json(
            Service::where('is_active', true)->orderBy('order')->get()
        );
    }

    public function show(Service $service)
    {
        return response()->json($service->load('features'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'required|string',
            'icon'        => 'nullable|string',
            'image'       => 'nullable|image|max:2048',
            'price'       => 'nullable|string',
            'order'       => 'integer',
            'is_featured' => 'boolean',
        ]);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('services', 'public');
        }

        return response()->json(Service::create($data), 201);
    }

    public function update(Request $request, Service $service)
    {
        $data = $request->validate([
            'title'       => 'string|max:255',
            'description' => 'string',
            'icon'        => 'nullable|string',
            'price'       => 'nullable|string',
            'order'       => 'integer',
            'is_featured' => 'boolean',
            'is_active'   => 'boolean',
        ]);

        $service->update($data);
        return response()->json($service);
    }

    public function destroy(Service $service)
    {
        $service->delete();
        return response()->json(['message' => 'Service deleted']);
    }
}
