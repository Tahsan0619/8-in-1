<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Provider;
use Illuminate\Http\Request;
use Carbon\Carbon;

class ProviderController extends Controller
{
    public function index(Request $request)
    {
        $query = Provider::where('is_active', true)
            ->when($request->service_id, fn($q, $v) =>
                $q->whereHas('services', fn($s) => $s->where('services.id', $v))
            )
            ->when($request->min_rating, fn($q, $v) => $q->where('rating', '>=', $v))
            ->when($request->search, fn($q, $v) => $q->where('name', 'like', "%{$v}%"));

        return response()->json($query->with('services')->paginate(12));
    }

    public function show(Provider $provider)
    {
        return response()->json(
            $provider->load(['services', 'reviews.user'])
        );
    }

    public function availability(Request $request, Provider $provider)
    {
        $date = $request->date ?? Carbon::today()->toDateString();

        $availabilities = $provider->availabilities()
            ->where('day_of_week', Carbon::parse($date)->dayOfWeek)
            ->get();

        $booked = $provider->bookings()
            ->where('booking_date', $date)
            ->where('status', '!=', 'cancelled')
            ->get(['start_time', 'end_time']);

        return response()->json([
            'date'           => $date,
            'availabilities' => $availabilities,
            'booked_slots'   => $booked,
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name'      => 'required|string|max:255',
            'bio'       => 'nullable|string',
            'avatar'    => 'nullable|image|max:2048',
            'email'     => 'required|email|unique:providers',
            'phone'     => 'nullable|string|max:20',
            'services'  => 'array',
            'is_active' => 'boolean',
        ]);

        if ($request->hasFile('avatar')) {
            $data['avatar'] = $request->file('avatar')->store('providers', 'public');
        }

        $provider = Provider::create($data);

        if ($request->services) {
            $provider->services()->sync($request->services);
        }

        return response()->json($provider, 201);
    }

    public function update(Request $request, Provider $provider)
    {
        $data = $request->validate([
            'name'      => 'string|max:255',
            'bio'       => 'nullable|string',
            'phone'     => 'nullable|string|max:20',
            'is_active' => 'boolean',
        ]);

        $provider->update($data);

        if ($request->has('services')) {
            $provider->services()->sync($request->services);
        }

        return response()->json($provider);
    }

    public function destroy(Provider $provider)
    {
        $provider->delete();
        return response()->json(['message' => 'Provider deleted']);
    }
}
