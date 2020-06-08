<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Role;
use App\Schedule;
use App\Appointment;
use App\User;
use App\Referral;
use App\Medical;
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
use App\SalivaGenetic;
use App\SalivaInfection;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'role_id', 'title' ,'firstname', 'lastname', 'username', 'age', 'dob', 'gender', 'job_title', 'address', 'phone', 'email', 'status', 'username', 'Biodata', 'password', 'image'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function role()
    {
        return $this->belongsTo(Role::class, 'role_id');
    }

    public function schedules()
    {
        return $this->hasMany(Schedule::class, 'user_id');
    }

    public function timings()
    {
        return $this->hasManyThrough('App\Timing', 'App\Schedule');
    }

    public function appointment()
    {
        return $this->hasMany('App\Appointment', 'user_id');
    }

    public function vitals()
    {
        return $this->hasMany(Vital::class, 'user_id');
    }

    public function referrals()
    {
        return $this->hasMany(Referral::class, 'user_id');
    }

    public function medicals()
    {
        return $this->hasMany(Medical::class, 'user_id');
    }

    public function blood_counts()
    {
        return $this->hasMany(BloodCount::class, 'user_id');
    }

    public function metabolics()
    {
        return $this->hasMany(Metabolic::class, 'user_id');
    }

    public function lipoproteins()
    {
        return $this->hasMany(Lipoprotein::class, 'user_id');
    }

    public function enzymes()
    {
        return $this->hasMany(Enzyme::class, 'user_id');
    }

    public function thyroids()
    {
        return $this->hasMany(Thyroid::class, 'user_id');
    }

    public function coagulations()
    {
        return $this->hasMany(Coagulation::class, 'user_id');
    }

    public function diseases()
    {
        return $this->hasMany(Disease::class, 'user_id');
    }

    public function serums()
    {
        return $this->hasMany(Serum::class, 'user_id');
    }

    public function reactives()
    {
        return $this->hasMany(Reactive::class, 'user_id');
    }

    public function urine_chemicals()
    {
        return $this->hasMany(UrineChemical::class, 'user_id');
    }

    public function microscopics()
    {
        return $this->hasMany(Microscopic::class, 'user_id');
    }

    public function steroid_hormones()
    {
        return $this->hasMany(SalivaSteroid::class, 'user_id');
    }

    public function steroid_genetics()
    {
        return $this->hasMany(SalivaGenetic::class, 'user_id');
    }

    public function steroid_infections()
    {
        return $this->hasMany(SalivaInfection::class, 'user_id');
    }
}
