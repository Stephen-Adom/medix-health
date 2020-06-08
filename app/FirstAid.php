<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Patient;

class FirstAid extends Model
{
    protected $fillable = ['patient_id', 'injury_date', 'injury_time', 'arrangement', 'attendant', 'first_witness', 
    'second_witness', 'follow_up_time', 'follow_up_date', 'initial_report_date', 'initial_report_time', 'cause', 'details', 'treatment'];

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }
}
