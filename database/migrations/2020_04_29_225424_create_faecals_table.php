<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFaecalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('faecals', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('ordering_dr');
            $table->string('status');
            $table->string('physician_copy');
            $table->string('spec')->unique();
            $table->dateTime('collection_date');
            $table->dateTime('collection_time');
            $table->dateTime('received_date');
            $table->dateTime('received_time');
            $table->string('specimen');
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
        Schema::dropIfExists('faecals');
    }
}
