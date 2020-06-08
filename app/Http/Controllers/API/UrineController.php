<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Urine;
use Carbon\Carbon;
use App\UrineChemical;
use App\Microscopic;
use Auth;

class UrineController extends Controller
{
    public function store_chemical(Request $request)
    {
        $exist = Urine::where('spec', $request->info['spec'])->first();
        if($exist){
            return response()->json(['error' => 'Specimen number already exist']);
        }

        $urine = Urine::create([
            'ordering_dr' => $request->info['ordering_dr'],
            'status' => $request->info['status'],
            'physician_copy' => $request->info['physician_copy'],
            'spec' => $request->info['spec'],
            'collection_date' => Carbon::parse($request->info['collection_date']),
            'collection_time' => Carbon::parse($request->info['collection_time']),
            'received_date' => Carbon::parse($request->info['received_date']),
            'received_time' => Carbon::parse($request->info['received_time']),
            'specimen' => $request->info['specimen'],
            'color' => $request->info['color'],
            'clarity' => $request->info['clarity']
        ]);

       UrineChemical::create([
           'urine_id' => $urine->id,
           'patient_id' => $request->patient['patient_id'],
           'user_id' => Auth::user()->id,
           'gravity' => $request->chemical['gravity'],
           'acidity' => $request->chemical['acidity'],
           'concentration' => $request->chemical['concentration'],
           'protein' => $request->chemical['protein'],
           'sugar' => $request->chemical['sugar'],
           'ketones' => $request->chemical['ketones'],
           'bilirubin' => $request->chemical['bilirubin'],
           'nitrites' => $request->chemical['nitrites'],
           'hemoglobin' => $request->chemical['hemoglobin'],
           'myoglobin' => $request->chemical['myoglobin'],
           'leukocyte' => $request->chemical['leukocyte'],
           'ascorbic' => $request->chemical['ascorbic']
       ]);

        return response()->json(['success' => 'Chemical Examination Result Saved']);
    }

    public function store_microscopic(Request $request)
    {
        $exist = Urine::where('spec', $request->info['spec'])->first();
        if($exist){
            return response()->json(['error' => 'Specimen number already exist']);
        }

        $urine = Urine::create([
            'ordering_dr' => $request->info['ordering_dr'],
            'status' => $request->info['status'],
            'physician_copy' => $request->info['physician_copy'],
            'spec' => $request->info['spec'],
            'collection_date' => Carbon::parse($request->info['collection_date']),
            'collection_time' => Carbon::parse($request->info['collection_time']),
            'received_date' => Carbon::parse($request->info['received_date']),
            'received_time' => Carbon::parse($request->info['received_time']),
            'specimen' => $request->info['specimen'],
            'color' => $request->info['color'],
            'clarity' => $request->info['clarity']
        ]);

       Microscopic::create([
           'urine_id' => $urine->id,
           'patient_id' => $request->patient['patient_id'],
           'user_id' => Auth::user()->id,
           'rbc' => $request->microscopic['rbc'],
           'wbc' => $request->microscopic['wbc'],
           'epithelial' => $request->microscopic['epithelial'],
           'bacteria' => $request->microscopic['bacteria'],
           'casts' => $request->microscopic['casts'],
           'crystals' => $request->microscopic['crystals'],
       ]);

        return response()->json(['success' => 'Microscopic Examination Result Saved']);
    }
}
