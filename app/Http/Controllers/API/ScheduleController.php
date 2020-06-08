<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use App\Schedule;
use App\Timing;
use Validator;
use Carbon\Carbon;

class ScheduleController extends Controller
{
    public function fetchSchedules()
    {
        $schedules = Schedule::with('timings')->where('user_id', Auth::user()->id)->whereDay('schedule_date', '>=', Carbon::now()->day)->get();
        return $schedules;
    }

    public function fetchPreviousSchedules()
    {
        $schedules = Schedule::with('timings')->where('user_id', Auth::user()->id)->whereDay('schedule_date', '<', Carbon::now()->day)->get();
        return $schedules;
    }

    public function store(Request $request)
    {
       $validator = Validator::make($request->all(), [
           'date' => 'required|date',
           'start' => 'required'
       ]);

       if($validator->fails()){
           return response()->json(['error' => 'Schedule date required']);
       }

       $schedule = Schedule::where('user_id', Auth::user()->id)->whereDate('schedule_date', request('date'))->first();
       if($schedule){
           $timing = Timing::where('schedule_id', $schedule->id)->whereTime('start_time', request('start'))->first();
           if($timing){
               return response()->json(['time_error' => 'Time entered already exist for the date selected']);
           }
            $schedule->timings()->create([
                'schedule_id' => $schedule->id,
                'start_time' => Carbon::parse(request('start')),
                'end_time' => Carbon::parse(request('end'))
            ]);

            return response()->json(['success_time' => 'New time add to the date scheduled']);
       }

       $newSchedule = Schedule::create([
            'user_id' => Auth::user()->id,
           'schedule_date' => Carbon::parse(request('date'))
       ]);

       $newSchedule->timings()->create([
            'schedule_id' => $newSchedule->id,
            'start_time' => Carbon::parse(request('start')),
            'end_time' => Carbon::parse(request('end'))
       ]);

       $schedule_time = Schedule::with('timings')->where('id', $newSchedule->id)->first();

       return response()->json(['success' => $schedule_time]);



    }

    public function delete(Request $request)
    {
        $schedule_id = $request->schedule;

        $time = Timing::where('id', $request->id)->first();
        $time->delete();

        $schedules = Schedule::with('timings')->where('id', $schedule_id)->where('user_id', Auth::user()->id)->first();
        if(count($schedules->timings) == 0){
            $schedules->delete();
        }


        return response()->json(['success' => 'schedule deleted']);
    }

    public function deleteSchedule(Request $request)
    {
        $schedule = Schedule::with('timings')->where('id', $request->id)->where('user_id', Auth::user()->id)->first();
        if($schedule){
            if(count($schedule->timings) > 0){
                foreach($schedule->timings as $timing){
                    $timing->delete();
                }
            }
            $schedule->delete();
        }

        return response()->json(['success' => 'Schedules deleted']);
    }

    public function deleteAllPreviousSchedules()
    {
        $schedules = Schedule::with('timings')->where('user_id', Auth::user()->id)->whereDay('schedule_date', '<', Carbon::now()->day)->get();
        if(count($schedules) > 0){
            foreach($schedules as $schedule){
                if(count($schedule->timings) > 0){
                    foreach($schedule->timings as $timing){
                        $timing->delete();
                    }
                }
                $schedule->delete();
            }
            return response()->json(['success' => 'All Schedules cleared']);  
        }

        return response()->json(['no_schedules' => 'No Schedules Available']);   
    }
}
