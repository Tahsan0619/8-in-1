<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'table_id', 'type', 'status',
        'subtotal', 'discount', 'delivery_fee', 'total',
        'coupon_id', 'delivery_address', 'notes',
        'payment_method', 'payment_status',
    ];

    protected $casts = [
        'subtotal'     => 'decimal:2',
        'discount'     => 'decimal:2',
        'delivery_fee' => 'decimal:2',
        'total'        => 'decimal:2',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function table()
    {
        return $this->belongsTo(Table::class);
    }

    public function coupon()
    {
        return $this->belongsTo(Coupon::class);
    }
}
