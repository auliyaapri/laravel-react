import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/inertia-react';

export default function Kehadiran({ kehadiran }) {
  // Log data kehadiran untuk melihat data yang diterima
  console.log(kehadiran);

  return (
    <div>
      <AuthenticatedLayout
        header={
          <h2 className="text-2xl font-bold leading-tight text-gray-800">
            Kehadiran
          </h2>
        }
      >
        <Head title="Dashboard" />

        <div className="py-10 bg-gray-100">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="bg-white shadow-md sm:rounded-lg">
              <div className="p-6 space-y-6">
                <div className="text-center">
                  <h1 className="text-xl font-semibold text-gray-800">
                    Kehadiran
                  </h1>
                </div>

                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3">No</th>
                        <th scope="col" className="px-6 py-3">Nama Lengkap</th>
                        <th scope="col" className="px-6 py-3">NIM</th>
                        <th scope="col" className="px-6 py-3">Matakuliah</th>
                        <th scope="col" className="px-6 py-3">Hari</th>
                        <th scope="col" className="px-6 py-3">Status Kehadiran</th>
                        <th scope="col" className="px-6 py-3">Tanggal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {kehadiran.map((item, index) => (
                        <tr
                          key={index}
                          className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                            } border-b`}
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                          >
                            {index + 1}
                          </th>
                          {/* Pastikan properti mahasiswa ada dalam setiap item kehadiran */}
                          <td className="px-6 py-4">{item.mahasiswa ? item.mahasiswa.nama_lengkap : 'Data tidak tersedia'}</td>
                          <td className="px-6 py-4">{item.mahasiswa ? item.mahasiswa.nim : 'Data tidak tersedia'}</td>
                          <td className="px-6 py-4">{item.mahasiswa ? item.matakuliah.nama_mata_kuliah : 'Data tidak tersedia'}</td>
                          <td className="px-6 py-4">
                            {item.matakuliah && item.matakuliah.jadwal_perkuliahan && item.matakuliah.jadwal_perkuliahan.length > 0
                              ? item.matakuliah.jadwal_perkuliahan[0].hari
                              : 'Data tidak tersedia'}
                          </td>
                          <td className="px-6 py-4">{item.mahasiswa ? item.status_kehadiran : 'Data tidak tersedia'}</td>
                          <td className="px-6 py-4">{item.mahasiswa ? item.updated_at: 'Data tidak tersedia'}</td>
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
  );
}