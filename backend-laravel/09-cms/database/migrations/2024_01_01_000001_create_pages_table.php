<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pages', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->longText('content');
            $table->string('template')->default('default');
            $table->string('meta_title')->nullable();
            $table->string('meta_description', 500)->nullable();
            $table->string('og_image')->nullable();
            $table->enum('status', ['draft', 'published'])->default('draft');
            $table->unsignedInteger('order')->default(0);
            $table->timestamp('published_at')->nullable();
            $table->timestamps();

            $table->index('slug');
            $table->index('status');
        });

        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('excerpt')->nullable();
            $table->longText('content');
            $table->string('cover_image')->nullable();
            $table->foreignId('author_id')->constrained('users')->cascadeOnDelete();
            $table->string('category')->nullable();
            $table->json('tags')->nullable();
            $table->enum('status', ['draft', 'published', 'scheduled'])->default('draft');
            $table->string('meta_title')->nullable();
            $table->string('meta_description', 500)->nullable();
            $table->unsignedInteger('views')->default(0);
            $table->timestamp('published_at')->nullable();
            $table->timestamps();

            $table->index('slug');
            $table->index('status');
        });

        Schema::create('seos', function (Blueprint $table) {
            $table->id();
            $table->morphs('seoable');
            $table->string('title')->nullable();
            $table->string('description', 500)->nullable();
            $table->string('og_title')->nullable();
            $table->string('og_description', 500)->nullable();
            $table->string('og_image')->nullable();
            $table->string('canonical_url')->nullable();
            $table->json('schema_markup')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('seos');
        Schema::dropIfExists('posts');
        Schema::dropIfExists('pages');
    }
};
