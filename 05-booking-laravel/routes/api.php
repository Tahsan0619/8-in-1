<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ProviderController;

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
    Route::get('/providers',           [ProviderController::class, 'index']);
    Route::get('/providers/{provider}',[ProviderController::class, 'show']);

    // Protected routes
    Route::middleware('auth.jwt')->group(function () {
        Route::apiResource('bookings', BookingController::class);

        Route::post('/services',             [ServiceController::class, 'store']);
        Route::put('/services/{service}',    [ServiceController::class, 'update']);
        Route::delete('/services/{service}', [ServiceController::class, 'destroy']);

        Route::post('/providers',              [ProviderController::class, 'store']);
        Route::put('/providers/{provider}',    [ProviderController::class, 'update']);
        Route::delete('/providers/{provider}', [ProviderController::class, 'destroy']);
        Route::get('/providers/{provider}/availability', [ProviderController::class, 'availability']);
    });
});
