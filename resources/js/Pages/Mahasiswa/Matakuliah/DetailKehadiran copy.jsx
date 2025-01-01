import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/inertia-react';

export default function DetailKehadiran({ kehadirans }) {
  console.log(kehadirans);
  
  return (
    <div>
      <AuthenticatedLayout
        header={
          <h2 className="text-2xl font-bold leading-tight text-gray-800">
          Detail Kehadiran Mahasiswafda
          </h2>
        }
      >
        <Head title="Detail Kehadiran" />

        <div className="py-10 bg-gray-100">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="bg-white shadow-md sm:rounded-lg">
              <div className="p-6 space-y-6">
                {/* Informasi Mahasiswa */}
                <div className="text-center">
                  <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                    Informasi Mahasiswa
                  </h1>
                  <p className="text-gray-600">
                    <span className="font-bold">Nama Lengkap:</span> {kehadirans.nama_lengkap}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold">NIM:</span> {kehadirans.nim}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold">Alamat:</span> {kehadirans.alamat}
                  </p>
                </div>

                {/* Kehadiran */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Riwayat Kehadiran
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-200 px-4 py-2 text-left text-gray-800 font-medium">Hari</th>
                          <th className="border border-gray-200 px-4 py-2 text-left text-gray-800 font-medium">Jam</th>
                          <th className="border border-gray-200 px-4 py-2 text-left text-gray-800 font-medium">Ruang</th>
                          <th className="border border-gray-200 px-4 py-2 text-left text-gray-800 font-medium">Mata Kuliah</th>
                          <th className="border border-gray-200 px-4 py-2 text-left text-gray-800 font-medium">Status Kehadiran</th>
                        </tr>
                      </thead>
                      <tbody>
                        {kehadirans.kehadiran.map((kehadiran, index) => (
                          <tr key={index} className="hover:bg-gray-100">
                            <td className="border border-gray-200 px-4 py-2">{kehadiran.jadwal.hari}</td>
                            <td className="border border-gray-200 px-4 py-2">
                              {kehadiran.jadwal.jam_mulai} - {kehadiran.jadwal.jam_selesai}
                            </td>
                            <td className="border border-gray-200 px-4 py-2">{kehadiran.jadwal.ruang}</td>
                            <td className="border border-gray-200 px-4 py-2">
                              {kehadiran.jadwal.mata_kuliah.nama_mata_kuliah} ({kehadiran.jadwal.mata_kuliah.kode_mata_kuliah})
                            </td>
                            <td className="border border-gray-200 px-4 py-2">{kehadiran.status_kehadiran}</td>
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
