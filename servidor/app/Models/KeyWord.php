<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KeyWord extends Model
{
    use HasFactory;
    protected $table = "keywords";
    protected $hidden = ['updated_at', 'created_at'];
    protected $fillable = [
        'name',
        'slug',
    ];
    public function soldiers(){
        return $this->belongsToMany(Soldier::class, 'soldier_keyword', 'keyword_id', 'soldier_id');
    }
    public function getRouteKeyName(){
        return 'slug';
    }
}
