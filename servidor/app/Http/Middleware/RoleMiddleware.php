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
     * @param  string[]  ...$roles
     * @return mixed
     */
    public function handle(Request $request, Closure $next, ...$roles)
    {
        // Verifica si el usuario está autenticado
        if (Auth::check()) {
            $userRole = Auth::user()->role;

            // Verifica si el rol del usuario está en la lista de roles permitidos
            if (in_array($userRole, $roles)) {
                return $next($request); // Permite continuar con la petición
            }
        }

        // Devuelve un error si el rol no coincide o no está autenticado
        return response()->json(['message' => 'Unauthorized'], 403);
    }
}
