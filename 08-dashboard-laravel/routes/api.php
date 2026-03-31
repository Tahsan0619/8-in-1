<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AnalyticsController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\PipelineController;

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

    // All dashboard routes are protected
    Route::middleware('auth.jwt')->group(function () {
        // Analytics
        Route::get('/analytics',         [AnalyticsController::class, 'index']);
        Route::get('/analytics/summary', [AnalyticsController::class, 'summary']);
        Route::post('/analytics',        [AnalyticsController::class, 'store']);
        Route::get('/analytics/export',  [AnalyticsController::class, 'export']);

        // CRM Contacts
        Route::apiResource('contacts', ContactController::class);
        Route::post('/contacts/{contact}/convert', [ContactController::class, 'convert']);

        // Invoices
        Route::apiResource('invoices', InvoiceController::class);
        Route::post('/invoices/{invoice}/send',    [InvoiceController::class, 'send']);
        Route::post('/invoices/{invoice}/mark-paid',[InvoiceController::class, 'markPaid']);

        // Pipeline/Deals
        Route::get('/pipeline',          [PipelineController::class, 'index']);
        Route::post('/pipeline',         [PipelineController::class, 'store']);
        Route::put('/pipeline/{deal}',   [PipelineController::class, 'update']);
        Route::delete('/pipeline/{deal}',[PipelineController::class, 'destroy']);
    });
});
