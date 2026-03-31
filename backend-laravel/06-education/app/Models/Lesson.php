<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Lesson extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_id', 'title', 'slug', 'content', 'video_url',
        'duration_minutes', 'order', 'is_free', 'section',
    ];

    protected $casts = [
        'duration_minutes' => 'integer',
        'order'            => 'integer',
        'is_free'          => 'boolean',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
