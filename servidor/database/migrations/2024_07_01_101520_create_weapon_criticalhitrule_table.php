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
        Schema::create('weapon_criticalhitrule', function (Blueprint $table) {
            // $table->id();
            $table->foreignId('weapon_id');
            $table->foreignId('criticalhitrule_id');

            $table->foreign('weapon_id')->references('id')->on('weapons')->onDelete('cascade');
            $table->foreign('criticalhitrule_id')->references('id')->on('criticalhitrules')->onDelete('cascade');
            $table->primary(['weapon_id', 'criticalhitrule_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('weapon_criticalhitrule');
    }
};
