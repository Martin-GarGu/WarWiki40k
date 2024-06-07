<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Army extends Model
{
    use HasFactory;
    protected $table = "armies";
    protected $hidden = ['updated_at', 'created_at'];
    protected $fillable = [
        'name',
        'description',
        'image',
        'faction_id' // Faction its in
    ];
}
