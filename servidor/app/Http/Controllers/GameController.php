<?php

namespace App\Http\Controllers;

use App\Http\Resources\GameCollection;
use App\Models\Game;
use Illuminate\Http\Request;
use App\Http\Resources\GameResource;

class GameController extends Controller
{
    public function store(Request $request)
    {
        // Validación de los datos recibidos
        $request->validate([
            'user1_id' => 'required|exists:users,id',
            'user2_id' => 'required|exists:users,id',
            'winner' => 'required|in:1,2',  // Puede ser 1 o 2 para el ID del ganador
            'points_user1' => 'required|integer',
            'points_user2' => 'required|integer',
        ]);

        // Crear una nueva instancia del modelo Game y asignar los valores
        $game = new Game();
        $game->user1_id = $request->user1_id;
        $game->user2_id = $request->user2_id;
        $game->winner = $request->winner;
        $game->points_user1 = $request->points_user1;
        $game->points_user2 = $request->points_user2;

        // Guardar la partida en la base de datos
        if ($game->save()) {
            return response()->json([
                'message' => 'Partida creada exitosamente.',
                'data' => $game,
            ], 201);
        } else {
            return response()->json([
                'message' => 'Error al crear la partida.',
            ], 500);
        }
    }



    public function index()
    {
        $games = Game::all();
        return new GameCollection($games);
    }

    public function searchById(int $userid)
    {
        try {
            // Buscar los juegos donde el usuario sea user1_id o user2_id
            $games = Game::where('user1_id', $userid)
                ->orWhere('user2_id', $userid)
                ->get();

            // Verificar si hay resultados
            if ($games->isEmpty()) {
                return response()->json([
                    'data' => [],
                    'message' => 'No existe ningún juego asociado a este usuario.'
                ], 200);
            }

            return response()->json([
                'data' => $games
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Error al obtener los juegos',
                'message' => $e->getMessage(),
            ], 500);
        }
    }


    public function update(Request $request, string $id)
    {
        $game = Game::find($id);
        $game->update($request->all());
        return new GameResource($game);
    }
    public function destroy(string $id)
    {
        $keyword = Game::find($id);
        $keyword->delete();
        return "Game deleted";
    }
}
