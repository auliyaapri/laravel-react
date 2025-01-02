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
            return $query->where(function($q) use ($search) {
                $q->whereRaw('LOWER(nama_lengkap) LIKE ?', ['%' . strtolower($search) . '%'])
                  ->orWhereRaw('LOWER(nim) LIKE ?', ['%' . strtolower($search) . '%']);
            });
        })->paginate(3);

        return Inertia::render('Admin/Mahasiswa', [
            'mahasiswa' => $mahasiswa,
            'search' => $search,
        ]);
    }

    public function matakuliah(Request $request)
    {
        $search = $request->input('search');

        $matakuliah_jadwalPerkuliahan = Matakuliah::with('jadwal_perkuliahan')
        ->when($search, function ($query, $search) {
            return $query->where(function ($q) use ($search) {
                $q->whereRaw('LOWER(nama_mata_kuliah) LIKE ?', ['%' . strtolower($search) . '%'])
                    ->orWhereRaw('LOWER(kode_mata_kuliah) LIKE ?', ['%' . strtolower($search) . '%'])
                    ->orWhereRaw('LOWER(deskripsi) LIKE ?', ['%' . strtolower($search) . '%']);
            });
        })
            ->orderBy('nama_mata_kuliah', 'asc')
            ->paginate(5); // Menambahkan pagination

        return Inertia::render('Admin/Matakuliah', [
            'matakuliah_jadwalPerkuliahan' => $matakuliah_jadwalPerkuliahan,
            'search' => $search, // Mengirim nilai search ke view
        ]);
    }

    public function kehadiran(Request $request)
    {
        $search = $request->input('search');

        // Menggunakan subquery untuk mendapatkan data unik
        $kehadiran = Kehadiran::with('mahasiswa')
            ->select('id', 'mahasiswa_id', 'jadwal_id', 'status_kehadiran', 'created_at', 'updated_at')
            ->distinct('mahasiswa_id')
            ->when($search, function ($query, $search) {
                return $query->whereHas('mahasiswa', function($q) use ($search) {
                    $q->whereRaw('LOWER(nama_lengkap) LIKE ?', ['%' . strtolower($search) . '%'])
                      ->orWhereRaw('LOWER(nim) LIKE ?', ['%' . strtolower($search) . '%']);
                });
            })
            ->orderBy('mahasiswa_id')
            ->paginate(3);

        return Inertia::render('Admin/Kehadiran', [
            'kehadirans' => $kehadiran,
            'search' => $search,
        ]);
    }

}
