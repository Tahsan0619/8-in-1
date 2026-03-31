<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\CartItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        return response()->json(
            Order::where('user_id', $request->user()->id)
                ->with('items.product')->latest()->paginate(10)
        );
    }

    public function store(Request $request)
    {
        $request->validate([
            'shipping_address' => 'required|string',
            'payment_method'   => 'required|in:card,cod,bkash',
        ]);

        return DB::transaction(function () use ($request) {
            $cartItems = CartItem::where('user_id', $request->user()->id)->with('product')->get();

            if ($cartItems->isEmpty()) {
                return response()->json(['message' => 'Cart is empty'], 422);
            }

            $total = $cartItems->sum(fn($i) => $i->product->price * $i->quantity);

            $order = Order::create([
                'user_id'          => $request->user()->id,
                'total'            => $total,
                'shipping_address' => $request->shipping_address,
                'payment_method'   => $request->payment_method,
                'status'           => 'pending',
            ]);

            foreach ($cartItems as $item) {
                $order->items()->create([
                    'product_id' => $item->product_id,
                    'quantity'   => $item->quantity,
                    'price'      => $item->product->price,
                ]);
                $item->product->decrement('stock', $item->quantity);
            }

            CartItem::where('user_id', $request->user()->id)->delete();

            return response()->json($order->load('items.product'), 201);
        });
    }

    public function show(Request $request, Order $order)
    {
        $this->authorize('view', $order);
        return response()->json($order->load('items.product'));
    }

    public function cancel(Request $request, Order $order)
    {
        $this->authorize('update', $order);

        if (!in_array($order->status, ['pending', 'processing'])) {
            return response()->json(['message' => 'Order cannot be cancelled'], 422);
        }

        $order->update(['status' => 'cancelled']);
        return response()->json($order);
    }

    public function adminIndex()
    {
        return response()->json(
            Order::with(['user', 'items.product'])->latest()->paginate(20)
        );
    }

    public function updateStatus(Request $request, Order $order)
    {
        $request->validate(['status' => 'required|in:pending,processing,shipped,delivered,cancelled']);
        $order->update(['status' => $request->status]);
        return response()->json($order);
    }
}
