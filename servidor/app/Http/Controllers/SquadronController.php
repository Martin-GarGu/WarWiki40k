<?php

namespace App\Http\Controllers;

use App\Http\Resources\SquadronCollection;
use App\Http\Resources\SquadronResource;
use App\Models\Squadron;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Army;

class SquadronController extends Controller
{
    public function index()
    {
        $squads = Squadron::all();
        return new SquadronCollection($squads);
    }

    public function getByArmyId(string $slug)
    {
        // Obtener el ejército correspondiente al slug
        $army = Army::where('slug', $slug)->first();

        // Si no se encuentra el ejército, responder con error 404
        if (!$army) {
            return response()->json(['message' => 'Army not found'], 404);
        }

        // Obtener los escuadrones correspondientes al army_id
        $squads = Squadron::where('army_id', $army->id)->get();

        // Manejar la respuesta si no se encuentran escuadrones
        if ($squads->isEmpty()) {
            return response()->json(['message' => 'No squadrons found for this army'], 404);
        }

        // Retornar la colección de escuadrones
        return new SquadronCollection($squads);
    }


    public function store(Request $request)
    {
        $squad = $request->all();
        $slug = Str::slug($squad['name']);
        $squad['slug'] = $slug;
        return Squadron::create($squad);
    }

    public function update(Request $request, Squadron $squad)
    {
        $squad->update($request->all);
        return new SquadronResource($squad);
    }

    public function destroy(string $id)
    {
        $squad = Squadron::find($id);
        $squad->delete();
        return "Squadron deleted";
    }
}
