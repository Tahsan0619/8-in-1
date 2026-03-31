<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Analytics extends Model
{
    use HasFactory;

    protected $fillable = [
        'date', 'visitors', 'page_views', 'conversions', 'revenue', 'new_users',
    ];

    protected $casts = [
        'date'        => 'date',
        'visitors'    => 'integer',
        'page_views'  => 'integer',
        'conversions' => 'integer',
        'revenue'     => 'decimal:2',
        'new_users'   => 'integer',
    ];
}
