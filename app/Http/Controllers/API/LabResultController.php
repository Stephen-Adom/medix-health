<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\BloodCount;
use App\Metabolic;
use App\Lipoprotein;
use App\Enzyme;
use App\Thyroid;
use App\Coagulation;
use App\Disease;
use App\Serum;
use App\Reactive;
use App\UrineChemical;
use App\Microscopic;
use App\FaecalInfection;
use App\SalivaSteroid;
use App\SalivaGenetic;
use App\SalivaInfection;

class LabResultController extends Controller
{
    public function cbc_result()
    {
        $results = BloodCount::with('user', 'patient', 'blood')->orderBy('created_at', 'desc')->get();
        
        return $results;
    }

    public function metabolic_result()
    {
        $results = Metabolic::with('user', 'patient', 'blood')->orderBy('created_at', 'desc')->get();
        
        return $results;
    }

    public function lipoprotein_result()
    {
        $results = Lipoprotein::with('user', 'patient', 'blood')->orderBy('created_at', 'desc')->get();
        
        return $results;
    }

    public function enzymes_result()
    {
        $results = Enzyme::with('user', 'patient', 'blood')->orderBy('created_at', 'desc')->get();
        
        return $results;
    }

    public function thyroid_result()
    {
        $results = Thyroid::with('user', 'patient', 'blood')->orderBy('created_at', 'desc')->get();
        
        return $results;
    }

    public function coagulation_result()
    {
        $results = Coagulation::with('user', 'patient', 'blood')->orderBy('created_at', 'desc')->get();
        
        return $results;
    }

    public function disease_result()
    {
        $results = Disease::with('user', 'patient', 'blood')->orderBy('created_at', 'desc')->get();
        
        return $results;
    }

    public function serum_result()
    {
        $results = Serum::with('user', 'patient', 'blood')->orderBy('created_at', 'desc')->get();
        
        return $results;
    }

    public function reactive_result()
    {
        $results = Reactive::with('user', 'patient', 'blood')->orderBy('created_at', 'desc')->get();
        
        return $results;
    }

    public function urine_chemical_result()
    {
        $results = UrineChemical::with('user', 'patient', 'urine')->orderBy('created_at', 'desc')->get();
        
        return $results;
    }

    public function urine_microscopic_result()
    {
        $results = Microscopic::with('user', 'patient', 'urine')->orderBy('created_at', 'desc')->get();
        
        return $results;
    }

    public function infection_result()
    {
        $results = FaecalInfection::with('user', 'patient', 'faecal')->orderBy('created_at', 'desc')->get();
        
        return $results;
    }

    public function steroid_hormone_result()
    {
        $results = SalivaSteroid::with('user', 'patient', 'saliva')->orderBy('created_at', 'desc')->get();
        
        return $results;
    }

    public function saliva_genetic_result()
    {
        $results = SalivaGenetic::with('user', 'patient', 'saliva')->orderBy('created_at', 'desc')->get();
        
        return $results;
    }

    public function saliva_infections_result()
    {
        $results = SalivaInfection::with('user', 'patient', 'saliva')->orderBy('created_at', 'desc')->get();
        
        return $results;
    }
}
