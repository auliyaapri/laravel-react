<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class RoleMiddleware
{
    public function handle(Request $request, Closure $next, string $role)
    {
        // Pastikan pengguna telah login dan memiliki peran yang sesuai
        if (Auth::check() && Auth::user()->role !== $role) {
            // Jika bukan mahasiswa, tampilkan pesan error
            return redirect('/')->with('error', 'Anda bukan mahasiswa.');
        }

        // Lanjutkan ke request berikutnya jika pengguna memiliki role yang sesuai
        return $next($request);
    }
}
