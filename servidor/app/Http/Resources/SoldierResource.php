<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\WeaponResource;
use App\Http\Resources\KeyWordsResource;

class SoldierResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' =>$this->id,
            'name' => $this->name,
            'description' => $this->description,
            'image' => $this->image,
            'squadron_id' => $this->squadron_id,
            'm' => $this->m,
            'apl' => $this->apl,
            'ga' => $this->ga,
            'df' => $this->df,
            'sv' => $this->sv,
            'w' => $this->w,
            'base' => $this->base,
            'weapons' => WeaponResource::collection($this->whenLoaded('weapons')),
            'keywords' => KeyWordsResource::collection($this->whenLoaded('keywords')),
        ];
    }
}
