<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email',
            'phone'   => 'nullable|string|max:20',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:5000',
            'service' => 'nullable|string',
        ]);

        Contact::create($data);

        return response()->json([
            'message' => 'Your message has been sent. We will get back to you soon.',
        ], 201);
    }

    public function index()
    {
        return response()->json(Contact::latest()->paginate(20));
    }

    public function updateStatus(Request $request, Contact $contact)
    {
        $request->validate(['status' => 'required|in:new,in_progress,resolved,spam']);
        $contact->update(['status' => $request->status]);
        return response()->json($contact);
    }
}
