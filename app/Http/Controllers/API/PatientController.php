<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Patient;
use App\Appointment;
use App\Vital;
use Carbon\Carbon;

class PatientController extends Controller
{
    public function index()
    {
        $patients = Patient::with('appointments')->orderBy('created_at', 'desc')->get();
        return $patients;
    }

    public function male_index()
    {
        $patients = Patient::with('appointments')->where('gender', 'Male')->orderBy('created_at', 'desc')->get();
        return $patients;
    }

    public function female_index()
    {
        $patients = Patient::with('appointments')->where('gender', 'Female')->orderBy('created_at', 'desc')->get();
        return $patients;
    }

    public function patient_category()
    {
        $male = Patient::where('gender', 'Male')->where('referred', false)->count();
        $female = Patient::where('gender', 'Female')->where('referred', false)->count();
        $referred = Patient::where('referred', true)->count();

        return response()->json(['male' => $male, 'female' => $female, 'referred' => $referred]);
    }

    public function appointmentHistory(Request $request)
    {
        $history = Appointment::with('user', 'timing', 'schedule')->where('patient_id', $request->id)->orderBy('created_at', 'desc')->get();
        return $history;
    }

    public function newPatient(Request $request)
    {
        $email = Patient::where('email',  $request->patient['email'])->first();
        if($email){
            return response()->json(['error' => 'Email entered already exist']);
        }

        $contact = Patient::where('phone',  $request->patient['contact'])->first();
        if($contact){
            return response()->json(['contact_error' => 'Contact entered already exist']);
        }

        $patient = Patient::create([
            'title' => $request->patient['title'],
            'firstname' => $request->patient['firstname'],
            'lastname' => $request->patient['lastname'],
            'email' => $request->patient['email'],
            'phone' => $request->patient['contact'],
            'gender' => $request->patient['sex'],
            'job_title' => $request->patient['job_title'],
            'dob' => Carbon::parse($request->patient['dob']),
            'age' => $request->patient['age'],
            'department' => $request->patient['department'],
            'employee_type' => $request->patient['employee_type'],
            'address' => $request->patient['address']
        ]);

        return response()->json(['success' => 'new patient added', 'patient'=> $patient]);
    }

    public function update_patient($id, Request $request)
    {
        $patient = Patient::with('appointments')->where('id', $id)->first();
        if($patient){
            $patient->update([
                'title' => $request->title,
                'firstname' => $request->firstname,
                'lastname' => $request->lastname,
                'age' => $request->age,
                'phone' => $request->contact,
                'job_title' => $request->job_title,
                'gender' => $request->sex,
                'email' => $request->email,
                'employee' => $request->employee,
                'dob' => $request->dob,
                'department' => $request->department,
                'employee_type' => $request->employee_type
            ]);
    
            return response()->json(['success' => 'information updated', 'patient' => $patient]);
        }

        return response()->json(['error' => 'error']);
        
    }

    public function vitalHistory(Request $request)
    {
        $vitals = Vital::with('user')->where('patient_id', $request->id)->get();
        return $vitals;
    }

    public function patient_vitals()
    {
        $patients = Patient::with('vitals')->orderBy('created_at', 'desc')->get();
        return $patients;
    }

    public function date_range_vitals(Request $request)
    {
        $vitals = Vital::where('patient_id', $request->id)
        ->whereBetween('created_at', [Carbon::parse($request->start), Carbon::parse($request->end)])->get();
        return $vitals;
    }

    public function patients_medical_history(Request $request)
    {
        $patients = Patient::with('medicals')->orderBy('created_at', 'desc')->get();
        return $patients;
    }
    
    public function delete_account($id)
    {
        $patient = Patient::find($id);
        if($patient){
            $patient->delete();
            return response()->json(['success' => 'Patient Account Deleted']);
        }

        return response()->json(['error' => 'Patient Account Not Found']);
    }


}
