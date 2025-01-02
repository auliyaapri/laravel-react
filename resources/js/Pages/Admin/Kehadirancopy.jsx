import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from '@inertiajs/inertia-react';

import { format } from 'date-fns';
import { id } from 'date-fns/locale'; // Locale untuk bahasa Indonesia
import { Inertia } from '@inertiajs/inertia';
export default function Kehadiran({ kehadirans }) {
  // Log data kehadirans untuk melihat data yang diterima
  console.log(kehadirans);

  const formatTanggal = (tanggal) => {
    return format(new Date(tanggal), "EEEE, dd MMMM yyyy", { locale: id });
  };
  const changeColor = (statusColor) => {
    if (statusColor === "Tidak Hadir") {
      return <span className="text-red-500">{statusColor}</span>;
    } else if (statusColor === "Hadir") {
      return <span className="text-green-500">{statusColor}</span>;
    } else if (statusColor === "Izin") {
      return <span className="text-yellow-500">{statusColor}</span>;
    } else if (statusColor === "Terlambat") {
      return <span className="text-orange-500">{statusColor}</span>;
    } else {
      return <span>{statusColor}</span>;
    }
  };

  const handleEdit = (id) => {
    Inertia.get(route('kehadiran.edit.admin', { id: id })); // Pastikan menggunakan objek Inertia
  };


  console.log(changeColor("Ini adalah teks merah").props.children);


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
                        <th scope="col" className="px-6 py-3">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {kehadirans.map((item, index) => (
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
                          <td className="px-6 py-4">{item.mahasiswa ? changeColor(item.status_kehadiran) : 'Data tidak tersedia'}</td>
                          <td className="px-6 py-4">
                            {item.updated_at ? formatTanggal(item.created_at) : 'Data tidak tersedia'}
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
  );
}