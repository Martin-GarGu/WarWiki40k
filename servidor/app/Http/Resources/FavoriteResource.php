<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FavoriteResource extends JsonResource
{
    public function toArray($request)
    {
        // Obtener el nombre de la entidad relacionada (ya sea Faction, Army o Squadron)
        $entityName = null;
        if ($this->favorites) {
            // Verificamos el tipo de entidad favorita y mostramos su nombre
            if ($this->favorites_type === \App\Models\Faction::class) {
                $entityName = $this->favorites->name; // Si es una Faction, mostramos el nombre
            } elseif ($this->favorites_type === \App\Models\Army::class) {
                $entityName = $this->favorites->name; // Si es un Army, mostramos el nombre
            } elseif ($this->favorites_type === \App\Models\Squadron::class) {
                $entityName = $this->favorites->name; // Si es un Squadron, mostramos el nombre
            }
        }

        return [
            'user_id' => $this->user_id,
            'favorites_id' => $this->favorites_id,
            'favorites_type' => $this->favorites_type,
            'entity_name' => $entityName, // Mostramos el nombre de la entidad favorita
        ];
    }
}
