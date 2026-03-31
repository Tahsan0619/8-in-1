<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\DoctorController;
use App\Http\Controllers\Api\AppointmentController;
use App\Http\Controllers\Api\PrescriptionController;

/*
|--------------------------------------------------------------------------
| MediCare Healthcare API Routes
|--------------------------------------------------------------------------
*/

// Public routes
Route::apiResource('doctors', DoctorController::class)->only(['index', 'show']);
Route::get('/departments', [DoctorController::class, 'departments']);
Route::get('/doctors/{doctor}/slots', [AppointmentController::class, 'availableSlots']);

// Patient routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/appointments',                [AppointmentController::class, 'store']);
    Route::get('/appointments/my',              [AppointmentController::class, 'myAppointments']);
    Route::put('/appointments/{appointment}/cancel', [AppointmentController::class, 'cancel']);
    Route::get('/prescriptions/my',             [PrescriptionController::class, 'myPrescriptions']);
    Route::get('/lab-results/my',               [PrescriptionController::class, 'myLabResults']);
});

// Doctor routes
Route::middleware(['auth:sanctum', 'doctor'])->prefix('doctor')->group(function () {
    Route::get('/appointments',                       [AppointmentController::class, 'index']);
    Route::put('/appointments/{appointment}/status',  [AppointmentController::class, 'updateStatus']);
    Route::get('/appointments/{appointment}',         [AppointmentController::class, 'show']);
    Route::post('/prescriptions',                     [PrescriptionController::class, 'store']);
    Route::get('/prescriptions',                      [PrescriptionController::class, 'index']);
    Route::post('/lab-results',                       [PrescriptionController::class, 'storeLabResult']);
});

// Admin routes
Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {
    Route::apiResource('doctors',     DoctorController::class)->except(['index', 'show']);
    Route::apiResource('departments', DoctorController::class);
    Route::get('/appointments',       [AppointmentController::class, 'adminIndex']);
    Route::get('/reports/daily',      [AppointmentController::class, 'dailyReport']);
});
