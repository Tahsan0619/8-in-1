<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'slug', 'description', 'short_description',
        'instructor_id', 'category_id', 'level', 'price',
        'thumbnail', 'duration_hours', 'language',
        'requirements', 'objectives',
        'is_published', 'is_featured',
    ];

    protected $casts = [
        'price'          => 'decimal:2',
        'duration_hours' => 'decimal:1',
        'requirements'   => 'array',
        'objectives'     => 'array',
        'is_published'   => 'boolean',
        'is_featured'    => 'boolean',
    ];

    public function instructor()
    {
        return $this->belongsTo(Instructor::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function lessons()
    {
        return $this->hasMany(Lesson::class)->orderBy('order');
    }

    public function enrollments()
    {
        return $this->hasMany(Enrollment::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function scopePublished(Builder $query): Builder
    {
        return $query->where('is_published', true);
    }
}
