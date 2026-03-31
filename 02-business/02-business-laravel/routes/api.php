<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\InquiryController;

Route::prefix('v1')->group(function () {

    Route::prefix('auth')->group(function () {
        Route::post('/register', [AuthController::class, 'register']);
        Route::post('/login',    [AuthController::class, 'login']);
        Route::middleware('auth.jwt')->group(function () {
            Route::post('/logout',  [AuthController::class, 'logout']);
            Route::post('/refresh', [AuthController::class, 'refresh']);
            Route::get('/profile',  [AuthController::class, 'profile']);
        });
    });

    // Public routes
    Route::get('/services',            [ServiceController::class, 'index']);
    Route::get('/services/{service}',  [ServiceController::class, 'show']);
    Route::get('/projects',            [ProjectController::class, 'index']);
    Route::get('/projects/{project}',  [ProjectController::class, 'show']);
    Route::post('/inquiries',          [InquiryController::class, 'store']);

    // Protected routes
    Route::middleware('auth.jwt')->group(function () {
        Route::post('/services',             [ServiceController::class, 'store']);
        Route::put('/services/{service}',    [ServiceController::class, 'update']);
        Route::delete('/services/{service}', [ServiceController::class, 'destroy']);

        Route::post('/projects',             [ProjectController::class, 'store']);
        Route::put('/projects/{project}',    [ProjectController::class, 'update']);
        Route::delete('/projects/{project}', [ProjectController::class, 'destroy']);

        Route::get('/inquiries',           [InquiryController::class, 'index']);
        Route::get('/inquiries/{inquiry}', [InquiryController::class, 'show']);
        Route::put('/inquiries/{inquiry}', [InquiryController::class, 'update']);
    });
});
