<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Soldier extends Model
{
    use HasFactory;
    protected $table = "soldiers";
    protected $hidden =['updated_at','created_at'];
    protected $fillable=[
        'name', // Name of the Soldier
        'slug',
        'image',
        'description', // Description of the soldier
        'squadron_id', // Id of the Squadron the soldier its in
        'm', // Movement
        'apl', // Action Point Limit
        'ga', // Group Action
        'df', // Defence
        'sv', // Save
        'w', // Wounds
        'base' // Base of the Figure
    ];
    public function squadron(){
        return $this->belongsTo(Squadron::class);
    }
    public function weapons(){
        return $this->belongsToMany(Weapon::class);
    }
    public function keywords(){
        return $this->belongsToMany(KeyWord::class,'soldier_keyword','soldier_id','keyword_id');
    }
    public function uniqueactions(){
        return $this->belongsToMany(UniqueAction::class);
    }
    public function abilities(){
        return $this->belongsToMany(Abilitie::class);
    }
    public function getRouteKeyName(){
        return 'slug';
    }
}
