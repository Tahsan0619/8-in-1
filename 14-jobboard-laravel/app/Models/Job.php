<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'company_id', 'location', 'type', 'salary_min',
        'salary_max', 'description', 'requirements', 'benefits',
        'status', 'expires_at',
    ];

    protected $casts = [
        'requirements' => 'array',
        'benefits'     => 'array',
        'salary_min'   => 'decimal:2',
        'salary_max'   => 'decimal:2',
        'expires_at'   => 'datetime',
    ];

    public function company()
    {
        return $this->belongsTo(User::class, 'company_id');
    }
}
