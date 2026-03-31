<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ReviewController;

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
    Route::get('/products',            [ProductController::class, 'index']);
    Route::get('/products/{product}',  [ProductController::class, 'show']);
    Route::get('/reviews',             [ReviewController::class, 'index']);

    // Protected routes
    Route::middleware('auth.jwt')->group(function () {
        Route::post('/products',              [ProductController::class, 'store']);
        Route::put('/products/{product}',     [ProductController::class, 'update']);
        Route::delete('/products/{product}',  [ProductController::class, 'destroy']);

        Route::apiResource('orders', OrderController::class);

        Route::post('/reviews',           [ReviewController::class, 'store']);
        Route::put('/reviews/{review}',   [ReviewController::class, 'update']);
        Route::delete('/reviews/{review}',[ReviewController::class, 'destroy']);
    });
});
