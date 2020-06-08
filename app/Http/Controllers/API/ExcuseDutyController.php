<?php

namespace App\Http\Controllers\API;

use App\Notifications\ExcuseDutyNotification;
use App\Notifications\ApplicationApprovedNotification;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\ExcuseDuty;
use Carbon\Carbon;
use Auth;
use Hash;
use App\User;
use App\Patient;
use Notification;

class ExcuseDutyController extends Controller
{
    public function store(Request $request)
    {
        ExcuseDuty::create([
            'patient_id' => $request->id,
            'start_date' => Carbon::parse($request->data['start_date']),
            'end_date' => Carbon::parse($request->data['end_date']),
            'reason' => $request->data['reason'],
            'annual_leave' => $request->data['annual_leave'],
        ]);
        
        $user = User::where('role_id', 5)->first();
        $patient = Patient::where('id', $request->id)->first();
        $user->notify(new ExcuseDutyNotification($patient));

        return response()->json(['success' => 'excuse duty stored']);
    }

    public function index()
    {
        return ExcuseDuty::with('patient')->where('approved_by', null)->get();
    }

    public function history()
    {
        return ExcuseDuty::with('patient')->where('approved_by','!=', null)->get();
    }

    public function authorize_user(Request $request)
    {
        $user = User::where('id', Auth::user()->id)->first();
        if(Hash::check($request->password, $user->password)){
            $excuse_duty = ExcuseDuty::where('id', $request->id)->first();
            $excuse_duty->update([
                'approved' => 1,
                'approved_by' => $request->data['manager'],
                'approved_date' => Carbon::parse($request->data['date']),
                'additional_comment' => $request->data['comment'],
                'recommendation' => $request->data['recommendation']
            ]);

            $doctors = User::where('role_id', 1)->get();

            $patient = Patient::where('id', $excuse_duty->patient_id)->first();

            Notification::send($doctors, new ApplicationApprovedNotification($patient));

            return response()->json(['success' => 'password match']);
        }

        return response()->json(['error' => 'password mismatch']);

    }

    public function delete_application(Request $request)
    {
        $excuse_duty = ExcuseDuty::where('id', $request->id)->first();
        $excuse_duty->delete();

        return response()->json(['success' => 'application deleted']);
    }
}
