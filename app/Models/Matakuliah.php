<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Matakuliah extends Model
{
    protected $table = 'mata_kuliah';

    protected $fillable = [
        'nama_mata_kuliah',
        'kode_mata_kuliah',
        'deskripsi',
    ];

    public function jadwal_perkuliahan() {

        return $this->hasMany(JadwalPerkuliahan::class, 'mata_kuliah_id', 'id');
    }
  
    public function kehadiran() {
        return $this->hasMany(Kehadiran::class, 'jadwal_id', 'id');
    }
}
