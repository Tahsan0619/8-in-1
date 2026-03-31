<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class JobController extends Controller
{
    public function index(): JsonResponse
    {
        $jobs = Job::with('company')->where('status', 'active')->latest()->paginate(15);
        return response()->json($jobs);
    }

    public function show(Job $job): JsonResponse
    {
        return response()->json($job->load('company'));
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title'        => 'required|string|max:255',
            'location'     => 'required|string|max:255',
            'type'         => 'required|in:full-time,part-time,contract,freelance,remote',
            'salary_min'   => 'nullable|numeric|min:0',
            'salary_max'   => 'nullable|numeric|min:0',
            'description'  => 'required|string',
            'requirements' => 'nullable|array',
            'benefits'     => 'nullable|array',
            'status'       => 'in:active,closed,draft',
            'expires_at'   => 'nullable|date',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();
        $data['company_id'] = auth()->id();

        $job = Job::create($data);

        return response()->json(['message' => 'Job posted', 'job' => $job], 201);
    }

    public function update(Request $request, Job $job): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title'        => 'sometimes|string|max:255',
            'location'     => 'sometimes|string|max:255',
            'type'         => 'sometimes|in:full-time,part-time,contract,freelance,remote',
            'salary_min'   => 'nullable|numeric|min:0',
            'salary_max'   => 'nullable|numeric|min:0',
            'description'  => 'sometimes|string',
            'requirements' => 'nullable|array',
            'benefits'     => 'nullable|array',
            'status'       => 'in:active,closed,draft',
            'expires_at'   => 'nullable|date',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $job->update($validator->validated());

        return response()->json(['message' => 'Job updated', 'job' => $job]);
    }

    public function destroy(Job $job): JsonResponse
    {
        $job->delete();
        return response()->json(['message' => 'Job deleted']);
    }

    public function search(Request $request): JsonResponse
    {
        $query = Job::with('company')->where('status', 'active');

        if ($request->filled('keyword'))  $query->where('title', 'like', "%{$request->keyword}%");
        if ($request->filled('location')) $query->where('location', 'like', "%{$request->location}%");
        if ($request->filled('type'))     $query->where('type', $request->type);
        if ($request->filled('min_salary')) $query->where('salary_min', '>=', $request->min_salary);

        return response()->json($query->latest()->paginate(15));
    }

    public function apply(Request $request, Job $job): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'cover_letter' => 'nullable|string',
            'resume'       => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        return response()->json(['message' => 'Application submitted successfully'], 201);
    }
}
