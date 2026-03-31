<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| BazarBD Multi-Vendor Marketplace API Routes
|--------------------------------------------------------------------------
*/

// Auth routes
Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login',    [AuthController::class, 'login']);

    Route::middleware('auth:api')->group(function () {
        Route::get('/profile',  [AuthController::class, 'profile']);
        Route::post('/logout',  [AuthController::class, 'logout']);
        Route::post('/refresh', [AuthController::class, 'refresh']);
    });
});

// Product routes
Route::prefix('products')->group(function () {
    Route::get('/',                         [ProductController::class, 'index']);
    Route::get('/search',                   [ProductController::class, 'search']);
    Route::get('/category/{category}',      [ProductController::class, 'getByCategory']);
    Route::get('/{product}',                [ProductController::class, 'show']);

    Route::middleware('auth:api')->group(function () {
        Route::post('/',            [ProductController::class, 'store']);
        Route::put('/{product}',    [ProductController::class, 'update']);
        Route::delete('/{product}', [ProductController::class, 'destroy']);
    });
});

// Seller routes (stub)
Route::prefix('sellers')->group(function () {
    Route::get('/',       fn() => response()->json(['message' => 'List sellers']));
    Route::get('/{id}',   fn() => response()->json(['message' => 'Get seller store']));
    Route::middleware('auth:api')->group(function () {
        Route::post('/',      fn() => response()->json(['message' => 'Create seller profile'], 201));
        Route::put('/{id}',   fn() => response()->json(['message' => 'Update seller profile']));
    });
});

// Order routes (stub)
Route::middleware('auth:api')->prefix('orders')->group(function () {
    Route::get('/',         fn() => response()->json(['message' => 'List orders']));
    Route::post('/',        fn() => response()->json(['message' => 'Place order'], 201));
    Route::get('/{id}',     fn() => response()->json(['message' => 'Get order']));
    Route::put('/{id}',     fn() => response()->json(['message' => 'Update order status']));
});

// Review routes (stub)
Route::prefix('reviews')->group(function () {
    Route::get('/{productId}', fn() => response()->json(['message' => 'Get product reviews']));
    Route::middleware('auth:api')->group(function () {
        Route::post('/',       fn() => response()->json(['message' => 'Post review'], 201));
        Route::delete('/{id}', fn() => response()->json(['message' => 'Delete review']));
    });
});

// Cart routes (stub)
Route::middleware('auth:api')->prefix('cart')->group(function () {
    Route::get('/',         fn() => response()->json(['message' => 'Get cart']));
    Route::post('/',        fn() => response()->json(['message' => 'Add to cart'], 201));
    Route::put('/{id}',     fn() => response()->json(['message' => 'Update cart item']));
    Route::delete('/{id}',  fn() => response()->json(['message' => 'Remove from cart']));
    Route::delete('/',      fn() => response()->json(['message' => 'Clear cart']));
});
