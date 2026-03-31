<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PageController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\MediaController;
use App\Http\Controllers\Api\ThemeController;
use App\Http\Controllers\Api\SettingController;

/*
|--------------------------------------------------------------------------
| SiteCraft CMS API Routes
|--------------------------------------------------------------------------
*/

// Public routes
Route::get('/pages/{slug}', [PageController::class, 'showBySlug']);
Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/{slug}', [PostController::class, 'showBySlug']);
Route::get('/themes', [ThemeController::class, 'index']);
Route::get('/settings', [SettingController::class, 'publicSettings']);

// Admin routes — require Sanctum auth + admin role
Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {
    Route::apiResource('pages', PageController::class);
    Route::post('/pages/{page}/publish', [PageController::class, 'publish']);

    Route::apiResource('posts', PostController::class);
    Route::post('/posts/{post}/publish', [PostController::class, 'publish']);

    Route::apiResource('media', MediaController::class);
    Route::post('/media/upload', [MediaController::class, 'upload']);

    Route::apiResource('themes', ThemeController::class);
    Route::post('/themes/{theme}/activate', [ThemeController::class, 'activate']);

    Route::get('/settings', [SettingController::class, 'index']);
    Route::put('/settings', [SettingController::class, 'update']);
    Route::get('/seo/{type}/{id}', [SettingController::class, 'getSeo']);
    Route::put('/seo/{type}/{id}', [SettingController::class, 'updateSeo']);
});
