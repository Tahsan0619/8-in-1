<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;

class Donation extends Model
{
    use HasFactory;

    protected $fillable = [
        'cause_id', 'campaign_id', 'user_id',
        'donor_name', 'donor_email', 'amount', 'currency',
        'payment_method', 'transaction_id', 'status',
        'is_anonymous', 'message', 'recurring',
    ];

    protected $casts = [
        'amount'       => 'decimal:2',
        'is_anonymous' => 'boolean',
        'recurring'    => 'boolean',
    ];

    public function cause()
    {
        return $this->belongsTo(Cause::class);
    }

    public function campaign()
    {
        return $this->belongsTo(Campaign::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function scopeCompleted(Builder $query): Builder
    {
        return $query->where('status', 'completed');
    }
}
