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
        'slug',
        'description',
        'image',
        'faction_id' // Faction its in
    ];
    public function squads()
    {
        return $this->hasMany(Squadron::class);
    }
    public function faction()
    {
        return $this->belongsTo(Faction::class);
    }
    public function getRouteKeyName()
    {
        return 'slug';
    }
    public function favorites()
    {
        return $this->morphMany(Favorite::class, 'favorites');
    }
}
