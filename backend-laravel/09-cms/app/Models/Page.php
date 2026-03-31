<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Page extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'slug', 'content', 'template',
        'meta_title', 'meta_description', 'og_image',
        'status', 'order', 'published_at',
    ];

    protected $casts = [
        'published_at' => 'datetime',
        'order'        => 'integer',
    ];

    public function seo()
    {
        return $this->morphOne(Seo::class, 'seoable');
    }
}
