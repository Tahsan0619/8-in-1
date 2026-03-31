<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class PageController extends Controller
{
    public function index(): JsonResponse
    {
        $pages = Page::with('author')->latest()->paginate(15);
        return response()->json($pages);
    }

    public function show(string $slug): JsonResponse
    {
        $page = Page::where('slug', $slug)->with('author')->firstOrFail();
        return response()->json($page);
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title'           => 'required|string|max:255',
            'content'         => 'required|string',
            'template'        => 'nullable|string|max:100',
            'seo_title'       => 'nullable|string|max:255',
            'seo_description' => 'nullable|string|max:500',
            'status'          => 'in:draft,published',
            'published_at'    => 'nullable|date',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();
        $data['slug'] = Str::slug($request->title);
        $data['author_id'] = auth()->id();

        $page = Page::create($data);

        return response()->json(['message' => 'Page created', 'page' => $page], 201);
    }

    public function update(Request $request, Page $page): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title'           => 'sometimes|string|max:255',
            'content'         => 'sometimes|string',
            'template'        => 'nullable|string|max:100',
            'seo_title'       => 'nullable|string|max:255',
            'seo_description' => 'nullable|string|max:500',
            'status'          => 'in:draft,published',
            'published_at'    => 'nullable|date',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();

        if (isset($data['title'])) {
            $data['slug'] = Str::slug($data['title']);
        }

        $page->update($data);

        return response()->json(['message' => 'Page updated', 'page' => $page]);
    }

    public function destroy(Page $page): JsonResponse
    {
        $page->delete();
        return response()->json(['message' => 'Page deleted']);
    }
}
