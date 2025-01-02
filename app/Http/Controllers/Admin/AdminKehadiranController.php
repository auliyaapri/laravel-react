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

    public function show(string $id)
    {
        $data = Kehadiran::with('mahasiswa', 'matakuliah.jadwal_perkuliahan')->find($id);

        return Inertia::render('Admin/Kehadiran/KehadiranMatakuliah', ['kehadirans' => $data]);
    }

    public function edit(string $id)
    {
        // $kehadiran = Kehadiran::with('mahasiswa')->find($id);
        $kehadiran = Mahasiswa::with('kehadiran.matakuliah')->find($id); // intinya kalau mau tampil banyak berdasarkan kondisi tertentu itu relasi nya mulai dari yang hasMany yaa dalam hal ini saya "Mahasiswa"
        return Inertia::render('Admin/Kehadiran/KehadiranDetail', ['kehadirans' => $kehadiran]);
    }

    public function update(Request $request, string $id)
    {
        $data = Kehadiran::findOrFail($id);
        $data->update([
            'status_kehadiran' => $request->status_kehadiran,
        ]);
        // return redirect()->route('kehadiran.admin')->with('success', 'Status kehadiran berhasil diperbarui.');
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
