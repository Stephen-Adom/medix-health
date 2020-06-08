<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Blood;
use App\Patient;
use App\User;

class Thyroid extends Model
{
    protected $fillable = ['blood_id', 'patient_id', 'user_id', 't3', 'ru', 't4', 'ts'];

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
