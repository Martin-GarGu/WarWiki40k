<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Soldier;
use App\Http\Resources\SoldierCollection;
use Illuminate\Support\Str;
use App\Http\Resources\SoldierResource;
use App\Models\Squadron;

class SoldierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $soldiers = Soldier::with(['weapons.specialRules', 'keywords'])->get();

        return new SoldierCollection($soldiers);
    }

    // public function getBySquadronSlug(string $slug)
    // {
    //     $squadron = Squadron::where('slug', $slug)->first();

    //     if (!$squadron) {
    //         return response()->json(['message' => 'Army not found'], 404);
    //     }

    //     $soldiers = Soldier::where('squadron_id', $squadron->id)->with(['weapons.specialRules', 'keywords'])->get();

    //     // En lugar de devolver un error 404 si no hay escuadrones, devuelve un array vacío
    //     return response()->json([
    //         'data' => SoldierResource::collection($soldiers),
    //         'message' => $soldiers->isEmpty() ? 'No squadrons found for this army' : null
    //     ]);
    // }

    public function getBySquadronSlug(string $slug)
    {
        // Buscar el escuadrón por el slug
        $squadron = Squadron::where('slug', $slug)->first();

        // Si no se encuentra el escuadrón, devolver 404
        if (!$squadron) {
            return response()->json(['message' => 'Squadron not found'], 404);
        }

        // Buscar los soldados asociados al escuadrón
        $soldiers = Soldier::where('squadron_id', $squadron->id)
            ->with(['weapons.specialRules', 'keywords'])  // Asegúrate de que las relaciones están definidas
            ->get();

        // Si no se encuentran soldados, devolver un mensaje informativo
        if ($soldiers->isEmpty()) {
            return response()->json([
                'data' => [],
                'message' => 'No soldiers found for this squadron'
            ]);
        }

        // Devolver los soldados con los datos requeridos
        return response()->json([
            'data' => SoldierResource::collection($soldiers),
            'message' => null
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
        $soldier = $request->all();
        $slug = Str::slug($soldier['name']);
        $soldier['slug'] = $slug;
        return Soldier::create($soldier);
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
    public function update(Request $request, Soldier $soldier)
    {
        $soldier->update($request->all);
        return new SoldierResource($soldier);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $soldier = Soldier::find($id);
        $soldier->delete();
        return "Soldier deleted";
    }
}
