<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class GameResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'user1_id'=>$this->user1_id,
            'user2_id'=>$this->user2_id,
            'winner'=>$this->winner,
            'points_user1'=>$this->points_user1,
            'points_user2'=>$this->points_user2,
        ];
    }
}
