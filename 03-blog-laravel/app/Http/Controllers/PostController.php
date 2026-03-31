<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $posts = Post::with('author:id,name,avatar', 'category:id,name,slug')
            ->when($request->category, fn($q) => $q->whereHas('category', fn($q) => $q->where('slug', $request->category)))
            ->when($request->status, fn($q) => $q->where('status', $request->status), fn($q) => $q->where('status', 'published'))
            ->when($request->search, fn($q) => $q->where('title', 'like', "%{$request->search}%"))
            ->when($request->tag, fn($q) => $q->whereJsonContains('tags', $request->tag))
            ->when($request->author, fn($q) => $q->where('author_id', $request->author))
            ->orderBy('published_at', 'desc')
            ->paginate($request->get('per_page', 10));

        return response()->json($posts);
    }

    public function show(Post $post): JsonResponse
    {
        return response()->json([
            'post' => $post->load('author:id,name,avatar', 'category:id,name,slug', 'comments.user:id,name,avatar'),
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title'   => 'required|string|max:255',
            'content' => 'required|string',
            'status'  => 'in:draft,published',
            'excerpt' => 'nullable|string|max:500',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data                = $request->all();
        $data['slug']        = Str::slug($request->title);
        $data['author_id']   = auth()->id();
        $data['reading_time'] = (int) ceil(str_word_count(strip_tags($request->content)) / 200);

        if ($request->status === 'published' && !$request->published_at) {
            $data['published_at'] = now();
        }

        $post = Post::create($data);

        return response()->json(['message' => 'Post created successfully', 'post' => $post], 201);
    }

    public function update(Request $request, Post $post): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title'       => 'sometimes|string|max:255',
            'content'     => 'sometimes|string',
            'excerpt'     => 'sometimes|nullable|string|max:500',
            'status'      => 'sometimes|in:draft,published',
            'category_id' => 'sometimes|nullable|exists:categories,id',
            'tags'        => 'sometimes|array',
            'image'       => 'sometimes|nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();

        if (isset($data['title'])) {
            $data['slug'] = \Illuminate\Support\Str::slug($data['title']);
        }
        if (isset($data['content'])) {
            $data['reading_time'] = (int) ceil(str_word_count(strip_tags($data['content'])) / 200);
        }
        if (isset($data['status']) && $data['status'] === 'published' && !$post->published_at) {
            $data['published_at'] = now();
        }

        $post->update($data);

        return response()->json(['message' => 'Post updated successfully', 'post' => $post]);
    }

    public function destroy(Post $post): JsonResponse
    {
        $post->delete();

        return response()->json(['message' => 'Post deleted successfully']);
    }
}
