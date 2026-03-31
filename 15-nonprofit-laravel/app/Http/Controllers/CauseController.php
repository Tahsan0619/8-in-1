<?php

namespace App\Http\Controllers;

use App\Models\Cause;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class CauseController extends Controller
{
    public function index(): JsonResponse
    {
        $causes = Cause::where('status', 'active')->latest()->paginate(12);
        return response()->json($causes);
    }

    public function show(Cause $cause): JsonResponse
    {
        return response()->json($cause);
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title'       => 'required|string|max:255',
            'description' => 'required|string',
            'goal_amount' => 'required|numeric|min:1',
            'image'       => 'nullable|string',
            'category'    => 'required|string|max:100',
            'status'      => 'in:active,completed,paused',
            'end_date'    => 'nullable|date',
            'is_featured' => 'boolean',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $cause = Cause::create($validator->validated());

        return response()->json(['message' => 'Cause created', 'cause' => $cause], 201);
    }

    public function update(Request $request, Cause $cause): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title'       => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'goal_amount' => 'sometimes|numeric|min:1',
            'image'       => 'nullable|string',
            'category'    => 'sometimes|string|max:100',
            'status'      => 'in:active,completed,paused',
            'end_date'    => 'nullable|date',
            'is_featured' => 'boolean',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $cause->update($validator->validated());

        return response()->json(['message' => 'Cause updated', 'cause' => $cause]);
    }

    public function destroy(Cause $cause): JsonResponse
    {
        $cause->delete();
        return response()->json(['message' => 'Cause deleted']);
    }

    public function donate(Request $request, Cause $cause): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'amount'         => 'required|numeric|min:1',
            'payment_method' => 'required|string|max:50',
            'is_anonymous'   => 'boolean',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $cause->increment('raised_amount', $request->amount);
        $cause->increment('donor_count');

        return response()->json(['message' => 'Donation received. Thank you!'], 201);
    }
}
