<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Appointment;
use App\Vital;
use App\Medical;
use App\Prescription;
use App\FirstAid;
use App\ExcuseDuty;
use App\Referral;
use App\BloodCount;
use App\Metabolic;
use App\Lipoprotein;
use App\Enzyme;
use App\Thyroid;
use App\Coagulation;
use App\Disease;
use App\Serum;
use App\Reactive;
use App\UrineChemical;
use App\Microscopic;
use App\SalivaSteroid;
use App\SalivaInfection;

class Patient extends Model
{
    protected $fillable = ['title' ,'firstname', 'lastname', 'email', 'image', 'dob', 'phone', 'gender', 'address', 'job_title', 'age', 'department', 'employee_type', 'employee', 'referred'];

    public function appointments()
    {
        return $this->hasMany(Appointment::class, 'patient_id');
    }

    public function vitals()
    {
        return $this->hasMany(Vital::class, 'patient_id');
    }

    public function medicals()
    {
        return $this->hasMany(Medical::class, 'patient_id');
    }

    public function prescriptions()
    {
        return $this->hasMany(Prescription::class, 'patient_id');
    }

    public function first_aids()
    {
        return $this->hasMany(FirstAid::class, 'patient_id');
    }

    public function excuse_duties()
    {
        return $this->hasMany(ExcuseDuty::class, 'patient_id');
    }

    public function referral()
    {
        return $this->hasOne(Referral::class, 'patient_id');
    }

    public function blood_counts()
    {
        return $this->hasMany(BloodCount::class, 'patient_id');
    }

    public function metabolics()
    {
        return $this->hasMany(Metabolic::class, 'patient_id');
    }

    public function lipoproteins()
    {
        return $this->hasMany(Lipoprotein::class, 'patient_id');
    }

    public function enzymes()
    {
        return $this->hasMany(Enzyme::class, 'patient_id');
    }

    public function thyroids()
    {
        return $this->hasMany(Thyroid::class, 'patient_id');
    }

    public function coagulations()
    {
        return $this->hasMany(Coagulation::class, 'patient_id');
    }

    public function diseases()
    {
        return $this->hasMany(Disease::class, 'patient_id');
    }

    public function serums()
    {
        return $this->hasMany(Serum::class, 'patient_id');
    }

    public function reactives()
    {
        return $this->hasMany(Reactive::class, 'patient_id');
    }

    public function urine_chemicals()
    {
        return $this->hasMany(UrineChemical::class, 'patient_id');
    }

    public function microscopics()
    {
        return $this->hasMany(Microscopic::class, 'patient_id');
    }

    public function steroid_hormones()
    {
        return $this->hasMany(SalivaSteroid::class, 'patient_id');
    }

    public function steroid_genetics()
    {
        return $this->hasMany(SalivaGenetic::class, 'patient_id');
    }

    public function steroid_infections()
    {
        return $this->hasMany(SalivaInfection::class, 'patient_id');
    }
}
