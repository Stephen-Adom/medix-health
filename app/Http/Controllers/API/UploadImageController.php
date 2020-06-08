<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Storage;
use App\User;
use App\Patient;

class UploadImageController extends Controller
{
    public function save_image(Request $request)
    {
        $user = User::where('id', Auth::user()->id)->first();

        $old_image = $user->image;

        if($request->image != $old_image){

            $image = $request->image; // image base64 encoded
            preg_match("/data:image\/(.*?);/",$image,$image_extension); // extract the image extension
            $image = preg_replace('/data:image\/(.*?);base64,/','',$image); // remove the type part
            $image = str_replace(' ', '+', $image);
            $imageName = 'image_' . time() . '.' . $image_extension[1]; //generating unique file name;
            // \File::put(storage_path(). 'public/profiles/' . $imageName, base64_decode($image));
            // Storage::put($imageName, base64_decode($image), 'public');
            Storage::disk('profiles')->put($imageName,base64_decode($image));

            $request->merge(['image' => $imageName]);
            
            if($old_image){
                Storage::disk('profiles')->delete($old_image);
            }
        }

        $user->update([
            'image' => $imageName
        ]);

        return response()->json(['success' => 'Image Profile Uploaded']);
    }

    public function save_patient_image($id, Request $request)
    {
        $user = Patient::find($id);

        $old_image = $user->image;

        if($request->image != $old_image){

            $image = $request->image; // image base64 encoded
            preg_match("/data:image\/(.*?);/",$image,$image_extension); // extract the image extension
            $image = preg_replace('/data:image\/(.*?);base64,/','',$image); // remove the type part
            $image = str_replace(' ', '+', $image);
            $imageName = 'image_' . time() . '.' . $image_extension[1]; //generating unique file name;
            // \File::put(storage_path(). 'public/profiles/' . $imageName, base64_decode($image));
            // Storage::put($imageName, base64_decode($image), 'public');
            Storage::disk('patient_profiles')->put($imageName,base64_decode($image));

            $request->merge(['image' => $imageName]);
            
            if($old_image){
                Storage::disk('patient_profiles')->delete($old_image);
            }
        }

        $user->update([
            'image' => $imageName
        ]);

        return response()->json(['success' => 'Image Profile Uploaded']);
    }

    public function delete_image($id)
    {
        $user = User::find($id);

        $current_image = $user->image;
        if($current_image){
            $user->update([
                'image' => NULL
            ]);

            Storage::disk('profiles')->delete($current_image);

            return response()->json(['success' => 'Image Removed']);
        }

        return response()->json(['info' => 'No Image Found']);
    }

    public function delete_patient_image($id)
    {
        $user = Patient::find($id);

        $current_image = $user->image;
        if($current_image){
            $user->update([
                'image' => NULL
            ]);

            Storage::disk('patient_profiles')->delete($current_image);

            return response()->json(['success' => 'Image Removed']);
        }

        return response()->json(['info' => 'No Image Found']);
    }
}
