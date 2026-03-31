<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Doctor extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'slug', 'email', 'phone', 'specialization',
        'department_id', 'bio', 'avatar', 'license_number',
        'experience_years', 'consultation_fee', 'rating',
        'is_available', 'user_id',
    ];

    protected $casts = [
        'is_available'     => 'boolean',
        'consultation_fee' => 'decimal:2',
        'rating'           => 'decimal:1',
    ];

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    public function prescriptions()
    {
        return $this->hasMany(Prescription::class);
    }

    public function schedules()
    {
        return $this->hasMany(DoctorSchedule::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
