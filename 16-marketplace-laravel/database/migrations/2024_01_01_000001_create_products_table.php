<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->decimal('price', 12, 2);
            $table->json('images')->nullable();
            $table->foreignId('seller_id')->constrained('users')->cascadeOnDelete();
            $table->string('category');
            $table->integer('stock')->default(0);
            $table->decimal('ratings', 3, 2)->default(0);
            $table->integer('num_reviews')->default(0);
            $table->boolean('is_active')->default(true);
            $table->string('sku')->nullable()->unique();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
