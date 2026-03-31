<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'table_id', 'name', 'email', 'phone',
        'date', 'time', 'guests', 'special_requests', 'status',
    ];

    protected $casts = [
        'date'   => 'date',
        'guests' => 'integer',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function table()
    {
        return $this->belongsTo(Table::class);
    }
}
