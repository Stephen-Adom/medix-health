<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Timing;
use App\Schedule;
use Carbon\Carbon;
use Auth;

class StaffScheduleController extends Controller
{
    public function doctorSchedule(Request $request)
    {
        $schedules = Schedule::where('user_id', $request->id)->whereDay('schedule_date', '>=', Carbon::now()->day)->get();
        if(count($schedules) > 0){
            return response()->json(['schedule' => $schedules]);
        }
        
        return response()->json(['no_schedules' => 'No available Schedules']);
    }

    public function my_schedules()
    {
        $schedules = Schedule::where('user_id', Auth::user()->id)->whereDay('schedule_date', '>=', Carbon::now()->day)->get();
        if(count($schedules) > 0){
            return response()->json(['schedule' => $schedules]);
        }
        
        return response()->json(['no_schedules' => 'No available Schedules']);
    }


    public function doctorTime(Request $request)
    {
        $timings = Timing::where('schedule_id', $request->id)->where('available', true)->get();
        if(count($timings) > 0){
            return response()->json(['timing' => $timings]);
        }

        return response()->json(['no_timings' => 'No available times']);
        
    }

    public function lab_doctors()
    {
        return User::where('role_id', 4)->get();
    }

    public function doctors()
    {
        return User::where('role_id', 1)->get();
    }

    public function fetch_specialist_schedules(Request $request)
    {
        $schedules = Schedule::with('timings')->where('user_id', $request->id)->whereDay('schedule_date', '>=', Carbon::now()->day)->get();
        if(count($schedules) > 0){
            return response()->json(['schedule' => $schedules]);
        }
        
        return response()->json(['no_schedules' => 'No available Schedules']);
    }
}
