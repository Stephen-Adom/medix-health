<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Patient;
use App\Faecal;
use App\User;

class FaecalInfection extends Model
{
    protected $fillable = ['faecal_id', 'patient_id', 'user_id', 'infection', 'occult_blood', 'bile', 'wbc', 'rbc', 'sugar', 'mucus', 'ph'];

    public function faecal()
    {
        return $this->belongsTo(Faecal::class, 'faecal_id');
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
