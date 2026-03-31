<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('fitness_classes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->foreignId('trainer_id')->constrained('users')->cascadeOnDelete();
            $table->json('schedule')->nullable();
            $table->integer('duration');
            $table->integer('capacity');
            $table->integer('enrolled_count')->default(0);
            $table->string('location')->nullable();
            $table->enum('difficulty', ['beginner', 'intermediate', 'advanced'])->default('beginner');
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('fitness_classes');
    }
};
