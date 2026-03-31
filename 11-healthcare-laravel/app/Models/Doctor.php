<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'name', 'specialization', 'department',
        'experience', 'bio', 'image', 'available_slots',
        'consultation_fee', 'is_active',
    ];

    protected $casts = [
        'available_slots'  => 'array',
        'consultation_fee' => 'decimal:2',
        'is_active'        => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function appointments()
    {
        return $this->hasMany(\App\Models\Appointment::class ?? null);
    }
}
