<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Membership extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'description', 'price', 'duration_days',
        'features', 'max_classes_per_month', 'is_active',
    ];

    protected $casts = [
        'features'              => 'array',
        'price'                 => 'decimal:2',
        'is_active'             => 'boolean',
        'max_classes_per_month' => 'integer',
    ];

    public function userMemberships()
    {
        return $this->hasMany(UserMembership::class);
    }
}
