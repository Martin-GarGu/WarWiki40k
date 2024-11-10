<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Army;
use App\Http\Resources\ArmyCollection;
use Illuminate\Support\Str;
use App\Models\Faction;

class ArmyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $armys = Army::all();
        return new ArmyCollection($armys);
    }

    public function getByFaction(Request $request, string $id)
    {
        // Validar que el ID de la facción exista
        if (!Faction::find($id)) {
            return response()->json(['message' => 'Faction not found'], 404);
        }

        // Obtener ejércitos por ID de facción
        $armies = Army::where('faction_id', $id)->get();

        // Manejar la respuesta si no se encuentran ejércitos
        if ($armies->isEmpty()) {
            return response()->json(['message' => 'No armies found for this faction'], 404);
        }

        return new ArmyCollection($armies);
    }


    public function getArmyBySlug(string $slug){
        // Intentamos encontrar el ejército por el slug
        $army = Army::where('slug', $slug)->first();

        // Si no se encuentra el ejército, retornamos un error
        if (!$army) {
            return response()->json(['message' => 'Army not found'], 404);
        }

        // Si lo encontramos, retornamos los datos del ejército
        return response()->json([
            'data' => $army
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $army = $request->all();
        $slug = Str::slug($army['name']);
        $army['slug'] = $slug;
        return Army::create($army);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $army = Army::find($id);
        $army->delete();
        return "Army deleted";
    }
}
