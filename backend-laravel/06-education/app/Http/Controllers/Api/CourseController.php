<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index(Request $request)
    {
        $query = Course::published()->with(['instructor', 'category'])
            ->when($request->category, fn($q, $v) =>
                $q->whereHas('category', fn($c) => $c->where('slug', $v))
            )
            ->when($request->level, fn($q, $v) => $q->where('level', $v))
            ->when($request->free, fn($q) => $q->where('price', 0))
            ->when($request->paid, fn($q) => $q->where('price', '>', 0))
            ->when($request->search, fn($q, $v) =>
                $q->where('title', 'like', "%{$v}%")
                  ->orWhere('short_description', 'like', "%{$v}%")
            );

        return response()->json($query->latest()->paginate(12));
    }

    public function show(Course $course)
    {
        $course->load(['instructor', 'category']);
        // Load lessons without full content (just metadata)
        $course->setRelation('lessons', $course->lessons()->select([
            'id', 'course_id', 'title', 'section', 'order',
            'duration_minutes', 'is_free',
        ])->orderBy('order')->get());

        return response()->json($course);
    }

    public function featured()
    {
        return response()->json(
            Course::published()->where('is_featured', true)
                ->with(['instructor', 'category'])->limit(8)->get()
        );
    }

    public function search(Request $request)
    {
        $courses = Course::published()
            ->where(fn($q) => $q
                ->where('title', 'like', "%{$request->q}%")
                ->orWhere('short_description', 'like', "%{$request->q}%")
            )
            ->with(['instructor', 'category'])->limit(15)->get();

        return response()->json($courses);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'             => 'required|string|max:255',
            'description'       => 'required|string',
            'short_description' => 'nullable|string|max:500',
            'instructor_id'     => 'required|exists:instructors,id',
            'category_id'       => 'required|exists:categories,id',
            'level'             => 'required|in:beginner,intermediate,advanced',
            'price'             => 'required|numeric|min:0',
            'thumbnail'         => 'nullable|image|max:4096',
            'language'          => 'string|max:50',
            'requirements'      => 'array',
            'objectives'        => 'array',
            'is_featured'       => 'boolean',
        ]);

        if ($request->hasFile('thumbnail')) {
            $data['thumbnail'] = $request->file('thumbnail')->store('courses', 'public');
        }

        $course = Course::create($data);
        return response()->json($course, 201);
    }

    public function update(Request $request, Course $course)
    {
        $data = $request->validate([
            'title'             => 'string|max:255',
            'description'       => 'string',
            'short_description' => 'nullable|string|max:500',
            'level'             => 'in:beginner,intermediate,advanced',
            'price'             => 'numeric|min:0',
            'is_featured'       => 'boolean',
            'is_published'      => 'boolean',
            'requirements'      => 'array',
            'objectives'        => 'array',
        ]);

        $course->update($data);
        return response()->json($course);
    }

    public function destroy(Course $course)
    {
        $course->delete();
        return response()->json(['message' => 'Course deleted']);
    }
}
