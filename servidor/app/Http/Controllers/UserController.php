<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules;



class UserController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $user = Auth::user();
        // $token = $user->createToken('API Token')->plainTextToken;
        $token = $request->user()->createToken($user->email . '_Token')->plainTextToken;

        return response()->json([
            'token' => $token,
            'user' => $user
        ]);
    }


    public function registro(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $user = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => password_hash($request->password, PASSWORD_BCRYPT),
        ]);

        event(new Registered($user));

        return response()->json($user);
    }

    public function searchUserbyUsername(string $username)
    {
        try {
            $user = User::where('username', $username)->get();

            if ($user->isEmpty()) {
                return response()->json([
                    'data' => [],
                    'message' => 'No existe ningún usuario asociado a este nombre.'
                ], 200);
            }

            return response()->json([
                'data' => $user
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Error al obtener el usuario',
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function searchUserbyId(int $id)
    {
        try {
            $user = User::where('id', $id)->get();

            if ($user->isEmpty()) {
                return response()->json([
                    'data' => [],
                    'message' => 'No existe ningún usuario asociado a este id.'
                ], 200);
            }

            return response()->json([
                'data' => $user
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Error al obtener el usuario',
                'message' => $e->getMessage(),
            ], 500);
        }
    }
}
