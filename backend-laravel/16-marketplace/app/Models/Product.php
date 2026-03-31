<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'slug', 'description', 'price', 'sale_price',
        'stock', 'sku', 'category_id', 'seller_id',
        'images', 'thumbnail', 'weight', 'dimensions',
        'is_featured', 'is_active', 'views', 'sales_count', 'rating',
    ];

    protected $casts = [
        'images'      => 'array',
        'dimensions'  => 'array',
        'price'       => 'decimal:2',
        'sale_price'  => 'decimal:2',
        'is_featured' => 'boolean',
        'is_active'   => 'boolean',
        'rating'      => 'decimal:1',
    ];

    public function seller()
    {
        return $this->belongsTo(Seller::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function cartItems()
    {
        return $this->hasMany(CartItem::class);
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }
}
