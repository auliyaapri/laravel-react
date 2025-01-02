<?php

namespace App\Http\Controllers;

use App\Models\JadwalPerkuliahan;
use App\Models\Kehadiran;
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




    public function storeKehadiran(Request $request)
    {
        // Validasi data jika perlu
        $request->validate([
            'status_kehadiran' => 'required|string',
            'mahasiswa_id' => 'required|integer',
            'jadwal_id' => 'required|integer',
        ]);

        // Menyimpan data kehadiran
        Kehadiran::create([
            'mahasiswa_id' => $request->mahasiswa_id,
            'jadwal_id' => $request->jadwal_id,
            'status_kehadiran' => $request->status_kehadiran,
            'created_at' => now(),
        ]);

        // Memberikan feedback ke user (redirect atau merender view)
        return redirect()->route('kehadiran.index') // Ganti dengan route yang sesuai
        ->with('success', 'Kehadiran berhasil disimpan.');
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





    public function edit(string $id)
    {
        //
    }

}


