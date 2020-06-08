<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Patient;
use App\User;

class Vital extends Model
{
    protected $fillable = ['user_id', 'patient_id', 'weight', 'height', 'systolic', 'diastolic', 'pulse_rate', 'respiratory_rate', 'temperature'];

    public function patients()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
