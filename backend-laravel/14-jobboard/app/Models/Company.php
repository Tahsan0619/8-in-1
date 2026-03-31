<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'slug', 'logo', 'website', 'description',
        'industry', 'size', 'location', 'founded_year',
        'is_verified', 'employer_id',
    ];

    protected $casts = [
        'is_verified'  => 'boolean',
        'founded_year' => 'integer',
    ];

    public function employer()
    {
        return $this->belongsTo(User::class, 'employer_id');
    }

    public function jobs()
    {
        return $this->hasMany(Job::class);
    }
}
