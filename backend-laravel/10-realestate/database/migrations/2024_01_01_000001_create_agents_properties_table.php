<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('agents', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('email')->unique();
            $table->string('phone');
            $table->text('bio')->nullable();
            $table->string('avatar')->nullable();
            $table->string('license_number')->unique();
            $table->string('specialization')->nullable();
            $table->unsignedTinyInteger('years_experience')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->foreignId('agent_id')->constrained()->cascadeOnDelete();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description');
            $table->enum('type', ['apartment', 'house', 'villa', 'office', 'land', 'commercial']);
            $table->enum('listing_type', ['sale', 'rent']);
            $table->decimal('price', 12, 2);
            $table->unsignedTinyInteger('bedrooms')->default(0);
            $table->unsignedTinyInteger('bathrooms')->default(0);
            $table->decimal('area_sqft', 10, 2)->nullable();
            $table->string('address');
            $table->string('city');
            $table->string('state');
            $table->string('zip_code', 20);
            $table->decimal('latitude', 10, 7)->nullable();
            $table->decimal('longitude', 10, 7)->nullable();
            $table->json('amenities')->nullable();
            $table->json('images')->nullable();
            $table->string('cover_image')->nullable();
            $table->enum('status', ['active', 'sold', 'rented', 'inactive'])->default('active');
            $table->boolean('is_featured')->default(false);
            $table->unsignedInteger('views')->default(0);
            $table->year('year_built')->nullable();
            $table->unsignedTinyInteger('parking')->default(0);
            $table->unsignedTinyInteger('floors')->default(1);
            $table->timestamps();

            $table->index(['city', 'status']);
            $table->index(['listing_type', 'type']);
            $table->index('is_featured');
        });

        Schema::create('saved_properties', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('property_id')->constrained()->cascadeOnDelete();
            $table->timestamps();
            $table->unique(['user_id', 'property_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('saved_properties');
        Schema::dropIfExists('properties');
        Schema::dropIfExists('agents');
    }
};
