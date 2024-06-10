<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Weapon extends Model
{
    use HasFactory;
    protected $table = "weapons";
    protected $hidden =['updated_at','created_at'];
    protected $fillable=[
        'name', // Name of the Weapon
        'slug',
        'a', // Attack
        'bs-ws', // Ballistic Skill or Weapon Skill
        'd', // Damage
        'sv', // Save
        't', // Tipe of weapon
    ];
    public function soldiers(){
        return $this->belongsToMany(Soldier::class);
    }
    public function getRouteKeyName(){
        return 'slug';
    }
}
