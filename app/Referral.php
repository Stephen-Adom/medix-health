<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Referral extends Model
{
    protected $fillable = ['patient_id', 'user_id', 'referred_reason', 'surgery', 'diagnosis', 'medication', 'referred_from', 'referred_date', 'referred_to', 'referred_hospital'];

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
