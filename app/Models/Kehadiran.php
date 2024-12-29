<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kehadiran extends Model
{
    protected $table = 'kehadiran';

    // protected $fillable = ['nim', 'nama_lengkap', 'jenis_kelamin', 'tgl_lahir', 'alamat', 'user_id'];
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

