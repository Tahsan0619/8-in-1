<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Agent;
use Illuminate\Http\Request;

class AgentController extends Controller
{
    public function index()
    {
        return response()->json(
            Agent::where('is_active', true)
                ->withCount('properties')
                ->with('reviews')
                ->paginate(12)
        );
    }

    public function show(Agent $agent)
    {
        return response()->json(
            $agent->load([
                'properties' => fn($q) => $q->active()->limit(6),
                'reviews',
            ])
        );
    }
}
