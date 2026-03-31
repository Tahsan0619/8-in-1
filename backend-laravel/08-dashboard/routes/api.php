<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\AnalyticsController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\TaskController;
use App\Http\Controllers\Api\InvoiceController;
use App\Http\Controllers\Api\TeamController;
use App\Http\Controllers\Api\NotificationController;
use App\Http\Controllers\Api\SettingsController;

// Auth
Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/auth/logout', [AuthController::class, 'logout']);
Route::middleware('auth:sanctum')->get('/auth/me', [AuthController::class, 'me']);

// All dashboard routes require authentication
Route::middleware('auth:sanctum')->group(function () {
    // Analytics
    Route::get('/analytics/summary', [AnalyticsController::class, 'summary']);
    Route::get('/analytics/revenue-chart', [AnalyticsController::class, 'revenueChart']);
    Route::get('/analytics/top-customers', [AnalyticsController::class, 'topCustomers']);
    Route::get('/analytics/recent-activity', [AnalyticsController::class, 'recentActivity']);

    // Contacts (CRM)
    Route::apiResource('contacts', ContactController::class);

    // Tasks
    Route::apiResource('tasks', TaskController::class);
    Route::post('/tasks/{task}/complete', [TaskController::class, 'complete']);

    // Invoices
    Route::get('/invoices/stats', [InvoiceController::class, 'stats']);
    Route::apiResource('invoices', InvoiceController::class);
    Route::post('/invoices/{invoice}/send', [InvoiceController::class, 'send']);
    Route::post('/invoices/{invoice}/mark-paid', [InvoiceController::class, 'markPaid']);

    // Team
    Route::apiResource('team', TeamController::class);

    // Notifications
    Route::get('/notifications', [NotificationController::class, 'index']);
    Route::post('/notifications/{id}/read', [NotificationController::class, 'markRead']);
    Route::post('/notifications/read-all', [NotificationController::class, 'markAllRead']);

    // Settings
    Route::get('/settings', [SettingsController::class, 'index']);
    Route::put('/settings', [SettingsController::class, 'update']);
});
