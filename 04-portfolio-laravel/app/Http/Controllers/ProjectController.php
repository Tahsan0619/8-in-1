<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class ProjectController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $projects = Project::query()
            ->when($request->category, fn($q) => $q->where('category', $request->category))
            ->when($request->boolean('featured'), fn($q) => $q->where('is_featured', true))
            ->when($request->technology, fn($q) => $q->whereJsonContains('technologies', $request->technology))
            ->when($request->search, fn($q) => $q->where('title', 'like', "%{$request->search}%"))
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json(['projects' => $projects]);
    }

    public function show(Project $project): JsonResponse
    {
        return response()->json(['project' => $project]);
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title'       => 'required|string|max:255',
            'description' => 'required|string',
            'category'    => 'required|string|max:100',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $project = Project::create($request->all());

        return response()->json(['message' => 'Project created successfully', 'project' => $project], 201);
    }

    public function update(Request $request, Project $project): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title'       => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'category'    => 'sometimes|string|max:100',
            'live_url'    => 'sometimes|nullable|url',
            'github_url'  => 'sometimes|nullable|url',
            'is_featured' => 'sometimes|boolean',
            'images'      => 'sometimes|array',
            'technologies'=> 'sometimes|array',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $project->update($validator->validated());

        return response()->json(['message' => 'Project updated successfully', 'project' => $project]);
    }

    public function destroy(Project $project): JsonResponse
    {
        $project->delete();

        return response()->json(['message' => 'Project deleted successfully']);
    }
}
