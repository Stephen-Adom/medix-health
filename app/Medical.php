<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Patient;
use App\Prescription;
use App\User;

class Medical extends Model
{
    protected $fillable = ['user_id','patient_id', 'problem', 'diagnosis', 'notes', 'allergies'];

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function prescriptions()
    {
        return $this->hasMany(Prescription::class, 'medical_id');
    }
}
