<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\FirstAid;
use Carbon\Carbon;

class FirstAidController extends Controller
{
    public function store(Request $request)
    {
        $firstaid = FirstAid::create([
            'patient_id' => $request->id,
            'injury_date' => Carbon::parse($request->aid['injury_date']),
            'injury_time' => Carbon::parse($request->aid['injury_time']),
            'cause' => $request->aid['cause'],
            'details' => $request->aid['details'],
            'treatment' => $request->aid['treatment'],
            'arrangement' => $request->aid['arrangement'],
            'attendant' => $request->aid['attendant'],
            'first_witness' => $request->aid['first_witness'],
            'second_witness' => $request->aid['second_witness'],
            'follow_up_time' => Carbon::parse($request->aid['follow_up_time']),
            'follow_up_date' => Carbon::parse($request->aid['follow_up_date']),
            'initial_report_date' => Carbon::parse($request->aid['initial_date']),
            'initial_report_time' => Carbon::parse($request->aid['initial_time'])
        ]);

        return response()->json(['success' => 'first aid recorded', 'aid' => $firstaid]);
    }

    public function delete(Request $request)
    {
        $aid = FirstAid::where('id', $request->id)->first();
        if($aid){
            $aid->delete();

            return response()->json(['success' => 'first aid deleted']);
        }
        return response()->json(['error' => 'there is an error']);
    }

    public function aidReport(Request $request)
    {
        $first_aids = FirstAid::where('patient_id',  $request->id)->orderBy('created_at', 'desc')->get();
        return $first_aids;
    }

    public function index()
    {
        return FirstAid::with('patient')->orderBy('created_at', 'desc')->get();
    }
}
