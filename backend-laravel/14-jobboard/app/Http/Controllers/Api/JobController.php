<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function index(Request $request)
    {
        $query = Job::active()->with('company')
            ->when($request->type,       fn($q, $v) => $q->where('type', $v))
            ->when($request->category,   fn($q, $v) => $q->where('category', $v))
            ->when($request->location,   fn($q, $v) => $q->where('location', 'like', "%{$v}%"))
            ->when($request->remote,     fn($q) => $q->where('is_remote', true))
            ->when($request->salary_min, fn($q, $v) => $q->where('salary_max', '>=', $v))
            ->when($request->company_id, fn($q, $v) => $q->where('company_id', $v))
            ->when($request->experience, fn($q, $v) => $q->where('experience_level', $v));

        return response()->json($query->latest()->paginate(15));
    }

    public function show(Job $job)
    {
        $job->increment('views');
        return response()->json($job->load('company'));
    }

    public function featured()
    {
        return response()->json(
            Job::active()->where('is_featured', true)->with('company')->limit(6)->get()
        );
    }

    public function search(Request $request)
    {
        $request->validate(['q' => 'required|string|min:2']);
        return response()->json(
            Job::active()
                ->where(fn($q) =>
                    $q->where('title',       'like', "%{$request->q}%")
                      ->orWhere('description', 'like', "%{$request->q}%")
                      ->orWhere('category',    'like', "%{$request->q}%")
                )
                ->with('company')
                ->limit(15)
                ->get()
        );
    }

    public function similar(Job $job)
    {
        return response()->json(
            Job::active()
                ->where('id', '!=', $job->id)
                ->where(fn($q) => $q->where('category', $job->category)->orWhere('company_id', $job->company_id))
                ->with('company')
                ->limit(4)
                ->get()
        );
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'            => 'required|string|max:255',
            'description'      => 'required|string',
            'requirements'     => 'required|string',
            'type'             => 'required|in:full_time,part_time,contract,internship,remote',
            'category'         => 'required|string|max:100',
            'location'         => 'required|string|max:255',
            'is_remote'        => 'boolean',
            'salary_min'       => 'nullable|numeric|min:0',
            'salary_max'       => 'nullable|numeric|min:0',
            'salary_currency'  => 'string|max:3',
            'experience_level' => 'required|in:entry,junior,mid,senior,lead',
            'deadline'         => 'required|date|after:today',
        ]);

        $data['company_id']  = $request->user()->company->id;
        $data['employer_id'] = $request->user()->id;
        $data['is_active']   = true;

        return response()->json(Job::create($data), 201);
    }

    public function update(Request $request, Job $job)
    {
        $data = $request->validate([
            'title'       => 'string|max:255',
            'description' => 'string',
            'salary_min'  => 'nullable|numeric',
            'salary_max'  => 'nullable|numeric',
            'deadline'    => 'date|after:today',
            'is_active'   => 'boolean',
        ]);
        $job->update($data);
        return response()->json($job);
    }

    public function destroy(Job $job)
    {
        $job->delete();
        return response()->json(['message' => 'Job deleted']);
    }

    public function employerJobs(Request $request)
    {
        return response()->json(
            Job::where('employer_id', $request->user()->id)
                ->withCount('applications')
                ->latest()
                ->paginate(15)
        );
    }

    public function adminIndex(Request $request)
    {
        return response()->json(
            Job::with('company')
                ->when($request->status, fn($q, $v) => $q->where('is_active', $v === 'active'))
                ->latest()
                ->paginate(20)
        );
    }

    public function toggleFeatured(Job $job)
    {
        $job->update(['is_featured' => !$job->is_featured]);
        return response()->json($job);
    }
}
