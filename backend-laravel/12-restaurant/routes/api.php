<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\MenuController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\ReservationController;

/*
|--------------------------------------------------------------------------
| Khadok Kitchen Restaurant API Routes
|--------------------------------------------------------------------------
*/

// Public routes
Route::get('/menu',                    [MenuController::class, 'index']);
Route::get('/menu/featured',           [MenuController::class, 'featured']);
Route::get('/menu/category/{slug}',    [MenuController::class, 'byCategory']);
Route::get('/menu/{menuItem}',         [MenuController::class, 'show']);
Route::get('/categories',              [MenuController::class, 'categories']);
Route::get('/reviews',                 [MenuController::class, 'reviews']);

// Authenticated (customer)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/orders',                      [OrderController::class, 'store']);
    Route::get('/orders/my',                    [OrderController::class, 'myOrders']);
    Route::get('/orders/{order}',               [OrderController::class, 'show']);
    Route::put('/orders/{order}/cancel',        [OrderController::class, 'cancel']);
    Route::post('/reservations',                [ReservationController::class, 'store']);
    Route::get('/reservations/my',              [ReservationController::class, 'myReservations']);
    Route::put('/reservations/{reservation}/cancel', [ReservationController::class, 'cancel']);
    Route::post('/reviews',                     [MenuController::class, 'storeReview']);
});

// Admin routes
Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {
    Route::apiResource('menu',        MenuController::class)->except(['index', 'show']);
    Route::post('/menu/{menuItem}/toggle', [MenuController::class, 'toggleAvailability']);
    Route::apiResource('categories',  MenuController::class);
    Route::get('/orders',             [OrderController::class, 'index']);
    Route::put('/orders/{order}/status', [OrderController::class, 'updateStatus']);
    Route::apiResource('tables',      ReservationController::class);
    Route::get('/reservations',       [ReservationController::class, 'index']);
    Route::put('/reservations/{reservation}/confirm', [ReservationController::class, 'confirm']);
});
