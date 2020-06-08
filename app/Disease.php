<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Patient;
use App\Blood;
use App\User;

class Disease extends Model
{
    protected $fillable = ['blood_id', 'patient_id', 'user_id', 'chlamydia', 'gonorrhea', 'herpes', 'hiv', 'syphilis'];

    public function blood()
    {
        return $this->belongsTo(Blood::class, 'blood_id');
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
