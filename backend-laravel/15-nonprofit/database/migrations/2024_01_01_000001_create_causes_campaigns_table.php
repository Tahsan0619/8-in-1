<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('causes', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description');
            $table->string('short_description', 300)->nullable();
            $table->decimal('goal', 12, 2);
            $table->decimal('raised', 12, 2)->default(0);
            $table->unsignedInteger('donors_count')->default(0);
            $table->unsignedInteger('impact_count')->default(0);
            $table->string('image')->nullable();
            $table->string('category', 100);
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_active')->default(true);
            $table->date('end_date')->nullable();
            $table->timestamps();

            $table->index(['category', 'is_active']);
        });

        Schema::create('campaigns', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cause_id')->constrained()->cascadeOnDelete();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description');
            $table->decimal('goal', 12, 2);
            $table->decimal('raised', 12, 2)->default(0);
            $table->date('start_date');
            $table->date('end_date');
            $table->boolean('is_active')->default(true);
            $table->string('cover_image')->nullable();
            $table->timestamps();
        });

        Schema::create('stories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cause_id')->nullable()->constrained()->nullOnDelete();
            $table->string('title');
            $table->text('content');
            $table->string('image')->nullable();
            $table->string('author');
            $table->boolean('is_published')->default(false);
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
        });

        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('location');
            $table->dateTime('start_at');
            $table->dateTime('end_at');
            $table->unsignedInteger('max_volunteers')->nullable();
            $table->string('cover_image')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('events');
        Schema::dropIfExists('stories');
        Schema::dropIfExists('campaigns');
        Schema::dropIfExists('causes');
    }
};
