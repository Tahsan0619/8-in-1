<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'slug', 'description', 'client', 'category',
        'tech_stack', 'image', 'gallery', 'url', 'github_url',
        'is_featured', 'order', 'completed_at',
    ];

    protected $casts = [
        'tech_stack'   => 'array',
        'gallery'      => 'array',
        'is_featured'  => 'boolean',
        'order'        => 'integer',
        'completed_at' => 'date',
    ];

    public function photos()
    {
        return $this->hasMany(Photo::class);
    }

    public function skills()
    {
        return $this->belongsToMany(Skill::class);
    }
}
