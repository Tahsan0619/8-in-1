<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description', 'images', 'technologies', 'category',
        'live_url', 'github_url', 'is_featured',
    ];

    protected $casts = [
        'images'       => 'array',
        'technologies' => 'array',
        'is_featured'  => 'boolean',
    ];
}
