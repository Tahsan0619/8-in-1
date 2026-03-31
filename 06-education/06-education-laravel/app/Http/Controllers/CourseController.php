<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class CourseController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $courses = Course::with('instructor:id,name,avatar')
            ->when($request->category, fn($q) => $q->where('category', $request->category))
            ->when($request->level, fn($q) => $q->where('level', $request->level))
            ->when($request->search, fn($q) => $q->where('title', 'like', "%{$request->search}%"))
            ->when($request->max_price, fn($q) => $q->where('price', '<=', $request->max_price))
            ->when($request->free, fn($q) => $q->where('price', 0))
            ->orderBy($request->get('sort_by', 'created_at'), 'desc')
            ->paginate($request->get('per_page', 12));

        return response()->json($courses);
    }

    public function show(Course $course): JsonResponse
    {
        return response()->json([
            'course' => $course->load('instructor:id,name,avatar', 'lessons'),
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title'       => 'required|string|max:255',
            'description' => 'required|string',
            'category'    => 'required|string|max:100',
            'price'       => 'required|numeric|min:0',
            'level'       => 'required|in:beginner,intermediate,advanced',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data                  = $request->all();
        $data['instructor_id'] = auth()->id();

        $course = Course::create($data);

        return response()->json(['message' => 'Course created successfully', 'course' => $course], 201);
    }

    public function update(Request $request, Course $course): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'level' => 'sometimes|in:beginner,intermediate,advanced',
            'price' => 'sometimes|numeric|min:0',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $course->update($request->all());

        return response()->json(['message' => 'Course updated successfully', 'course' => $course]);
    }

    public function destroy(Course $course): JsonResponse
    {
        $course->delete();

        return response()->json(['message' => 'Course deleted successfully']);
    }
}
