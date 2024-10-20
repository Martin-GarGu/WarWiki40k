<?php

use App\Http\Controllers\FactionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArmyController;
use App\Http\Controllers\SoldierController;
use App\Http\Controllers\SpecialruleController;
use App\Http\Controllers\WeaponController;
use App\Http\Controllers\GameController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/factions', [FactionController::class, 'index']);
Route::get('/armys', [ArmyController::class, 'index']);
Route::get('/soldiers', [SoldierController::class, 'index']);
Route::get('/weapons', [WeaponController::class, 'index']);
Route::get('/specialrules', [SpecialruleController::class, 'index']);
Route::get('/games', [GameController::class, 'index']);

Route::post('/factions/create',[FactionController::class,'store']);
Route::post('/armys/create',[ArmyController::class,'store']);
Route::post('/soldiers/create',[SoldierController::class,'store']);
Route::post('/weapons/create',[WeaponController::class,'store']);
Route::post('/specialrules/create',[SpecialruleController::class,'store']);
Route::post('/games/create',[GameController::class,'store']);

Route::put('/factions/{faction}',[FactionController::class,'update']);
Route::put('/armys/{army}',[ArmyController::class,'update']);
Route::put('/soldiers/{soldier}',[SoldierController::class,'update']);
Route::put('/weapons/{weapon}',[WeaponController::class,'update']);
Route::put('/specialrules/{specialrule}',[SpecialruleController::class,'update']);
Route::put('/games/{game}',[GameController::class,'update']);

Route::patch('/factions/{faction}',[FactionController::class,'update']);
Route::patch('/armys/{army}',[ArmyController::class,'update']);
Route::patch('/soldiers/{soldier}',[SoldierController::class,'update']);
Route::patch('/weapons/{weapon}',[WeaponController::class,'update']);
Route::patch('/specialrules/{specialrule}',[SpecialruleController::class,'update']);
Route::patch('/games/{game}',[GameController::class,'update']);

Route::delete('/factions/delete/{id}',[FactionController::class,'destroy']);
Route::delete('/armys/delete/{id}',[ArmyController::class,'destroy']);
Route::delete('/soldiers/delete/{id}',[SoldierController::class,'destroy']);
Route::delete('/weapons/delete/{id}',[WeaponController::class,'destroy']);
Route::delete('/specialrules/delete/{id}',[SpecialruleController::class,'destroy']);
Route::delete('/games/delete/{id}',[GameController::class,'destroy']);