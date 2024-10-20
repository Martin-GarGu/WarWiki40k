<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Army;
use App\Http\Resources\ArmyCollection;
use Illuminate\Support\Str;

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
