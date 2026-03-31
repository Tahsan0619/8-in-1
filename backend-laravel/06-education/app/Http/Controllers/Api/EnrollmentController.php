<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Enrollment;
use App\Models\Course;
use App\Models\Certificate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EnrollmentController extends Controller
{
    public function index(Request $request)
    {
        return response()->json(
            Enrollment::where('user_id', $request->user()->id)
                ->with(['course.instructor'])
                ->latest('enrolled_at')
                ->paginate(10)
        );
    }

    public function store(Request $request)
    {
        $request->validate([
            'course_id' => 'required|exists:courses,id',
        ]);

        $course = Course::findOrFail($request->course_id);

        $existing = Enrollment::where('user_id', $request->user()->id)
            ->where('course_id', $request->course_id)
            ->exists();

        if ($existing) {
            return response()->json(['message' => 'You are already enrolled in this course'], 422);
        }

        $enrollment = Enrollment::create([
            'user_id'        => $request->user()->id,
            'course_id'      => $request->course_id,
            'amount_paid'    => $course->price,
            'payment_status' => $course->price > 0 ? 'pending' : 'free',
            'progress'       => 0,
            'enrolled_at'    => now(),
        ]);

        return response()->json($enrollment->load('course'), 201);
    }

    public function show(Request $request, Enrollment $enrollment)
    {
        $this->authorize('view', $enrollment);

        return response()->json(
            $enrollment->load(['course.lessons', 'completedLessons'])
        );
    }

    public function completeLesson(Request $request, Enrollment $enrollment)
    {
        $this->authorize('update', $enrollment);

        $request->validate(['lesson_id' => 'required|exists:lessons,id']);

        $enrollment->completedLessons()->syncWithoutDetaching([$request->lesson_id]);

        $totalLessons  = $enrollment->course->lessons()->count();
        $completedCount = $enrollment->completedLessons()->count();
        $progress = $totalLessons > 0 ? round(($completedCount / $totalLessons) * 100) : 0;

        $enrollment->update(['progress' => $progress]);

        if ($progress === 100 && !$enrollment->completed_at) {
            $enrollment->update(['completed_at' => now()]);
            Certificate::create([
                'user_id'         => $enrollment->user_id,
                'course_id'       => $enrollment->course_id,
                'enrollment_id'   => $enrollment->id,
                'issued_at'       => now(),
                'certificate_number' => strtoupper(uniqid('CERT-')),
            ]);
        }

        return response()->json(['progress' => $progress, 'message' => 'Lesson marked as complete']);
    }

    public function adminIndex()
    {
        return response()->json(
            Enrollment::with(['user', 'course'])->latest()->paginate(20)
        );
    }
}
