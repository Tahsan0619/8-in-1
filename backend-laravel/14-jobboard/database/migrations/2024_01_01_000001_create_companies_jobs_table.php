<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('employer_id')->constrained('users')->cascadeOnDelete();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('logo')->nullable();
            $table->string('website')->nullable();
            $table->text('description')->nullable();
            $table->string('industry');
            $table->enum('size', ['startup', 'small', 'medium', 'large', 'enterprise'])->default('small');
            $table->string('location');
            $table->year('founded_year')->nullable();
            $table->boolean('is_verified')->default(false);
            $table->timestamps();
        });

        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained()->cascadeOnDelete();
            $table->foreignId('employer_id')->constrained('users')->cascadeOnDelete();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description');
            $table->text('requirements');
            $table->enum('type', ['full_time', 'part_time', 'contract', 'internship', 'remote']);
            $table->string('category', 100);
            $table->string('location');
            $table->boolean('is_remote')->default(false);
            $table->decimal('salary_min', 10, 2)->nullable();
            $table->decimal('salary_max', 10, 2)->nullable();
            $table->string('salary_currency', 3)->default('BDT');
            $table->enum('experience_level', ['entry', 'junior', 'mid', 'senior', 'lead']);
            $table->date('deadline');
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_active')->default(true);
            $table->unsignedInteger('views')->default(0);
            $table->unsignedInteger('applications_count')->default(0);
            $table->timestamps();

            $table->index(['is_active', 'deadline']);
            $table->index(['category', 'type']);
            $table->index('is_featured');
        });

        Schema::create('candidates', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('headline')->nullable();
            $table->text('summary')->nullable();
            $table->json('skills')->nullable();
            $table->json('experience')->nullable();
            $table->json('education')->nullable();
            $table->string('location')->nullable();
            $table->string('resume_path')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('candidates');
        Schema::dropIfExists('jobs');
        Schema::dropIfExists('companies');
    }
};
