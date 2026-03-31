<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Membership;
use App\Models\UserMembership;
use Illuminate\Http\Request;

class MembershipController extends Controller
{
    public function plans()
    {
        return response()->json(Membership::where('is_active', true)->get());
    }

    public function myMembership(Request $request)
    {
        $membership = UserMembership::where('user_id', $request->user()->id)
            ->where('status', 'active')
            ->with('plan')
            ->first();

        return response()->json($membership);
    }

    public function subscribe(Request $request)
    {
        $data = $request->validate([
            'membership_id'  => 'required|exists:memberships,id',
            'payment_method' => 'required|in:card,mobile_banking,cash',
        ]);

        // Check for existing active membership
        $active = UserMembership::where('user_id', $request->user()->id)
            ->where('status', 'active')
            ->exists();

        if ($active) {
            return response()->json(['message' => 'You already have an active membership.'], 422);
        }

        $plan = Membership::findOrFail($data['membership_id']);

        $userMembership = UserMembership::create([
            'user_id'        => $request->user()->id,
            'membership_id'  => $plan->id,
            'start_date'     => today(),
            'end_date'       => today()->addDays($plan->duration_days),
            'status'         => 'active',
            'payment_status' => 'paid',
        ]);

        return response()->json($userMembership->load('plan'), 201);
    }

    public function cancel(Request $request)
    {
        $membership = UserMembership::where('user_id', $request->user()->id)
            ->where('status', 'active')
            ->firstOrFail();

        $membership->update(['status' => 'cancelled']);
        return response()->json(['message' => 'Membership cancelled.']);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name'                   => 'required|string|max:255',
            'description'            => 'nullable|string',
            'price'                  => 'required|numeric|min:0',
            'duration_days'          => 'required|integer|min:1',
            'features'               => 'nullable|array',
            'max_classes_per_month'  => 'nullable|integer',
            'is_active'              => 'boolean',
        ]);
        return response()->json(Membership::create($data), 201);
    }

    public function update(Request $request, Membership $membership)
    {
        $data = $request->validate([
            'name'       => 'string|max:255',
            'price'      => 'numeric|min:0',
            'is_active'  => 'boolean',
            'features'   => 'array',
        ]);
        $membership->update($data);
        return response()->json($membership);
    }

    public function destroy(Membership $membership)
    {
        $membership->delete();
        return response()->json(['message' => 'Membership plan deleted']);
    }

    public function stats()
    {
        return response()->json([
            'active_members'  => UserMembership::where('status', 'active')->count(),
            'total_revenue'   => UserMembership::where('payment_status', 'paid')->join('memberships', 'user_memberships.membership_id', '=', 'memberships.id')->sum('memberships.price'),
            'plan_breakdown'  => UserMembership::where('status', 'active')->with('plan:id,name')->get()->groupBy('plan.name')->map->count(),
        ]);
    }
}
