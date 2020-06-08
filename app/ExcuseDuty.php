<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Patient;

class ExcuseDuty extends Model
{
    protected $fillable = ['patient_id', 'start_date', 'end_date', 'reason', 'annual_leave', 'approved', 'approved_by', 'approved_date', 'additional_comment', 'recommendation'];

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }
}
