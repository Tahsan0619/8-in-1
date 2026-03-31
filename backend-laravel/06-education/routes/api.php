<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Api\LessonController;
use App\Http\Controllers\Api\EnrollmentController;
use App\Http\Controllers\Api\QuizController;
use App\Http\Controllers\Api\CertificateController;
use App\Http\Controllers\Api\InstructorController;
use App\Http\Controllers\Api\AuthController;

// Auth
Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/auth/logout', [AuthController::class, 'logout']);
Route::middleware('auth:sanctum')->get('/auth/me', [AuthController::class, 'me']);

// Public routes
Route::apiResource('courses', CourseController::class)->only(['index', 'show']);
Route::get('/courses/featured', [CourseController::class, 'featured']);
Route::get('/courses/search', [CourseController::class, 'search']);
Route::apiResource('instructors', InstructorController::class)->only(['index', 'show']);

// Authenticated
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('enrollments', EnrollmentController::class)->only(['index', 'store', 'show']);
    Route::post('/enrollments/{enrollment}/complete-lesson', [EnrollmentController::class, 'completeLesson']);
    Route::get('/lessons/{lesson}', [LessonController::class, 'show']);
    Route::get('/quizzes/{quiz}', [QuizController::class, 'show']);
    Route::post('/quizzes/{quiz}/attempt', [QuizController::class, 'attempt']);
    Route::get('/quiz-attempts', [QuizController::class, 'myAttempts']);
    Route::apiResource('certificates', CertificateController::class)->only(['index', 'show']);
});

// Admin
Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {
    Route::apiResource('courses', CourseController::class)->except(['index', 'show']);
    Route::apiResource('lessons', LessonController::class)->except(['show']);
    Route::apiResource('quizzes', QuizController::class)->except(['show']);
    Route::get('/enrollments', [EnrollmentController::class, 'adminIndex']);
});
