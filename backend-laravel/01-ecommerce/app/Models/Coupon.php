<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Coupon extends Model
{
    use HasFactory;

    protected $fillable = [
        'code', 'type', 'value', 'min_order_amount', 'max_uses',
        'used_count', 'expires_at', 'is_active',
    ];

    protected $casts = [
        'value'            => 'decimal:2',
        'min_order_amount' => 'decimal:2',
        'is_active'        => 'boolean',
        'expires_at'       => 'datetime',
    ];

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function isValid(): bool
    {
        return $this->is_active
            && ($this->max_uses === null || $this->used_count < $this->max_uses)
            && ($this->expires_at === null || $this->expires_at->isFuture());
    }
}
