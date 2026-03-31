<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index(Request $request)
    {
        $query = Project::query()
            ->when($request->category, fn($q, $v) => $q->where('category', $v))
            ->when($request->tech, fn($q, $v) => $q->whereJsonContains('tech_stack', $v))
            ->when($request->featured, fn($q) => $q->where('is_featured', true));

        return response()->json($query->orderBy('order')->paginate(12));
    }

    public function show(Project $project)
    {
        return response()->json($project->load('photos'));
    }

    public function featured()
    {
        return response()->json(
            Project::where('is_featured', true)->orderBy('order')->limit(6)->get()
        );
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'        => 'required|string|max:255',
            'description'  => 'required|string',
            'client'       => 'nullable|string|max:255',
            'category'     => 'required|string|max:100',
            'tech_stack'   => 'array',
            'image'        => 'nullable|image|max:4096',
            'url'          => 'nullable|url',
            'github_url'   => 'nullable|url',
            'is_featured'  => 'boolean',
            'order'        => 'integer',
            'completed_at' => 'nullable|date',
        ]);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('projects', 'public');
        }

        $project = Project::create($data);
        return response()->json($project, 201);
    }

    public function update(Request $request, Project $project)
    {
        $data = $request->validate([
            'title'        => 'string|max:255',
            'description'  => 'string',
            'client'       => 'nullable|string|max:255',
            'category'     => 'string|max:100',
            'tech_stack'   => 'array',
            'url'          => 'nullable|url',
            'github_url'   => 'nullable|url',
            'is_featured'  => 'boolean',
            'order'        => 'integer',
            'completed_at' => 'nullable|date',
        ]);

        $project->update($data);
        return response()->json($project);
    }

    public function destroy(Project $project)
    {
        $project->delete();
        return response()->json(['message' => 'Project deleted']);
    }
}
