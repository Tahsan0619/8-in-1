<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description', 'icon', 'features', 'category', 'price', 'is_featured',
    ];

    protected $casts = [
        'features'    => 'array',
        'price'       => 'decimal:2',
        'is_featured' => 'boolean',
    ];
}
