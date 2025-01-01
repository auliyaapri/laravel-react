import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Index({ matakuliah_jadwalPerkuliahan }) {
  // Data mata kuliah yang diterima dari props
  const dataMatakuliah = matakuliah_jadwalPerkuliahan;

  // ======== AKSI ========
  const handleDetail = (id) => {
    Inertia.get(route('matakuliah.show', { id: id }));
  }

// ===== Hari =====
    let today = new Date(); // Tanggal hari ini
    let date = today.toISOString().slice(0, 10); // Format YYYY-MM-DD
    let days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

    let dayName = days[today.getDay()]; // Nama hari berdasarkan indeks getDay()
    console.log(date); // Menampilkan tanggal dalam format YYYY-MM-DD
    console.log(dayName); // Menampilkan nama hari (contoh: "Tuesday")
// ===== Hari =====

  return (
    <div>
      <AuthenticatedLayout
        header={
          <h2 className="text-2xl font-bold leading-tight text-gray-800">
            Matakuliah
          </h2>
        }
      >
        <Head title="Dashboard" />

        <div className="py-10 bg-gray-100">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="bg-white shadow-md sm:rounded-lg">
              <div className="p-6 space-y-6">
                {/* Header Greeting */}
                <div className="text-center">
                  <h1 className="text-xl font-semibold text-gray-800">
                    Daftar Matakuliah
                  </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {/* Menampilkan jadwal dalam bentuk card */}
                  {dataMatakuliah.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                      <div className="mt-4">
                        {/* Menampilkan jadwal perkuliahan jika ada */}
                        {item.jadwal_perkuliahan && item.jadwal_perkuliahan.length > 0 ? (
                          item.jadwal_perkuliahan.map((jadwal, idx) => {
                            let today = new Date(); // Tanggal hari ini
                            let days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
                            let dayName = days[today.getDay()]; // Mendapatkan nama hari dalam bahasa Indonesia

                            // Tentukan kelas latar belakang berdasarkan kondisi
                            let bgClass = dayName === jadwal.hari ? "bg-green-500" : "bg-gray-50";

                            return (
                              <div key={idx} className={`${bgClass} p-3 rounded-lg shadow-sm mb-3`}>
                                <p className="text-center text-lg font-semibold text-gray-700">{jadwal.hari}</p>
                                <p className="text-gray-600">Jam: {jadwal.jam_mulai} - {jadwal.jam_selesai}</p>
                              </div>
                            );
                          })
                        ) : (
                          <p className="text-gray-500">Tidak ada jadwal</p>
                        )}
                      </div>

                      <ul className="mt-4 list-disc list-inside text-gray-600 h-48">
                        <li className="text-lg font-semibold text-gray-800">{item.nama_mata_kuliah}</li>
                        <li>Kode Mata Kuliah: {item.kode_mata_kuliah}</li>
                        <li>Deskripsi: {item.deskripsi}</li>
                      </ul>
                      <button onClick={() => handleDetail(item.id)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Detail 
                      </button>
                    </div>

                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
