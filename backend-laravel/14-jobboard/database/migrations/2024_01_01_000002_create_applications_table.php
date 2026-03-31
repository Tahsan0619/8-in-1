<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('job_id')->constrained()->cascadeOnDelete();
            $table->foreignId('candidate_id')->constrained('users')->cascadeOnDelete();
            $table->string('resume_path');
            $table->text('cover_letter')->nullable();
            $table->enum('status', ['pending', 'reviewing', 'shortlisted', 'interviewed', 'offered', 'rejected'])->default('pending');
            $table->text('notes')->nullable();
            $table->timestamp('applied_at');
            $table->timestamps();

            $table->unique(['job_id', 'candidate_id']);
            $table->index(['candidate_id', 'status']);
            $table->index(['job_id', 'status']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('applications');
    }
};
