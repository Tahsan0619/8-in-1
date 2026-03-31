<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(Request $request)
    {
        $query = Post::published()->with(['author', 'category', 'tags'])
            ->when($request->category, fn($q, $v) => $q->whereHas('category', fn($c) => $c->where('slug', $v)))
            ->when($request->tag, fn($q, $v) => $q->whereHas('tags', fn($t) => $t->where('slug', $v)))
            ->when($request->author, fn($q, $v) => $q->whereHas('author', fn($a) => $a->where('slug', $v)));

        return response()->json($query->latest('published_at')->paginate(12));
    }

    public function show(Post $post)
    {
        $post->increment('views');
        return response()->json(
            $post->load([
                'author',
                'category',
                'tags',
                'comments' => fn($q) => $q->approved()->with('user'),
            ])
        );
    }

    public function featured()
    {
        return response()->json(
            Post::published()->where('is_featured', true)
                ->with(['author', 'category'])->limit(5)->get()
        );
    }

    public function trending()
    {
        return response()->json(
            Post::published()->orderByDesc('views')
                ->with(['author', 'category'])->limit(10)->get()
        );
    }

    public function search(Request $request)
    {
        $posts = Post::published()
            ->where(fn($q) => $q
                ->where('title', 'like', "%{$request->q}%")
                ->orWhere('excerpt', 'like', "%{$request->q}%")
            )
            ->with(['author', 'category'])->limit(15)->get();

        return response()->json($posts);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'        => 'required|string|max:255',
            'content'      => 'required|string',
            'excerpt'      => 'nullable|string|max:500',
            'category_id'  => 'required|exists:categories,id',
            'author_id'    => 'required|exists:authors,id',
            'cover_image'  => 'nullable|image|max:4096',
            'tags'         => 'array',
            'is_featured'  => 'boolean',
            'status'       => 'in:draft,published',
            'published_at' => 'nullable|date',
        ]);

        if ($request->hasFile('cover_image')) {
            $data['cover_image'] = $request->file('cover_image')->store('posts', 'public');
        }

        $post = Post::create($data);

        if ($request->tags) {
            $post->tags()->sync($request->tags);
        }

        return response()->json($post, 201);
    }

    public function update(Request $request, Post $post)
    {
        $data = $request->validate([
            'title'       => 'string|max:255',
            'content'     => 'string',
            'excerpt'     => 'nullable|string|max:500',
            'category_id' => 'exists:categories,id',
            'is_featured' => 'boolean',
            'status'      => 'in:draft,published',
        ]);

        $post->update($data);

        if ($request->has('tags')) {
            $post->tags()->sync($request->tags);
        }

        return response()->json($post);
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return response()->json(['message' => 'Post deleted']);
    }
}
