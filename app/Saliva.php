<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\SalivaSteroid;
use App\SalivaGenetic;
use App\SalivaInfection;

class Saliva extends Model
{
    protected $fillable = ['ordering_dr', 'status', 'physician_copy', 'spec', 'collection_date', 'collection_time', 'specimen', 'received_date', 'received_time'];

    public function steroid_hormones()
    {
        return $this->hasMany(SalivaSteroid::class, 'saliva_id');
    }

    public function steroid_genetics()
    {
        return $this->hasMany(SalivaGenetic::class, 'saliva_id');
    }

    public function steroid_infections()
    {
        return $this->hasMany(SalivaInfection::class, 'user_id');
    }
}
