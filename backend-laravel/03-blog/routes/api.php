<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\TagController;
use App\Http\Controllers\Api\AuthorController;
use App\Http\Controllers\Api\NewsletterController;
use App\Http\Controllers\Api\ReactionController;

// Public routes
Route::apiResource('posts', PostController::class)->only(['index', 'show']);
Route::get('/posts/featured', [PostController::class, 'featured']);
Route::get('/posts/trending', [PostController::class, 'trending']);
Route::get('/posts/search', [PostController::class, 'search']);
Route::apiResource('categories', CategoryController::class)->only(['index', 'show']);
Route::apiResource('tags', TagController::class)->only(['index', 'show']);
Route::apiResource('authors', AuthorController::class)->only(['index', 'show']);
Route::post('/newsletter/subscribe', [NewsletterController::class, 'subscribe']);
Route::get('/posts/{post}/comments', [CommentController::class, 'index']);
Route::post('/posts/{post}/reactions', [ReactionController::class, 'store']);

// Authenticated
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/posts/{post}/comments', [CommentController::class, 'store']);
    Route::delete('/comments/{comment}', [CommentController::class, 'destroy']);
});

// Admin
Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {
    Route::apiResource('posts', PostController::class)->except(['index', 'show']);
    Route::apiResource('categories', CategoryController::class)->except(['index', 'show']);
    Route::apiResource('tags', TagController::class)->except(['index', 'show']);
    Route::apiResource('authors', AuthorController::class)->except(['index', 'show']);
    Route::put('/comments/{comment}/approve', [CommentController::class, 'approve']);
});
