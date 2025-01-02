import React, { useState } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function DetailKehadiran({ kehadirans }) {
  const [hari, setHarii] = useState(kehadirans.matakuliah.jadwal_perkuliahan[0].hari);
  const [jam_mulai, setJam_mulai] = useState(kehadirans.matakuliah.jadwal_perkuliahan[0].jam_mulai);
  const [jam_selesai, setJam_selesai] = useState(kehadirans.matakuliah.jadwal_perkuliahan[0].jam_selesai);

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

  const formatDate = (dateString) => {
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false // Menggunakan format 24 jam
    };
    return new Date(dateString).toLocaleString('id-ID', options).replace(',', '');
  };


  const buttonHadir = (dayName, hari) => {
    const currentTime = new Date().toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit'
    });

    const currentTimeObj = new Date(`1970-01-01T${currentTime}`);
    const jamMulaiObj = new Date(`1970-01-01T${jam_mulai}`);
    const jamSelesaiObj = new Date(`1970-01-01T${jam_selesai}`);

    if (dayName === hari) {
      // Jika hari sama tapi belum waktunya
      if (currentTimeObj < jamMulaiObj) {
        return (
          <button 
            disabled
            className="bg-gray-400 text-white font-bold py-2 px-4 rounded-full mb-4 cursor-not-allowed opacity-60"
          >
            Kelas Belum Dimulai
          </button>
        );
      }
      // Jika hari sama dan dalam rentang waktu kelas
      else if (currentTimeObj >= jamMulaiObj && currentTimeObj <= jamSelesaiObj) {
        return (
          <button 
            onClick={handleSubmit} 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mb-4"
          >
            Tidak Hadir
          </button>
        );
      }
      // Jika hari sama tapi sudah lewat waktu
      else if (currentTimeObj > jamSelesaiObj) {
        return (
          <button  disabled className="bg-gray-400 text-white font-bold py-2 px-4 rounded-full mb-4 cursor-not-allowed opacity-60" >
            Kelas Sudah Selesai
          </button>
        );
      }
    }
    return null;
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
                  <table className="w-1/3 text-sm text-gray-500 mx-auto border-2 border-gray-200 rounded-lg">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-left">
                          <span className="font-bold">Nama Mata Kuliah:</span>
                        </td>
                        <td className="py-3 px-4 text-right border-l border-gray-200">
                          {kehadirans.matakuliah.nama_mata_kuliah}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-left">
                          <span className="font-bold">Kode Mata Kuliah:</span>
                        </td>
                        <td className="py-3 px-4 text-right border-l border-gray-200">
                          {kehadirans.matakuliah.kode_mata_kuliah}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-left">
                          <span className="font-bold">Hari:</span>
                        </td>
                        <td className="py-3 px-4 text-right border-l border-gray-200">
                          {hari}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-left">
                          <span className="font-bold">Deskripsi:</span>
                        </td>
                        <td className="py-3 px-4 text-right border-l border-gray-200">
                          {kehadirans.matakuliah.deskripsi}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-left">
                          <span className="font-bold">Jam Mulai:</span>
                        </td>
                        <td className="py-3 px-4 text-right border-l border-gray-200">
                          {jam_mulai}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-left">
                          <span className="font-bold">Jam Selesai:</span>
                        </td>
                        <td className="py-3 px-4 text-right border-l border-gray-200">
                          {jam_selesai}
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                              {formatDate(item.created_at)}
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
