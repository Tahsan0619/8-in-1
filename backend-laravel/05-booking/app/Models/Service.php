<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'slug', 'description', 'duration_minutes',
        'price', 'category_id', 'image', 'is_active',
    ];

    protected $casts = [
        'duration_minutes' => 'integer',
        'price'            => 'decimal:2',
        'is_active'        => 'boolean',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function providers()
    {
        return $this->belongsToMany(Provider::class);
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}
