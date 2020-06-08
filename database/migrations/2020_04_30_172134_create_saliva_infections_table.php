<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSalivaInfectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('saliva_infections', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('saliva_id');
            $table->unsignedBigInteger('patient_id');
            $table->unsignedBigInteger('user_id');
            $table->string('hiv');
            $table->string('cancer');
            $table->string('parasite');
            $table->string('allergies');
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
        Schema::dropIfExists('saliva_infections');
    }
}
