<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    /**
     * Manejar una petición entrante.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string  $role
     * @return mixed
     */
    public function handle(Request $request, Closure $next, $role)
    {
        // Verifica si el usuario está autenticado y tiene el rol adecuado
        if (Auth::check() && Auth::user()->role === $role) {
            return $next($request); // Permite continuar con la petición
        }

        // Devuelve un error si el rol no coincide
        return response()->json(['message' => 'Unauthorized'], 403);
    }
}
