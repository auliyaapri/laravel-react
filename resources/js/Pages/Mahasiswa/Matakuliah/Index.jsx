import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/inertia-react';

export default function Index({ matakuliah_jadwalPerkuliahan }) {
  // Data mata kuliah yang diterima dari props
  const dataMatakuliah = matakuliah_jadwalPerkuliahan;

  // ======== AKSI ========
  const handleEdit = (id) => {
    Inertia.get(route('matakuliah.edit.admin', { id: id }));
  }

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
                          item.jadwal_perkuliahan.map((jadwal, idx) => (
                            <div key={idx} className="bg-gray-50 p-3 rounded-lg shadow-sm mb-3">
                              <p className="text-center text-lg font-semibold text-gray-700">{jadwal.hari}</p>
                              <p className="text-gray-600">Jam: {jadwal.jam_mulai} - {jadwal.jam_selesai}</p>
                            </div>
                          ))
                        ) : (
                          <p className="text-gray-500">Tidak ada jadwal</p>
                        )}
                      </div>
                      <ul className="mt-4 list-disc list-inside text-gray-600">
                        <li className="text-lg font-semibold text-gray-800">{item.nama_mata_kuliah}</li>
                        <li>Kode Mata Kuliah: {item.kode_mata_kuliah}</li>
                        <li>Deskripsi: {item.deskripsi}</li>
                      </ul>
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
