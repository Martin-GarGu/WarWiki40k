<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;
    protected $table = "games";
    protected $hidden = ['updated_at', 'created_at'];
    protected $fillable = [
        'id_user1', // Id of the user 1
        'id_user2', // Id of the user 2
        'winner', // Id of the winner of the game
        'points_user1', // Points of the user 1
        'points_user2', // Points of the user 2
    ];
    public function user1(){
        return $this->belongsTo(User::class, 'id_user1');
    }
    public function user2(){
        return $this->belongsTo(User::class, 'id_user2');
    }
}
