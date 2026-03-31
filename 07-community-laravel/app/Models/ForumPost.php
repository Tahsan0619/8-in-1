<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ForumPost extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'content', 'author_id', 'category', 'tags',
        'upvotes', 'downvotes', 'answers_count',
    ];

    protected $casts = [
        'tags'         => 'array',
        'upvotes'      => 'integer',
        'downvotes'    => 'integer',
        'answers_count'=> 'integer',
    ];

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    public function answers()
    {
        return $this->hasMany(ForumAnswer::class);
    }
}
