<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FitnessClass extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'description', 'trainer_id', 'schedule', 'duration',
        'capacity', 'enrolled_count', 'location', 'difficulty', 'is_active',
    ];

    protected $casts = [
        'schedule'      => 'array',
        'is_active'     => 'boolean',
    ];

    public function trainer()
    {
        return $this->belongsTo(User::class, 'trainer_id');
    }
}
