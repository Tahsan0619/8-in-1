<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('departments', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('icon')->nullable();
            $table->string('head_doctor')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('doctors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('department_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('email')->unique();
            $table->string('phone', 20);
            $table->text('bio')->nullable();
            $table->string('avatar')->nullable();
            $table->string('license_number')->unique();
            $table->string('specialization');
            $table->unsignedTinyInteger('experience_years')->default(0);
            $table->decimal('consultation_fee', 8, 2)->default(0);
            $table->decimal('rating', 2, 1)->default(0);
            $table->boolean('is_available')->default(true);
            $table->timestamps();

            $table->index('department_id');
            $table->index('is_available');
        });

        Schema::create('doctor_schedules', function (Blueprint $table) {
            $table->id();
            $table->foreignId('doctor_id')->constrained()->cascadeOnDelete();
            $table->tinyInteger('day_of_week'); // 0=Sun … 6=Sat
            $table->time('start_time');
            $table->time('end_time');
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('doctor_schedules');
        Schema::dropIfExists('doctors');
        Schema::dropIfExists('departments');
    }
};
