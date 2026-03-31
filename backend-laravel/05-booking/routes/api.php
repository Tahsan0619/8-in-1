<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\ProviderController;
use App\Http\Controllers\Api\BookingController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\AuthController;

// Auth
Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/auth/logout', [AuthController::class, 'logout']);
Route::middleware('auth:sanctum')->get('/auth/me', [AuthController::class, 'me']);

// Public routes
Route::apiResource('services', ServiceController::class)->only(['index', 'show']);
Route::apiResource('categories', CategoryController::class)->only(['index', 'show']);
Route::apiResource('providers', ProviderController::class)->only(['index', 'show']);
Route::get('/providers/{provider}/availability', [ProviderController::class, 'availability']);
Route::apiResource('reviews', ReviewController::class)->only(['index', 'show']);

// Authenticated
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('bookings', BookingController::class);
    Route::post('/bookings/{booking}/cancel', [BookingController::class, 'cancel']);
    Route::post('/reviews', [ReviewController::class, 'store']);
});

// Admin
Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {
    Route::apiResource('services', ServiceController::class)->except(['index', 'show']);
    Route::apiResource('providers', ProviderController::class)->except(['index', 'show']);
    Route::get('/bookings', [BookingController::class, 'adminIndex']);
    Route::put('/bookings/{booking}/status', [BookingController::class, 'updateStatus']);
});
