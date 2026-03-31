<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class FitnessClass extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description', 'trainer_id',
        'type', 'capacity', 'enrolled', 'duration_minutes',
        'start_time', 'end_time', 'day_of_week',
        'location', 'image', 'is_active', 'price',
    ];

    protected $casts = [
        'is_active'        => 'boolean',
        'price'            => 'decimal:2',
        'capacity'         => 'integer',
        'enrolled'         => 'integer',
        'duration_minutes' => 'integer',
    ];

    public function trainer()
    {
        return $this->belongsTo(Trainer::class);
    }

    public function bookings()
    {
        return $this->hasMany(ClassBooking::class);
    }
}
