<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use App\Vital;

class VitalsController extends Controller
{
    public function store(Request $request)
    {
        $vital = new Vital;
        $vital->patient_id = $request->id;
        $vital->user_id = Auth::user()->id;
        $vital->systolic = $request->vitals['systolic_value'];
        $vital->diastolic = $request->vitals['diastolic_value'];
        $vital->pulse_rate = $request->vitals['pulse_rate'];
        $vital->respiratory_rate = $request->vitals['respiration_rate'];
        $vital->temperature = $request->vitals['temperature'];
        if($request->vitals['height']){
            $vital->height = $request->vitals['height'];
        }
        if($request->vitals['weight']){
            $vital->weight = $request->vitals['weight'];
        }
        $vital->save();

        return response()->json(['success' => 'Patient vitals saved']);
    }

    public function getPatientVitals(Request $request)
    {
        $vitals = Vital::with('user')->where('patient_id', $request->id)->latest()->first();
        return $vitals;
    }
}
