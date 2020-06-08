<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Saliva;
use App\Patient;
use App\User;

class SalivaInfection extends Model
{
    protected $fillable = ['saliva_id', 'patient_id', 'user_id', 'hiv', 'cancer', 'parasite', 'allergies', 'ph'];

    public function saliva()
    {
        return $this->belongsTo(Saliva::class, 'saliva_id');
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
