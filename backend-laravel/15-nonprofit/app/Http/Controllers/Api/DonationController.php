<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Donation;
use App\Models\Cause;
use App\Models\Campaign;
use Illuminate\Http\Request;

class DonationController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'cause_id'       => 'required|exists:causes,id',
            'campaign_id'    => 'nullable|exists:campaigns,id',
            'amount'         => 'required|numeric|min:1',
            'currency'       => 'string|max:3',
            'payment_method' => 'required|in:card,mobile_banking,bank_transfer',
            'is_anonymous'   => 'boolean',
            'message'        => 'nullable|string|max:500',
            'recurring'      => 'boolean',
        ]);

        $user = $request->user();

        $donation = Donation::create([
            'cause_id'       => $data['cause_id'],
            'campaign_id'    => $data['campaign_id'] ?? null,
            'user_id'        => $user->id,
            'donor_name'     => $data['is_anonymous'] ?? false ? 'Anonymous' : $user->name,
            'donor_email'    => $user->email,
            'amount'         => $data['amount'],
            'currency'       => $data['currency'] ?? 'BDT',
            'payment_method' => $data['payment_method'],
            'is_anonymous'   => $data['is_anonymous'] ?? false,
            'message'        => $data['message'] ?? null,
            'recurring'      => $data['recurring'] ?? false,
            'status'         => 'pending',
            // Payment gateway integration point
            'transaction_id' => null,
        ]);

        // TODO: Integrate payment gateway (e.g. SSLCommerz, Stripe) here
        // On successful payment callback: update status to 'completed' and increment cause.raised

        return response()->json([
            'donation'    => $donation,
            'payment_url' => route('payment.redirect', $donation->id),
        ], 201);
    }

    public function myDonations(Request $request)
    {
        return response()->json(
            Donation::where('user_id', $request->user()->id)
                ->with('cause')
                ->latest()
                ->paginate(10)
        );
    }

    public function generateReceipt(Donation $donation)
    {
        if ($donation->status !== 'completed') {
            return response()->json(['message' => 'Receipt only available for completed donations.'], 422);
        }

        $receipt = [
            'receipt_no'  => 'HOPE-' . str_pad($donation->id, 6, '0', STR_PAD_LEFT),
            'donor'       => $donation->is_anonymous ? 'Anonymous' : $donation->donor_name,
            'cause'       => $donation->cause->title,
            'amount'      => $donation->amount,
            'currency'    => $donation->currency,
            'date'        => $donation->updated_at->format('d M Y'),
            'transaction' => $donation->transaction_id,
        ];

        return response()->json($receipt);
    }

    public function index(Request $request)
    {
        $query = Donation::with(['cause', 'user'])
            ->when($request->status,    fn($q, $v) => $q->where('status', $v))
            ->when($request->cause_id,  fn($q, $v) => $q->where('cause_id', $v))
            ->when($request->from,      fn($q, $v) => $q->whereDate('created_at', '>=', $v))
            ->when($request->to,        fn($q, $v) => $q->whereDate('created_at', '<=', $v));

        return response()->json($query->latest()->paginate(20));
    }

    public function stats()
    {
        return response()->json([
            'total_raised'     => Donation::where('status', 'completed')->sum('amount'),
            'total_donors'     => Donation::where('status', 'completed')->distinct('donor_email')->count('donor_email'),
            'total_campaigns'  => \App\Models\Campaign::where('is_active', true)->count(),
            'causes_funded'    => Donation::where('status', 'completed')->distinct('cause_id')->count('cause_id'),
        ]);
    }

    public function report(Request $request)
    {
        $from = $request->from ?? now()->startOfMonth()->toDateString();
        $to   = $request->to   ?? now()->toDateString();

        return response()->json([
            'period'           => compact('from', 'to'),
            'total_amount'     => Donation::completed()->whereBetween('created_at', [$from, $to])->sum('amount'),
            'count'            => Donation::completed()->whereBetween('created_at', [$from, $to])->count(),
            'by_cause'         => Donation::completed()->whereBetween('created_at', [$from, $to])
                                    ->with('cause:id,title')
                                    ->get()
                                    ->groupBy('cause_id')
                                    ->map(fn($group) => ['cause' => $group->first()->cause->title, 'total' => $group->sum('amount'), 'count' => $group->count()]),
            'by_payment_method' => Donation::completed()->whereBetween('created_at', [$from, $to])
                                    ->selectRaw('payment_method, sum(amount) as total, count(*) as count')
                                    ->groupBy('payment_method')
                                    ->get(),
        ]);
    }
}
