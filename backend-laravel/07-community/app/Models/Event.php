<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'slug', 'description', 'location', 'is_online',
        'start_date', 'end_date', 'capacity', 'image',
        'organizer_id', 'category', 'is_featured',
    ];

    protected $casts = [
        'is_online'   => 'boolean',
        'is_featured' => 'boolean',
        'start_date'  => 'datetime',
        'end_date'    => 'datetime',
        'capacity'    => 'integer',
    ];

    public function organizer()
    {
        return $this->belongsTo(User::class, 'organizer_id');
    }

    public function attendees()
    {
        return $this->belongsToMany(User::class, 'event_user')
            ->withPivot('rsvp_at')
            ->withTimestamps();
    }

    public function scopeUpcoming(Builder $query): Builder
    {
        return $query->where('start_date', '>=', now());
    }
}
