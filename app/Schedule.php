<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Timing;
use App\User;
use App\Appointment;

class Schedule extends Model
{
    protected $fillable = ['user_id', 'schedule_date'];

    public function timings()
    {
        return $this->hasMany(Timing::class, 'schedule_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function appointment()
    {
        return $this->hasOne(Appointment::class, 'schedule_id');
    }
}
