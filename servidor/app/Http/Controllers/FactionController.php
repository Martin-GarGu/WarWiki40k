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
        return new FactionResource(Faction::create($faction));
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
    public function update(UpdateFactionRequest $request, Faction $faction)
    {
        $faction->update($request->all);
        return new FactionResource($faction);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $faction= Faction::find($id);
        $faction->delete();
        return "Faction deleted";
    }
}
