<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Medical;

class MedicalController extends Controller
{
    public function latest_medical(Request $request)
    {
        $latest = Medical::where('patient_id', $request->id)->latest()->first();

        return $latest;
    }
}
