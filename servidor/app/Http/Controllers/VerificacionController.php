<?php

namespace App\Http\Controllers;

use App\Models\User;
use http\Env\Response;
use Illuminate\Http\Request;

class VerificacionApiController extends Controller
{
    public function buscarEmail(string $email){
        $emails = User::all()->pluck('email');
        if ($emails->contains($email)){
            return response()->json(['repuesta' => 'si']);
        }
        return response()->json(['repuesta' => 'no']);
    }

    public function buscarUsername(string $username){
        $usernames = User::all()->pluck('nombre_usuario');
        if ($usernames->contains($username)){
            return response()->json(['repuesta' => 'si']);
        }
        return response()->json(['repuesta' => 'no']);
    }
}