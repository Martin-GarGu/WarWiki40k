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
        Schema::create('weapon_specialrule', function (Blueprint $table) {
            // $table->id();
            $table->foreignId('weapon_id');
            $table->foreignId('specialrule_id');

            $table->foreign('weapon_id')->references('id')->on('weapons')->onDelete('cascade');
            $table->foreign('specialrule_id')->references('id')->on('specialrules')->onDelete('cascade');
            $table->primary(['weapon_id', 'specialrule_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('weapon_specialrule');
    }
};
