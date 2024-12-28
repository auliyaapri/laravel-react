<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Matakuliah extends Model
{
    protected $table = 'mata_kuliah';

    public function jadwal_perkuliahan() {

        return $this->hasMany(JadwalPerkuliahan::class, 'mata_kuliah_id', 'id');
    }
}
