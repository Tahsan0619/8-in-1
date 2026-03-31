<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Prescription extends Model
{
    use HasFactory;

    protected $fillable = [
        'appointment_id', 'doctor_id', 'patient_id',
        'diagnosis', 'medicines', 'instructions',
        'valid_until', 'notes',
    ];

    protected $casts = [
        'medicines'   => 'array',
        'valid_until' => 'date',
    ];

    public function appointment()
    {
        return $this->belongsTo(Appointment::class);
    }

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }

    public function patient()
    {
        return $this->belongsTo(User::class, 'patient_id');
    }
}
