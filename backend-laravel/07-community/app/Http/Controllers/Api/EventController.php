<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index(Request $request)
    {
        $query = Event::upcoming()->with('organizer')
            ->when($request->category, fn($q, $v) => $q->where('category', $v))
            ->when($request->online, fn($q) => $q->where('is_online', true))
            ->when($request->featured, fn($q) => $q->where('is_featured', true));

        return response()->json($query->orderBy('start_date')->paginate(12));
    }

    public function show(Event $event)
    {
        return response()->json($event->load('organizer'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'      => 'required|string|max:255',
            'description'=> 'required|string',
            'location'   => 'nullable|string|max:500',
            'is_online'  => 'boolean',
            'start_date' => 'required|date|after:now',
            'end_date'   => 'required|date|after:start_date',
            'capacity'   => 'nullable|integer|min:1',
            'image'      => 'nullable|image|max:4096',
            'category'   => 'required|string|max:100',
        ]);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('events', 'public');
        }

        $event = Event::create([...$data, 'organizer_id' => $request->user()->id]);
        return response()->json($event, 201);
    }

    public function update(Request $request, Event $event)
    {
        $this->authorize('update', $event);

        $data = $request->validate([
            'title'      => 'string|max:255',
            'description'=> 'string',
            'location'   => 'nullable|string|max:500',
            'start_date' => 'date',
            'end_date'   => 'date|after:start_date',
            'capacity'   => 'nullable|integer|min:1',
        ]);

        $event->update($data);
        return response()->json($event);
    }

    public function destroy(Event $event)
    {
        $this->authorize('delete', $event);
        $event->delete();
        return response()->json(['message' => 'Event deleted']);
    }

    public function rsvp(Request $request, Event $event)
    {
        $user = $request->user();

        if ($event->attendees()->where('user_id', $user->id)->exists()) {
            $event->attendees()->detach($user->id);
            return response()->json(['message' => 'RSVP removed', 'attending' => false]);
        }

        if ($event->capacity && $event->attendees()->count() >= $event->capacity) {
            return response()->json(['message' => 'Event is at full capacity'], 422);
        }

        $event->attendees()->attach($user->id, ['rsvp_at' => now()]);
        return response()->json(['message' => 'RSVP confirmed', 'attending' => true]);
    }

    public function attendees(Event $event)
    {
        return response()->json($event->attendees()->paginate(20));
    }

    public function myEvents(Request $request)
    {
        return response()->json(
            $request->user()->attendingEvents()->upcoming()->with('organizer')->get()
        );
    }

    public function feature(Event $event)
    {
        $event->update(['is_featured' => !$event->is_featured]);
        return response()->json($event);
    }
}
