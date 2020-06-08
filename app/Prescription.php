<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Medical;
use App\Patient;

class Prescription extends Model
{
    protected $fillable = ['patient_id', 'medical_id', 'drug_name', 'dosage', 'start_course', 'end_course', 'morning_time', 'afternoon_time', 'evening_time', 'prescribed', 'prescribed_on'];

    public function medical()
    {
        return $this->belongsTo(Medical::class, 'medical_id');
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }
}
