<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;



class UserController extends Controller
{
    // public function login(Request $request)
    // {
    //     $credentials = $request->only('email', 'password');

    //     if (Auth::attempt($credentials)) {
    //         $user = Auth::user();

    //         $token = $user->createToken('API Token')->plainTextToken;

    //         return response()->json(['token' => $token]);
    //     } else {
    //         return response()->json(['message' => 'Unauthorized'], 401);
    //     }
    // }
}
