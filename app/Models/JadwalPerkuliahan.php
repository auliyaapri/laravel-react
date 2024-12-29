<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JadwalPerkuliahan extends Model
{
    protected $table = 'jadwal_perkuliahan';
    protected $fillable = ['mata_kuliah_id', 'hari', 'jenis_kelamin', 'jam_mulai', 'jam_selesai', 'ruang'];

    public function matakuliah()
    {
        return $this->belongsTo(Matakuliah::class, 'mata_kuliah_id', 'id');
    }
}
