<?php

use App\Http\Controllers\FactionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArmyController;
use App\Http\Controllers\SoldierController;
use App\Http\Controllers\SpecialruleController;
use App\Http\Controllers\WeaponController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/factions', [FactionController::class, 'index']);
Route::get('/armys', [ArmyController::class, 'index']);
Route::get('/soldiers', [SoldierController::class, 'index']);
Route::get('/weapons', [WeaponController::class, 'index']);
Route::get('/specialrules', [SpecialruleController::class, 'index']);