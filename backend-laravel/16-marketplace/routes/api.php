<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\SellerController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\CartController;

/*
|--------------------------------------------------------------------------
| BazarBD Multi-Vendor Marketplace API Routes
|--------------------------------------------------------------------------
*/

// Public routes
Route::apiResource('products', ProductController::class)->only(['index', 'show']);
Route::get('/products/search',            [ProductController::class, 'search']);
Route::get('/products/featured',          [ProductController::class, 'featured']);
Route::get('/products/top-selling',       [ProductController::class, 'topSelling']);
Route::get('/products/category/{slug}',   [ProductController::class, 'byCategory']);
Route::get('/categories',                 [ProductController::class, 'categories']);
Route::apiResource('sellers', SellerController::class)->only(['index', 'show']);

// Buyer routes
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/cart',           [CartController::class, 'index']);
    Route::post('/cart',          [CartController::class, 'addItem']);
    Route::put('/cart/{item}',    [CartController::class, 'updateItem']);
    Route::delete('/cart/{item}', [CartController::class, 'removeItem']);
    Route::delete('/cart',        [CartController::class, 'clear']);

    Route::post('/orders',        [OrderController::class, 'store']);
    Route::get('/orders/my',      [OrderController::class, 'myOrders']);
    Route::get('/orders/{order}', [OrderController::class, 'show']);

    Route::post('/reviews',       [ProductController::class, 'storeReview']);
});

// Seller routes
Route::middleware(['auth:sanctum', 'seller'])->prefix('seller')->group(function () {
    Route::apiResource('products', ProductController::class)->except(['index', 'show']);
    Route::post('/products/{product}/toggle', [ProductController::class, 'toggleActive']);
    Route::get('/orders',                    [OrderController::class, 'sellerOrders']);
    Route::put('/orders/{order}/status',     [OrderController::class, 'updateStatus']);
    Route::get('/stats',                     [SellerController::class, 'myStats']);
    Route::post('/withdraw',                 [SellerController::class, 'requestWithdraw']);
    Route::get('/profile',                   [SellerController::class, 'myShop']);
    Route::put('/profile',                   [SellerController::class, 'updateShop']);
});

// Admin routes
Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {
    Route::get('/sellers',                       [SellerController::class, 'adminIndex']);
    Route::put('/sellers/{seller}/verify',       [SellerController::class, 'verify']);
    Route::get('/orders',                        [OrderController::class, 'adminIndex']);
    Route::get('/payouts',                       [SellerController::class, 'payouts']);
    Route::put('/payouts/{payout}/process',      [SellerController::class, 'processPayout']);
    Route::apiResource('categories', ProductController::class);
});
