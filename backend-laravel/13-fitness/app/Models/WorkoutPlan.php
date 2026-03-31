<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class WorkoutPlan extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description', 'user_id', 'trainer_id',
        'goal', 'level', 'duration_weeks', 'exercises', 'is_public',
    ];

    protected $casts = [
        'exercises' => 'array',
        'is_public' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function trainer()
    {
        return $this->belongsTo(Trainer::class);
    }
}
