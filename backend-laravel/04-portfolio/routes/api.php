<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\SkillController;
use App\Http\Controllers\Api\ExperienceController;
use App\Http\Controllers\Api\EducationController;
use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\PhotoController;

// Public routes
Route::apiResource('projects', ProjectController::class)->only(['index', 'show']);
Route::get('/projects/featured', [ProjectController::class, 'featured']);
Route::apiResource('skills', SkillController::class)->only(['index', 'show']);
Route::apiResource('experience', ExperienceController::class)->only(['index', 'show']);
Route::apiResource('education', EducationController::class)->only(['index', 'show']);
Route::apiResource('testimonials', TestimonialController::class)->only(['index']);
Route::post('/contact', [ContactController::class, 'store']);
Route::apiResource('photos', PhotoController::class)->only(['index', 'show']);

// Admin
Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {
    Route::apiResource('projects', ProjectController::class)->except(['index', 'show']);
    Route::apiResource('skills', SkillController::class)->except(['index', 'show']);
    Route::apiResource('experience', ExperienceController::class)->except(['index', 'show']);
    Route::apiResource('education', EducationController::class)->except(['index', 'show']);
    Route::apiResource('testimonials', TestimonialController::class)->except(['index']);
    Route::apiResource('photos', PhotoController::class)->except(['index', 'show']);
    Route::get('/contacts', [ContactController::class, 'index']);
    Route::put('/contacts/{contact}/status', [ContactController::class, 'updateStatus']);
});
