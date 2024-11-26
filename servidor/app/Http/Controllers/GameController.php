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
        $keyword = $request->all();
        return Game::create($keyword);
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
