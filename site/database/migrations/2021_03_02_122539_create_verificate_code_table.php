<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVerificateCodeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
            Schema::create('verificate_codes', function (Blueprint $table) {
                $table->id();
                $table->integer('user_id');
                $table->string('code');
                $table->integer('status')->default(0);
                $table->timestamps();
// $2y$10$3mS2hzvTr/jngU8YTCvVqeQbzBFFSbar29S59dRSnO8Ykek4.WBFG
            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('verificate_code');
    }
}
