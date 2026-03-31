<?php

namespace App\Http\Controllers;

use App\Models\Analytics;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class AnalyticsController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $analytics = Analytics::query()
            ->when($request->start_date, fn($q) => $q->whereDate('date', '>=', $request->start_date))
            ->when($request->end_date, fn($q) => $q->whereDate('date', '<=', $request->end_date))
            ->orderBy('date', 'desc')
            ->paginate($request->get('per_page', 30));

        return response()->json($analytics);
    }

    public function summary(Request $request): JsonResponse
    {
        $period  = $request->get('period', 30);
        $endDate = now();
        $startDate = now()->subDays($period);

        $current  = Analytics::whereBetween('date', [$startDate, $endDate]);
        $previous = Analytics::whereBetween('date', [
            $startDate->copy()->subDays($period),
            $startDate,
        ]);

        $summary = [
            'total_visitors'   => (clone $current)->sum('visitors'),
            'total_page_views' => (clone $current)->sum('page_views'),
            'total_conversions'=> (clone $current)->sum('conversions'),
            'total_revenue'    => (clone $current)->sum('revenue'),
            'new_users'        => (clone $current)->sum('new_users'),
            'prev_visitors'    => (clone $previous)->sum('visitors'),
            'prev_revenue'     => (clone $previous)->sum('revenue'),
            'daily_data'       => (clone $current)->orderBy('date')->get(),
        ];

        return response()->json(['summary' => $summary]);
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'date'       => 'required|date|unique:analytics,date',
            'visitors'   => 'required|integer|min:0',
            'page_views' => 'required|integer|min:0',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $analytics = Analytics::create($request->all());

        return response()->json(['message' => 'Analytics record created', 'analytics' => $analytics], 201);
    }

    public function export(Request $request): JsonResponse
    {
        $data = Analytics::query()
            ->when($request->start_date, fn($q) => $q->whereDate('date', '>=', $request->start_date))
            ->when($request->end_date, fn($q) => $q->whereDate('date', '<=', $request->end_date))
            ->orderBy('date')
            ->get();

        return response()->json(['data' => $data, 'exported_at' => now()]);
    }
}
