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
        Schema::create('soldier_weapon', function (Blueprint $table) {
            $table->id();
            $table->foreignId('soldier_id');
            $table->foreignId('weapon_id');

            $table->foreign('soldier_id')->references('id')->on('soldiers')->onDelete('cascade');
            $table->foreign('weapon_id')->references('id')->on('weapons')->onDelete('cascade');
            $table->primary(['soldier_id', 'weapon_id']);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('soldier_weapon');
    }
};
