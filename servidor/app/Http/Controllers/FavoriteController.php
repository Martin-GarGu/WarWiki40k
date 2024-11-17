<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use App\Http\Resources\FavoriteCollection;
use Illuminate\Http\Request;
use App\Models\Faction;
use App\Models\Army;
use App\Models\Squadron;

class FavoriteController extends Controller
{
    /**
     * Mostrar una lista de los favoritos.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Obtener todos los favoritos
        $favorites = Favorite::all();

        // Devolver la colección de favoritos
        return new FavoriteCollection($favorites);
    }

    /**
     * Crear un nuevo favorito.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validar que los datos necesarios estén presentes en la solicitud
        $request->validate([
            'user_id' => 'required|integer',
            'favorites_id' => 'required|integer',
            'favorites_type' => 'required|string|in:Faction,Army,Squadron',
        ]);

        // Crear un nuevo favorito con los datos proporcionados
        $favorite = Favorite::create([
            'user_id' => $request->user_id,  // ID del usuario que está guardando el favorito
            'favorites_id' => $request->favorites_id,  // ID del favorito (puede ser Faction, Army o Squadron)
            'favorites_type' => $request->favorites_type,  // Tipo del favorito (Faction, Army o Squadron)
        ]);

        // Retornar la respuesta con el nuevo favorito creado
        return response()->json([
            'message' => 'Favorite created successfully',
            'data' => $favorite
        ], 201);
    }

    /**
     * Obtener los favoritos de un usuario específico.
     *
     * @param  int  $userId
     * @return \Illuminate\Http\Response
     */
    public function getByUser(int $userId)
    {
        try {
            // Obtener todos los favoritos del usuario
            $favorites = Favorite::where('user_id', $userId)->get();

            if ($favorites->isEmpty()) {
                return response()->json([
                    'data' => [],
                    'message' => 'No tienes favoritos todavía.'
                ], 200);
            }

            // Procesar favoritos y obtener nombres según el tipo
            $result = $favorites->map(function ($favorite) {
                $name = 'No disponible';

                // Consultar el nombre basado en el tipo
                if ($favorite->favorites_type === 'Faction') {
                    $faction = Faction::find($favorite->favorites_id);
                    $name = $faction ? $faction->name : $name;
                } elseif ($favorite->favorites_type === 'Army') {
                    $army = Army::find($favorite->favorites_id);
                    $name = $army ? $army->name : $name;
                } elseif ($favorite->favorites_type === 'Squadron') {
                    $squadron = Squadron::find($favorite->favorites_id);
                    $name = $squadron ? $squadron->name : $name;
                }

                return [
                    'id' => $favorite->id,
                    'user_id' => $favorite->user_id,
                    'favorites_id' => $favorite->favorites_id,
                    'favorites_type' => $favorite->favorites_type,
                    'name' => $name,
                ];
            });

            return response()->json([
                'data' => $result,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Error al obtener los favoritos',
                'message' => $e->getMessage(),
            ], 500);
        }
    }




    /**
     * Eliminar un favorito.
     *
     * @param  string  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(string $id)
    {
        // Buscar el favorito por su ID
        $favorite = Favorite::find($id);

        if ($favorite) {
            // Eliminar el favorito
            $favorite->delete();

            return response()->json([
                'message' => 'Favorite deleted successfully'
            ]);
        } else {
            return response()->json([
                'message' => 'Favorite not found'
            ], 404);
        }
    }
}
