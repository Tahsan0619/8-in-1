<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Job;
use App\Models\JobApplication;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function index(Request $request)
    {
        $query = Job::active()->with('employer')
            ->when($request->type, fn($q, $v) => $q->where('type', $v))
            ->when($request->location, fn($q, $v) => $q->where('location', 'like', "%{$v}%"))
            ->when($request->remote, fn($q) => $q->where('type', 'remote'))
            ->when($request->category, fn($q, $v) => $q->where('category', $v))
            ->when($request->search, fn($q, $v) =>
                $q->where('title', 'like', "%{$v}%")
                  ->orWhere('company', 'like', "%{$v}%")
            );

        return response()->json($query->latest()->paginate(15));
    }

    public function show(Job $job)
    {
        return response()->json($job->load('employer'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'       => 'required|string|max:255',
            'company'     => 'required|string|max:255',
            'location'    => 'required|string|max:255',
            'type'        => 'required|in:full_time,part_time,remote,contract,internship',
            'salary_min'  => 'nullable|numeric|min:0',
            'salary_max'  => 'nullable|numeric|gte:salary_min',
            'description' => 'required|string',
            'requirements'=> 'nullable|string',
            'category'    => 'required|string|max:100',
            'deadline'    => 'nullable|date|after:today',
        ]);

        $job = Job::create([...$data, 'employer_id' => $request->user()->id, 'is_active' => false]);
        return response()->json($job, 201);
    }

    public function apply(Request $request, Job $job)
    {
        $request->validate([
            'cover_letter' => 'nullable|string|max:5000',
            'resume'       => 'required|file|mimes:pdf,doc,docx|max:5120',
        ]);

        $alreadyApplied = JobApplication::where('user_id', $request->user()->id)
            ->where('job_id', $job->id)->exists();

        if ($alreadyApplied) {
            return response()->json(['message' => 'You have already applied to this job'], 422);
        }

        $resumePath = $request->file('resume')->store('resumes', 'private');

        $application = JobApplication::create([
            'user_id'      => $request->user()->id,
            'job_id'       => $job->id,
            'cover_letter' => $request->cover_letter,
            'resume_path'  => $resumePath,
            'status'       => 'submitted',
        ]);

        return response()->json($application, 201);
    }

    public function approve(Job $job)
    {
        $job->update(['is_active' => true]);
        return response()->json($job);
    }
}
