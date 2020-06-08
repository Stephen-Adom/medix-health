<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Schedule;
use App\Appointment;

class Timing extends Model
{
    protected $fillable = ['schedule_id', 'start_time', 'end_time', 'available'];

    public function schedule()
    {
        return $this->belongsTo(Schedule::class, 'schedule_id');
    }

    public function appointment()
    {
        return $this->hasOne(Appointment::class, 'timing_id');
    }

}
