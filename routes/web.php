<?php

use App\Http\Controllers\MahasiswaController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/mahasiswa/add', [MahasiswaController::class, 'formAdd'])->name('mahasiswa.add');
Route::get('/mahasiswa/edit/{id}', [MahasiswaController::class, 'edit'])->name('mahasiswa.edit');
Route::delete('/mahasiswa/delete/{id}', [MahasiswaController::class, 'destroy'])->name('mahasiswa.destroy');
Route::put('/mahasiswa/update/{id}', [MahasiswaController::class, 'update'])->name('mahasiswa.update');

Route::get('/mahasiswa', [MahasiswaController::class, 'index'])->name('mahasiswa.index');
// Route::resource('/mahasiswa', MahasiswaController::class);