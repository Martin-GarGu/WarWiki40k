<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Weapon;
use App\Http\Resources\WeaponCollection;
use App\Http\Resources\WeaponResource;

class WeaponController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $weapons = Weapon::all();
        return new WeaponCollection($weapons);
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
        $weapon = $request->all();
        return new WeaponResource(Weapon::create($weapon));
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
    public function update(Request $request, Weapon $weapon)
    {
        $weapon->update($request->all);
        return new WeaponResource($weapon);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $weapon=Weapon::find($id);
        $weapon->delete();
        return "Weapon deleted";
    }
}
