<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ForumThread extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'slug', 'content', 'author_id', 'category',
        'tags', 'is_pinned', 'is_locked', 'views', 'replies_count',
    ];

    protected $casts = [
        'tags'         => 'array',
        'is_pinned'    => 'boolean',
        'is_locked'    => 'boolean',
        'views'        => 'integer',
        'replies_count'=> 'integer',
    ];

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    public function replies()
    {
        return $this->hasMany(ForumReply::class, 'thread_id');
    }
}
