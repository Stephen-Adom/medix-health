<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Auth;

class NotificationController extends Controller
{
    public function all_notifications()
    {
        $user = User::where('id', Auth::user()->id)->first();
        return $user->notifications;
    }

    public function unread_notifications()
    {
        $user = User::where('id', Auth::user()->id)->first();
        
        return $user->unreadNotifications;
    }

    public function mark_as_read(Request $request)
    {
        $user = User::where('id', Auth::user()->id)->first();

        foreach ($user->unreadNotifications as $notification) {
            if($notification->id == $request->id){
                $notification->markAsRead();
            }
        }
    }

    public function mark_all_read(Request $request)
    {
        $user = User::where('id', Auth::user()->id)->first();
        $user->unreadNotifications->markAsRead();
        
    }

    public function delete_notifications()
    {
        $user = User::where('id', Auth::user()->id)->first();
        if(count($user->notifications) > 0){
            foreach($user->notifications as $notification){
                $notification->delete();
            }

            return response()->json(['success' => 'messages deleted']);
        }

        return response()->json(['no_messages' => 'no messages']);
    }
}
