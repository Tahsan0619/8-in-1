<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class DoctorController extends Controller
{
    public function index(): JsonResponse
    {
        $doctors = Doctor::with('user')->where('is_active', true)->paginate(15);
        return response()->json($doctors);
    }

    public function show(Doctor $doctor): JsonResponse
    {
        return response()->json($doctor->load('user'));
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name'             => 'required|string|max:255',
            'specialization'   => 'required|string|max:255',
            'department'       => 'required|string|max:255',
            'experience'       => 'required|integer|min:0',
            'bio'              => 'nullable|string',
            'image'            => 'nullable|string',
            'available_slots'  => 'nullable|array',
            'consultation_fee' => 'nullable|numeric|min:0',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();
        $data['user_id'] = auth()->id();

        $doctor = Doctor::create($data);

        return response()->json(['message' => 'Doctor created', 'doctor' => $doctor], 201);
    }

    public function update(Request $request, Doctor $doctor): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name'             => 'sometimes|string|max:255',
            'specialization'   => 'sometimes|string|max:255',
            'department'       => 'sometimes|string|max:255',
            'experience'       => 'sometimes|integer|min:0',
            'bio'              => 'nullable|string',
            'image'            => 'nullable|string',
            'available_slots'  => 'nullable|array',
            'consultation_fee' => 'nullable|numeric|min:0',
            'is_active'        => 'boolean',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $doctor->update($validator->validated());

        return response()->json(['message' => 'Doctor updated', 'doctor' => $doctor]);
    }

    public function destroy(Doctor $doctor): JsonResponse
    {
        $doctor->delete();
        return response()->json(['message' => 'Doctor deleted']);
    }

    public function getAvailableSlots(Doctor $doctor): JsonResponse
    {
        return response()->json([
            'doctor_id'       => $doctor->id,
            'available_slots' => $doctor->available_slots ?? [],
        ]);
    }
}
