<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExcuseDutiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('excuse_duties', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('patient_id');
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->mediumText('reason');
            $table->string('annual_leave');
            $table->boolean('approved')->default(false);
            $table->string('approved_by')->nullable();
            $table->dateTime('approved_date')->nullable();
            $table->mediumText('additional_comment')->nullable();
            $table->boolean('recommendation')->default(false);
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
        Schema::dropIfExists('excuse_duties');
    }
}
