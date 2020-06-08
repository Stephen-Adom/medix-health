<?php

namespace App\Http\Controllers\API;

use App\Notifications\DoctorAppointmentNotification;
use App\Notifications\LabAppointmentNotification;
use App\Notifications\RescheduledNotification;
use App\Notifications\AppointmentAcceptedNotification;
use App\Notifications\AppointmentCanceledNotification;
use App\Events\DoctorAppointmentEvent;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Patient;
use App\Appointment;
use App\Schedule;
use App\Timing;
use Carbon\Carbon;
use App\User;
use Auth;
use Notification;

class AppointmentController extends Controller
{
    public function store(Request $request)
    {
        $email = $request->appointment['email'];
        $email_exit = Patient::where('email', $email)->first();
        if($email_exit){
            return response()->json(['email_error' => 'Email entered already exits']);
        }

        $contact_exit = Patient::where('email', $email)->first();
        if($contact_exit){
            return response()->json(['contact_error' => 'Contact entered already exits']);
        }

        $patient = Patient::create([
            'title' => $request->appointment['title'],
            'firstname' => $request->appointment['firstname'],
            'lastname' => $request->appointment['lastname'],
            'email' => $request->appointment['email'],
            'phone' => $request->appointment['phone'],
            'gender' => $request->appointment['gender'],
            'job_title' => $request->appointment['job_title'],
            'dob' => Carbon::parse($request->appointment['dob']),
            'age' => $request->appointment['age'],
            'address' => $request->appointment['address'],
            'department' => $request->appointment['department'],
            'employee_type' => $request->appointment['employee_type']
        ]);
        
            $user = User::where('id', $request->speciality)->first();
            $schedule = Schedule::where('id', $request->appointment_day)->first();
            $timing = Timing::with('schedule')->where('id', $request->appointment_time)->first();

            Appointment::create([
                'patient_id' => $patient->id, 
                'user_id' => $request->speciality,
                'reason' => $request->appointment['appointment_reason'],
                'schedule_id' => $request->appointment_day,
                'timing_id' => $request->appointment_time,
                'scheduled_date' => Carbon::parse($schedule->schedule_date),
                'scheduled_time' => Carbon::parse($timing->start_time)
            ]);

            
            $timing->update([
                'available' => 0
            ]);

            $user->notify(new DoctorAppointmentNotification($timing, $patient));

            // broadcast(new DoctorAppointmentEvent($notification, $user))->toOthers();

        return response()->json(['success' => 'Appointment successfully booked']);
        
    }

    public function book(Request $request)
    {
            $user = User::where('id', $request->speciality)->first();

            $schedule = Schedule::where('id', $request->appointment_day)->first();
            $timing = Timing::where('id', $request->appointment_time)->first();

            Appointment::create([
                'patient_id' => $request->id, 
                'user_id' => $request->speciality,
                'reason' => $request->reason,
                'schedule_id' => $request->appointment_day,
                'timing_id' => $request->appointment_time,
                'scheduled_date' => Carbon::parse($schedule->schedule_date),
                'scheduled_time' => Carbon::parse($timing->start_time)
            ]);

            $timing->update([
                'available' => 0
            ]);

            $patient = Patient::where('id', $request->id)->first();

            $user->notify(new DoctorAppointmentNotification($timing, $patient));

            // broadcast(new DoctorAppointmentEvent($notification, $user))->toOthers();

        return response()->json(['success' => 'Appointment successfully booked']);
    }



    public function allLimitedCreatedAppointment()
    {
        $appointments = Appointment::with('schedule', 'timing', 'user','patient')->whereDate('scheduled_date', '>=', Carbon::today())->where('status', 0)->where('completed', false)->orWhere('status', 1)->where('completed', false)->whereDate('scheduled_date', '>=', Carbon::today())->limit(4)->get();
        return $appointments;
    }

    public function allCreatedAppointment()
    {
        $appointments = Appointment::with('patient', 'schedule', 'timing', 'user')->whereDate('scheduled_date', '>=', Carbon::today())
        ->where('completed',  false)->where('status', 1)->orWhere('status', 0)->whereDate('scheduled_date', '>=', Carbon::today())
        ->where('completed',  false)->get();
        return response()->json(['success' => $appointments]);
    }

    public function allCreatedAppointment_Staff()
    {
        $appointments = Appointment::with('patient', 'schedule', 'timing', 'user')->where('user_id', Auth::user()->id)->whereDate('scheduled_date', '>=', Carbon::today())
        ->where('completed',  false)->where('status', 1)->orWhere('status', 0)->where('user_id', Auth::user()->id)->whereDate('scheduled_date', '>=', Carbon::today())
        ->where('completed',  false)->get();
        return response()->json(['success' => $appointments]);
    }

    public function allAppointmentAnalysis()
    {
        $completed = Appointment::where('completed',  true)->count();
        $pending = Appointment::whereDate('scheduled_date', '>=', Carbon::today())->where('completed',  false)->where('status', 0)->count();
        $accepted = Appointment::where('completed',  false)->where('status', 1)->count();
        $canceled = Appointment::where('status', 2)->orWhere('scheduled_date', '<', Carbon::today())->where('completed', false)->count();
        return response()->json(['completed' => $completed, 'pending' => $pending, 'accepted' => $accepted, 'canceled' => $canceled]);
    }

    public function completedAppointment()
    {
        $appointments = Appointment::with('patient', 'schedule', 'timing')->where('user_id', Auth::user()->id)
        ->where('completed',  true)->where('status', true)->get();
        return $appointments;
    }

    public function updateStatus($id)
    {
        $appointment = Appointment::with('patient', 'user')->where('id', $id)->first();
        $appointment->update([
            'status' => 1
        ]);
        
        $users = User::where('role_id', 2)->get();
        
        Notification::send($users, new AppointmentAcceptedNotification($appointment));

        return response()->json(['success' =>'appointment status updated']);
    }

    public function cancel_appointment($id)
    {
        $appointment = Appointment::with('patient', 'user')->where('id', $id)->first();
        $appointment->update([
            'status' => 2
        ]);
        
        $users = User::where('role_id', 2)->get();
        
        Notification::send($users, new AppointmentCanceledNotification($appointment));

        return response()->json(['success' =>'appointment status updated']);
    }

    public function reschedule($id, Request $request)
    {
        $appointment = Appointment::where('id', $id)->first();
        $appointment->update([
            'schedule_id' => $request->appointment_day,
            'timing_id' => $request->appointment_time
        ]);

        $timing = Timing::where('id', $request->appointment_time)->first();
        $timing->update([
            'available' => 0
        ]);

        $users = User::where('role_id', 2)->get();

        $patient = Patient::where('id', $appointment->patient_id)->first();

        Notification::send($users, new RescheduledNotification($timing, $patient));

        return response()->json(['success'=> 'appointment reschedule completed']);
    }

    public function manage_reschedule($id, Request $request)
    {
        $appointment = Appointment::where('id', $id)->first();
        $appointment->update([
            'schedule_id' => $request->appointment_day,
            'timing_id' => $request->appointment_time,
            'user_id' => $request->speciality
        ]);

        $timing = Timing::where('id', $request->appointment_time)->first();
        $timing->update([
            'available' => 0
        ]);

        $users = User::where('role_id', 2)->get();

        $patient = Patient::where('id', $appointment->patient_id)->first();

        Notification::send($users, new RescheduledNotification($timing, $patient));

        return response()->json(['success'=> 'appointment reschedule completed']);
    }


    public function acceptedAppointment()
    {

        $appointments = Appointment::with('patient', 'schedule', 'timing', 'user')->where('user_id', Auth::user()->id)->where('status', 1)->get();
        return response()->json(['success' => $appointments]);
    }

    public function limitedAppointment()
    {
        $appointments = Appointment::with('patient', 'schedule', 'timing')->where('user_id', Auth::user()->id)->whereDate('scheduled_date', '>=', Carbon::today())->where('completed', false)->where('status', 0)->limit(5)->get();
        return $appointments;

        
    }

    public function medicAppointment()
    {
        $appointments = Appointment::with('patient', 'schedule', 'timing')->where('user_id', Auth::user()->id)
        ->where('completed',  false)->get();
        return $appointments;
    }

    public function completed($id)
    {
        $appointment = Appointment::where('id', $id)->first();
        $appointment->update([
            'completed' => true,
            'completed_time' => Carbon::now(),
        ]);

        return response()->json(['success'=> 'appointment completed']);
    }

    public function deleted($id)
    {
        $appointment = Appointment::where('id', $id)->first();
        $appointment->delete();

        return response()->json(['success'=> 'appointment deleted']);
    }

    public function clearAll()
    {
        $appointments = Appointment::where('user_id', Auth::user()->id)->where('completed',  true)->where('status', true)->get();
        foreach($appointments as $data){
            $data->delete();
        }

        return response()->json(['success'=> 'all appointment cleared']);
    }

    public function today_appointment()
    {
        $appointments = Appointment::with('patient', 'schedule', 'timing', 'user')->where('user_id', Auth::user()->id)
        ->where('completed',  false)->where('status', false)->whereDate('scheduled_date', Carbon::today())->get();
        
        return response()->json(['success' => $appointments]);
    }

    public function upcoming_appointment()
    {
        $appointments = Appointment::with('patient', 'schedule', 'timing', 'user')->where('user_id', Auth::user()->id)
        ->where('completed',  false)->where('status', false)->whereDate('scheduled_date', '>', Carbon::today())->get();
        
        return response()->json(['success' => $appointments]);
    }

    public function canceled_appointment()
    {
        $appointments = Appointment::with('patient', 'schedule', 'timing', 'user')->where('user_id', Auth::user()->id)->where('status', 2)->orWhere('scheduled_date', '<', Carbon::today())->where('completed', false)->where('user_id', Auth::user()->id)->get();
        
        return response()->json(['success' => $appointments]);
    }

    public function completed_appointment()
    {
        $appointments = Appointment::with('patient', 'schedule', 'timing', 'user')->where('user_id', Auth::user()->id)
        ->where('completed',  true)->get();
        
        return response()->json(['success' => $appointments]);
    }

    public function all_today_appointment()
    {
        $appointments = Appointment::with('patient', 'schedule', 'timing', 'user')
        ->where('completed',  false)->where('status', false)->whereDate('scheduled_date', Carbon::today())->get();
        
        return response()->json(['success' => $appointments]);   
    }

    public function all_upcoming_appointment()
    {
        $appointments = Appointment::with('patient', 'schedule', 'timing', 'user')
        ->where('completed',  false)->where('status', false)->whereDate('scheduled_date', '>', Carbon::today())->get();
        
        return response()->json(['success' => $appointments]);
    }

    public function all_canceled_appointment()
    {
        $appointments = Appointment::with('patient', 'schedule', 'timing', 'user')->where('status', 2)->orWhere('scheduled_date', '<', Carbon::today())->where('completed', false)->get();
        
        return response()->json(['success' => $appointments]);
    }

    public function all_completed_appointment()
    {
        $appointments = Appointment::with('patient', 'schedule', 'timing', 'user')->where('completed',  true)->get();
        
        return response()->json(['success' => $appointments]);
    }
}
