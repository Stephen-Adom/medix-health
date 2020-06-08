<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Drugs extends Model
{
    protected $fillable = ['name', 'quantity', 'expiry_date', 'purchased_date', 'dosage_info', 'category'];
}
