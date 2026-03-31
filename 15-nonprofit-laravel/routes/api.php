<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CauseController;

/*
|--------------------------------------------------------------------------
| HopeBridge Nonprofit API Routes
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

// Cause routes
Route::prefix('causes')->group(function () {
    Route::get('/',             [CauseController::class, 'index']);
    Route::get('/{cause}',      [CauseController::class, 'show']);
    Route::post('/{cause}/donate', [CauseController::class, 'donate']);

    Route::middleware('auth:api')->group(function () {
        Route::post('/',          [CauseController::class, 'store']);
        Route::put('/{cause}',    [CauseController::class, 'update']);
        Route::delete('/{cause}', [CauseController::class, 'destroy']);
    });
});

// Donation routes (stub)
Route::middleware('auth:api')->prefix('donations')->group(function () {
    Route::get('/',         fn() => response()->json(['message' => 'List donations']));
    Route::get('/{id}',     fn() => response()->json(['message' => 'Get donation']));
});

// Volunteer routes (stub)
Route::prefix('volunteers')->group(function () {
    Route::post('/',    fn() => response()->json(['message' => 'Register as volunteer'], 201));
    Route::middleware('auth:api')->group(function () {
        Route::get('/',       fn() => response()->json(['message' => 'List volunteers']));
        Route::get('/{id}',   fn() => response()->json(['message' => 'Get volunteer']));
        Route::put('/{id}',   fn() => response()->json(['message' => 'Update volunteer']));
    });
});

// Event routes (stub)
Route::prefix('events')->group(function () {
    Route::get('/',       fn() => response()->json(['message' => 'List events']));
    Route::get('/{id}',   fn() => response()->json(['message' => 'Get event']));
    Route::middleware('auth:api')->group(function () {
        Route::post('/',       fn() => response()->json(['message' => 'Create event'], 201));
        Route::put('/{id}',    fn() => response()->json(['message' => 'Update event']));
        Route::delete('/{id}', fn() => response()->json(['message' => 'Delete event']));
    });
});
