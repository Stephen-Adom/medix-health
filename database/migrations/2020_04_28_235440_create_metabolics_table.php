<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMetabolicsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('metabolics', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('patient_id');
            $table->unsignedBigInteger('blood_id');
            $table->unsignedBigInteger('user_id');
            $table->string('glucose');
            $table->string('sodium');
            $table->string('potassium');
            $table->string('calcium');
            $table->string('chloride');
            $table->string('dioxide');
            $table->string('nitrogen');
            $table->string('creatinine');
            $table->string('albumin');
            $table->string('protein');
            $table->string('alp');
            $table->string('alt');
            $table->string('ast');
            $table->string('bilirubin');
            $table->string('thromboplastin');
            $table->string('prothrombin');
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
        Schema::dropIfExists('metabolics');
    }
}
