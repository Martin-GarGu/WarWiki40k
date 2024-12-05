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

    public function getSquadBySlug(string $slug)
    {
        // Buscar el escuadrón por el `slug`
        $squad = Squadron::where('slug', $slug)->first();

        // Verificar si el escuadrón fue encontrado
        if (!$squad) {
            return response()->json(['message' => 'Squad not found'], 404);
        }

        // Retorna el escuadrón encontrado
        return response()->json($squad);
    }


    public function store(Request $request)
    {
        $squad = $request->all();
        $slug = Str::slug($squad['name']);
        $squad['slug'] = $slug;
        return Squadron::create($squad);
    }

    public function updateById(Request $request, $id)
    {
        
        $squad = Squadron::findOrFail($id);

        // Actualiza los campos de la facción con los datos proporcionados
        $squad->name = $request->input('name', $squad->name); // Usa el valor del request o deja el actual
        $squad->description = $request->input('description', $squad->description);
        $squad->image = $request->input('image', $squad->image);
        $squad->army_id = $request->input('army_id',$squad->army_id);

        // Actualiza el slug basado en el nuevo nombre
        $squad->slug = Str::slug($squad->name);

        // Guarda los cambios
        $squad->save();

        // Devuelve la facción actualizada como respuesta
        return new SquadronResource($squad);
    }

    public function destroy(string $id)
    {
        $squad = Squadron::find($id);
        $squad->delete();
        return "Squadron deleted";
    }
}
