<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cause extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description', 'goal_amount', 'raised_amount',
        'image', 'category', 'status', 'end_date',
        'donor_count', 'is_featured',
    ];

    protected $casts = [
        'goal_amount'   => 'decimal:2',
        'raised_amount' => 'decimal:2',
        'end_date'      => 'date',
        'is_featured'   => 'boolean',
    ];
}
