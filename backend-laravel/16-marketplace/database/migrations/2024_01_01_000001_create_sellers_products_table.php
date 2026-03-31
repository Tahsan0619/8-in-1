<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('image')->nullable();
            $table->foreignId('parent_id')->nullable()->constrained('categories')->nullOnDelete();
            $table->unsignedInteger('order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('sellers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('shop_name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('logo')->nullable();
            $table->string('banner')->nullable();
            $table->string('phone', 20)->nullable();
            $table->string('address')->nullable();
            $table->string('city', 100)->nullable();
            $table->decimal('commission_rate', 4, 2)->default(10.00);
            $table->decimal('balance', 12, 2)->default(0);
            $table->decimal('total_sales', 12, 2)->default(0);
            $table->decimal('rating', 2, 1)->default(0);
            $table->boolean('is_verified')->default(false);
            $table->boolean('is_active')->default(true);
            $table->date('joined_at')->nullable();
            $table->timestamps();
        });

        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('seller_id')->constrained()->cascadeOnDelete();
            $table->foreignId('category_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description');
            $table->decimal('price', 10, 2);
            $table->decimal('sale_price', 10, 2)->nullable();
            $table->unsignedInteger('stock')->default(0);
            $table->string('sku')->nullable()->unique();
            $table->json('images')->nullable();
            $table->string('thumbnail')->nullable();
            $table->decimal('weight', 6, 2)->nullable();
            $table->json('dimensions')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_active')->default(true);
            $table->unsignedInteger('views')->default(0);
            $table->unsignedInteger('sales_count')->default(0);
            $table->decimal('rating', 2, 1)->default(0);
            $table->timestamps();

            $table->index(['seller_id', 'is_active']);
            $table->index(['category_id', 'is_active']);
            $table->index('is_featured');
        });

        Schema::create('cart_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->unsignedSmallInteger('quantity')->default(1);
            $table->timestamps();
            $table->unique(['user_id', 'product_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cart_items');
        Schema::dropIfExists('products');
        Schema::dropIfExists('sellers');
        Schema::dropIfExists('categories');
    }
};
