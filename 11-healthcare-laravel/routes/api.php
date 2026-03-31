<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DoctorController;

/*
|--------------------------------------------------------------------------
| MediCare Healthcare API Routes
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

// Doctor routes
Route::prefix('doctors')->group(function () {
    Route::get('/',                          [DoctorController::class, 'index']);
    Route::get('/{doctor}',                  [DoctorController::class, 'show']);
    Route::get('/{doctor}/slots',            [DoctorController::class, 'getAvailableSlots']);

    Route::middleware('auth:api')->group(function () {
        Route::post('/',            [DoctorController::class, 'store']);
        Route::put('/{doctor}',     [DoctorController::class, 'update']);
        Route::delete('/{doctor}',  [DoctorController::class, 'destroy']);
    });
});

// Appointment routes (stub)
Route::middleware('auth:api')->prefix('appointments')->group(function () {
    Route::get('/',         fn() => response()->json(['message' => 'List appointments']));
    Route::post('/',        fn() => response()->json(['message' => 'Book appointment'], 201));
    Route::get('/{id}',     fn() => response()->json(['message' => 'Get appointment']));
    Route::put('/{id}',     fn() => response()->json(['message' => 'Update appointment']));
    Route::delete('/{id}',  fn() => response()->json(['message' => 'Cancel appointment']));
});

// Prescription routes (stub)
Route::middleware('auth:api')->prefix('prescriptions')->group(function () {
    Route::get('/',         fn() => response()->json(['message' => 'List prescriptions']));
    Route::post('/',        fn() => response()->json(['message' => 'Create prescription'], 201));
    Route::get('/{id}',     fn() => response()->json(['message' => 'Get prescription']));
});

// Patient routes (stub)
Route::middleware('auth:api')->prefix('patients')->group(function () {
    Route::get('/',         fn() => response()->json(['message' => 'List patients']));
    Route::get('/{id}',     fn() => response()->json(['message' => 'Get patient']));
    Route::put('/{id}',     fn() => response()->json(['message' => 'Update patient']));
});
