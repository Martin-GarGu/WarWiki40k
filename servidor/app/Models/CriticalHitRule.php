<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CriticalHitRule extends Model
{
    use HasFactory;
    protected $table = "criticalhitrules";
    protected $hidden =['updated_at','created_at'];
    protected $fillable=[
        'name', // Name of the Special Rule
        'slug',
        'description', // Description of the Special Rule
    ];
    public function weapons(){
        return $this->belongsToMany(Weapon::class);
    }
}
