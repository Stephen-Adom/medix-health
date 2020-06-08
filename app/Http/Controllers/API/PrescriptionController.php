<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Prescription;
use Carbon\Carbon;

class PrescriptionController extends Controller
{
    public function index()
    {
        return Prescription::with('patient', 'medical')->orderBy('created_at', 'desc')->get();
    }

    public function update($id)
    {
        $prescription = Prescription::where('id', $id)->first();
        $prescription->update([
            'prescribed' => true,
            'prescribed_on' => Carbon::now(),
        ]);

        return response()->json(['success' => 'prescription updated']);
    }
}
