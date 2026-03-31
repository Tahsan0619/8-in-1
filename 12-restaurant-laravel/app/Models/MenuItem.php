<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'description', 'price', 'category', 'image',
        'is_available', 'customizations', 'preparation_time', 'calories',
    ];

    protected $casts = [
        'price'          => 'decimal:2',
        'is_available'   => 'boolean',
        'customizations' => 'array',
    ];
}
