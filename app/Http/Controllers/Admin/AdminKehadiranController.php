<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\JadwalPerkuliahan;
use App\Models\Kehadiran;
use App\Models\Mahasiswa;
use App\Models\Matakuliah;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminKehadiranController extends Controller
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
        $kehadiran = Kehadiran::with('mahasiswa', 'matakuliah.jadwal_perkuliahan')->find($id);
        
        return Inertia::render('Admin/Kehadiran/Edit', ['kehadiran' => $kehadiran]);
    }
    public function update(Request $request, string $id)
    {
        // Menampilkan data request secara langsung
        $validated = $request->validate([
            'status_kehadiran' => 'required|string|max:255'
        ]);
        $data = Kehadiran::findOrFail($id);
        $data->update([
            'status_kehadiran' => $validated['status_kehadiran'],            
        ]);
        return redirect()->route('kehadiran.admin')->with('success', 'Matakuliah dan jadwal berhasil diperbarui.');
    }




    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
