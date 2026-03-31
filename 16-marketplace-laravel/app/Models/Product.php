<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'description', 'price', 'images', 'seller_id',
        'category', 'stock', 'ratings', 'num_reviews', 'is_active', 'sku',
    ];

    protected $casts = [
        'images'     => 'array',
        'price'      => 'decimal:2',
        'ratings'    => 'decimal:2',
        'is_active'  => 'boolean',
    ];

    public function seller()
    {
        return $this->belongsTo(User::class, 'seller_id');
    }
}
