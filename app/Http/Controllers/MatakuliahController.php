<?php

namespace App\Http\Controllers;

use App\Models\JadwalPerkuliahan;
use App\Models\Mahasiswa;
use App\Models\Matakuliah;
use Illuminate\Http\Request;
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
        //  ===========
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
