<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFavoritesTable extends Migration
{
    public function up()
    {
        Schema::create('favorites', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->unsignedBigInteger('favorites_id');  // ID de la entidad favorita
            $table->string('favorites_type');            // Tipo de la entidad favorita (Faction, Army, Squadron)
            $table->timestamps();

            // Opcional: índice conjunto para optimizar consultas
            $table->index(['favorites_id', 'favorites_type']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('favorites');
    }
}
