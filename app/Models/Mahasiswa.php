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

    /**
     * Primary key dari tabel.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * Tipe primary key.
     *
     * @var string
     */
    protected $keyType = 'int';

    /**
     * Apakah primary key auto-increment.
     *
     * @var bool
     */
    public $incrementing = true;

    /**
     * Apakah menggunakan timestamps.
     *
     * @var bool
     */
    public $timestamps = true;

    /**
     * Atribut yang bisa diisi (mass assignable).
     *
     * @var array
     */
    protected $fillable = [
        'nim',
        'nama_lengkap',
        'jenis_kelamin',
        'tgl_lahir',
        'alamat',
    ];

    /**
     * Atribut yang disembunyikan dalam serialisasi.
     *
     * @var array
     */
    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    /**
     * Format untuk atribut tanggal.
     *
     * @var array
     */
    protected $dates = ['tgl_lahir', 'created_at', 'updated_at'];
}
