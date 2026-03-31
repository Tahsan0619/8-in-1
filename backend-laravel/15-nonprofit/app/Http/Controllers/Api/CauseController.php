<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cause;
use App\Models\Campaign;
use Illuminate\Http\Request;

class CauseController extends Controller
{
    public function index(Request $request)
    {
        $query = Cause::where('is_active', true)
            ->when($request->category, fn($q, $v) => $q->where('category', $v))
            ->when($request->search,   fn($q, $v) => $q->where('title', 'like', "%{$v}%"));

        return response()->json($query->latest()->paginate(12));
    }

    public function show(Cause $cause)
    {
        $cause->load(['campaigns' => fn($q) => $q->where('is_active', true), 'stories']);
        $cause->progress_percentage = $cause->goal > 0 ? round(($cause->raised / $cause->goal) * 100, 1) : 0;
        return response()->json($cause);
    }

    public function featured()
    {
        return response()->json(
            Cause::where('is_active', true)->where('is_featured', true)->limit(4)->get()
        );
    }

    public function activeCampaigns()
    {
        return response()->json(
            Campaign::where('is_active', true)
                ->where('end_date', '>=', now())
                ->with('cause')
                ->get()
        );
    }

    public function stories()
    {
        return response()->json(\App\Models\Story::where('is_published', true)->latest()->paginate(6));
    }

    public function impactNumbers()
    {
        return response()->json([
            'total_raised'     => \App\Models\Donation::where('status', 'completed')->sum('amount'),
            'lives_impacted'   => \App\Models\Cause::sum('impact_count'),
            'active_campaigns' => Campaign::where('is_active', true)->count(),
            'volunteers'       => \App\Models\Volunteer::where('status', 'active')->count(),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'             => 'required|string|max:255',
            'description'       => 'required|string',
            'short_description' => 'nullable|string|max:300',
            'goal'              => 'required|numeric|min:1',
            'image'             => 'nullable|string',
            'category'          => 'required|string|max:100',
            'is_featured'       => 'boolean',
            'end_date'          => 'nullable|date',
        ]);
        return response()->json(Cause::create($data), 201);
    }

    public function update(Request $request, Cause $cause)
    {
        $data = $request->validate([
            'title'       => 'string|max:255',
            'description' => 'string',
            'goal'        => 'numeric|min:1',
            'is_active'   => 'boolean',
            'is_featured' => 'boolean',
        ]);
        $cause->update($data);
        return response()->json($cause);
    }

    public function destroy(Cause $cause)
    {
        $cause->delete();
        return response()->json(['message' => 'Cause deleted']);
    }
}
