<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\JobController;

/*
|--------------------------------------------------------------------------
| JobConnect BD Job Board API Routes
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

// Job routes
Route::prefix('jobs')->group(function () {
    Route::get('/',         [JobController::class, 'index']);
    Route::get('/search',   [JobController::class, 'search']);
    Route::get('/{job}',    [JobController::class, 'show']);

    Route::middleware('auth:api')->group(function () {
        Route::post('/',              [JobController::class, 'store']);
        Route::put('/{job}',          [JobController::class, 'update']);
        Route::delete('/{job}',       [JobController::class, 'destroy']);
        Route::post('/{job}/apply',   [JobController::class, 'apply']);
    });
});

// Company routes (stub)
Route::prefix('companies')->group(function () {
    Route::get('/',       fn() => response()->json(['message' => 'List companies']));
    Route::get('/{id}',   fn() => response()->json(['message' => 'Get company']));
    Route::middleware('auth:api')->group(function () {
        Route::post('/',      fn() => response()->json(['message' => 'Create company'], 201));
        Route::put('/{id}',   fn() => response()->json(['message' => 'Update company']));
        Route::delete('/{id}',fn() => response()->json(['message' => 'Delete company']));
    });
});

// Application routes (stub)
Route::middleware('auth:api')->prefix('applications')->group(function () {
    Route::get('/',         fn() => response()->json(['message' => 'List applications']));
    Route::get('/{id}',     fn() => response()->json(['message' => 'Get application']));
    Route::put('/{id}',     fn() => response()->json(['message' => 'Update application status']));
    Route::delete('/{id}',  fn() => response()->json(['message' => 'Withdraw application']));
});

// Candidate routes (stub)
Route::middleware('auth:api')->prefix('candidates')->group(function () {
    Route::get('/',         fn() => response()->json(['message' => 'List candidates']));
    Route::get('/{id}',     fn() => response()->json(['message' => 'Get candidate profile']));
    Route::put('/{id}',     fn() => response()->json(['message' => 'Update candidate profile']));
});
