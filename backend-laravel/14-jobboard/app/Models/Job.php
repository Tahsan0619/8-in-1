<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;

class Job extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'slug', 'company_id', 'employer_id',
        'description', 'requirements', 'type', 'category',
        'location', 'is_remote', 'salary_min', 'salary_max',
        'salary_currency', 'experience_level', 'deadline',
        'is_featured', 'is_active', 'views', 'applications_count',
    ];

    protected $casts = [
        'is_remote'          => 'boolean',
        'is_featured'        => 'boolean',
        'is_active'          => 'boolean',
        'salary_min'         => 'decimal:2',
        'salary_max'         => 'decimal:2',
        'deadline'           => 'date',
        'applications_count' => 'integer',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function employer()
    {
        return $this->belongsTo(User::class, 'employer_id');
    }

    public function applications()
    {
        return $this->hasMany(Application::class);
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true)->where('deadline', '>=', now());
    }
}
