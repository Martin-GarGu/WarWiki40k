<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class WeaponResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' =>$this->id,
            'name' => $this->name,
            'a' => $this->a,
            'bs_ws' => $this->bs_ws,
            'd' => $this->d,
            'type' => $this->type,
            // Solo incluye 'specialRules' si la relación está cargada
            'specialRules' => $this->whenLoaded('specialRules', function () {
                return $this->specialRules->map(function ($specialRule) {
                    return [
                        'id' => $specialRule->id,
                        'name' => $specialRule->name,
                        'description' => $specialRule->description,
                        'type' => $specialRule->pivot->type,
                    ];
                });
            }),
        ];
    }
}


