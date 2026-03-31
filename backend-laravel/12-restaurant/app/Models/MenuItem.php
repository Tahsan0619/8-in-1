<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MenuItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'slug', 'description', 'price', 'category_id',
        'image', 'is_available', 'is_featured', 'is_vegetarian',
        'is_vegan', 'is_spicy', 'allergens', 'preparation_time',
        'calories', 'order',
    ];

    protected $casts = [
        'allergens'     => 'array',
        'price'         => 'decimal:2',
        'is_available'  => 'boolean',
        'is_featured'   => 'boolean',
        'is_vegetarian' => 'boolean',
        'is_vegan'      => 'boolean',
        'is_spicy'      => 'boolean',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
}
