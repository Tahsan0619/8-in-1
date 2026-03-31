<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Seller;
use App\Models\WithdrawRequest;
use Illuminate\Http\Request;

class SellerController extends Controller
{
    public function index(Request $request)
    {
        $query = Seller::where('is_active', true)->withCount('products')
            ->when($request->search, fn($q, $v) => $q->where('shop_name', 'like', "%{$v}%"));

        return response()->json($query->orderByDesc('total_sales')->paginate(15));
    }

    public function show(Seller $seller)
    {
        return response()->json($seller->load([
            'products' => fn($q) => $q->active()->latest()->limit(8),
        ])->loadCount('products'));
    }

    public function myShop(Request $request)
    {
        return response()->json($request->user()->seller->load('products'));
    }

    public function updateShop(Request $request)
    {
        $data = $request->validate([
            'shop_name'   => 'string|max:255',
            'description' => 'nullable|string',
            'logo'        => 'nullable|string',
            'banner'      => 'nullable|string',
            'phone'       => 'nullable|string|max:20',
            'address'     => 'nullable|string',
            'city'        => 'nullable|string|max:100',
        ]);
        $request->user()->seller->update($data);
        return response()->json($request->user()->seller);
    }

    public function myStats(Request $request)
    {
        $seller = $request->user()->seller;
        return response()->json([
            'total_products' => $seller->products()->count(),
            'total_orders'   => $seller->orders()->count(),
            'total_revenue'  => $seller->orders()->where('status', 'delivered')->sum('seller_earnings'),
            'balance'        => $seller->balance,
            'rating'         => $seller->rating,
        ]);
    }

    public function requestWithdraw(Request $request)
    {
        $data = $request->validate([
            'amount'         => 'required|numeric|min:100',
            'bank_name'      => 'required|string',
            'account_number' => 'required|string',
            'account_name'   => 'required|string',
        ]);

        $seller = $request->user()->seller;
        if ($seller->balance < $data['amount']) {
            return response()->json(['message' => 'Insufficient balance.'], 422);
        }

        $withdraw = WithdrawRequest::create([
            'seller_id'      => $seller->id,
            'amount'         => $data['amount'],
            'bank_name'      => $data['bank_name'],
            'account_number' => $data['account_number'],
            'account_name'   => $data['account_name'],
            'status'         => 'pending',
        ]);

        return response()->json($withdraw, 201);
    }

    public function adminIndex(Request $request)
    {
        return response()->json(
            Seller::with('user')
                ->when($request->verified, fn($q, $v) => $q->where('is_verified', $v))
                ->withCount('products')
                ->latest()
                ->paginate(20)
        );
    }

    public function verify(Seller $seller)
    {
        $seller->update(['is_verified' => true]);
        return response()->json(['message' => 'Seller verified.', 'seller' => $seller]);
    }

    public function payouts(Request $request)
    {
        return response()->json(
            WithdrawRequest::with('seller')
                ->when($request->status, fn($q, $v) => $q->where('status', $v))
                ->latest()
                ->paginate(20)
        );
    }

    public function processPayout(Request $request, WithdrawRequest $payout)
    {
        $data = $request->validate([
            'status'     => 'required|in:approved,rejected',
            'notes'      => 'nullable|string',
        ]);

        if ($data['status'] === 'approved') {
            $payout->seller->decrement('balance', $payout->amount);
        }

        $payout->update(['status' => $data['status'], 'notes' => $data['notes'] ?? null]);
        return response()->json($payout);
    }
}
