<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\CouponController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\Api\WishlistController;

// Auth
Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/auth/logout', [AuthController::class, 'logout']);
Route::middleware('auth:sanctum')->get('/auth/me', [AuthController::class, 'me']);

// Public
Route::apiResource('products', ProductController::class)->only(['index', 'show']);
Route::apiResource('categories', CategoryController::class)->only(['index', 'show']);
Route::get('/products/search', [ProductController::class, 'search']);
Route::get('/products/featured', [ProductController::class, 'featured']);

// Authenticated
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('cart', CartController::class);
    Route::post('/cart/apply-coupon', [CartController::class, 'applyCoupon']);
    Route::apiResource('orders', OrderController::class)->only(['index', 'show', 'store']);
    Route::post('/orders/{order}/cancel', [OrderController::class, 'cancel']);
    Route::apiResource('wishlist', WishlistController::class);
    Route::apiResource('reviews', ReviewController::class);
});

// Admin
Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {
    Route::apiResource('products', ProductController::class)->except(['index', 'show']);
    Route::apiResource('categories', CategoryController::class)->except(['index', 'show']);
    Route::apiResource('coupons', CouponController::class);
    Route::get('/orders', [OrderController::class, 'adminIndex']);
    Route::put('/orders/{order}/status', [OrderController::class, 'updateStatus']);
});
