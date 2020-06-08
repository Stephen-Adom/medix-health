<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Drugs;
use Carbon\Carbon;

class DrugController extends Controller
{
    public function index()
    {
        $drugs = Drugs::all();
        return $drugs;
    }

    public function drug_analysis()
    {
        $expired = Drugs::whereDate('expiry_date', '<', Carbon::now())->count();
        $available = Drugs::where('quantity', '>', 0)->count();
        $out_of_order = Drugs::where('quantity', '<=', 0)->count();
        
        return response()->json(['expired' => $expired, 'available' => $available, 'out' => $out_of_order]);
    }

    public function store(Request $request)
    {
        $drug = Drugs::create([
            'name' => $request->drugs['name'],
            'quantity' => $request->drugs['quantity'],
            'dosage_info' => $request->drugs['dosage_info'],
            'category' => $request->drugs['category'],
            'expiry_date' => $request->drugs['expiry_date'],
            'purchased_date' => $request->drugs['purchased_date']
        ]);
        
        return response()->json(['success'=> 'drug added', 'drug'=> $drug]);
    }

    public function update($id, Request $request)
    {
        $drug = Drugs::where('id', $id)->first();
        $drug->update([
            'name' => $request->drug['name'],
            'quantity' => $request->drug['quantity'],
            'dosage_info' => $request->drug['dosage_info'],
            'category' => $request->drug['category'],
            'expiry_date' => $request->drug['expiry_date'],
            'purchased_date' => $request->drug['purchased_date']
        ]);

        return response()->json(['success' => 'drug updated']);
    }

    public function delete($id)
    {
        $drug = Drugs::where('id', $id)->first();
        $drug->delete();

        return response()->json(['success' => 'drug deleted']);
    }
}
