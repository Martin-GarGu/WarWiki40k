<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faction extends Model
{
    use HasFactory;
    protected $table = "factions";
    protected $hidden = ['updated_at', 'created_at'];
    protected $fillable = [
        'name',
        'slug',
        'description',
        'image'
    ];
    public function armies()
    {
        return $this->hasMany(Army::class);
    }
    public function favorites()
    {
        return $this->morphMany(Favorite::class, 'favorites');
    }
    public function getRouteKeyName()
    {
        return 'slug';
    }
}
