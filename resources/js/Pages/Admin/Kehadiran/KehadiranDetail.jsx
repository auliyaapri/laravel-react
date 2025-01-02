import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from '@inertiajs/inertia-react';

import { format } from 'date-fns';
import { id } from 'date-fns/locale'; // Locale untuk bahasa Indonesia
import { Inertia } from '@inertiajs/inertia';
export default function KehadiranDetail({ kehadirans }) {  
  console.log(kehadirans);

  const matakuliah = kehadirans.kehadiran.map((item) => item.matakuliah.nama_mata_kuliah);

  const handleEdit = (id) => {
    Inertia.get(route('kehadiran.show.admin', { id: id })); // Pastikan menggunakan objek Inertia
  };


  return (
    <div>
      <AuthenticatedLayout
        header={
          <h2 className="text-2xl font-bold leading-tight text-gray-800">
            Nama Mahasiswa : {kehadirans.nama_lengkap}
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
                    Daftar Matakuliah
                  </h1>
                </div>

                <div className="relative overflow-x-auto">
                  <button onClick={() => Inertia.get(route('kehadiran.admin'))} className="text-white rounded-md bg-slate-400 px-3 py-2 mb-4"> Kembali</button>
                  <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3">Nama Matakuliah</th>
                        <th scope="col" className="px-6 py-3">Status Kehadiran</th>
                      </tr>
                    </thead>
                    <tbody>
                      {kehadirans.kehadiran.map((item, index) => (
                        <tr key={index} className="bg-white border-b hover:bg-gray-50">
                          <td className="px-6 py-4">{item.matakuliah.nama_mata_kuliah}</td>
       
                          <td className="px-6 py-4">
                            <button onClick={() => handleEdit(item.id)} className="font-medium hover:text-blue-800 mr-2 bg-blue-500 text-white px-3 py-2 rounded-md">
                              Edit
                            </button>
                            <button onClick={() => handleDelete(item.id)} className="font-medium hover:text-red-800 bg-red-500 text-white px-3 py-2 rounded-md">
                              Hapus
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

