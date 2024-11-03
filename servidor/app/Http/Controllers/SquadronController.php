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
        $army = Army::where('slug', $slug)->first();

        if (!$army) {
            return response()->json(['message' => 'Army not found'], 404);
        }

        $squads = Squadron::where('army_id', $army->id)->get();

        // En lugar de devolver un error 404 si no hay escuadrones, devuelve un array vacío
        return response()->json([
            'data' => $squads,
            'message' => $squads->isEmpty() ? 'No squadrons found for this army' : null
        ]);
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
