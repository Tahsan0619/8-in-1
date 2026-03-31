<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Portfolio extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'slug', 'description', 'client', 'category',
        'image', 'gallery', 'url', 'service_id', 'is_featured', 'completed_at',
    ];

    protected $casts = [
        'gallery'      => 'array',
        'is_featured'  => 'boolean',
        'completed_at' => 'date',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
