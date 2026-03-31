<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description', 'price', 'type', 'status',
        'bedrooms', 'bathrooms', 'area', 'images',
        'address', 'city', 'state', 'lat', 'lng', 'agent_id',
    ];

    protected $casts = [
        'images'    => 'array',
        'price'     => 'decimal:2',
        'area'      => 'decimal:2',
        'lat'       => 'decimal:8',
        'lng'       => 'decimal:8',
    ];

    public function agent()
    {
        return $this->belongsTo(User::class, 'agent_id');
    }
}
