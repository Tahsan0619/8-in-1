<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('trainers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('email')->unique();
            $table->string('phone', 20)->nullable();
            $table->text('bio')->nullable();
            $table->string('avatar')->nullable();
            $table->json('specializations')->nullable();
            $table->json('certifications')->nullable();
            $table->unsignedTinyInteger('experience_years')->default(0);
            $table->decimal('rating', 2, 1)->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('fitness_classes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('trainer_id')->constrained()->cascadeOnDelete();
            $table->string('title');
            $table->text('description')->nullable();
            $table->enum('type', ['yoga', 'hiit', 'strength', 'cardio', 'dance', 'boxing']);
            $table->unsignedSmallInteger('capacity');
            $table->unsignedSmallInteger('enrolled')->default(0);
            $table->unsignedSmallInteger('duration_minutes');
            $table->time('start_time');
            $table->time('end_time')->nullable();
            $table->tinyInteger('day_of_week'); // 0=Sun … 6=Sat
            $table->string('location')->nullable();
            $table->string('image')->nullable();
            $table->boolean('is_active')->default(true);
            $table->decimal('price', 8, 2)->default(0);
            $table->timestamps();

            $table->index(['day_of_week', 'is_active']);
        });

        Schema::create('class_bookings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('fitness_class_id')->constrained()->cascadeOnDelete();
            $table->enum('status', ['confirmed', 'cancelled', 'attended'])->default('confirmed');
            $table->timestamps();

            $table->unique(['user_id', 'fitness_class_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('class_bookings');
        Schema::dropIfExists('fitness_classes');
        Schema::dropIfExists('trainers');
    }
};
