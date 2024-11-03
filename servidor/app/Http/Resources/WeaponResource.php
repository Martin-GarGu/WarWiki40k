<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\SpecialRuleResource;

class WeaponResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'a' => $this->a,
            'bs_ws' => $this->bs_ws,
            'd' => $this->d,
            'type' => $this->type,
            'specialRules' => $this->specialRules->map(function ($specialRule) {
                return [
                    'id' => $specialRule->id,
                    'name'=>$specialRule->name,
                    'description'=>$specialRule->description,
                    'type' => $specialRule->pivot->type, // Campo de la tabla intermedia
                ];
            })
        ];
    }
}
