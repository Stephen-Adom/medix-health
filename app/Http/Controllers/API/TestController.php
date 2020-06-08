<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;
use App\Patient;
use App\Blood;
use App\BloodCount;
use Carbon\Carbon;
use App\Metabolic;
use App\Lipoprotein;
use App\Enzyme;
use App\Thyroid;
use App\Coagulation;
use App\Disease;
use App\Serum;
use App\Reactive;
use Auth;

class TestController extends Controller
{
    public function store_cbc(Request $request)
    { 
        $exist = Blood::where('spec', $request->info['spec'])->first();
        if($exist){
            return response()->json(['error' => 'Specimen number already exist']);
        }

        $blood = Blood::create([
            'ordering_dr' => $request->info['ordering_dr'],
            'status' => $request->info['status'],
            'physician_copy' => $request->info['physician_copy'],
            'spec' => $request->info['spec'],
            'collection_date' => Carbon::parse($request->info['collection_date']),
            'collection_time' => Carbon::parse($request->info['collection_time']),
            'received_date' => Carbon::parse($request->info['received_date']),
            'received_time' => Carbon::parse($request->info['received_time']),
            'specimen' => $request->info['specimen']
        ]);

        BloodCount::create([
            'blood_id' => $blood->id,
            'patient_id' => $request->patient['patient_id'],
            'user_id' => Auth::user()->id,
            'white_blood' => $request->cbc['white_blood'],
            'red_blood' => $request->cbc['red_blood'],
            'hemoglobin' => $request->cbc['hemoglobin'],
            'mcv' => $request->cbc['mcv'],
            'mch' => $request->cbc['mch'],
            'mchc' => $request->cbc['mchc'],
            'rdw' => $request->cbc['rdw'],
            'platelet' => $request->cbc['platelet'],
            'platelet_volume' => $request->cbc['platelet_volume']
        ]);

        return response()->json(['success' => 'CBC Test Result Saved']);
    }

    public function store_metabolic(Request $request)
    {
        $exist = Blood::where('spec', $request->info['spec'])->first();
        if($exist){
            return response()->json(['error' => 'Specimen number already exist']);
        }

        $blood = Blood::create([
            'ordering_dr' => $request->info['ordering_dr'],
            'status' => $request->info['status'],
            'physician_copy' => $request->info['physician_copy'],
            'spec' => $request->info['spec'],
            'collection_date' => Carbon::parse($request->info['collection_date']),
            'collection_time' => Carbon::parse($request->info['collection_time']),
            'received_date' => Carbon::parse($request->info['received_date']),
            'received_time' => Carbon::parse($request->info['received_time']),
            'specimen' => $request->info['specimen']
        ]);

       Metabolic::create([
           'blood_id' => $blood->id,
           'patient_id' => $request->patient['patient_id'],
           'user_id' => Auth::user()->id,
           'glucose' => $request->metabolic['glucose'],
           'sodium' => $request->metabolic['sodium'],
           'potassium' => $request->metabolic['potassium'],
           'calcium' => $request->metabolic['calcium'],
           'chloride' => $request->metabolic['chloride'],
           'dioxide' => $request->metabolic['dioxide'],
           'nitrogen' => $request->metabolic['nitrogen'],
           'creatinine' => $request->metabolic['creatinine'],
           'albumin' => $request->metabolic['albumin'],
           'protein' => $request->metabolic['protein'],
           'alp' => $request->metabolic['alp'],
           'alt' => $request->metabolic['alt'],
           'ast' => $request->metabolic['ast'],
           'bilirubin' => $request->metabolic['bilirubin'],
           'thromboplastin' => $request->metabolic['thromboplastin'],
           'prothrombin' => $request->metabolic['prothrombin']
       ]);

        return response()->json(['success' => 'Comprehensive Metabolic Test Result Saved']);
    }

    public function store_lipoprotein(Request $request)
    {
        $exist = Blood::where('spec', $request->info['spec'])->first();
        if($exist){
            return response()->json(['error' => 'Specimen number already exist']);
        }

        $blood = Blood::create([
            'ordering_dr' => $request->info['ordering_dr'],
            'status' => $request->info['status'],
            'physician_copy' => $request->info['physician_copy'],
            'spec' => $request->info['spec'],
            'collection_date' => Carbon::parse($request->info['collection_date']),
            'collection_time' => Carbon::parse($request->info['collection_time']),
            'received_date' => Carbon::parse($request->info['received_date']),
            'received_time' => Carbon::parse($request->info['received_time']),
            'specimen' => $request->info['specimen']
        ]);

       Lipoprotein::create([
           'blood_id' => $blood->id,
           'patient_id' => $request->patient['patient_id'],
           'user_id' => Auth::user()->id,
           'low_density' => $request->lipoprotein['low_density'],
           'high_density' => $request->lipoprotein['high_density'],
           'total' => $request->lipoprotein['total'],
           'triglycerides' => $request->lipoprotein['triglycerides']
       ]);

        return response()->json(['success' => 'Lipoprotein Test Result Saved']);
    }

    public function store_enzymes(Request $request)
    {
        $exist = Blood::where('spec', $request->info['spec'])->first();
        if($exist){
            return response()->json(['error' => 'Specimen number already exist']);
        }

        $blood = Blood::create([
            'ordering_dr' => $request->info['ordering_dr'],
            'status' => $request->info['status'],
            'physician_copy' => $request->info['physician_copy'],
            'spec' => $request->info['spec'],
            'collection_date' => Carbon::parse($request->info['collection_date']),
            'collection_time' => Carbon::parse($request->info['collection_time']),
            'received_date' => Carbon::parse($request->info['received_date']),
            'received_time' => Carbon::parse($request->info['received_time']),
            'specimen' => $request->info['specimen']
        ]);

       Enzyme::create([
           'blood_id' => $blood->id,
           'patient_id' => $request->patient['patient_id'],
           'user_id' => Auth::user()->id,
           'cpk_1' => $request->enzymes['cpk_1'],
           'cpk_2' => $request->enzymes['cpk_2'],
           'cpk_3' => $request->enzymes['cpk_3'],
           'troponin' => $request->enzymes['troponin']
       ]);

        return response()->json(['success' => 'Lipoprotein Test Result Saved']);
    }

    public function store_thyroid(Request $request)
    {
        $exist = Blood::where('spec', $request->info['spec'])->first();
        if($exist){
            return response()->json(['error' => 'Specimen number already exist']);
        }

        $blood = Blood::create([
            'ordering_dr' => $request->info['ordering_dr'],
            'status' => $request->info['status'],
            'physician_copy' => $request->info['physician_copy'],
            'spec' => $request->info['spec'],
            'collection_date' => Carbon::parse($request->info['collection_date']),
            'collection_time' => Carbon::parse($request->info['collection_time']),
            'received_date' => Carbon::parse($request->info['received_date']),
            'received_time' => Carbon::parse($request->info['received_time']),
            'specimen' => $request->info['specimen']
        ]);

       Thyroid::create([
           'blood_id' => $blood->id,
           'patient_id' => $request->patient['patient_id'],
           'user_id' => Auth::user()->id,
           't3' => $request->thyroid['t3'],
           'ru' => $request->thyroid['ru'],
           't4' => $request->thyroid['t4'],
           'ts' => $request->thyroid['ts']
       ]);

        return response()->json(['success' => 'Thyroid Panel Test Result Saved']);
    }

    public function store_coagulation(Request $request)
    {
        $exist = Blood::where('spec', $request->info['spec'])->first();
        if($exist){
            return response()->json(['error' => 'Specimen number already exist']);
        }

        $blood = Blood::create([
            'ordering_dr' => $request->info['ordering_dr'],
            'status' => $request->info['status'],
            'physician_copy' => $request->info['physician_copy'],
            'spec' => $request->info['spec'],
            'collection_date' => Carbon::parse($request->info['collection_date']),
            'collection_time' => Carbon::parse($request->info['collection_time']),
            'received_date' => Carbon::parse($request->info['received_date']),
            'received_time' => Carbon::parse($request->info['received_time']),
            'specimen' => $request->info['specimen']
        ]);

       Coagulation::create([
           'blood_id' => $blood->id,
           'patient_id' => $request->patient['patient_id'],
           'user_id' => Auth::user()->id,
           'prothrombin' => $request->coagulation['prothrombin'],
           'fibrinogen' => $request->coagulation['fibrinogen'],
       ]);

        return response()->json(['success' => 'Coagulation Panel Test Result Saved']);
    }

    public function store_disease(Request $request)
    {
        $exist = Blood::where('spec', $request->info['spec'])->first();
        if($exist){
            return response()->json(['error' => 'Specimen number already exist']);
        }

        $blood = Blood::create([
            'ordering_dr' => $request->info['ordering_dr'],
            'status' => $request->info['status'],
            'physician_copy' => $request->info['physician_copy'],
            'spec' => $request->info['spec'],
            'collection_date' => Carbon::parse($request->info['collection_date']),
            'collection_time' => Carbon::parse($request->info['collection_time']),
            'received_date' => Carbon::parse($request->info['received_date']),
            'received_time' => Carbon::parse($request->info['received_time']),
            'specimen' => $request->info['specimen']
        ]);

       Disease::create([
           'blood_id' => $blood->id,
           'patient_id' => $request->patient['patient_id'],
           'user_id' => Auth::user()->id,
           'chlamydia' => $request->disease['chlamydia'],
           'gonorrhea' => $request->disease['gonorrhea'],
           'herpes' => $request->disease['herpes'],
           'hiv' => $request->disease['hiv'],
           'syphilis' => $request->disease['syphilis']
       ]);

        return response()->json(['success' => 'Disease Test Result Saved']);
    }

    public function store_serum(Request $request)
    {
        $exist = Blood::where('spec', $request->info['spec'])->first();
        if($exist){
            return response()->json(['error' => 'Specimen number already exist']);
        }

        $blood = Blood::create([
            'ordering_dr' => $request->info['ordering_dr'],
            'status' => $request->info['status'],
            'physician_copy' => $request->info['physician_copy'],
            'spec' => $request->info['spec'],
            'collection_date' => Carbon::parse($request->info['collection_date']),
            'collection_time' => Carbon::parse($request->info['collection_time']),
            'received_date' => Carbon::parse($request->info['received_date']),
            'received_time' => Carbon::parse($request->info['received_time']),
            'specimen' => $request->info['specimen']
        ]);

       Serum::create([
           'blood_id' => $blood->id,
           'patient_id' => $request->patient['patient_id'],
           'user_id' => Auth::user()->id,
           'serum' => $request->dea,
       ]);

        return response()->json(['success' => 'Sulphate Serum Test Result Saved']);
    }

    public function store_protein(Request $request)
    {
        $exist = Blood::where('spec', $request->info['spec'])->first();
        if($exist){
            return response()->json(['error' => 'Specimen number already exist']);
        }

        $blood = Blood::create([
            'ordering_dr' => $request->info['ordering_dr'],
            'status' => $request->info['status'],
            'physician_copy' => $request->info['physician_copy'],
            'spec' => $request->info['spec'],
            'collection_date' => Carbon::parse($request->info['collection_date']),
            'collection_time' => Carbon::parse($request->info['collection_time']),
            'received_date' => Carbon::parse($request->info['received_date']),
            'received_time' => Carbon::parse($request->info['received_time']),
            'specimen' => $request->info['specimen']
        ]);

       Reactive::create([
           'blood_id' => $blood->id,
           'patient_id' => $request->patient['patient_id'],
           'user_id' => Auth::user()->id,
           'protein' => $request->reactive,
       ]);

        return response()->json(['success' => 'C-Reactive Protein Test Result Saved']);
    }
}
