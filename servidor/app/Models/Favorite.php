<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    use HasFactory;

    protected $table = "favorites";
    protected $hidden = ['updated_at', 'created_at'];
    protected $fillable = [
        'user_id',
        'favorites_id',    // ID de la entidad favorita
        'favorites_type',   // Tipo de la entidad favorita (Faction, Army, Squadron)
    ];

    // Relación polimórfica que permite asociarse a múltiples modelos
    // Relación con Squadron
    public function squadron()
    {
        return $this->belongsTo(Squadron::class, 'favorites_id')->where('favorites_type', 'Squadron');
    }

    // Relación con Army
    public function army()
    {
        return $this->belongsTo(Army::class, 'favorites_id')->where('favorites_type', 'Army');
    }

    // Relación con Faction
    public function faction()
    {
        return $this->belongsTo(Faction::class, 'favorites_id')->where('favorites_type', 'Faction');
    }
}
