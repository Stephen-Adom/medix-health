<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Medical;
use App\Prescription;
use Carbon\Carbon;
use App\Appointment;
use App\User;
use App\Timing;
use Auth;

class AssessmentController extends Controller
{
    public function store(Request $request)
    {
        $medical = Medical::create([
            'user_id' => Auth::user()->id,
            'patient_id' => $request->patient_id,
            'allergies' => $request->medical['allergies'],
            'problem' => $request->medical['problem'],
            'diagnosis' => $request->medical['Diagnosis'],
            'notes' => $request->medical['notes'],
        ]);

        if(count($request->prescription['drugs']) > 0){
            Prescription::create([
                'patient_id' => $request->patient_id,
                'medical_id' => $medical->id,
                'drug_name' => implode(' ', $request->prescription['drugs'] ),
                'dosage' => $request->prescription['dosage'],
                'start_course' => Carbon::parse($request->prescription['start_course']),
                'end_course' => Carbon::parse($request->prescription['end_course']),
                'morning_time' => Carbon::parse($request->prescription['morning_time']),
                'afternoon_time' => Carbon::parse($request->prescription['afternoon_time']),
                'evening_time' => Carbon::parse($request->prescription['evening_time'])
            ]);
        }

        return response()->json(['success' => 'medical record saved']);
        
    }

    public function patientHistory(Request $request)
    {
        $medicals = Medical::with('prescriptions', 'patient', 'user')->where('patient_id', $request->id)->get();
        return $medicals;
    }

    public function allMedicHistory(Request $request)
    {
        return Medical::with('prescriptions', 'patient')->orderBy('created_at', 'desc')->get();
    }

    public function bookLabTest(Request $request)
    {

        // $user = User::where('role_id', 4)->first();
        if($request->appointment_day && $request->appointment_time){
            Appointment::create([
                'user_id' => $request->speciality,
                'patient_id' => $request->id, 
                'reason' => $request->reason,
                'schedule_id' => $request->appointment_day,
                'timing_id' => $request->appointment_time
            ]);
    
            $timing = Timing::where('id', $request->appointment_time)->first();
            $timing->update([
                'available' => 0
            ]);

            return response()->json(['success' => 'lab test booked']);
        }

        return response()->json(['error' => 'Time or day not available']);
    }
}
