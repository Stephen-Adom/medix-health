<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Carbon\Carbon;
use App\Referral;
use App\Patient;

class ReferralController extends Controller
{
    public function index()
    {
        return Referral::with('patient', 'user')->get();
    }

    public function store(Request $request)
    {

        $referral = Referral::create([
            'patient_id' => $request->id,
            'user_id' => Auth::user()->id,
            'referred_reason' => $request->data['reason'],
            'surgery' => $request->data['surgery'],
            'diagnosis' => $request->data['diagnosis'],
            'medication' => $request->data['medication'],
            'referred_from' => $request->hospital,
            'referred_date' => Carbon::now(),
            'referred_to' => $request->data['to_doctor'],
            'referred_hospital' => $request->data['to_hospital'],
        ]);

        $referred = Referral::with('patient', 'user')->where('id', $referral->id)->first();
        $patient = Patient::where('id', $request->id)->first();
        $patient->update([
            'referred' => true,
        ]);

        return response()->json(['success' => 'Referral Form Submitted', 'data'=> $referred]);
    }

    public function delete_application(Request $request)
    {
        $referred = Referral::with('patient', 'user')->where('id', $request->id)->first();
        $referred->delete();

        return response()->json(['success' => 'application deleted']);
    }

    public function undo_application(Request $request)
    {
        $patient = Patient::where('id', $request->id)->first();

        $patient->update([
            'referred' => false 
        ]);

        return response()->json(['success' => 'patient updated']);
    }
}
