<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Saliva;
use App\SalivaSteroid;
use Carbon\Carbon;
use App\SalivaGenetic;
use App\SalivaInfection;
use Auth;

class SalivaController extends Controller
{
    public function store_saliva_steroid(Request $request)
    {
        $exist = Saliva::where('spec', $request->info['spec'])->first();
        if($exist){
            return response()->json(['error' => 'Specimen number already exist']);
        }

        $saliva = Saliva::create([
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

       SalivaSteroid::create([
           'saliva_id' => $saliva->id,
           'patient_id' => $request->patient['patient_id'],
           'user_id' => Auth::user()->id,
           'estrogen' => $request->steroid['estrogen'],
           'progesterone' => $request->steroid['progesterone'],
           'testosterone' => $request->steroid['testosterone'],
           'cortisol' => $request->steroid['cortisol'],
           'melatonin' => $request->steroid['melatonin'],
           'dea' => $request->steroid['dea'],
       ]);

        return response()->json(['success' => 'Steriod Hormone Analyses Result Saved']);
    }

    public function store_saliva_genetic(Request $request)
    {
        $exist = Saliva::where('spec', $request->info['spec'])->first();
        if($exist){
            return response()->json(['error' => 'Specimen number already exist']);
        }

        $saliva = Saliva::create([
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

       SalivaGenetic::create([
           'saliva_id' => $saliva->id,
           'patient_id' => $request->patient['patient_id'],
           'user_id' => Auth::user()->id,
           'rna' => $request->genetic['rna'],
           'dna' => $request->genetic['dna'],
           'antibody' => $request->genetic['antibody'],
           'enzymes' => $request->genetic['enzymes'],
       ]);

        return response()->json(['success' => 'Genetic Results Saved']);
    }

    public function store_saliva_infection(Request $request)
    {
        $exist = Saliva::where('spec', $request->info['spec'])->first();
        if($exist){
            return response()->json(['error' => 'Specimen number already exist']);
        }

        $saliva = Saliva::create([
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

       SalivaInfection::create([
           'saliva_id' => $saliva->id,
           'patient_id' => $request->patient['patient_id'],
           'user_id' => Auth::user()->id,
           'hiv' => $request->infection['hiv'],
           'cancer' => $request->infection['cancer'],
           'parasite' => $request->infection['parasite'],
           'allergies' => $request->infection['allergies'],
           'ph' => $request->infection['ph'],
       ]);

        return response()->json(['success' => 'Saliva Infection Test Result Saved']);
    }
}
