<?php

namespace Database\Factories;

use App\Models\Mahasiswa;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Mahasiswa>
 */
class MahasiswaFactory extends Factory
{
    /**
     * Nama model yang terkait dengan factory ini.
     *
     * @var string
     */
    protected $model = Mahasiswa::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nim' => $this->faker->unique()->numerify('########'), // NIM unik dengan 8 digit angka
            'nama_lengkap' => $this->faker->name(), // Nama lengkap acak
            'jenis_kelamin' => $this->faker->randomElement(['L', 'P']), // Pilihan Laki-laki (L) atau Perempuan (P)
            'tgl_lahir' => $this->faker->date('Y-m-d', '-18 years'), // Tanggal lahir acak minimal 18 tahun lalu
            'alamat' => $this->faker->address(), // Alamat acak
        ];
    }
}
