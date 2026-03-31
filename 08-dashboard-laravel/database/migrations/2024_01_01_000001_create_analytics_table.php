<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('analytics', function (Blueprint $table) {
            $table->id();
            $table->date('date')->unique();
            $table->unsignedInteger('visitors')->default(0);
            $table->unsignedInteger('page_views')->default(0);
            $table->unsignedInteger('conversions')->default(0);
            $table->decimal('revenue', 12, 2)->default(0);
            $table->unsignedInteger('new_users')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('analytics');
    }
};
