<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Invoice;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function index(Request $request)
    {
        $query = Invoice::with('contact')
            ->when($request->status, fn($q, $v) => $q->where('status', $v))
            ->when($request->contact_id, fn($q, $v) => $q->where('contact_id', $v));

        return response()->json($query->latest()->paginate(15));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'contact_id' => 'required|exists:contacts,id',
            'issue_date' => 'required|date',
            'due_date'   => 'required|date|after_or_equal:issue_date',
            'items'      => 'required|array|min:1',
            'items.*.description' => 'required|string',
            'items.*.quantity'    => 'required|numeric|min:0.01',
            'items.*.unit_price'  => 'required|numeric|min:0',
            'tax_rate'   => 'nullable|numeric|min:0|max:100',
            'notes'      => 'nullable|string|max:2000',
        ]);

        $subtotal  = collect($data['items'])->sum(fn($i) => $i['quantity'] * $i['unit_price']);
        $taxRate   = $data['tax_rate'] ?? 0;
        $taxAmount = $subtotal * ($taxRate / 100);

        $invoice = Invoice::create([
            ...$data,
            'invoice_number' => 'INV-' . strtoupper(uniqid()),
            'subtotal'       => $subtotal,
            'tax_amount'     => $taxAmount,
            'total'          => $subtotal + $taxAmount,
            'status'         => 'draft',
        ]);

        return response()->json($invoice->load('contact'), 201);
    }

    public function show(Invoice $invoice)
    {
        return response()->json($invoice->load('contact'));
    }

    public function update(Request $request, Invoice $invoice)
    {
        if ($invoice->status === 'paid') {
            return response()->json(['message' => 'Paid invoices cannot be modified'], 422);
        }

        $data = $request->validate([
            'due_date' => 'date|after_or_equal:issue_date',
            'notes'    => 'nullable|string|max:2000',
            'status'   => 'in:draft,sent',
        ]);

        $invoice->update($data);
        return response()->json($invoice);
    }

    public function destroy(Invoice $invoice)
    {
        if ($invoice->status === 'paid') {
            return response()->json(['message' => 'Paid invoices cannot be deleted'], 422);
        }

        $invoice->delete();
        return response()->json(['message' => 'Invoice deleted']);
    }

    public function send(Invoice $invoice)
    {
        if ($invoice->status === 'paid') {
            return response()->json(['message' => 'Invoice is already paid'], 422);
        }

        $invoice->update(['status' => 'sent']);
        // Mail::to($invoice->contact->email)->send(new InvoiceMail($invoice));

        return response()->json(['message' => 'Invoice sent', 'invoice' => $invoice]);
    }

    public function markPaid(Request $request, Invoice $invoice)
    {
        $request->validate([
            'payment_date'   => 'nullable|date',
            'payment_method' => 'nullable|string|max:100',
        ]);

        $invoice->update([
            'status'         => 'paid',
            'payment_date'   => $request->payment_date ?? now(),
            'payment_method' => $request->payment_method,
        ]);

        return response()->json($invoice);
    }

    public function stats()
    {
        return response()->json([
            'paid'     => Invoice::where('status', 'paid')->sum('total'),
            'unpaid'   => Invoice::where('status', 'sent')->sum('total'),
            'overdue'  => Invoice::where('status', 'overdue')->sum('total'),
            'draft'    => Invoice::where('status', 'draft')->count(),
        ]);
    }
}
