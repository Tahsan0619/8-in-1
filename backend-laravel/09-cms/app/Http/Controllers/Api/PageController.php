<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index()
    {
        return response()->json(
            Page::orderBy('order')->get(['id', 'title', 'slug', 'status', 'updated_at'])
        );
    }

    public function showBySlug(string $slug)
    {
        $page = Page::where('slug', $slug)
            ->where('status', 'published')
            ->firstOrFail();
        return response()->json($page);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'            => 'required|string|max:255',
            'content'          => 'required|string',
            'slug'             => 'required|string|unique:pages',
            'template'         => 'nullable|string',
            'meta_title'       => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:500',
            'og_image'         => 'nullable|string',
            'status'           => 'in:draft,published',
            'order'            => 'integer',
        ]);
        return response()->json(Page::create($data), 201);
    }

    public function show(Page $page)
    {
        return response()->json($page);
    }

    public function update(Request $request, Page $page)
    {
        $data = $request->validate([
            'title'            => 'string|max:255',
            'content'          => 'string',
            'slug'             => "string|unique:pages,slug,{$page->id}",
            'template'         => 'nullable|string',
            'meta_title'       => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:500',
            'og_image'         => 'nullable|string',
            'status'           => 'in:draft,published',
            'order'            => 'integer',
        ]);
        $page->update($data);
        return response()->json($page);
    }

    public function destroy(Page $page)
    {
        $page->delete();
        return response()->json(['message' => 'Page deleted']);
    }

    public function publish(Page $page)
    {
        $page->update(['status' => 'published', 'published_at' => now()]);
        return response()->json($page);
    }
}
