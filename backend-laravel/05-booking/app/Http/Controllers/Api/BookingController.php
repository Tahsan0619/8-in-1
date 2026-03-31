<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Availability;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class BookingController extends Controller
{
    public function index(Request $request)
    {
        return response()->json(
            Booking::where('user_id', $request->user()->id)
                ->with(['service', 'provider'])
                ->latest('booking_date')
                ->paginate(10)
        );
    }

    public function store(Request $request)
    {
        $request->validate([
            'provider_id'  => 'required|exists:providers,id',
            'service_id'   => 'required|exists:services,id',
            'booking_date' => 'required|date|after:today',
            'start_time'   => 'required|date_format:H:i',
            'notes'        => 'nullable|string|max:1000',
        ]);

        return DB::transaction(function () use ($request) {
            $service = \App\Models\Service::findOrFail($request->service_id);
            $startTime = Carbon::parse($request->booking_date . ' ' . $request->start_time);
            $endTime = $startTime->copy()->addMinutes($service->duration_minutes);

            // Check for conflicting bookings
            $conflict = Booking::where('provider_id', $request->provider_id)
                ->where('booking_date', $request->booking_date)
                ->where('status', '!=', 'cancelled')
                ->where(function ($q) use ($request, $endTime) {
                    $q->whereBetween('start_time', [$request->start_time, $endTime->format('H:i')])
                      ->orWhereBetween('end_time', [$request->start_time, $endTime->format('H:i')]);
                })->exists();

            if ($conflict) {
                return response()->json(['message' => 'This time slot is already booked'], 422);
            }

            $booking = Booking::create([
                'user_id'      => $request->user()->id,
                'provider_id'  => $request->provider_id,
                'service_id'   => $request->service_id,
                'booking_date' => $request->booking_date,
                'start_time'   => $request->start_time,
                'end_time'     => $endTime->format('H:i'),
                'status'       => 'pending',
                'notes'        => $request->notes,
                'total_price'  => $service->price,
            ]);

            return response()->json($booking->load(['service', 'provider']), 201);
        });
    }

    public function show(Request $request, Booking $booking)
    {
        $this->authorize('view', $booking);
        return response()->json($booking->load(['service', 'provider', 'user']));
    }

    public function update(Request $request, Booking $booking)
    {
        $this->authorize('update', $booking);

        $data = $request->validate([
            'notes'        => 'nullable|string|max:1000',
            'booking_date' => 'date|after:today',
            'start_time'   => 'date_format:H:i',
        ]);

        $booking->update($data);
        return response()->json($booking);
    }

    public function cancel(Request $request, Booking $booking)
    {
        $this->authorize('update', $booking);

        if (!in_array($booking->status, ['pending', 'confirmed'])) {
            return response()->json(['message' => 'Booking cannot be cancelled'], 422);
        }

        $booking->update(['status' => 'cancelled']);
        return response()->json($booking);
    }

    public function destroy(Booking $booking)
    {
        $this->authorize('delete', $booking);
        $booking->delete();
        return response()->json(['message' => 'Booking deleted']);
    }

    public function adminIndex()
    {
        return response()->json(
            Booking::with(['user', 'service', 'provider'])->latest()->paginate(20)
        );
    }

    public function updateStatus(Request $request, Booking $booking)
    {
        $request->validate([
            'status' => 'required|in:pending,confirmed,completed,cancelled,no_show',
        ]);

        $booking->update(['status' => $request->status]);
        return response()->json($booking);
    }
}
