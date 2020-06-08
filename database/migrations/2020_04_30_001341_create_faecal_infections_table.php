<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFaecalInfectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('faecal_infections', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('faecal_id');
            $table->unsignedBigInteger('patient_id');
            $table->unsignedBigInteger('user_id');
            $table->string('infection');
            $table->string('occult_blood');
            $table->string('bile');
            $table->string('wbc');
            $table->string('rbc');
            $table->string('sugar');
            $table->string('mucus');
            $table->string('ph');
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
        Schema::dropIfExists('faecal_infections');
    }
}
