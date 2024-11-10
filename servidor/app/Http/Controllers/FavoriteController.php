<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use App\Http\Resources\FavoriteCollection;
use Illuminate\Http\Request;

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
