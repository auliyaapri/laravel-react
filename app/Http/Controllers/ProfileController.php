<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        // Memuat user beserta relasi mahasiswa
        $user = $request->user()->load('mahasiswa');  // Perhatikan penggunaan load() di sini
        
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'user' => $user, // Mengirim data user dengan mahasiswa
        ]);
    }


    /**
     * Update the user's profile information.
     */

    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        // Validasi data user dan mahasiswa
        $validatedUserData = $request->validated();

        // Ambil user yang sedang login
        $user = $request->user();

        // Update data user
        $user->fill($validatedUserData);

        // Reset email_verified_at jika email diubah
        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
        }

        // Simpan data user
        $user->save();

        // Update data mahasiswa jika relasi ada
        if ($user->mahasiswa) {
            $validatedMahasiswaData = $request->only(['nim', 'nama_lengkap', 'jenis_kelamin', 'tgl_lahir', 'alamat']); // Sesuaikan field mahasiswa
            $user->mahasiswa->fill($validatedMahasiswaData);
            $user->mahasiswa->save();
        }

        // Redirect dengan pesan sukses
        return Redirect::route('profile.edit')->with('success', 'Profil berhasil diperbarui.');
    }


    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
