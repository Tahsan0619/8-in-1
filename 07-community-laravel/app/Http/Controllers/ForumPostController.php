<?php

namespace App\Http\Controllers;

use App\Models\ForumPost;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class ForumPostController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $posts = ForumPost::with('author:id,name,avatar')
            ->when($request->category, fn($q) => $q->where('category', $request->category))
            ->when($request->search, fn($q) => $q->where('title', 'like', "%{$request->search}%"))
            ->when($request->tag, fn($q) => $q->whereJsonContains('tags', $request->tag))
            ->orderBy($request->get('sort_by', 'created_at'), 'desc')
            ->paginate($request->get('per_page', 15));

        return response()->json($posts);
    }

    public function show(ForumPost $forumPost): JsonResponse
    {
        return response()->json([
            'post' => $forumPost->load('author:id,name,avatar', 'answers.author:id,name,avatar'),
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title'    => 'required|string|max:255',
            'content'  => 'required|string',
            'category' => 'required|string|max:100',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $post = ForumPost::create(array_merge($request->all(), [
            'author_id' => auth()->id(),
        ]));

        return response()->json(['message' => 'Post created successfully', 'post' => $post], 201);
    }

    public function update(Request $request, ForumPost $forumPost): JsonResponse
    {
        $forumPost->update($request->only('title', 'content', 'category', 'tags'));

        return response()->json(['message' => 'Post updated successfully', 'post' => $forumPost]);
    }

    public function destroy(ForumPost $forumPost): JsonResponse
    {
        $forumPost->delete();

        return response()->json(['message' => 'Post deleted successfully']);
    }

    public function vote(Request $request, ForumPost $forumPost): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'type' => 'required|in:up,down',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        if ($request->type === 'up') {
            $forumPost->increment('upvotes');
        } else {
            $forumPost->increment('downvotes');
        }

        return response()->json(['message' => 'Vote recorded', 'post' => $forumPost->fresh()]);
    }
}
