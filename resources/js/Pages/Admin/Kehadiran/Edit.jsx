import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/inertia-react';

export default function Edit({ kehadiran }) {
  const [mahasiswa, setMahasiswa] = useState(kehadiran.mahasiswa);
  const [kehadiranMahasiswa, setKehadiranMahasiswa] = useState(kehadiran.status_kehadiran);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim data yang diperbarui ke server
    Inertia.put(route('kehadiran.update.admin', { id: kehadiran.id }), {
      status_kehadiran: kehadiranMahasiswa,
    });
  };


  const dataKehadiran = ['Hadir', 'Tidak Hadir', 'Terlambat', 'Izin']
  return (
    <div>
      <AuthenticatedLayout
        header={
          <h2 className="text-3xl font-extrabold text-gray-900">
            Edit Kehadiran
          </h2>
        }
      >
        <Head title="Edit Kehadiran" />

        <div className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-lg">
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Tabel Informasi */}
                  <div>
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-md">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Informasi
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Detail
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Nama Mahasiswa
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {mahasiswa.nama_lengkap}
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            NIM Mahasiswa
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {mahasiswa.nim}
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Mata Pelajaran
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {kehadiran.matakuliah.nama_mata_kuliah}
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Kode Matakuliah
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {kehadiran.matakuliah.kode_mata_kuliah}
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Jadwal Mata Kuliah
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {`${kehadiran.matakuliah.jadwal_perkuliahan[0].hari}, ${kehadiran.matakuliah.jadwal_perkuliahan[0].jam_mulai} - ${kehadiran.matakuliah.jadwal_perkuliahan[0].jam_selesai}`}
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Status Kehadiran
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {kehadiran.status_kehadiran}

                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Status Kehadiran */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Kehadiran</label>
                    <select
                      value={kehadiranMahasiswa}
                      onChange={(e) => setKehadiranMahasiswa(e.target.value)}
                      className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {dataKehadiran.map((status, index) => (
                        <option key={index} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Simpan Perubahan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
