<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PropertyController;
use App\Http\Controllers\Api\AgentController;
use App\Http\Controllers\Api\InquiryController;

/*
|--------------------------------------------------------------------------
| HomeScout Real Estate API Routes
|--------------------------------------------------------------------------
*/

// Public routes
Route::apiResource('properties', PropertyController::class)->only(['index', 'show']);
Route::get('/properties/search',   [PropertyController::class, 'search']);
Route::get('/properties/featured', [PropertyController::class, 'featured']);
Route::get('/neighborhoods',       [PropertyController::class, 'neighborhoods']);

Route::apiResource('agents', AgentController::class)->only(['index', 'show']);

Route::post('/inquiries',              [InquiryController::class, 'store']);
Route::post('/calculator/mortgage',    [InquiryController::class, 'mortgageCalc']);

// Authenticated buyer routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/saved/{property}',   [PropertyController::class, 'save']);
    Route::delete('/saved/{property}', [PropertyController::class, 'unsave']);
    Route::get('/saved',               [PropertyController::class, 'savedProperties']);
    Route::get('/my-inquiries',        [InquiryController::class, 'myInquiries']);
});

// Agent/admin routes
Route::middleware(['auth:sanctum', 'agent'])->prefix('agent')->group(function () {
    Route::apiResource('properties', PropertyController::class)->except(['index', 'show']);
    Route::get('/inquiries',                          [InquiryController::class, 'index']);
    Route::put('/inquiries/{inquiry}/status',         [InquiryController::class, 'updateStatus']);
    Route::get('/my-properties',                      [PropertyController::class, 'agentProperties']);
});
