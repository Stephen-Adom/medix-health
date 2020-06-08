<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Faecal extends Model
{
    protected $fillable = ['ordering_dr', 'status', 'physician_copy', 'spec', 'collection_date', 'collection_time', 'specimen', 'received_date', 'received_time'];

}
