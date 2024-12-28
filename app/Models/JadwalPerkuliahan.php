<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JadwalPerkuliahan extends Model
{
    protected $table = 'jadwal_perkuliahan';

    public function matakuliah()
    {
        return $this->belongsTo(Matakuliah::class, 'mata_kuliah_id', 'id');
    }
}
