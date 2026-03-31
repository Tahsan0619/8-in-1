<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Cause extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'slug', 'description', 'short_description',
        'goal', 'raised', 'donors_count', 'impact_count',
        'image', 'category', 'is_featured', 'is_active', 'end_date',
    ];

    protected $casts = [
        'goal'        => 'decimal:2',
        'raised'      => 'decimal:2',
        'is_featured' => 'boolean',
        'is_active'   => 'boolean',
        'end_date'    => 'date',
    ];

    public function campaigns()
    {
        return $this->hasMany(Campaign::class);
    }

    public function donations()
    {
        return $this->hasMany(Donation::class);
    }

    public function stories()
    {
        return $this->hasMany(Story::class);
    }
}
