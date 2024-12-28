<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Mahasiswa;
use App\Models\Matakuliah;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $mahasiswa = Mahasiswa::count();
        $matakuliah = Matakuliah::count();
        // Cek apakah data mahasiswa ada
        return Inertia::render('Admin/AdminDashboard', [
            'mahasiswa' => $mahasiswa,
            'matakuliah' => $matakuliah,
        ]);
    }

    public function mahasiswa(Request $request)
    {
        $search = $request->input('search');
        $mahasiswa = Mahasiswa::when($search, function ($query, $search) {
            return $query->where('nama_lengkap', 'like', "%{$search}%")
                ->orWhere('nim', 'like', "%{$search}%");
        })->paginate(10); // Tetap gunakan pagination
        // Render halaman dengan data mahasiswa dan informasi pagination
        return Inertia::render('Admin/Mahasiswa', [
            'mahasiswa' => $mahasiswa,
            'search' => $search,
        ]);
    }

    public function matakuliah()
    {
        // Mengambil data Matakuliah beserta jadwal perkuliahan terkait
        $matakuliah_jadwalPerkuliahan = Matakuliah::with('jadwal_perkuliahan')->get();

        // Pastikan data sudah diambil sebelum dikirim ke Inertia
        return Inertia::render('Admin/Matakuliah', [
            'matakuliah_jadwalPerkuliahan' => $matakuliah_jadwalPerkuliahan,
        ]);
    }

}
