<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ClassController;
use App\Http\Controllers\Api\MembershipController;
use App\Http\Controllers\Api\TrainerController;

/*
|--------------------------------------------------------------------------
| FitZone Fitness/Gym API Routes
|--------------------------------------------------------------------------
*/

// Public routes
Route::get('/classes',         [ClassController::class, 'index']);
Route::get('/classes/schedule',[ClassController::class, 'weeklySchedule']);
Route::get('/classes/{fitnessClass}', [ClassController::class, 'show']);
Route::apiResource('trainers', TrainerController::class)->only(['index', 'show']);
Route::get('/memberships',     [MembershipController::class, 'plans']);

// Authenticated (member)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/classes/{fitnessClass}/book', [ClassController::class, 'book']);
    Route::delete('/bookings/{booking}',        [ClassController::class, 'cancelBooking']);
    Route::get('/bookings/my',                  [ClassController::class, 'myBookings']);
    Route::post('/memberships/subscribe',       [MembershipController::class, 'subscribe']);
    Route::get('/memberships/my',               [MembershipController::class, 'myMembership']);
    Route::put('/memberships/cancel',           [MembershipController::class, 'cancel']);
    Route::get('/workouts/my',                  [ClassController::class, 'myWorkouts']);
    Route::post('/workouts',                    [ClassController::class, 'storeWorkout']);
    Route::post('/progress',                    [ClassController::class, 'logProgress']);
    Route::get('/progress/my',                  [ClassController::class, 'myProgress']);
});

// Admin routes
Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {
    Route::apiResource('classes',     ClassController::class)->except(['index', 'show']);
    Route::apiResource('trainers',    TrainerController::class)->except(['index', 'show']);
    Route::apiResource('memberships', MembershipController::class)->except(['index']);
    Route::get('/bookings',           [ClassController::class, 'allBookings']);
    Route::get('/stats',              [MembershipController::class, 'stats']);
});
