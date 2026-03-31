<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index(Post $post)
    {
        return response()->json(
            $post->comments()->approved()->with('user')->latest()->paginate(20)
        );
    }

    public function store(Request $request, Post $post)
    {
        $data = $request->validate([
            'content'   => 'required|string|max:2000',
            'parent_id' => 'nullable|exists:comments,id',
        ]);

        $comment = $post->comments()->create([
            ...$data,
            'user_id' => $request->user()->id,
            'status'  => 'pending',
        ]);

        return response()->json($comment, 201);
    }

    public function approve(Comment $comment)
    {
        $comment->update(['status' => 'approved']);
        return response()->json($comment);
    }

    public function destroy(Request $request, Comment $comment)
    {
        if ($comment->user_id !== $request->user()->id && !$request->user()->isAdmin()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $comment->delete();
        return response()->json(['message' => 'Comment deleted']);
    }
}
