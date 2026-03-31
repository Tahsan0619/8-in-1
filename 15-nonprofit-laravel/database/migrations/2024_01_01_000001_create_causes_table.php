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
            $table->text('description');
            $table->decimal('goal_amount', 15, 2);
            $table->decimal('raised_amount', 15, 2)->default(0);
            $table->string('image')->nullable();
            $table->string('category');
            $table->enum('status', ['active', 'completed', 'paused'])->default('active');
            $table->date('end_date')->nullable();
            $table->integer('donor_count')->default(0);
            $table->boolean('is_featured')->default(false);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('causes');
    }
};
