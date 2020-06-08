<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TimeController extends Controller
{
    public function doctor_schedules()
    {
        $user = User::where('role_id', 1)->first();
        
    }
}
