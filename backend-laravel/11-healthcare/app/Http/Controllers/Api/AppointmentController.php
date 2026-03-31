<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\Doctor;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'doctor_id'       => 'required|exists:doctors,id',
            'appointment_date' => 'required|date|after:today',
            'start_time'      => 'required|date_format:H:i',
            'type'            => 'required|in:in_person,video',
            'chief_complaint' => 'required|string|max:500',
        ]);

        // Check slot availability
        $conflict = Appointment::where('doctor_id', $data['doctor_id'])
            ->where('appointment_date', $data['appointment_date'])
            ->where('start_time', $data['start_time'])
            ->whereNotIn('status', ['cancelled', 'no_show'])
            ->exists();

        if ($conflict) {
            return response()->json(['message' => 'This time slot is no longer available.'], 422);
        }

        $doctor = Doctor::findOrFail($data['doctor_id']);
        $data['patient_id']   = $request->user()->id;
        $data['department_id'] = $doctor->department_id;
        $data['end_time']     = date('H:i', strtotime($data['start_time']) + 30 * 60);
        $data['fee']          = $doctor->consultation_fee;
        $data['status']       = 'pending';

        return response()->json(Appointment::create($data), 201);
    }

    public function myAppointments(Request $request)
    {
        return response()->json(
            Appointment::where('patient_id', $request->user()->id)
                ->with(['doctor', 'department'])
                ->latest('appointment_date')
                ->paginate(10)
        );
    }

    public function index(Request $request)
    {
        $doctorId = $request->user()->doctor->id;
        return response()->json(
            Appointment::where('doctor_id', $doctorId)
                ->with('patient')
                ->when($request->date, fn($q, $v) => $q->whereDate('appointment_date', $v))
                ->when($request->status, fn($q, $v) => $q->where('status', $v))
                ->orderBy('appointment_date')
                ->orderBy('start_time')
                ->paginate(20)
        );
    }

    public function show(Appointment $appointment)
    {
        return response()->json($appointment->load(['patient', 'doctor', 'prescription']));
    }

    public function updateStatus(Request $request, Appointment $appointment)
    {
        $data = $request->validate([
            'status' => 'required|in:confirmed,completed,cancelled,no_show',
            'notes'  => 'nullable|string|max:1000',
        ]);
        $appointment->update($data);
        return response()->json($appointment);
    }

    public function cancel(Request $request, Appointment $appointment)
    {
        if ($appointment->patient_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        if (in_array($appointment->status, ['completed', 'cancelled'])) {
            return response()->json(['message' => 'Appointment cannot be cancelled.'], 422);
        }
        $appointment->update(['status' => 'cancelled']);
        return response()->json(['message' => 'Appointment cancelled successfully.']);
    }

    public function availableSlots(Request $request, Doctor $doctor)
    {
        $request->validate(['date' => 'required|date|after_or_equal:today']);

        $booked = Appointment::where('doctor_id', $doctor->id)
            ->where('appointment_date', $request->date)
            ->whereNotIn('status', ['cancelled', 'no_show'])
            ->pluck('start_time')
            ->toArray();

        // Generate slots 09:00–17:00 every 30 min
        $slots = [];
        $start = strtotime('09:00');
        $end   = strtotime('17:00');
        while ($start < $end) {
            $time = date('H:i', $start);
            $slots[] = ['time' => $time, 'available' => !in_array($time, $booked)];
            $start += 1800;
        }

        return response()->json($slots);
    }

    public function adminIndex(Request $request)
    {
        return response()->json(
            Appointment::with(['doctor', 'patient', 'department'])
                ->when($request->status, fn($q, $v) => $q->where('status', $v))
                ->when($request->date,   fn($q, $v) => $q->whereDate('appointment_date', $v))
                ->latest()
                ->paginate(20)
        );
    }

    public function dailyReport(Request $request)
    {
        $date = $request->date ?? today()->toDateString();
        $stats = [
            'total'     => Appointment::whereDate('appointment_date', $date)->count(),
            'confirmed' => Appointment::whereDate('appointment_date', $date)->where('status', 'confirmed')->count(),
            'completed' => Appointment::whereDate('appointment_date', $date)->where('status', 'completed')->count(),
            'cancelled' => Appointment::whereDate('appointment_date', $date)->where('status', 'cancelled')->count(),
            'no_show'   => Appointment::whereDate('appointment_date', $date)->where('status', 'no_show')->count(),
        ];
        return response()->json($stats);
    }
}
