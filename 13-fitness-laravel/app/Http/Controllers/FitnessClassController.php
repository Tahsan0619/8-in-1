<?php

namespace App\Http\Controllers;

use App\Models\FitnessClass;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class FitnessClassController extends Controller
{
    public function index(): JsonResponse
    {
        $classes = FitnessClass::with('trainer')->where('is_active', true)->paginate(15);
        return response()->json($classes);
    }

    public function show(FitnessClass $fitnessClass): JsonResponse
    {
        return response()->json($fitnessClass->load('trainer'));
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name'        => 'required|string|max:255',
            'description' => 'nullable|string',
            'trainer_id'  => 'required|exists:users,id',
            'schedule'    => 'nullable|array',
            'duration'    => 'required|integer|min:1',
            'capacity'    => 'required|integer|min:1',
            'location'    => 'nullable|string|max:255',
            'difficulty'  => 'required|in:beginner,intermediate,advanced',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $class = FitnessClass::create($validator->validated());

        return response()->json(['message' => 'Class created', 'class' => $class], 201);
    }

    public function update(Request $request, FitnessClass $fitnessClass): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name'        => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'trainer_id'  => 'sometimes|exists:users,id',
            'schedule'    => 'nullable|array',
            'duration'    => 'sometimes|integer|min:1',
            'capacity'    => 'sometimes|integer|min:1',
            'location'    => 'nullable|string|max:255',
            'difficulty'  => 'sometimes|in:beginner,intermediate,advanced',
            'is_active'   => 'boolean',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $fitnessClass->update($validator->validated());

        return response()->json(['message' => 'Class updated', 'class' => $fitnessClass]);
    }

    public function destroy(FitnessClass $fitnessClass): JsonResponse
    {
        $fitnessClass->delete();
        return response()->json(['message' => 'Class deleted']);
    }

    public function enroll(Request $request, FitnessClass $fitnessClass): JsonResponse
    {
        if ($fitnessClass->enrolled_count >= $fitnessClass->capacity) {
            return response()->json(['message' => 'Class is full'], 422);
        }

        $fitnessClass->increment('enrolled_count');

        return response()->json(['message' => 'Enrolled successfully', 'class' => $fitnessClass->fresh()]);
    }
}
