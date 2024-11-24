<?php

use App\Http\Controllers\FactionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArmyController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\SoldierController;
use App\Http\Controllers\SpecialruleController;
use App\Http\Controllers\WeaponController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\SquadronController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VerificacionController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login',[UserController::class,'login']);
Route::post('/register',[UserController::class,'registro']);

Route::get(('/factions/{slug}'),[FactionController::class,'getbySlug']);
Route::get(('/armiesSlug/{slug}'),[ArmyController::class,'getArmyBySlug']);
Route::get(('/squadronsArmy/{slug}'),[SquadronController::class,'getByArmyId']);
Route::get(('/soldiersSquadron/{slug}'),[SoldierController::class,'getBySquadronSlug']);
Route::get(('/armies/{id}'),[ArmyController::class,'getByFaction']);
Route::get(('/squads/{slug}'),[SquadronController::class,'getSquadBySlug']);
Route::get('/favorites/user/{userId}', [FavoriteController::class, 'getByUser']);
Route::post('/favorites/check', [FavoriteController::class, 'checkFavorite']);


Route::get('buscarEmail/{email}', [VerificacionController::class, 'buscarEmail']);
Route::get('buscarUsername/{username}', [VerificacionController::class, 'buscarUsername']);

Route::get('/factions', [FactionController::class, 'index']);
Route::get('/armies', [ArmyController::class, 'index']);
Route::get('/soldiers', [SoldierController::class, 'index']);
Route::get('/weapons', [WeaponController::class, 'index']);
Route::get('/specialrules', [SpecialruleController::class, 'index']);
Route::get('/games', [GameController::class, 'index']);
Route::get('/favorites',[FavoriteController::class,'index']);

Route::post('/factions/create',[FactionController::class,'store']);
Route::post('/armies/create',[ArmyController::class,'store']);
Route::post('/soldiers/create',[SoldierController::class,'store']);
Route::post('/weapons/create',[WeaponController::class,'store']);
Route::post('/specialrules/create',[SpecialruleController::class,'store']);
Route::post('/games/create',[GameController::class,'store']);
Route::post('/favorites/create',[FavoriteController::class,'store']);

Route::put('/factions/{faction}',[FactionController::class,'update']);
Route::put('/armies/{army}',[ArmyController::class,'update']);
Route::put('/soldiers/{soldier}',[SoldierController::class,'update']);
Route::put('/weapons/{weapon}',[WeaponController::class,'update']);
Route::put('/specialrules/{specialrule}',[SpecialruleController::class,'update']);
Route::put('/games/{game}',[GameController::class,'update']);

Route::patch('/factions/{faction}',[FactionController::class,'update']);
Route::patch('/armies/{army}',[ArmyController::class,'update']);
Route::patch('/soldiers/{soldier}',[SoldierController::class,'update']);
Route::patch('/weapons/{weapon}',[WeaponController::class,'update']);
Route::patch('/specialrules/{specialrule}',[SpecialruleController::class,'update']);
Route::patch('/games/{game}',[GameController::class,'update']);

Route::delete('/factions/delete/{id}',[FactionController::class,'destroy']);
Route::delete('/armies/delete/{id}',[ArmyController::class,'destroy']);
Route::delete('/soldiers/delete/{id}',[SoldierController::class,'destroy']);
Route::delete('/weapons/delete/{id}',[WeaponController::class,'destroy']);
Route::delete('/specialrules/delete/{id}',[SpecialruleController::class,'destroy']);
Route::delete('/games/delete/{id}',[GameController::class,'destroy']);
Route::delete('/favorites/delete/{id}',[FavoriteController::class,'destroy']);