<?php

namespace App\Http\Controllers\API;

use App\Jobs\ProcessEmail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Validator;
use Hash;
use Mail;
use App\Mail\NewAccount;

class StaffController extends Controller
{
    public function index()
    {
        $users = User::with('role')->get();
        return response()->json(['success' => $users]);
    }

    public function doctors()
    {
        $users = User::with('role')->where('role_id', 1)->get();
        return response()->json(['success' => $users]);
    }

    public function nurses()
    {
        $users = User::with('role')->where('role_id', 2)->get();
        return response()->json(['success' => $users]);
    }

    public function pharmacists()
    {
        $users = User::with('role')->where('role_id', 3)->get();
        return response()->json(['success' => $users]);
    }

    public function lab_techs()
    {
        $users = User::with('role')->where('role_id', 4)->get();
        return response()->json(['success' => $users]);
    }

    public function managers()
    {
        $users = User::with('role')->where('role_id', 5)->get();
        return response()->json(['success' => $users]);
    }

    public function updateRole($id, Request $request)
    {
        $staff = User::with('role')->where('id', $id)->first();
        $staff->update([
            'role_id' => $request->role
        ]);

        return response()->json(['success' => 'role updated', 'user' => $staff]);
    }

    public function store(Request $request)
    {
        $username = User::where('username', $request->staff['username'])->first();
        if($username){
            return response()->json(['username_error' => 'username already exist']);
        }

        $email = User::where('email', $request->staff['email'])->first();
        if($email){
            return response()->json(['email_error' => 'email already exist']);
        }

        $contact = User::where('phone', $request->staff['phone'])->first();
        if($contact){
            return response()->json(['contact_error' => 'Contact already exist']);
        }

        $user = User::create([
            'role_id' => $request->staff['role'],
            'title' => $request->staff['title'],
            'firstname' => $request->staff['firstname'],
            'lastname' => $request->staff['lastname'],
            'gender' => $request->staff['gender'],
            'email' => $request->staff['email'],
            'dob' => $request->staff['dob'],
            'phone' => $request->staff['phone'],
            'address' => $request->staff['address'],
            'job_title' => $request->staff['job_title'],
            'age' => $request->staff['age'],
            'status' => $request->staff['status'],
            'username' => $request->staff['username'],
            'password' => Hash::make('password')
        ]);
        
        // ProcessEmail::dispatch($user)->onQueue('emails');
        Mail::to($this->user->email)->send(new NewAccount($this->user));

        $new_user = User::with('role')->where('id', $user->id)->first();

        return response()->json(['success' => 'staff added', 'user' => $new_user]);
    }

    public function delete($id)
    {
        $user = User::where('id', $id)->first();
        $user->delete();

        return response()->json(['success' => 'staff deleted']);
    }

    public function deactivate(Request $request)
    {
        $user = User::where('id', $request->id)->first();
        $user->update([
            'status' => 0
        ]);

        return response()->json(['success' => 'account updated']);
    }

    public function activate(Request $request)
    {
        $user = User::where('id', $request->id)->first();
        $user->update([
            'status' => 1
        ]);

        return response()->json(['success' => 'account updated']);
    }

    public function activeStaff()
    {
        $active = User::where('status', true)->count();
        $all = User::count();
        return response()->json(['active'=>$active, 'all' => $all]);
    }
}
