<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUrineChemicalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('urine_chemicals', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('urine_id');
            $table->unsignedBigInteger('patient_id');
            $table->unsignedBigInteger('user_id');
            $table->string('gravity');
            $table->string('acidity');
            $table->string('concentration');
            $table->string('protein');
            $table->string('sugar');
            $table->string('ketones');
            $table->string('bilirubin');
            $table->string('nitrites');
            $table->string('hemoglobin');
            $table->string('myoglobin');
            $table->string('leukocyte');
            $table->string('ascorbic');
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
        Schema::dropIfExists('urine_chemicals');
    }
}
