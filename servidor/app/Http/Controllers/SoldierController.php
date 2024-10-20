<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Soldier;
use App\Http\Resources\SoldierCollection;
use Illuminate\Support\Str;
use App\Http\Resources\SoldierResource;

class SoldierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $soldiers = Soldier::all();
        return new SoldierCollection($soldiers);
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
        $soldier=Soldier::find($id);
        $soldier->delete();
        return "Soldier deleted";
    }
}
