<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('company');
            $table->string('location');
            $table->enum('type', ['full_time', 'part_time', 'remote', 'contract', 'internship']);
            $table->decimal('salary_min', 10, 2)->nullable();
            $table->decimal('salary_max', 10, 2)->nullable();
            $table->text('description');
            $table->text('requirements')->nullable();
            $table->string('category');
            $table->foreignId('employer_id')->constrained('users')->cascadeOnDelete();
            $table->date('deadline')->nullable();
            $table->boolean('is_active')->default(false);
            $table->timestamps();
        });

        Schema::create('job_applications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('job_id')->constrained()->cascadeOnDelete();
            $table->text('cover_letter')->nullable();
            $table->string('resume_path');
            $table->enum('status', ['submitted', 'reviewing', 'shortlisted', 'rejected', 'hired'])->default('submitted');
            $table->timestamps();
            $table->unique(['user_id', 'job_id']);
        });

        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description');
            $table->string('location')->nullable();
            $table->boolean('is_online')->default(false);
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->integer('capacity')->nullable();
            $table->string('image')->nullable();
            $table->foreignId('organizer_id')->constrained('users')->cascadeOnDelete();
            $table->string('category');
            $table->boolean('is_featured')->default(false);
            $table->timestamps();
        });

        Schema::create('event_user', function (Blueprint $table) {
            $table->foreignId('event_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->timestamp('rsvp_at')->nullable();
            $table->timestamps();
            $table->primary(['event_id', 'user_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('event_user');
        Schema::dropIfExists('events');
        Schema::dropIfExists('job_applications');
        Schema::dropIfExists('jobs');
    }
};
