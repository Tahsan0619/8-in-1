<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PropertyController;

/*
|--------------------------------------------------------------------------
| HomeScout Real Estate API Routes
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

// Property routes
Route::prefix('properties')->group(function () {
    Route::get('/',         [PropertyController::class, 'index']);
    Route::get('/search',   [PropertyController::class, 'search']);
    Route::get('/{property}', [PropertyController::class, 'show']);

    Route::middleware('auth:api')->group(function () {
        Route::post('/',              [PropertyController::class, 'store']);
        Route::put('/{property}',     [PropertyController::class, 'update']);
        Route::delete('/{property}',  [PropertyController::class, 'destroy']);
    });
});

// Agent routes (stub)
Route::prefix('agents')->group(function () {
    Route::get('/',       fn() => response()->json(['message' => 'List agents']));
    Route::get('/{id}',   fn() => response()->json(['message' => 'Get agent']));
    Route::middleware('auth:api')->group(function () {
        Route::put('/{id}', fn() => response()->json(['message' => 'Update agent']));
    });
});

// Inquiry routes (stub)
Route::prefix('inquiries')->group(function () {
    Route::post('/', fn() => response()->json(['message' => 'Submit inquiry'], 201));
    Route::middleware('auth:api')->group(function () {
        Route::get('/',       fn() => response()->json(['message' => 'List inquiries']));
        Route::get('/{id}',   fn() => response()->json(['message' => 'Get inquiry']));
        Route::put('/{id}',   fn() => response()->json(['message' => 'Update inquiry']));
    });
});
