<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\UrineChemical;
use App\Microscopic;

class Urine extends Model
{
    protected $fillable = ['ordering_dr', 'status', 'physician_copy', 'spec', 'collection_date', 'collection_time', 'specimen', 'received_date', 'received_time', 'color', 'clarity'];

    public function chemicals()
    {
        return $this->hasMany(UrineChemical::class, 'urine_id');
    }

    public function microscopics()
    {
        return $this->hasMany(Microscopic::class, 'urine_id');
    }
}
