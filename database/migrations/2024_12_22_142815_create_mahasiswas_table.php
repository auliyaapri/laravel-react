<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mahasiswas', function (Blueprint $table) {
            $table->id();
            $table->string('nim')->unique(); // Menambahkan kolom NIM, tipe string dan unik
            $table->string('nama_lengkap'); // Menambahkan kolom nama lengkap
            $table->enum('jenis_kelamin', ['L', 'P']); // Kolom jenis kelamin, dengan pilihan L (Laki-laki) atau P (Perempuan)
            $table->date('tgl_lahir'); // Kolom tanggal lahir
            $table->text('alamat'); // Kolom alamat dengan tipe teks
            $table->timestamps(); // Menambahkan kolom created_at dan updated_at
        });
    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mahasiswas');
    }
};
