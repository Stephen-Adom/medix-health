<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

class SpecialityController extends Controller
{
    public function all_doctors()
    {
        $doctors = User::where('role_id', 1)->get();
        return $doctors;
    }

    public function all_labs()
    {
        $doctors = User::where('role_id', 4)->get();
        return $doctors;
    }
}
