<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Patient;
use App\Urine;
use App\User;

class UrineChemical extends Model
{
    protected $fillable = ['urine_id', 'patient_id', 'user_id', 'gravity', 'acidity', 'concentration', 'protein', 'sugar', 'ketones', 'bilirubin', 'nitrites', 'hemoglobin', 'myoglobin', 'leukocyte', 'ascorbic'];


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
