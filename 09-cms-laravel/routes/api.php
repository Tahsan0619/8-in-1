<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PageController;

/*
|--------------------------------------------------------------------------
| SiteCraft CMS API Routes
|--------------------------------------------------------------------------
*/

// Auth routes
Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login',    [AuthController::class, 'login']);

    Route::middleware('auth:api')->group(function () {
        Route::get('/profile', [AuthController::class, 'profile']);
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::post('/refresh', [AuthController::class, 'refresh']);
    });
});

// Page routes
Route::prefix('pages')->group(function () {
    Route::get('/',         [PageController::class, 'index']);
    Route::get('/{slug}',   [PageController::class, 'show']);

    Route::middleware('auth:api')->group(function () {
        Route::post('/',          [PageController::class, 'store']);
        Route::put('/{page}',     [PageController::class, 'update']);
        Route::delete('/{page}',  [PageController::class, 'destroy']);
    });
});

// Post routes (stub)
Route::middleware('auth:api')->prefix('posts')->group(function () {
    Route::get('/',         fn() => response()->json(['message' => 'List posts']));
    Route::post('/',        fn() => response()->json(['message' => 'Create post'], 201));
    Route::get('/{id}',     fn() => response()->json(['message' => 'Get post']));
    Route::put('/{id}',     fn() => response()->json(['message' => 'Update post']));
    Route::delete('/{id}',  fn() => response()->json(['message' => 'Delete post']));
});

// Media routes (stub)
Route::middleware('auth:api')->prefix('media')->group(function () {
    Route::get('/',         fn() => response()->json(['message' => 'List media']));
    Route::post('/upload',  fn() => response()->json(['message' => 'Upload media'], 201));
    Route::delete('/{id}',  fn() => response()->json(['message' => 'Delete media']));
});

// Settings routes (stub)
Route::middleware('auth:api')->prefix('settings')->group(function () {
    Route::get('/',         fn() => response()->json(['message' => 'Get settings']));
    Route::put('/',         fn() => response()->json(['message' => 'Update settings']));
});
