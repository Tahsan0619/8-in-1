<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Appointment extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id', 'doctor_id', 'department_id',
        'appointment_date', 'start_time', 'end_time',
        'type', 'status', 'chief_complaint', 'notes', 'fee',
    ];

    protected $casts = [
        'appointment_date' => 'date',
        'fee'              => 'decimal:2',
    ];

    public function patient()
    {
        return $this->belongsTo(User::class, 'patient_id');
    }

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function prescription()
    {
        return $this->hasOne(Prescription::class);
    }
}
