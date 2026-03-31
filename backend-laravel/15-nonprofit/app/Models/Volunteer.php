<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Volunteer extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'name', 'email', 'phone',
        'skills', 'availability', 'area_of_interest',
        'status', 'hours_contributed', 'joined_at',
    ];

    protected $casts = [
        'skills'            => 'array',
        'joined_at'         => 'date',
        'hours_contributed' => 'integer',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function events()
    {
        return $this->belongsToMany(Event::class, 'event_volunteers');
    }
}
