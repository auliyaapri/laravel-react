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
    public function index(Request $request)
    {

        $search = $request->input('search');



        $mahasiswa = Mahasiswa::when($search, function ($query, $search) {
            return $query->where('nama_lengkap', 'like', "%{$search}%")
                ->orWhere('nim', 'like', "%{$search}%");
        })->paginate(10); // Tetap gunakan pagination


        // Render halaman dengan data mahasiswa dan informasi pagination
        return Inertia::render('Mahasiswa/Index', [
            'mahasiswa' => $mahasiswa,
            'search' => $search,

        ]);
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
        $validatedData = $request->validate([
            'nama_lengkap' => 'required',
            'alamat' => 'required',
            'jenis_kelamin' => 'required',
            'tgl_lahir' => 'required|date',
        ]);

        $mahasiswa = Mahasiswa::findOrFail($id)->update($validatedData);
        return redirect()->route('mahasiswa.index')->with('message', 'Data mahasiswa berhasil disimpan.....');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Mahasiswa::find($id)->where('id', $id)->delete();
    }
}


// https://www.youtube.com/watch?v=lHvC9qBIAu4 15 menit