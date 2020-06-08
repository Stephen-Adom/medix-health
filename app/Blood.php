<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\BloodCount;
use App\Metabolic;
use App\Lipoprotein;
use App\Enzyme;
use App\Thyroid;
use App\Coagulation;
use App\Disease;
use App\Serum;
use App\Reactive;

class Blood extends Model
{
    protected $fillable = ['ordering_dr', 'status', 'physician_copy', 'spec', 'collection_date', 'collection_time', 'specimen', 'received_date', 'received_time'];

    public function blood_counts()
    {
        return $this->hasMany(BloodCount::class, 'blood_id');
    }

    public function metabolics()
    {
        return $this->hasMany(Metabolic::class, 'blood_id');
    }

    public function lipoproteins()
    {
        return $this->hasMany(Lipoprotein::class, 'blood_id');
    }

    public function enzymes()
    {
        return $this->hasMany(Metabolic::class, 'blood_id');
    }

    public function thyroids()
    {
        return $this->hasMany(Thyroid::class, 'blood_id');
    }

    public function coagulations()
    {
        return $this->hasMany(Coagulation::class, 'blood_id');
    }

    public function diseases()
    {
        return $this->hasMany(Disease::class, 'blood_id');
    }

    public function serums()
    {
        return $this->hasMany(Serum::class, 'blood_id');
    }

    public function reactives()
    {
        return $this->hasMany(Reactive::class, 'blood_id');
    }
}
