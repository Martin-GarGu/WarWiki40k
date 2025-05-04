<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use App\Http\Resources\FavoriteCollection;
use Illuminate\Http\Request;
use App\Models\Faction;
use App\Models\Army;
use App\Models\Squadron;
use Illuminate\Support\Facades\DB;

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

        // Usar una transacción de base de datos para garantizar la integridad
        return DB::transaction(function () use ($request) {
            // Primero verificar si el favorito ya existe
            $existingFavorite = Favorite::where('user_id', $request->user_id)
                ->where('favorites_id', $request->favorites_id)
                ->where('favorites_type', $request->favorites_type)
                ->first();
            
            // Si ya existe, simplemente retornar ese registro
            if ($existingFavorite) {
                return response()->json([
                    'message' => 'Favorite already exists',
                    'data' => $existingFavorite
                ], 200); // 200 OK en lugar de 201 Created porque no se creó nada nuevo
            }
            
            // Si no existe, crear un nuevo favorito
            $favorite = Favorite::create([
                'user_id' => $request->user_id,
                'favorites_id' => $request->favorites_id,
                'favorites_type' => $request->favorites_type,
            ]);

            // Retornar la respuesta con el nuevo favorito creado
            return response()->json([
                'message' => 'Favorite created successfully',
                'data' => $favorite
            ], 201);
        });
    }

    public function checkFavorite(Request $request)
    {
        // Validar los parámetros requeridos
        $validated = $request->validate([
            'user_id' => 'required|integer|exists:users,id', // Verifica que el user_id exista
            'favorites_id' => 'required|integer',           // ID del favorito (escuadrón)
            'favorites_type' => 'required|string',          // Tipo de favorito
        ]);

        // Buscar en la base de datos si el favorito ya existe
        $isFavorite = Favorite::where('user_id', $validated['user_id'])
            ->where('favorites_id', $validated['favorites_id'])
            ->where('favorites_type', $validated['favorites_type'])
            ->exists();

        // Responder con un JSON
        return response()->json([
            'isFavorite' => $isFavorite,
        ]);
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

            // Procesar favoritos y obtener nombres y slugs según el tipo
            $result = $favorites->map(function ($favorite) {
                $name = 'No disponible';
                $slug = null;

                // Consultar el nombre y el slug basado en el tipo
                if ($favorite->favorites_type === 'Faction') {
                    $faction = Faction::find($favorite->favorites_id);
                    if ($faction) {
                        $name = $faction->name;
                        $slug = $faction->slug;
                    }
                } elseif ($favorite->favorites_type === 'Army') {
                    $army = Army::find($favorite->favorites_id);
                    if ($army) {
                        $name = $army->name;
                        $slug = $army->slug;
                    }
                } elseif ($favorite->favorites_type === 'Squadron') {
                    $squadron = Squadron::find($favorite->favorites_id);
                    if ($squadron) {
                        $name = $squadron->name;
                        $slug = $squadron->slug;
                    }
                }

                return [
                    'id' => $favorite->id,
                    'user_id' => $favorite->user_id,
                    'favorites_id' => $favorite->favorites_id,
                    'favorites_type' => $favorite->favorites_type,
                    'name' => $name,
                    'slug' => $slug, // Incluye el slug
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

    public function removeByUserAndType(Request $request)
    {
        // Validar los parámetros requeridos
        $validated = $request->validate([
            'user_id' => 'required|integer|exists:users,id',
            'favorites_id' => 'required|integer',
            'favorites_type' => 'required|string|in:Faction,Army,Squadron',
        ]);

        // Usar transacción para garantizar la integridad y evitar eliminaciones parciales
        return DB::transaction(function () use ($validated) {
            // Eliminar todos los favoritos que coincidan con los criterios
            // Esto es más seguro que first()->delete() porque elimina todos los posibles duplicados
            $deleted = Favorite::where('user_id', $validated['user_id'])
                ->where('favorites_id', $validated['favorites_id'])
                ->where('favorites_type', $validated['favorites_type'])
                ->delete();

            if ($deleted > 0) {
                return response()->json([
                    'message' => 'Favorite removed successfully',
                    'count' => $deleted // Opcional: informar cuántos registros fueron eliminados
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Favorite not found'
                ], 404);
            }
        });
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