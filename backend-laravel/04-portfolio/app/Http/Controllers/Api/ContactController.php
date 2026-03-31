<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:5000',
        ]);

        ContactMessage::create($data);

        return response()->json([
            'message' => 'Thanks for reaching out! I will get back to you soon.',
        ], 201);
    }

    public function index()
    {
        return response()->json(ContactMessage::latest()->paginate(20));
    }

    public function updateStatus(Request $request, ContactMessage $contact)
    {
        $request->validate(['status' => 'required|in:new,read,replied,archived']);
        $contact->update(['status' => $request->status]);
        return response()->json($contact);
    }
}
