<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Squadron extends Model
{
    use HasFactory;
    protected $table = "squads";
    protected $hidden = ['updated_at', 'created_at'];
    protected $fillable = [
        'name',
        'slug',
        'description',
        'image',
        'army_id', //Army its in
    ];
    public function army(){
        return $this->belongsTo(Army::class);
    }
    public function soldiers(){
        return $this->hasMany(Soldier::class);
    }
    public function getRouteKeyName(){
        return 'slug';
    }
}
