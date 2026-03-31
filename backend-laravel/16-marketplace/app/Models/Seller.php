<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Seller extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'shop_name', 'slug', 'description',
        'logo', 'banner', 'phone', 'address', 'city',
        'commission_rate', 'balance', 'total_sales',
        'rating', 'is_verified', 'is_active', 'joined_at',
    ];

    protected $casts = [
        'commission_rate' => 'decimal:2',
        'balance'         => 'decimal:2',
        'total_sales'     => 'decimal:2',
        'rating'          => 'decimal:1',
        'is_verified'     => 'boolean',
        'is_active'       => 'boolean',
        'joined_at'       => 'date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
