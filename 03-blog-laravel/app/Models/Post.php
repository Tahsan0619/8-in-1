<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'slug', 'content', 'excerpt', 'author_id', 'category_id',
        'tags', 'image', 'status', 'published_at', 'reading_time',
    ];

    protected $casts = [
        'tags'         => 'array',
        'published_at' => 'datetime',
        'reading_time' => 'integer',
    ];

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    public function category()
    {
        // Relationship to Category model (create app/Models/Category.php to enable)
        return $this->belongsTo(\App\Models\Category::class);
    }

    public function comments()
    {
        // Relationship to Comment model (create app/Models/Comment.php to enable)
        return $this->hasMany(\App\Models\Comment::class);
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
