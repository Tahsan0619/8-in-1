<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Application;
use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ApplicationController extends Controller
{
    public function store(Request $request, Job $job)
    {
        if (!$job->is_active || $job->deadline < now()) {
            return response()->json(['message' => 'This job is no longer accepting applications.'], 422);
        }

        $alreadyApplied = Application::where('job_id', $job->id)
            ->where('candidate_id', $request->user()->id)
            ->exists();

        if ($alreadyApplied) {
            return response()->json(['message' => 'You have already applied to this job.'], 422);
        }

        $request->validate([
            'resume'       => 'required|file|mimes:pdf,doc,docx|max:5120',
            'cover_letter' => 'nullable|string|max:2000',
        ]);

        $resumePath = $request->file('resume')->store('resumes/' . $job->id, 'private');

        $application = Application::create([
            'job_id'       => $job->id,
            'candidate_id' => $request->user()->id,
            'resume_path'  => $resumePath,
            'cover_letter' => $request->cover_letter,
            'status'       => 'pending',
            'applied_at'   => now(),
        ]);

        $job->increment('applications_count');

        return response()->json($application->load('job.company'), 201);
    }

    public function myApplications(Request $request)
    {
        return response()->json(
            Application::where('candidate_id', $request->user()->id)
                ->with('job.company')
                ->latest('applied_at')
                ->paginate(10)
        );
    }

    public function jobApplications(Request $request, Job $job)
    {
        return response()->json(
            Application::where('job_id', $job->id)
                ->with('candidate')
                ->when($request->status, fn($q, $v) => $q->where('status', $v))
                ->latest('applied_at')
                ->paginate(20)
        );
    }

    public function updateStatus(Request $request, Application $application)
    {
        $data = $request->validate([
            'status' => 'required|in:pending,reviewing,shortlisted,interviewed,offered,rejected',
            'notes'  => 'nullable|string|max:1000',
        ]);
        $application->update($data);
        return response()->json($application);
    }

    public function withdraw(Request $request, Application $application)
    {
        if ($application->candidate_id !== $request->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        if ($application->status === 'offered') {
            return response()->json(['message' => 'Cannot withdraw an accepted offer.'], 422);
        }
        $application->delete();
        return response()->json(['message' => 'Application withdrawn.']);
    }

    public function profile(Request $request)
    {
        return response()->json($request->user()->load('candidate'));
    }

    public function updateProfile(Request $request)
    {
        $data = $request->validate([
            'headline'   => 'nullable|string|max:255',
            'summary'    => 'nullable|string',
            'skills'     => 'nullable|array',
            'experience' => 'nullable|array',
            'education'  => 'nullable|array',
            'location'   => 'nullable|string|max:255',
        ]);

        $request->user()->candidate()->updateOrCreate(
            ['user_id' => $request->user()->id],
            $data
        );

        return response()->json($request->user()->load('candidate'));
    }
}
