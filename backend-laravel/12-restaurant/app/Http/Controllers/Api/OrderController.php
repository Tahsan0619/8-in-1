<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\MenuItem;
use App\Models\Coupon;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'type'             => 'required|in:dine_in,takeaway,delivery',
            'items'            => 'required|array|min:1',
            'items.*.id'       => 'required|exists:menu_items,id',
            'items.*.quantity' => 'required|integer|min:1',
            'table_id'         => 'nullable|exists:tables,id',
            'coupon_code'      => 'nullable|string',
            'delivery_address' => 'required_if:type,delivery|nullable|string',
            'notes'            => 'nullable|string|max:500',
            'payment_method'   => 'required|in:cash,card,mobile_banking',
        ]);

        // Calculate subtotal
        $subtotal = 0;
        $orderItems = [];
        foreach ($data['items'] as $item) {
            $menuItem   = MenuItem::findOrFail($item['id']);
            $lineTotal  = $menuItem->price * $item['quantity'];
            $subtotal  += $lineTotal;
            $orderItems[] = [
                'menu_item_id' => $menuItem->id,
                'name'         => $menuItem->name,
                'price'        => $menuItem->price,
                'quantity'     => $item['quantity'],
                'total'        => $lineTotal,
            ];
        }

        // Apply coupon
        $discount     = 0;
        $couponId     = null;
        if (!empty($data['coupon_code'])) {
            $coupon = Coupon::where('code', $data['coupon_code'])->where('is_active', true)->first();
            if ($coupon && $coupon->isValid($subtotal)) {
                $discount = $coupon->calculateDiscount($subtotal);
                $couponId = $coupon->id;
            }
        }

        $deliveryFee = $data['type'] === 'delivery' ? 50 : 0;
        $total       = $subtotal - $discount + $deliveryFee;

        $order = Order::create([
            'user_id'          => $request->user()->id,
            'table_id'         => $data['table_id'] ?? null,
            'type'             => $data['type'],
            'status'           => 'pending',
            'subtotal'         => $subtotal,
            'discount'         => $discount,
            'delivery_fee'     => $deliveryFee,
            'total'            => $total,
            'coupon_id'        => $couponId,
            'delivery_address' => $data['delivery_address'] ?? null,
            'notes'            => $data['notes'] ?? null,
            'payment_method'   => $data['payment_method'],
            'payment_status'   => 'pending',
        ]);

        $order->items()->createMany($orderItems);

        return response()->json($order->load('items'), 201);
    }

    public function myOrders(Request $request)
    {
        return response()->json(
            Order::where('user_id', $request->user()->id)
                ->with('items')
                ->latest()
                ->paginate(10)
        );
    }

    public function show(Order $order)
    {
        return response()->json($order->load(['items.menuItem', 'table']));
    }

    public function cancel(Request $request, Order $order)
    {
        if ($order->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        if (!in_array($order->status, ['pending', 'confirmed'])) {
            return response()->json(['message' => 'Order cannot be cancelled at this stage.'], 422);
        }
        $order->update(['status' => 'cancelled']);
        return response()->json(['message' => 'Order cancelled.']);
    }

    public function index(Request $request)
    {
        $query = Order::with(['user', 'items'])
            ->when($request->status, fn($q, $v) => $q->where('status', $v))
            ->when($request->type,   fn($q, $v) => $q->where('type', $v))
            ->when($request->date,   fn($q, $v) => $q->whereDate('created_at', $v));

        return response()->json($query->latest()->paginate(20));
    }

    public function updateStatus(Request $request, Order $order)
    {
        $data = $request->validate([
            'status' => 'required|in:confirmed,preparing,ready,delivered,cancelled',
        ]);
        $order->update($data);
        return response()->json($order);
    }
}
