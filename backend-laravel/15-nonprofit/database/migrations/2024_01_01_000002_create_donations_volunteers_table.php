<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('donations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cause_id')->constrained()->cascadeOnDelete();
            $table->foreignId('campaign_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $table->string('donor_name');
            $table->string('donor_email');
            $table->decimal('amount', 12, 2);
            $table->string('currency', 3)->default('BDT');
            $table->enum('payment_method', ['card', 'mobile_banking', 'bank_transfer']);
            $table->string('transaction_id')->nullable()->unique();
            $table->enum('status', ['pending', 'completed', 'failed', 'refunded'])->default('pending');
            $table->boolean('is_anonymous')->default(false);
            $table->text('message')->nullable();
            $table->boolean('recurring')->default(false);
            $table->timestamps();

            $table->index(['cause_id', 'status']);
            $table->index(['user_id', 'status']);
        });

        Schema::create('volunteers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('phone', 20)->nullable();
            $table->json('skills')->nullable();
            $table->string('availability')->nullable();
            $table->string('area_of_interest');
            $table->enum('status', ['pending', 'approved', 'active', 'inactive'])->default('pending');
            $table->unsignedInteger('hours_contributed')->default(0);
            $table->date('joined_at')->nullable();
            $table->timestamps();
        });

        Schema::create('event_volunteers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('event_id')->constrained()->cascadeOnDelete();
            $table->foreignId('volunteer_id')->constrained()->cascadeOnDelete();
            $table->enum('status', ['registered', 'attended', 'cancelled'])->default('registered');
            $table->timestamps();
            $table->unique(['event_id', 'volunteer_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('event_volunteers');
        Schema::dropIfExists('volunteers');
        Schema::dropIfExists('donations');
    }
};
