<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\JadwalPerkuliahan;
use App\Models\Mahasiswa;
use App\Models\Matakuliah;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminMatakuliahController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        $matakuliah = Matakuliah::with('jadwal_perkuliahan')->find($id);
        return Inertia::render('Admin/Matakuliah/Edit', ['matakuliah' => $matakuliah]);
    }
    public function update(Request $request, string $id)
    {
        // Validasi data dari request
        $validated = $request->validate([
            'nama_mata_kuliah' => 'required|string|max:255',
            'kode_mata_kuliah' => 'required|string|max:255',
            'deskripsi' => 'nullable|string',
            'jadwal_perkuliahan' => 'required|array', // Pastikan jadwal adalah array
            'jadwal_perkuliahan.*.id' => 'required|integer|exists:jadwal_perkuliahan,id',
            'jadwal_perkuliahan.*.hari' => 'required|string|max:255',
            'jadwal_perkuliahan.*.jam_mulai' => 'required|string',
            'jadwal_perkuliahan.*.jam_selesai' => 'required|string',
            'jadwal_perkuliahan.*.ruang' => 'required|string|max:255',
        ]);

        // Temukan mata kuliah
        $matakuliah = Matakuliah::with('jadwal_perkuliahan')->findOrFail($id);

        // Update data mata kuliah
        $matakuliah->update([
            'nama_mata_kuliah' => $validated['nama_mata_kuliah'],
            'kode_mata_kuliah' => $validated['kode_mata_kuliah'],
            'deskripsi' => $validated['deskripsi'],
        ]);

        // Update data jadwal_perkuliahan
        foreach ($validated['jadwal_perkuliahan'] as $jadwal) {
            // Temukan jadwal berdasarkan ID dan perbarui
            $jadwalModel = $matakuliah->jadwal_perkuliahan()->findOrFail($jadwal['id']);
            $jadwalModel->update([
                'hari' => $jadwal['hari'],
                'jam_mulai' => $jadwal['jam_mulai'],
                'jam_selesai' => $jadwal['jam_selesai'],
                'ruang' => $jadwal['ruang'],
            ]);
        }

        // Redirect ke halaman yang diinginkan setelah sukses
        return redirect()->route('matakuliah.admin')->with('success', 'Matakuliah dan jadwal berhasil diperbarui.');
    }


    public function destroy(string $id)
    {
        //
    }
}
