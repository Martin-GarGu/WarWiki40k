<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SpecialRule;
use App\Http\Resources\SpecialRuleCollection;
use App\Http\Resources\SpecialRuleResource;
use Illuminate\Support\Str;

class SpecialruleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $specialrules = SpecialRule::all();
        return new SpecialRuleCollection($specialrules);
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
        $specialrule = $request->all();
        $slug = Str::slug($specialrule['name']);
        $specialrule['slug'] = $slug;
        return new SpecialRuleResource(SpecialRule::create($specialrule));
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
    public function update(Request $request, SpecialRule $specialRule)
    {
        $specialRule->update($request->all);
        return new SpecialRuleResource($specialRule);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $specialrule = SpecialRule::find($id);
        $specialrule->delete();
        return "SpecialRule deleted";
    }
}
