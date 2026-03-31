<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('memberships', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->decimal('price', 8, 2);
            $table->unsignedSmallInteger('duration_days');
            $table->json('features')->nullable();
            $table->unsignedSmallInteger('max_classes_per_month')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('user_memberships', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('membership_id')->constrained()->cascadeOnDelete();
            $table->date('start_date');
            $table->date('end_date');
            $table->enum('status', ['active', 'expired', 'cancelled'])->default('active');
            $table->enum('payment_status', ['pending', 'paid', 'failed'])->default('pending');
            $table->timestamps();

            $table->index(['user_id', 'status']);
        });

        Schema::create('workout_plans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('trainer_id')->nullable()->constrained()->nullOnDelete();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('goal');
            $table->enum('level', ['beginner', 'intermediate', 'advanced']);
            $table->unsignedTinyInteger('duration_weeks');
            $table->json('exercises');
            $table->boolean('is_public')->default(false);
            $table->timestamps();
        });

        Schema::create('progress_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->decimal('weight', 5, 2)->nullable();
            $table->decimal('body_fat', 4, 1)->nullable();
            $table->json('measurements')->nullable();
            $table->text('notes')->nullable();
            $table->timestamp('logged_at');
            $table->timestamps();

            $table->index(['user_id', 'logged_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('progress_logs');
        Schema::dropIfExists('workout_plans');
        Schema::dropIfExists('user_memberships');
        Schema::dropIfExists('memberships');
    }
};
