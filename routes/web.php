<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AdminKehadiranController;
use App\Http\Controllers\Admin\AdminMatakuliahController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MahasiswaController;
use App\Http\Controllers\MatakuliahController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\RoleMiddleware;
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


// Route::get('/', [DashboardController::class, 'index']);


// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth'])->name('dashboard');








// Route::middleware(['auth', 'role:mahasiswa'])->group(function () {
//     Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->name('dashboard');

//     Route::get('/matakuliah', [MatakuliahController::class, 'index'])->name('matakuliah.index');
//     Route::get('/mahasiswa', [MahasiswaController::class, 'index'])->name('mahasiswa.index');
//     Route::get('/mahasiswa/add', [MahasiswaController::class, 'formAdd'])->name('mahasiswa.add');
//     Route::get('/mahasiswa/edit/{id}', [MahasiswaController::class, 'edit'])->name('mahasiswa.edit');
//     Route::delete('/mahasiswa/delete/{id}', [MahasiswaController::class, 'destroy'])->name('mahasiswa.destroy');
//     Route::put('/mahasiswa/update/{id}', [MahasiswaController::class, 'update'])->name('mahasiswa.update');
// });



// Route::middleware(['auth', 'role:mahasiswa'])->group(function () {
//     Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
//         Route::get('/matakuliah', [MatakuliahController::class, 'index'])->name('matakuliah.index');
//         Route::get('/matakuliah/kehadiran/{id}', [MatakuliahController::class, 'show'])->name('matakuliah.show');        
//         Route::post('/kehadiran/tambah', [MatakuliahController::class, 'storeKehadiran'])->name('kehadiran.create');


//         //     Route::get('/mahasiswa', [MahasiswaController::class, 'index'])->name('mahasiswa.index');
// //     Route::get('/mahasiswa/add', [MahasiswaController::class, 'formAdd'])->name('mahasiswa.add');
// //     Route::get('/mahasiswa/edit/{id}', [MahasiswaController::class, 'edit'])->name('mahasiswa.edit');
// //     Route::delete('/mahasiswa/delete/{id}', [MahasiswaController::class, 'destroy'])->name('mahasiswa.destroy');
// //     Route::put('/mahasiswa/update/{id}', [MahasiswaController::class, 'update'])->name('mahasiswa.update');
// });




// =================== ADMIN ==================
Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('dashboard');
    Route::get('/admin/matakuliah', [AdminController::class, 'matakuliah'])->name('matakuliah.admin');
    Route::get('/admin/mahasiswa', [AdminController::class, 'mahasiswa'])->name('mahasiswa.admin');
    Route::get('/admin/matakuliah/edit/{id}', [AdminMatakuliahController::class, 'edit'])->name('matakuliah.edit.admin');
    Route::put('/admin/matakuliah/{id}', [AdminMatakuliahController::class, 'update'])->name('matakuliah.update.admin');

    Route::get('/admin/kehadiran', [AdminController::class, 'kehadiran'])->name('kehadiran.admin');
    Route::get('/admin/kehadiran/edit/{id}', [AdminKehadiranController::class, 'edit'])->name('kehadiran.edit.admin');
    Route::put('/admin/kehadiran/{id}', [AdminKehadiranController::class, 'update'])->name('kehadiran.update.admin');
});
// =================== ADMIN ==================

Route::middleware(['auth', 'role:mahasiswa'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
        Route::get('/matakuliah', [MatakuliahController::class, 'index'])->name('matakuliah.index');
        Route::get('/matakuliah/kehadiran/{id}', [MatakuliahController::class, 'show'])->name('matakuliah.show');        
        Route::post('/kehadiran/tambah', [MatakuliahController::class, 'storeKehadiran'])->name('kehadiran.create');


        //     Route::get('/mahasiswa', [MahasiswaController::class, 'index'])->name('mahasiswa.index');
//     Route::get('/mahasiswa/add', [MahasiswaController::class, 'formAdd'])->name('mahasiswa.add');
//     Route::get('/mahasiswa/edit/{id}', [MahasiswaController::class, 'edit'])->name('mahasiswa.edit');
//     Route::delete('/mahasiswa/delete/{id}', [MahasiswaController::class, 'destroy'])->name('mahasiswa.destroy');
//     Route::put('/mahasiswa/update/{id}', [MahasiswaController::class, 'update'])->name('mahasiswa.update');
});


require __DIR__.'/auth.php';

