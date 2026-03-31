<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Enrollment extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'course_id', 'payment_status', 'amount_paid',
        'progress', 'enrolled_at', 'completed_at',
    ];

    protected $casts = [
        'amount_paid'  => 'decimal:2',
        'progress'     => 'integer',
        'enrolled_at'  => 'datetime',
        'completed_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function completedLessons()
    {
        return $this->belongsToMany(Lesson::class, 'enrollment_lesson')
            ->withTimestamps();
    }
}
