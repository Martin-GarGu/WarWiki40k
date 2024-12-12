<?php

namespace App\Http\Controllers;

use App\Models\User;
use http\Env\Response;
use Illuminate\Http\Request;

class VerificacionController extends Controller
{
    public function buscarEmail(string $email)
    {
        $emails = User::all()->pluck('email');
        if ($emails->contains($email)) {
            return response()->json(['repuesta' => 'si']);
        }
        return response()->json(['repuesta' => 'no']);
    }

    public function buscarUsername(string $username)
    {
        $exists = User::where('username', $username)->exists();
        if ($exists) {
            return response()->json(['repuesta' => 'si']);
        }
        return response()->json(['repuesta' => 'no']);
    }
}
