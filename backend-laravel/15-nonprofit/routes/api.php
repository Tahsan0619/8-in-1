<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CauseController;
use App\Http\Controllers\Api\DonationController;
use App\Http\Controllers\Api\VolunteerController;

/*
|--------------------------------------------------------------------------
| HopeBridge Nonprofit/Charity API Routes
|--------------------------------------------------------------------------
*/

// Public routes
Route::apiResource('causes', CauseController::class)->only(['index', 'show']);
Route::get('/causes/featured',   [CauseController::class, 'featured']);
Route::get('/campaigns',         [CauseController::class, 'activeCampaigns']);
Route::get('/events',            [VolunteerController::class, 'upcomingEvents']);
Route::get('/stories',           [CauseController::class, 'stories']);
Route::get('/impact',            [CauseController::class, 'impactNumbers']);
Route::get('/donations/stats',   [DonationController::class, 'stats']);

// Authenticated routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/donations',                  [DonationController::class, 'store']);
    Route::get('/donations/my',                [DonationController::class, 'myDonations']);
    Route::get('/donations/{donation}/receipt',[DonationController::class, 'generateReceipt']);
    Route::post('/volunteers',                 [VolunteerController::class, 'store']);
    Route::get('/volunteers/my',               [VolunteerController::class, 'myProfile']);
});

// Admin routes
Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {
    Route::apiResource('causes',    CauseController::class)->except(['index', 'show']);
    Route::apiResource('campaigns', CauseController::class);
    Route::get('/donations',                [DonationController::class, 'index']);
    Route::get('/donations/report',         [DonationController::class, 'report']);
    Route::get('/volunteers',               [VolunteerController::class, 'index']);
    Route::put('/volunteers/{volunteer}/status', [VolunteerController::class, 'updateStatus']);
    Route::apiResource('events', VolunteerController::class);
});
