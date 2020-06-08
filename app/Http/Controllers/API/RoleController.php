<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Role;
use Validator;

class RoleController extends Controller
{
    public function index()
    {
        $roles = Role::with('users')->get();
        return $roles;
    }

    public function store(Request $request)
    {
        $data = [
            'name' => $request->roles['name'],
            'description' => $request->roles['description']
        ];

        $validator = Validator::make($request->all(), $data);

        if ($validator->fails()) {
            return response()->json(['error' => $validator]);
        }

        $role = Role::create($data);

        return response()->json(['success' => 'role added', 'role' => $role]);

    }

    public function editRole(Request $request)
    {

        $id = $request->roles['id'];

        $role = Role::where('id', $id)->first();
        $role->update([
            'name' => $request->roles['name'],
            'description' => $request->roles['description']
        ]);

        return response()->json(['success' => 'role updated']);
    }

    public function delete($id)
    {
        $role = Role::where('id', $id)->first();
        $role->delete();
    }
}
