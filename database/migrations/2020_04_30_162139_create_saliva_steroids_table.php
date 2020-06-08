<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSalivaSteroidsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('saliva_steroids', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('saliva_id');
            $table->unsignedBigInteger('patient_id');
            $table->unsignedBigInteger('user_id');
            $table->string('estrogen');
            $table->string('progesterone');
            $table->string('testosterone');
            $table->string('cortisol');
            $table->string('melatonin');
            $table->string('dea');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('saliva_steroids');
    }
}
