<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Specialrule;
use App\Http\Resources\SpecialruleCollection;

class SpecialruleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $specialrules = Specialrule::all();
        return new SpecialruleCollection($specialrules);
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
        //
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
        //
    }
}
