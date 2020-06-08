<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Patient;
use App\Schedule;
use App\Timing;
use App\User;

class Appointment extends Model
{
    protected $fillable = ['patient_id', 'user_id', 'reason', 'schedule_id', 'timing_id', 'completed', 'status', 'scheduled_time', 'scheduled_date', 'completed_time'];

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }

    public function schedule()
    {
        return $this->belongsTo(Schedule::class, 'schedule_id');
    }

    public function timing()
    {
        return $this->belongsTo(Timing::class, 'timing_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function vitals()
    {
        return $this->hasManyThrough('App\Vital', 'App\Patient');
    }
}
