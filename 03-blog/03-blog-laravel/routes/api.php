<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommentController;

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
    Route::get('/posts',             [PostController::class, 'index']);
    Route::get('/posts/{post:slug}', [PostController::class, 'show']);
    Route::get('/categories',        [CategoryController::class, 'index']);
    Route::get('/categories/{category}', [CategoryController::class, 'show']);
    Route::get('/comments',          [CommentController::class, 'index']);

    // Protected routes
    Route::middleware('auth.jwt')->group(function () {
        Route::post('/posts',         [PostController::class, 'store']);
        Route::put('/posts/{post}',   [PostController::class, 'update']);
        Route::delete('/posts/{post}',[PostController::class, 'destroy']);

        Route::post('/categories',              [CategoryController::class, 'store']);
        Route::put('/categories/{category}',    [CategoryController::class, 'update']);
        Route::delete('/categories/{category}', [CategoryController::class, 'destroy']);

        Route::post('/comments',              [CommentController::class, 'store']);
        Route::delete('/comments/{comment}',  [CommentController::class, 'destroy']);
    });
});
