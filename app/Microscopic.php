<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Urine;
use App\Patient;
use App\User;

class Microscopic extends Model
{
    protected $fillable = ['urine_id', 'patient_id', 'user_id', 'rbc', 'wbc', 'epithelial', 'bacteria', 'casts', 'crystals'];

    public function urine()
    {
        return $this->belongsTo(Urine::class, 'urine_id');
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
