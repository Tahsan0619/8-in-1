<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\FitnessClass;
use App\Models\ClassBooking;
use App\Models\WorkoutPlan;
use App\Models\ProgressLog;
use Illuminate\Http\Request;

class ClassController extends Controller
{
    public function index(Request $request)
    {
        $query = FitnessClass::where('is_active', true)
            ->with('trainer')
            ->when($request->type,        fn($q, $v) => $q->where('type', $v))
            ->when($request->trainer_id,  fn($q, $v) => $q->where('trainer_id', $v))
            ->when($request->day,         fn($q, $v) => $q->where('day_of_week', $v))
            ->when($request->available,   fn($q) => $q->whereColumn('enrolled', '<', 'capacity'));

        return response()->json($query->orderBy('day_of_week')->orderBy('start_time')->paginate(15));
    }

    public function show(FitnessClass $fitnessClass)
    {
        return response()->json($fitnessClass->load(['trainer', 'bookings' => fn($q) => $q->where('status', 'confirmed')]));
    }

    public function weeklySchedule()
    {
        $classes = FitnessClass::where('is_active', true)->with('trainer')->get()->groupBy('day_of_week');
        return response()->json($classes);
    }

    public function book(Request $request, FitnessClass $fitnessClass)
    {
        if ($fitnessClass->enrolled >= $fitnessClass->capacity) {
            return response()->json(['message' => 'Class is fully booked.'], 422);
        }

        $exists = ClassBooking::where('user_id', $request->user()->id)
            ->where('fitness_class_id', $fitnessClass->id)
            ->where('status', 'confirmed')
            ->exists();

        if ($exists) {
            return response()->json(['message' => 'Already booked this class.'], 422);
        }

        $booking = ClassBooking::create([
            'user_id'          => $request->user()->id,
            'fitness_class_id' => $fitnessClass->id,
            'status'           => 'confirmed',
        ]);

        $fitnessClass->increment('enrolled');

        return response()->json($booking->load('fitnessClass'), 201);
    }

    public function cancelBooking(Request $request, ClassBooking $booking)
    {
        if ($booking->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        $booking->update(['status' => 'cancelled']);
        $booking->fitnessClass->decrement('enrolled');
        return response()->json(['message' => 'Booking cancelled.']);
    }

    public function myBookings(Request $request)
    {
        return response()->json(
            ClassBooking::where('user_id', $request->user()->id)
                ->with('fitnessClass.trainer')
                ->latest()
                ->paginate(10)
        );
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'            => 'required|string|max:255',
            'description'      => 'nullable|string',
            'trainer_id'       => 'required|exists:trainers,id',
            'type'             => 'required|in:yoga,hiit,strength,cardio,dance,boxing',
            'capacity'         => 'required|integer|min:1',
            'duration_minutes' => 'required|integer|min:15',
            'start_time'       => 'required|date_format:H:i',
            'day_of_week'      => 'required|integer|min:0|max:6',
            'location'         => 'nullable|string',
            'price'            => 'nullable|numeric|min:0',
            'is_active'        => 'boolean',
        ]);
        return response()->json(FitnessClass::create($data), 201);
    }

    public function update(Request $request, FitnessClass $fitnessClass)
    {
        $data = $request->validate([
            'title'     => 'string|max:255',
            'capacity'  => 'integer|min:1',
            'is_active' => 'boolean',
            'price'     => 'numeric|min:0',
        ]);
        $fitnessClass->update($data);
        return response()->json($fitnessClass);
    }

    public function destroy(FitnessClass $fitnessClass)
    {
        $fitnessClass->delete();
        return response()->json(['message' => 'Class deleted']);
    }

    public function allBookings()
    {
        return response()->json(ClassBooking::with(['user', 'fitnessClass'])->latest()->paginate(20));
    }

    public function storeWorkout(Request $request)
    {
        $data = $request->validate([
            'title'          => 'required|string|max:255',
            'description'    => 'nullable|string',
            'goal'           => 'required|string',
            'level'          => 'required|in:beginner,intermediate,advanced',
            'duration_weeks' => 'required|integer|min:1',
            'exercises'      => 'required|array',
            'is_public'      => 'boolean',
        ]);
        $data['user_id'] = $request->user()->id;
        return response()->json(WorkoutPlan::create($data), 201);
    }

    public function myWorkouts(Request $request)
    {
        return response()->json(WorkoutPlan::where('user_id', $request->user()->id)->latest()->get());
    }

    public function logProgress(Request $request)
    {
        $data = $request->validate([
            'weight'       => 'nullable|numeric',
            'body_fat'     => 'nullable|numeric',
            'notes'        => 'nullable|string',
            'measurements' => 'nullable|array',
        ]);
        $data['user_id']  = $request->user()->id;
        $data['logged_at'] = now();
        return response()->json(ProgressLog::create($data), 201);
    }

    public function myProgress(Request $request)
    {
        return response()->json(
            ProgressLog::where('user_id', $request->user()->id)->orderBy('logged_at')->get()
        );
    }
}
