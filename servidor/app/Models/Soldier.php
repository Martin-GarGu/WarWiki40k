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
        'squadron_id', //Id of the Squadron the soldier its in
        'm', // Movement
        'apl', // Action Point Limit
        'ga', // Group Action
        'df', // Defence
        'sv', // Save
        'w', // Wounds
        'base' // Base of the Figure
    ];
}
