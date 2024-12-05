<?php

namespace App\Http\Controllers;

use App\Http\Resources\FactionCollection;
use App\Models\Faction;
use Illuminate\Http\Request;
use App\Http\Resources\FactionResource;
use App\Http\Requests\UpdateFactionRequest;
use Illuminate\Support\Str;

class FactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $factions = Faction::all();
        return new FactionCollection($factions);
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
        $faction = $request->all();
        $slug = Str::slug($faction['name']);
        $faction['slug'] = $slug;
        $imagePath = asset('storage/app/public/factionImages/' . $faction['image']);
        $faction['image'] = $imagePath;
        return new FactionResource(Faction::create($faction));
    }

    public function getbySlug(string $slug)
    {
        $faction = Faction::where('slug', $slug)->first();
        return new FactionResource($faction);
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
    public function updateById(Request $request, $id)
    {
        // Busca la facción por su ID
        $faction = Faction::findOrFail($id); // Lanza un error 404 si no encuentra la facción

        // Actualiza los campos de la facción con los datos proporcionados
        $faction->name = $request->input('name', $faction->name); // Usa el valor del request o deja el actual
        $faction->description = $request->input('description', $faction->description);
        $faction->image = $request->input('image', $faction->image);

        // Actualiza el slug basado en el nuevo nombre
        $faction->slug = Str::slug($faction->name);

        // Guarda los cambios
        $faction->save();

        // Devuelve la facción actualizada como respuesta
        return new FactionResource($faction);
    }




    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $faction = Faction::find($id);
        $faction->delete();
        return "Faction deleted";
    }
}
