<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;

class Job extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'company', 'location', 'type', 'salary_min', 'salary_max',
        'description', 'requirements', 'category', 'employer_id', 'deadline', 'is_active',
    ];

    protected $casts = [
        'salary_min' => 'decimal:2',
        'salary_max' => 'decimal:2',
        'deadline'   => 'date',
        'is_active'  => 'boolean',
    ];

    public function employer()
    {
        return $this->belongsTo(User::class, 'employer_id');
    }

    public function applications()
    {
        return $this->hasMany(JobApplication::class);
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true)
            ->where(fn($q) => $q->whereNull('deadline')->orWhere('deadline', '>=', now()));
    }
}
