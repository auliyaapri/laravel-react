<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mahasiswa extends Model
{
    use HasFactory;

    /**
     * Tabel yang terkait dengan model.
     *
     * @var string
     */
    protected $table = 'mahasiswas';

    protected $fillable = [
        'nim',
        'nama_lengkap',
        'jenis_kelamin',
        'tgl_lahir',
        'alamat',
    ];

}
