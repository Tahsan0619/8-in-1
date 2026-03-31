<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class BookingController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $bookings = Booking::with('service', 'provider', 'customer:id,name,email')
            ->where('customer_id', auth()->id())
            ->when($request->status, fn($q) => $q->where('status', $request->status))
            ->when($request->date, fn($q) => $q->whereDate('date', $request->date))
            ->orderBy('date', 'desc')
            ->paginate($request->get('per_page', 10));

        return response()->json($bookings);
    }

    public function show(Booking $booking): JsonResponse
    {
        $this->authorize('view', $booking);

        return response()->json(['booking' => $booking->load('service', 'provider', 'customer:id,name,email')]);
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'service_id'  => 'required|exists:services,id',
            'provider_id' => 'required|exists:providers,id',
            'date'        => 'required|date|after_or_equal:today',
            'time_slot'   => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data                = $request->all();
        $data['customer_id'] = auth()->id();
        $data['status']      = 'pending';
        $data['payment_status'] = 'unpaid';

        $booking = Booking::create($data);

        return response()->json(['message' => 'Booking created successfully', 'booking' => $booking], 201);
    }

    public function update(Request $request, Booking $booking): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'status'         => 'sometimes|in:pending,confirmed,cancelled,completed',
            'payment_status' => 'sometimes|in:unpaid,paid,refunded',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $booking->update($request->all());

        return response()->json(['message' => 'Booking updated successfully', 'booking' => $booking]);
    }

    public function destroy(Booking $booking): JsonResponse
    {
        $booking->delete();

        return response()->json(['message' => 'Booking cancelled successfully']);
    }
}
