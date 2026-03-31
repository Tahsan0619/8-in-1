<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'description', 'price', 'discount_price', 'images',
        'category', 'brand', 'stock', 'ratings', 'num_reviews', 'is_featured',
    ];

    protected $casts = [
        'images'         => 'array',
        'price'          => 'decimal:2',
        'discount_price' => 'decimal:2',
        'ratings'        => 'decimal:1',
        'is_featured'    => 'boolean',
    ];

    public function reviews()
    {
        // Relationship to Review model (create app/Models/Review.php to enable)
        return $this->hasMany(\App\Models\Review::class);
    }

    public function orderItems()
    {
        // Relationship to OrderItem model (create app/Models/OrderItem.php to enable)
        return $this->hasMany(\App\Models\OrderItem::class);
    }
}
