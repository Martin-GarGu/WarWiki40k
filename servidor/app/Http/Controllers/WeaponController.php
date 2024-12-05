<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Weapon;
use App\Http\Resources\WeaponCollection;
use App\Http\Resources\WeaponResource;
use Illuminate\Support\Str;

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
        try {
            $weapon = new Weapon();
            $weapon->name = $request->input('name');
            $weapon->a = $request->input('a');
            $weapon->bs_ws = $request->input('bs_ws');
            $weapon->d = $request->input('d');
            $weapon->type = $request->input('type');
            $weapon->slug = Str::slug($request->input('name'));

            $weapon->save();

            return response()->json([
                'message' => 'Arma creada exitosamente',
                'data' => $weapon
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Hubo un error al crear el arma',
                'error' => $e->getMessage()
            ], 500);
        }
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
        $weapon = Weapon::find($id);
        $weapon->delete();
        return "Weapon deleted";
    }
}
