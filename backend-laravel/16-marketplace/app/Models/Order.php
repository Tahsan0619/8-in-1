<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'buyer_id', 'seller_id', 'status',
        'subtotal', 'commission', 'seller_earnings',
        'shipping_cost', 'total',
        'shipping_address', 'payment_method', 'payment_status',
        'tracking_number', 'notes',
    ];

    protected $casts = [
        'shipping_address' => 'array',
        'subtotal'         => 'decimal:2',
        'commission'       => 'decimal:2',
        'seller_earnings'  => 'decimal:2',
        'shipping_cost'    => 'decimal:2',
        'total'            => 'decimal:2',
    ];

    public function buyer()
    {
        return $this->belongsTo(User::class, 'buyer_id');
    }

    public function seller()
    {
        return $this->belongsTo(Seller::class);
    }

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }
}
