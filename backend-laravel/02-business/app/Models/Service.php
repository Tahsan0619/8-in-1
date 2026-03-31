<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'slug', 'description', 'short_description',
        'icon', 'image', 'price', 'order', 'is_featured', 'is_active',
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'is_active'   => 'boolean',
        'order'       => 'integer',
    ];

    public function portfolios()
    {
        return $this->hasMany(Portfolio::class);
    }

    public function features()
    {
        return $this->hasMany(ServiceFeature::class);
    }
}
