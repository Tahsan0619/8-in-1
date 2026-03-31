<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MenuItemController;

/*
|--------------------------------------------------------------------------
| Khadok Kitchen Restaurant API Routes
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

// Menu routes
Route::prefix('menu')->group(function () {
    Route::get('/',                        [MenuItemController::class, 'index']);
    Route::get('/category/{category}',     [MenuItemController::class, 'getByCategory']);
    Route::get('/{menuItem}',              [MenuItemController::class, 'show']);

    Route::middleware('auth:api')->group(function () {
        Route::post('/',            [MenuItemController::class, 'store']);
        Route::put('/{menuItem}',   [MenuItemController::class, 'update']);
        Route::delete('/{menuItem}',[MenuItemController::class, 'destroy']);
    });
});

// Order routes (stub)
Route::middleware('auth:api')->prefix('orders')->group(function () {
    Route::get('/',         fn() => response()->json(['message' => 'List orders']));
    Route::post('/',        fn() => response()->json(['message' => 'Place order'], 201));
    Route::get('/{id}',     fn() => response()->json(['message' => 'Get order']));
    Route::put('/{id}',     fn() => response()->json(['message' => 'Update order status']));
});

// Reservation routes (stub)
Route::prefix('reservations')->group(function () {
    Route::post('/',    fn() => response()->json(['message' => 'Book reservation'], 201));
    Route::middleware('auth:api')->group(function () {
        Route::get('/',       fn() => response()->json(['message' => 'List reservations']));
        Route::get('/{id}',   fn() => response()->json(['message' => 'Get reservation']));
        Route::put('/{id}',   fn() => response()->json(['message' => 'Update reservation']));
        Route::delete('/{id}',fn() => response()->json(['message' => 'Cancel reservation']));
    });
});

// Review routes (stub)
Route::prefix('reviews')->group(function () {
    Route::get('/',    fn() => response()->json(['message' => 'List reviews']));
    Route::middleware('auth:api')->group(function () {
        Route::post('/',       fn() => response()->json(['message' => 'Post review'], 201));
        Route::delete('/{id}', fn() => response()->json(['message' => 'Delete review']));
    });
});
