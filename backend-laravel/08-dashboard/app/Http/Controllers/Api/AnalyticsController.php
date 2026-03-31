<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use App\Models\Invoice;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class AnalyticsController extends Controller
{
    public function summary(Request $request)
    {
        $userId = $request->user()->id;

        $totalRevenue = Invoice::where('status', 'paid')
            ->whereMonth('created_at', now()->month)
            ->sum('total');

        $totalContacts  = Contact::count();
        $tasksPending   = Task::where('status', '!=', 'done')->count();
        $invoicesUnpaid = Invoice::whereIn('status', ['sent', 'overdue'])->sum('total');

        return response()->json([
            'revenue_this_month'  => $totalRevenue,
            'total_contacts'      => $totalContacts,
            'tasks_pending'       => $tasksPending,
            'invoices_outstanding'=> $invoicesUnpaid,
        ]);
    }

    public function revenueChart()
    {
        $data = Invoice::where('status', 'paid')
            ->where('created_at', '>=', now()->subMonths(12))
            ->select(
                DB::raw('YEAR(created_at) as year'),
                DB::raw('MONTH(created_at) as month'),
                DB::raw('SUM(total) as revenue')
            )
            ->groupBy('year', 'month')
            ->orderBy('year')
            ->orderBy('month')
            ->get()
            ->map(fn($row) => [
                'label'   => Carbon::create($row->year, $row->month)->format('M Y'),
                'revenue' => (float) $row->revenue,
            ]);

        return response()->json($data);
    }

    public function topCustomers()
    {
        $customers = Contact::withSum(['invoices as total_revenue' => fn($q) => $q->where('status', 'paid')], 'total')
            ->orderByDesc('total_revenue')
            ->limit(10)
            ->get(['id', 'name', 'company', 'email']);

        return response()->json($customers);
    }

    public function recentActivity()
    {
        $contacts = Contact::latest()->limit(5)->get()->map(fn($c) => [
            'type'    => 'contact',
            'message' => "New contact: {$c->name}",
            'time'    => $c->created_at,
        ]);

        $invoices = Invoice::latest()->limit(5)->get()->map(fn($i) => [
            'type'    => 'invoice',
            'message' => "Invoice {$i->invoice_number} — {$i->status}",
            'time'    => $i->created_at,
        ]);

        $tasks = Task::latest()->limit(5)->get()->map(fn($t) => [
            'type'    => 'task',
            'message' => "Task: {$t->title}",
            'time'    => $t->created_at,
        ]);

        $activity = $contacts->merge($invoices)->merge($tasks)
            ->sortByDesc('time')
            ->values()
            ->take(15);

        return response()->json($activity);
    }
}
