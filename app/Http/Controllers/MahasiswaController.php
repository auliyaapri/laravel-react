<?php

namespace App\Http\Controllers;

use App\Models\Mahasiswa;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MahasiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $mahasiswa = Mahasiswa::all();
        return Inertia::render('Mahasiswa/Index', ['mahasiswa' => $mahasiswa]);
    }
    
    public function formAdd()
    {
        return Inertia::render('Mahasiswa/FormTabah');
    }
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nim' => 'required|unique:mahasiswas,nim',
            'nama_lengkap' => 'required',
            'alamat' => 'required',
            'jenis_kelamin' => 'required',
            'tgl_lahir' => 'required|date',
        ]);

        $mahasiswa = new Mahasiswa();
        $mahasiswa->nim = $validatedData['nim'];
        $mahasiswa->nama_lengkap = $validatedData['nama_lengkap'];
        $mahasiswa->alamat = $validatedData['alamat'];
        $mahasiswa->jenis_kelamin = $validatedData['jenis_kelamin'];
        $mahasiswa->tgl_lahir = $validatedData['tgl_lahir'];
        $mahasiswa->save();
        return redirect()->route('mahasiswa.index')->with('message', 'Data mahasiswa berhasil disimpan.....');
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
        $mahasiswa = Mahasiswa::find($id);
        return Inertia::render('Mahasiswa/Edit', ['mahasiswa' => $mahasiswa]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Mahasiswa::find($id)->where('id', $id)->delete();
    }
}
