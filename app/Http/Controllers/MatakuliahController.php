<?php

namespace App\Http\Controllers;

use App\Models\JadwalPerkuliahan;
use App\Models\Mahasiswa;
use App\Models\Matakuliah;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MatakuliahController extends Controller
{

    public function index()
    {

        //  ===========
        $matakuliah_jadwalPerkuliahan = Matakuliah::with('jadwal_perkuliahan')
            ->orderBy(JadwalPerkuliahan::select('hari')->whereColumn('jadwal_perkuliahan.mata_kuliah_id', 'mata_kuliah.id'), 'desc') // Order berdasarkan nama_lengkap mahasiswa
        ->get();

        // Pastikan data sudah diambil sebelum dikirim ke Inertia
        return Inertia::render('Mahasiswa/Matakuliah/Index', [
            'matakuliah_jadwalPerkuliahan' => $matakuliah_jadwalPerkuliahan,
        ]);
    }

    public function store(Request $request)
    {
    }
    
    public function show(string $id)
    {
        // Mendapatkan user_id dari pengguna yang sedang login
        $userCurrent = Auth::user()->id;

        // Mendapatkan data Matakuliah beserta jadwal_perkuliahan
        $dataMahasiswaKehadiran = Matakuliah::with('jadwal_perkuliahan')->findOrFail($id);

        // Mendapatkan data Mahasiswa dengan kehadiran berdasarkan user_id
        $kehadiranBre = Mahasiswa::where('user_id', $userCurrent)
            ->with('kehadiran')
            ->first(); 

        $result = [
            'matakuliah' => $dataMahasiswaKehadiran,
            'mahasiswa_kehadiran' => $kehadiranBre,
        ];

        // Debug hasil gabungan
                return Inertia::render('Mahasiswa/Matakuliah/DetailKehadiran', [
            'kehadirans' => $result,
        ]);
    }

    // public function show(string $id)
    // {
    //     // Mendapatkan user_id dari pengguna yang sedang login
    //     $userCurrent = Auth::user()->id;

    //     // dd($userCurrent);
    //     // Mengambil data mahasiswa dengan filter user_id dan id mahasiswa
    //     $dataMahasiswaKehadiran = Mahasiswa::with([
    //         'kehadiran.jadwal.mataKuliah' // Pastikan relasi ini terdefinisi di model
    //     ])
    //     ->where('id', $id) // Filter berdasarkan ID mahasiswa
    //     ->where('user_id', $userCurrent) // Filter berdasarkan user_id
    //     ->first();

    //     // dd(json_encode($dataMahasiswaKehadiran));

    //     // Pastikan data mahasiswa ditemukan
    //     if (!$dataMahasiswaKehadiran) {
    //         abort(404, 'Data Mahasiswa tidak ditemukan atau tidak sesuai dengan pengguna.');
    //     }

    //     // Mengirimkan data ke view
    //     return Inertia::render('Mahasiswa/Matakuliah/DetailKehadiran', [
    //         'kehadirans' => $dataMahasiswaKehadiran,
    //     ]);
    // }




    public function edit(string $id)
    {
        //
    }

}


