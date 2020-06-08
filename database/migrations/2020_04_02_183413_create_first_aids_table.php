<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFirstAidsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('first_aids', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('patient_id');
            $table->dateTime('injury_date');
            $table->dateTime('injury_time');
            $table->dateTime('initial_report_date');
            $table->dateTime('initial_report_time');
            $table->dateTime('follow_up_time');
            $table->dateTime('follow_up_date');
            $table->string('first_witness')->nullable();
            $table->string('second_witness')->nullable();
            $table->mediumText('arrangement');
            $table->string('attendant');
            $table->string('cause');
            $table->mediumText('details');
            $table->mediumText('treatment');
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
        Schema::dropIfExists('first_aids');
    }
}
