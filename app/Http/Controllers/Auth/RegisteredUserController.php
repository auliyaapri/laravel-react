<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        // $request->validate([
        //     'name' => 'required|string|max:255',
        //     'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
        //     'password' => ['required', 'confirmed', Rules\Password::defaults()],
        // ]);
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],

            // Validasi untuk field baru
            'nim' => 'required|string|unique:mahasiswas,nim|max:20',  // Pastikan nim unik di tabel 'mahasiswas'
            'nama_lengkap' => 'nullable|string|max:255',
            'jenis_kelamin' => 'nullable|in:L,P',  // L untuk Laki-laki, P untuk Perempuan
            'tgl_lahir' => 'nullable|date',  // Memastikan format tanggal valid
            'alamat' => 'nullable|string|max:255',  // Pastikan alamat dalam format string
        ]);

        // Membuat User
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'role' => 'mahasiswa',  // Menentukan role mahasiswa
            'password' => Hash::make($request->password),  // Menghitung hash password
        ]);

        // Membuat data mahasiswa yang berhubungan dengan user yang baru dibuat
        $user->mahasiswa()->create([
            'user_id' => $user->id, // Menggunakan ID pengguna yang baru dibuat
            'nim' => $request->nim, // Mendapatkan nilai NIM dari input
            'nama_lengkap' => $user->name, // Menggunakan nama lengkap dari input
            'jenis_kelamin' => $request->jenis_kelamin ?? 'L', // Jika jenis kelamin tidak diisi, default 'L' (Laki-laki)
            'tgl_lahir' => $request->tgl_lahir ?? null, // Jika tanggal lahir tidak diisi, biarkan null
            'alamat' => $request->alamat ?? null, // Jika alamat tidak diisi, biarkan null
        ]);

        // Bisa menambahkan event jika diperlukan
        // event(new Registered($user));

        // Login otomatis setelah registrasi
        Auth::login($user);

        // Redirect ke halaman dashboard atau halaman lain
        return redirect(route('dashboard', absolute: false));


        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
