<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\ExperienceController;

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
    Route::get('/projects',           [ProjectController::class, 'index']);
    Route::get('/projects/{project}', [ProjectController::class, 'show']);
    Route::get('/skills',             [SkillController::class, 'index']);
    Route::get('/experience',         [ExperienceController::class, 'index']);

    // Protected routes
    Route::middleware('auth.jwt')->group(function () {
        Route::post('/projects',              [ProjectController::class, 'store']);
        Route::put('/projects/{project}',     [ProjectController::class, 'update']);
        Route::delete('/projects/{project}',  [ProjectController::class, 'destroy']);

        Route::post('/skills',           [SkillController::class, 'store']);
        Route::put('/skills/{skill}',    [SkillController::class, 'update']);
        Route::delete('/skills/{skill}', [SkillController::class, 'destroy']);

        Route::post('/experience',                [ExperienceController::class, 'store']);
        Route::put('/experience/{experience}',    [ExperienceController::class, 'update']);
        Route::delete('/experience/{experience}', [ExperienceController::class, 'destroy']);
    });
});
