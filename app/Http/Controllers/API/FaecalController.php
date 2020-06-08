<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Faecal;
use App\FaecalInfection;
use Carbon\Carbon;
use Auth;

class FaecalController extends Controller
{
    public function store_faecal(Request $request)
    {
        $exist = Faecal::where('spec', $request->info['spec'])->first();
        if($exist){
            return response()->json(['error' => 'Specimen number already exist']);
        }

        $faecal = Faecal::create([
            'ordering_dr' => $request->info['ordering_dr'],
            'status' => $request->info['status'],
            'physician_copy' => $request->info['physician_copy'],
            'spec' => $request->info['spec'],
            'collection_date' => Carbon::parse($request->info['collection_date']),
            'collection_time' => Carbon::parse($request->info['collection_time']),
            'received_date' => Carbon::parse($request->info['received_date']),
            'received_time' => Carbon::parse($request->info['received_time']),
            'specimen' => $request->info['specimen'],
        ]);

       FaecalInfection::create([
           'faecal_id' => $faecal->id,
           'patient_id' => $request->patient['patient_id'],
           'user_id' => Auth::user()->id,
           'infection' => $request->faecal['infection'],
           'occult_blood' => $request->faecal['occult_blood'],
           'bile' => $request->faecal['bile'],
           'wbc' => $request->faecal['wbc'],
           'rbc' => $request->faecal['rbc'],
           'sugar' => $request->faecal['sugar'],
           'mucus' => $request->faecal['mucus'],
           'ph' => $request->faecal['ph'],
       ]);

        return response()->json(['success' => 'Faecal Examination Result Saved']);
    }
}
