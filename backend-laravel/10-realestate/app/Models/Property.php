<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;

class Property extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'slug', 'description', 'type', 'listing_type',
        'price', 'bedrooms', 'bathrooms', 'area_sqft',
        'address', 'city', 'state', 'zip_code', 'latitude', 'longitude',
        'amenities', 'images', 'cover_image', 'agent_id',
        'status', 'is_featured', 'views', 'year_built', 'parking', 'floors',
    ];

    protected $casts = [
        'amenities'   => 'array',
        'images'      => 'array',
        'is_featured' => 'boolean',
        'price'       => 'decimal:2',
        'latitude'    => 'float',
        'longitude'   => 'float',
    ];

    public function agent()
    {
        return $this->belongsTo(Agent::class);
    }

    public function inquiries()
    {
        return $this->hasMany(Inquiry::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function savedByUsers()
    {
        return $this->belongsToMany(User::class, 'saved_properties');
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('status', 'active');
    }
}
