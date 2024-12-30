<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kehadiran extends Model
{
    protected $table = 'kehadiran';

    protected $fillable = ['status_kehadiran', 'jadwal_id', 'mahasiswa_id'];
    public function mahasiswa()
    {
        // mahasiswa_id 
        return $this->belongsTo(Mahasiswa::class, 'mahasiswa_id', 'id');
    }
 
    public function matakuliah()
    {
        // mahasiswa_id 
        return $this->belongsTo(Matakuliah::class, 'jadwal_id', 'id');
    }

}

