<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMicroscopicsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('microscopics', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('urine_id');
            $table->unsignedBigInteger('patient_id');
            $table->unsignedBigInteger('user_id');
            $table->string('rbc');
            $table->string('wbc');
            $table->string('epithelial');
            $table->string('bacteria');
            $table->string('casts');
            $table->string('crystals');
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
        Schema::dropIfExists('microscopics');
    }
}
