<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\EnrollmentController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\QuizController;

Route::prefix('v1')->group(function () {

    Route::prefix('auth')->group(function () {
        Route::post('/register', [AuthController::class, 'register']);
        Route::post('/login',    [AuthController::class, 'login']);
        Route::middleware('auth.jwt')->group(function () {
            Route::post('/logout',  [AuthController::class, 'logout']);
            Route::post('/refresh', [AuthController::class, 'refresh']);
            Route::get('/profile',  [AuthController::class, 'profile']);
        });
    });

    // Public routes
    Route::get('/courses',          [CourseController::class, 'index']);
    Route::get('/courses/{course}', [CourseController::class, 'show']);
    Route::get('/courses/{course}/lessons', [LessonController::class, 'index']);

    // Protected routes
    Route::middleware('auth.jwt')->group(function () {
        Route::post('/courses',           [CourseController::class, 'store']);
        Route::put('/courses/{course}',   [CourseController::class, 'update']);
        Route::delete('/courses/{course}',[CourseController::class, 'destroy']);

        Route::apiResource('enrollments', EnrollmentController::class);
        Route::post('/enrollments/{enrollment}/progress', [EnrollmentController::class, 'updateProgress']);

        Route::post('/courses/{course}/lessons',         [LessonController::class, 'store']);
        Route::put('/lessons/{lesson}',                  [LessonController::class, 'update']);
        Route::delete('/lessons/{lesson}',               [LessonController::class, 'destroy']);

        Route::get('/courses/{course}/quizzes',  [QuizController::class, 'index']);
        Route::post('/courses/{course}/quizzes', [QuizController::class, 'store']);
        Route::put('/quizzes/{quiz}',            [QuizController::class, 'update']);
        Route::post('/quizzes/{quiz}/submit',    [QuizController::class, 'submit']);
    });
});
