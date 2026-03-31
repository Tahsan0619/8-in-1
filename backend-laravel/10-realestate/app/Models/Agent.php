<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Agent extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'slug', 'email', 'phone', 'bio', 'avatar',
        'license_number', 'specialization', 'years_experience',
        'is_active', 'user_id',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function properties()
    {
        return $this->hasMany(Property::class);
    }

    public function inquiries()
    {
        return $this->hasMany(Inquiry::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class, 'agent_id');
    }
}
