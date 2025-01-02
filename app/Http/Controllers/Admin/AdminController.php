<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\JadwalPerkuliahan;
use App\Models\Kehadiran;
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
        // Mengambil data Matakuliah beserta jadwal perkuliahan terkait dan mengurutkan berdasarkan 'nama_mata_kuliah' secara ascending
        $matakuliah_jadwalPerkuliahan = Matakuliah::with('jadwal_perkuliahan')
        ->orderBy('nama_mata_kuliah', 'asc') // Mengurutkan berdasarkan kolom 'nama_mata_kuliah' secara ascending
        ->get();

        // Pastikan data sudah diambil sebelum dikirim ke Inertia
        return Inertia::render('Admin/Matakuliah', [
            'matakuliah_jadwalPerkuliahan' => $matakuliah_jadwalPerkuliahan,
        ]);
    }
    public function kehadiran()
    {
        // Ambil data kehadiran dengan relasi mahasiswa, tanpa duplikasi berdasarkan mahasiswa_id
        $kehadiran = Kehadiran::with('mahasiswa')
            ->select('mahasiswa_id') // Pilih hanya mahasiswa_id
            ->distinct() // Hindari duplikasi mahasiswa_id
            ->get();

        // Gabungkan data dalam array
        $data = [
            'kehadirans' => $kehadiran,
        ];

        return Inertia::render('Admin/Kehadiran', [
            'kehadirans' => $data,
        ]);
    }

}
