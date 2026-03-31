<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use App\Models\Department;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    public function index(Request $request)
    {
        $query = Doctor::where('is_available', true)
            ->with('department')
            ->when($request->department, fn($q, $v) => $q->where('department_id', $v))
            ->when($request->specialization, fn($q, $v) => $q->where('specialization', 'like', "%{$v}%"))
            ->when($request->search, fn($q, $v) => $q->where('name', 'like', "%{$v}%"));

        return response()->json($query->paginate(12));
    }

    public function show(Doctor $doctor)
    {
        return response()->json(
            $doctor->load(['department', 'schedules'])
                   ->loadCount('appointments')
        );
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name'              => 'required|string|max:255',
            'email'             => 'required|email|unique:doctors',
            'phone'             => 'required|string|max:20',
            'specialization'    => 'required|string|max:255',
            'department_id'     => 'required|exists:departments,id',
            'bio'               => 'nullable|string',
            'license_number'    => 'required|string|unique:doctors',
            'experience_years'  => 'integer|min:0',
            'consultation_fee'  => 'required|numeric|min:0',
        ]);

        return response()->json(Doctor::create($data), 201);
    }

    public function update(Request $request, Doctor $doctor)
    {
        $data = $request->validate([
            'name'             => 'string|max:255',
            'specialization'   => 'string|max:255',
            'consultation_fee' => 'numeric|min:0',
            'is_available'     => 'boolean',
            'bio'              => 'nullable|string',
        ]);
        $doctor->update($data);
        return response()->json($doctor);
    }

    public function destroy(Doctor $doctor)
    {
        $doctor->delete();
        return response()->json(['message' => 'Doctor deleted']);
    }

    public function departments()
    {
        return response()->json(Department::withCount('doctors')->get());
    }
}
