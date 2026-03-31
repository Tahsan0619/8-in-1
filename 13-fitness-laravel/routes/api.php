<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FitnessClassController;

/*
|--------------------------------------------------------------------------
| FitZone Fitness & Gym API Routes
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

// Class routes
Route::prefix('classes')->group(function () {
    Route::get('/',             [FitnessClassController::class, 'index']);
    Route::get('/{fitnessClass}', [FitnessClassController::class, 'show']);

    Route::middleware('auth:api')->group(function () {
        Route::post('/',                        [FitnessClassController::class, 'store']);
        Route::put('/{fitnessClass}',           [FitnessClassController::class, 'update']);
        Route::delete('/{fitnessClass}',        [FitnessClassController::class, 'destroy']);
        Route::post('/{fitnessClass}/enroll',   [FitnessClassController::class, 'enroll']);
    });
});

// Membership routes (stub)
Route::prefix('memberships')->group(function () {
    Route::get('/',       fn() => response()->json(['message' => 'List membership plans']));
    Route::get('/{id}',   fn() => response()->json(['message' => 'Get membership plan']));
    Route::middleware('auth:api')->group(function () {
        Route::post('/',      fn() => response()->json(['message' => 'Subscribe to membership'], 201));
        Route::put('/{id}',   fn() => response()->json(['message' => 'Update membership']));
        Route::delete('/{id}',fn() => response()->json(['message' => 'Cancel membership']));
    });
});

// Trainer routes (stub)
Route::prefix('trainers')->group(function () {
    Route::get('/',       fn() => response()->json(['message' => 'List trainers']));
    Route::get('/{id}',   fn() => response()->json(['message' => 'Get trainer']));
    Route::middleware('auth:api')->group(function () {
        Route::post('/',      fn() => response()->json(['message' => 'Create trainer'], 201));
        Route::put('/{id}',   fn() => response()->json(['message' => 'Update trainer']));
        Route::delete('/{id}',fn() => response()->json(['message' => 'Delete trainer']));
    });
});

// Workout routes (stub)
Route::middleware('auth:api')->prefix('workouts')->group(function () {
    Route::get('/',         fn() => response()->json(['message' => 'List workouts']));
    Route::post('/',        fn() => response()->json(['message' => 'Create workout'], 201));
    Route::get('/{id}',     fn() => response()->json(['message' => 'Get workout']));
    Route::put('/{id}',     fn() => response()->json(['message' => 'Update workout']));
    Route::delete('/{id}',  fn() => response()->json(['message' => 'Delete workout']));
});
