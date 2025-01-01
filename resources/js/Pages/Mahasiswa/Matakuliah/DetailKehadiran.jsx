import React, { useState } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function DetailKehadiran({ kehadirans }) {
  const [hari, setHarii] = useState(kehadirans.matakuliah.jadwal_perkuliahan[0].hari);
  
  console.log(kehadirans);
  console.log(`hari`, hari);
  console.log(kehadirans.mahasiswa_kehadiran.id);

  // ===== Hari =====
  let today = new Date(); // Tanggal hari ini
  let date = today.toISOString().slice(0, 10); // Format YYYY-MM-DD
  let days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

  let dayName = days[today.getDay()]; // Nama hari berdasarkan indeks getDay()
  console.log(date); // Menampilkan tanggal dalam format YYYY-MM-DD
  console.log(dayName); // Menampilkan nama hari (contoh: "Tuesday")
  // ===== Hari =====

  const buttonHadir = (dayName, hari) => {
    if (dayName === hari) {
      return (
        <button
          onClick={handleSubmit}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mb-4"
        >
          Tidak Hadir
        </button>
      );
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Kirim data yang diperbarui ke server
    Inertia.post(route('kehadiran.create'), { // Pastikan route ini sesuai dengan yang ada di web.php
      status_kehadiran: "Hadir",
      mahasiswa_id: kehadirans.mahasiswa_kehadiran.id,
      jadwal_id: kehadirans.matakuliah.id,
    });
  };

  return (
    <div>
      <AuthenticatedLayout
        header={
          <h2 className="text-2xl font-bold leading-tight text-gray-800">
            Detail Kehadiran {kehadirans.mahasiswa_kehadiran.nama_lengkap}

          </h2>
        }
      >
        <Head title="Detail Kehadiran" />

        <div className="py-10 bg-gray-100">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="bg-white shadow-md sm:rounded-lg">
              <div className="p-6 space-y-6">
                {/* Informasi Mata Kuliah */}
                <div className="text-center">
                  <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                    Informasi Mata Kuliah
                  </h1>
                  <p className="text-gray-600">
                    <span className="font-bold">Nama Mata Kuliah:</span> {kehadirans.matakuliah.nama_mata_kuliah}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold">Kode Mata Kuliah:</span> {kehadirans.matakuliah.kode_mata_kuliah}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold">Hari:</span> {hari}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold">Deskripsi:</span> {kehadirans.matakuliah.deskripsi}
                  </p>
                </div>

                {/* Kehadiran */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Riwayat Kehadiran Mahasiswa
                  </h2>


                  {buttonHadir(dayName, hari)}

                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-200 px-4 py-2 text-left text-gray-800 font-medium">No</th>
                          <th className="border border-gray-200 px-4 py-2 text-left text-gray-800 font-medium">Tanggal</th>
                          <th className="border border-gray-200 px-4 py-2 text-left text-gray-800 font-medium">Status Kehadiran</th>
                        </tr>
                      </thead>
                      <tbody>
                        {kehadirans.mahasiswa_kehadiran.kehadiran.map((item, index) => (
                          <tr key={index} className="hover:bg-gray-100">
                            <td className="border border-gray-200 px-4 py-2">
                              {index + 1}
                            </td>
                            <td className="border border-gray-200 px-4 py-2">
                              {item.created_at}
                            </td>


                            <td className="border border-gray-200 px-4 py-2">
                              {item.status_kehadiran}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
