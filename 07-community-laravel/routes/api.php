<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ForumPostController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\DirectoryController;

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
    Route::get('/forum-posts',              [ForumPostController::class, 'index']);
    Route::get('/forum-posts/{forumPost}',  [ForumPostController::class, 'show']);
    Route::get('/jobs',                     [JobController::class, 'index']);
    Route::get('/jobs/{job}',               [JobController::class, 'show']);
    Route::get('/events',                   [EventController::class, 'index']);
    Route::get('/events/{event}',           [EventController::class, 'show']);
    Route::get('/directory',                [DirectoryController::class, 'index']);

    // Protected routes
    Route::middleware('auth.jwt')->group(function () {
        Route::post('/forum-posts',                      [ForumPostController::class, 'store']);
        Route::put('/forum-posts/{forumPost}',           [ForumPostController::class, 'update']);
        Route::delete('/forum-posts/{forumPost}',        [ForumPostController::class, 'destroy']);
        Route::post('/forum-posts/{forumPost}/vote',     [ForumPostController::class, 'vote']);

        Route::post('/jobs',           [JobController::class, 'store']);
        Route::put('/jobs/{job}',      [JobController::class, 'update']);
        Route::delete('/jobs/{job}',   [JobController::class, 'destroy']);

        Route::post('/events',              [EventController::class, 'store']);
        Route::put('/events/{event}',       [EventController::class, 'update']);
        Route::delete('/events/{event}',    [EventController::class, 'destroy']);
        Route::post('/events/{event}/rsvp', [EventController::class, 'rsvp']);
    });
});
