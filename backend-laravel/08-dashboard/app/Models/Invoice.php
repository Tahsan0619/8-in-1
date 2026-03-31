<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Invoice extends Model
{
    use HasFactory;

    protected $fillable = [
        'contact_id', 'invoice_number', 'issue_date', 'due_date',
        'status', 'subtotal', 'tax_rate', 'tax_amount', 'total',
        'notes', 'items', 'payment_date', 'payment_method',
    ];

    protected $casts = [
        'items'        => 'array',
        'subtotal'     => 'decimal:2',
        'tax_rate'     => 'decimal:2',
        'tax_amount'   => 'decimal:2',
        'total'        => 'decimal:2',
        'issue_date'   => 'date',
        'due_date'     => 'date',
        'payment_date' => 'date',
    ];

    public function contact()
    {
        return $this->belongsTo(Contact::class);
    }

    public function isOverdue(): bool
    {
        return $this->status === 'sent' && $this->due_date->isPast();
    }
}
