<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Hash;
use Auth;

class AuthController extends Controller
{
    public function authLogin(Request $request)
    {
        $user = User::with('role')->where('username','=', $request->username)->first();
        if(!$user){
            return response()->json(['error' => 'User Account Does not Exit']);
        }elseif($user){
            if($user->status == false){
                return response()->json(['blocked' => 'Account Blocked']);
            }else{
                if($user->role->name == $request->account){
                    if (Hash::check($request->password, $user->password)) {
                        if (Auth::attempt(['username' => $request->username, 'password' => $request->password])) {
                            $request->session()->regenerate();
                            return response()->json(['success' => 'login success']);
                            return redirect()->route('home');
                        }
                    }else{
                        return response()->json(['info' => 'Password Incorrect. Please retype password']);
                    }
                }else{
                    return response()->json(['warning' => 'Wrong Credential for this account!']);
                }
            }

        }
    }

    public function authLogout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        return response()->json(['success' => 'user logout']);
    }

    public function auth()
    {
        return User::with('role')->where('id', Auth::user()->id)->first();
    }

    public function update_auth($id, Request $request)
    {
        $user = User::where('id', Auth::user()->id)->first();
        $user->update([
            'firstname' => $request->user['firstname'],
            'lastname' => $request->user['lastname'],
            'username' => $request->user['username'],
            'age' => $request->user['age'],
            'gender' => $request->user['gender'],
            'phone' => $request->user['phone'],
            'email' => $request->user['email'],
            'dob' => $request->user['dob'],
            'Biodata' => $request->user['biodata']
        ]);

        return response()->json(['success' => 'user account updated']);
    }

    public function verify_password(Request $request)
    {
        $user = User::where('id', Auth::user()->id)->first();
        if (Hash::check($request->password, $user->password)) {
            return response()->json(['success' => 'password matched']);
        }

        return response()->json(['error' => 'password mismatched']);
    }

    public function reset_password(Request $request)
    {
        $user = User::where('id', Auth::user()->id)->first();
        $new_password = Hash::make($request->password);

        $user->update([
            'password' => $new_password
        ]);

        return response()->json(['success' => 'password update success']);
    }
}
