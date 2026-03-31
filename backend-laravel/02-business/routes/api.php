<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\BlogPostController;
use App\Http\Controllers\Api\TeamMemberController;
use App\Http\Controllers\Api\NewsletterController;

// Public routes
Route::post('/contact', [ContactController::class, 'store']);
Route::apiResource('services', ServiceController::class)->only(['index', 'show']);
Route::apiResource('portfolio', PortfolioController::class)->only(['index', 'show']);
Route::apiResource('testimonials', TestimonialController::class)->only(['index']);
Route::apiResource('blog', BlogPostController::class)->only(['index', 'show']);
Route::get('/blog/category/{slug}', [BlogPostController::class, 'byCategory']);
Route::apiResource('team', TeamMemberController::class)->only(['index', 'show']);
Route::post('/newsletter/subscribe', [NewsletterController::class, 'subscribe']);
Route::post('/newsletter/unsubscribe', [NewsletterController::class, 'unsubscribe']);

// Admin routes
Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {
    Route::apiResource('services', ServiceController::class)->except(['index', 'show']);
    Route::apiResource('portfolio', PortfolioController::class)->except(['index', 'show']);
    Route::apiResource('testimonials', TestimonialController::class)->except(['index']);
    Route::apiResource('blog', BlogPostController::class)->except(['index', 'show']);
    Route::apiResource('team', TeamMemberController::class)->except(['index', 'show']);
    Route::get('/contacts', [ContactController::class, 'index']);
    Route::put('/contacts/{contact}/status', [ContactController::class, 'updateStatus']);
});
