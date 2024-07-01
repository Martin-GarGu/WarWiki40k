<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('soldiers', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('slug')->unique();
            $table->longText('description');
            $table->string('image')->nullable();
            $table->foreignId('squadron_id');
            $table->foreign('squadron_id')->references('id')->on('squads')->onDelete('cascade');
            $table->string('m');
            $table->integer('apl');
            $table->integer('ga');
            $table->integer('df');
            $table->string('sv');
            $table->integer('w');
            $table->string('base');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('soldiers');
    }
};
