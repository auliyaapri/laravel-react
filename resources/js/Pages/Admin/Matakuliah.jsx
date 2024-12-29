import React from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Matakuliah({ matakuliah_jadwalPerkuliahan }) {
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
        <Head title="Matakuliah" />

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

                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3">No</th>
                        <th scope="col" className="px-6 py-3">Nama Mata Kuliah</th>
                        <th scope="col" className="px-6 py-3">Kode Mata Kuliah</th>
                        <th scope="col" className="px-6 py-3">Deskripsi</th>
                        <th scope="col" className="px-6 py-3">Jadwal Perkuliahan</th>
                        <th scope="col" className="px-6 py-3">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataMatakuliah.map((item, index) => (
                        <tr
                          key={index}
                          className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} border-b`}
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                          >
                            {index + 1}
                          </th>
                          <td className="px-6 py-4">{item.nama_mata_kuliah}</td>
                          <td className="px-6 py-4">{item.kode_mata_kuliah}</td>
                          <td className="px-6 py-4">{item.deskripsi}</td>
                          <td className="px-6 py-4">
                            {/* Menampilkan jadwal perkuliahan jika ada */}
                            {item.jadwal_perkuliahan && item.jadwal_perkuliahan.length > 0 ? (
                              item.jadwal_perkuliahan.map((jadwal, idx) => (
                                <div key={idx}>
                                  <p>{jadwal.hari} - {jadwal.jam_mulai} sampai {jadwal.jam_selesai}</p>
                                </div>
                              ))
                            ) : (
                              <p>Tidak ada jadwal</p>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => handleEdit(item.id)}
                              className="text-white rounded-md bg-slate-400 px-3 py-2"
                            >
                              Edit  {item.id}
                            </button>
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
      </AuthenticatedLayout>
    </div>
  )
}
