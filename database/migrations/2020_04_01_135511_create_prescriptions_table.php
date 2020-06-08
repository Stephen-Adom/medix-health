<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePrescriptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prescriptions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('patient_id');
            $table->unsignedBigInteger('medical_id');
            $table->string('drug_name');
            $table->mediumText('dosage');
            $table->dateTime('start_course');
            $table->dateTime('end_course');
            $table->dateTime('morning_time')->nullable();
            $table->dateTime('afternoon_time')->nullable();
            $table->dateTime('evening_time')->nullable();
            $table->boolean('prescribed')->default(false);
            $table->dateTime('prescribed_on')->nullable();
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
        Schema::dropIfExists('prescriptions');
    }
}
