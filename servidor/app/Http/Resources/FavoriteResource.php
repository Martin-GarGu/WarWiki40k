<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FavoriteResource extends JsonResource
{
    public function toArray($request)
    {
        // Obtener el nombre de la entidad relacionada
        $entityName = null;

        // Revisamos el tipo de la relación
        if ($this->favorites_type === \App\Models\Squadron::class) {
            $entityName = $this->favorites->name;  // Squadron
        } elseif ($this->favorites_type === \App\Models\Army::class) {
            $entityName = $this->favorites->name;  // Army
        } elseif ($this->favorites_type === \App\Models\Faction::class) {
            $entityName = $this->favorites->name;  // Faction
        }

        return [
            'user_id' => $this->user_id,
            'favorites_id' => $this->favorites_id,
            'favorites_type' => $this->favorites_type,
            'entity_name' => $entityName,  // Aquí pasamos el nombre de la entidad favorita
        ];
    }
}
