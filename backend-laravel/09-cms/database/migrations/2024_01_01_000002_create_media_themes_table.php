<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('media', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('path');
            $table->string('url');
            $table->enum('type', ['image', 'video', 'audio', 'document'])->default('image');
            $table->string('mime_type');
            $table->unsignedBigInteger('size');
            $table->string('alt')->nullable();
            $table->string('caption')->nullable();
            $table->foreignId('uploaded_by')->constrained('users')->cascadeOnDelete();
            $table->timestamps();

            $table->index('type');
        });

        Schema::create('themes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('preview_image')->nullable();
            $table->json('settings')->nullable();
            $table->boolean('is_active')->default(false);
            $table->string('version')->default('1.0.0');
            $table->string('author')->nullable();
            $table->timestamps();
        });

        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->text('value')->nullable();
            $table->string('group')->default('general');
            $table->boolean('is_public')->default(false);
            $table->timestamps();

            $table->index('group');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('settings');
        Schema::dropIfExists('themes');
        Schema::dropIfExists('media');
    }
};
