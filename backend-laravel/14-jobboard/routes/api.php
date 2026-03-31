<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\JobController;
use App\Http\Controllers\Api\ApplicationController;
use App\Http\Controllers\Api\CompanyController;

/*
|--------------------------------------------------------------------------
| JobConnect Job Board API Routes
|--------------------------------------------------------------------------
*/

// Public routes
Route::apiResource('jobs', JobController::class)->only(['index', 'show']);
Route::get('/jobs/search',          [JobController::class, 'search']);
Route::get('/jobs/featured',        [JobController::class, 'featured']);
Route::get('/jobs/{job}/similar',   [JobController::class, 'similar']);
Route::apiResource('companies', CompanyController::class)->only(['index', 'show']);

// Candidate routes
Route::middleware(['auth:sanctum', 'candidate'])->group(function () {
    Route::post('/jobs/{job}/apply',          [ApplicationController::class, 'store']);
    Route::get('/applications/my',            [ApplicationController::class, 'myApplications']);
    Route::delete('/applications/{application}', [ApplicationController::class, 'withdraw']);
    Route::get('/candidate/profile',          [ApplicationController::class, 'profile']);
    Route::put('/candidate/profile',          [ApplicationController::class, 'updateProfile']);
});

// Employer routes
Route::middleware(['auth:sanctum', 'employer'])->prefix('employer')->group(function () {
    Route::apiResource('jobs', JobController::class)->except(['index', 'show']);
    Route::get('/my-jobs',                              [JobController::class, 'employerJobs']);
    Route::get('/jobs/{job}/applications',              [ApplicationController::class, 'jobApplications']);
    Route::put('/applications/{application}/status',    [ApplicationController::class, 'updateStatus']);
    Route::get('/company',                              [CompanyController::class, 'myCompany']);
    Route::put('/company',                              [CompanyController::class, 'update']);
});

// Admin routes
Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {
    Route::get('/jobs',                     [JobController::class, 'adminIndex']);
    Route::put('/jobs/{job}/featured',      [JobController::class, 'toggleFeatured']);
    Route::apiResource('companies', CompanyController::class)->except(['index', 'show']);
    Route::put('/companies/{company}/verify', [CompanyController::class, 'verify']);
});
