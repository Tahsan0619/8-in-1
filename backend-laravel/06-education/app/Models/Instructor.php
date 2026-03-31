<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Instructor extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'slug', 'bio', 'avatar', 'email',
        'expertise', 'rating', 'user_id',
    ];

    protected $casts = [
        'expertise' => 'array',
        'rating'    => 'decimal:2',
    ];

    public function courses()
    {
        return $this->hasMany(Course::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
