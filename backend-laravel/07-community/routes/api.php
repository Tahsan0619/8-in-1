<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\JobController;
use App\Http\Controllers\Api\EventController;
use App\Http\Controllers\Api\ForumController;
use App\Http\Controllers\Api\DirectoryController;
use App\Http\Controllers\Api\AuthController;

// Auth
Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/auth/logout', [AuthController::class, 'logout']);
Route::middleware('auth:sanctum')->get('/auth/me', [AuthController::class, 'me']);

// Public routes
Route::apiResource('posts', PostController::class)->only(['index', 'show']);
Route::apiResource('jobs', JobController::class)->only(['index', 'show']);
Route::apiResource('events', EventController::class)->only(['index', 'show']);
Route::get('/events/{event}/attendees', [EventController::class, 'attendees']);
Route::apiResource('forum', ForumController::class)->only(['index', 'show']);
Route::apiResource('directory', DirectoryController::class)->only(['index', 'show']);

// Authenticated
Route::middleware('auth:sanctum')->group(function () {
    // Posts & Comments
    Route::apiResource('posts', PostController::class)->except(['index', 'show']);
    Route::post('/posts/{post}/comments', [CommentController::class, 'store']);
    Route::delete('/comments/{comment}', [CommentController::class, 'destroy']);

    // Jobs
    Route::post('/jobs', [JobController::class, 'store']);
    Route::post('/jobs/{job}/apply', [JobController::class, 'apply']);

    // Events
    Route::post('/events', [EventController::class, 'store']);
    Route::put('/events/{event}', [EventController::class, 'update']);
    Route::delete('/events/{event}', [EventController::class, 'destroy']);
    Route::post('/events/{event}/rsvp', [EventController::class, 'rsvp']);
    Route::get('/my-events', [EventController::class, 'myEvents']);

    // Forum
    Route::post('/forum', [ForumController::class, 'store']);
    Route::post('/forum/{thread}/reply', [ForumController::class, 'reply']);
});

// Admin
Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {
    Route::get('/moderation', [PostController::class, 'moderationQueue']);
    Route::put('/posts/{post}/moderate', [PostController::class, 'moderate']);
    Route::delete('/comments/{comment}', [CommentController::class, 'adminDestroy']);
    Route::put('/jobs/{job}/approve', [JobController::class, 'approve']);
    Route::put('/events/{event}/feature', [EventController::class, 'feature']);
});
