import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from '@inertiajs/inertia-react';

import { format } from 'date-fns';
import { id } from 'date-fns/locale'; // Locale untuk bahasa Indonesia
import { Inertia } from '@inertiajs/inertia';
import { useState } from 'react';

export default function KehadiranMatakuliah({ kehadirans }) {
  const [kehadiranMahasiswa, setKehadiranMahasiswa] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  console.log(kehadirans);
  console.log(kehadiranMahasiswa);

  const nama_mata_kuliah = kehadirans.matakuliah.nama_mata_kuliah;
  const status_kehadiran = kehadirans.status_kehadiran;
  const nama_mahasiswa = kehadirans.mahasiswa.nama_lengkap;  
  const updated_at = kehadirans.updated_at;
  const created_at = kehadirans.created_at;

  const isUpdated = (createdAt, updatedAt) => {
    // Mengubah ke format yang sama untuk perbandingan yang akurat
    const created = new Date(createdAt).getTime();
    const updated = new Date(updatedAt).getTime();
    return created !== updated;
  };

  // console.log(nama_mata_kuliah);
  // console.log(status_kehadiran);
  // console.log(created_at);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(kehadiranMahasiswa);
    Inertia.put(route('kehadiran.update.admin', kehadirans.mahasiswa_id), {
      status_kehadiran: kehadiranMahasiswa
    });
  }

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

  const openModal = (status) => {
    setKehadiranMahasiswa(status);
    setIsOpen(true);
  };

  return (
    <div>
      <AuthenticatedLayout
        header={
          <h2 className="text-2xl font-bold leading-tight text-gray-800">
            Nama Mahasiswa : {nama_mahasiswa}
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
                    {nama_mata_kuliah}
                  </h1>
                </div>

                <div className="relative overflow-x-auto">
                  <button onClick={() => Inertia.get(route('kehadiran.edit.admin', 1))} className="text-white rounded-md bg-slate-400 px-3 py-2 mb-4"> Kembali</button>
                  <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3">No</th>
                        <th scope="col" className="px-6 py-3">Status Kehadiran</th>
                        <th scope="col" className="px-6 py-3">Tanggal Absen Mahasiswa</th>
                        <th scope="col" className="px-6 py-3">Tanggal Di Update</th>
                        <th scope="col" className="px-6 py-3">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b hover:bg-gray-50">
                        <td className="px-6 py-4">{nama_mata_kuliah}</td>
                        <td className="px-6 py-4">{status_kehadiran}</td>
                        <td className="px-6 py-4">{formatDate(created_at)}</td>
                        <td className="px-6 py-4">
                          {isUpdated(created_at, updated_at) ? formatDate(updated_at) : '--------------------'}
                        </td>
                        <td className='px-6 py-4'>
                          {/* <button onClick={() => handleEdit(item.id)} className="text-white rounded-md bg-slate-400 px-3 py-2 mb-4"> Edit</button> */}
                          <button onClick={() => openModal(status_kehadiran)} data-modal-target="default-modal" data-modal-toggle="default-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                            Ubah Status
                          </button>
                        </td>
                      </tr>
                    </tbody>

                  </table>
                  {/* ============================modal edit ============================ */}
                  <div id="default-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                      <div className="relative bg-white rounded-lg shadow dark:bg-white-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-900">
                            Ubah Status Kehadiran
                          </h3>
                          <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                          </button>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="p-4 md:p-5 space-y-4">
                            <select 
                              value={kehadiranMahasiswa}
                              onChange={(e) => setKehadiranMahasiswa(e.target.value)} 
                              className='w-full p-2 border border-gray-300 rounded-md'
                            >
                              <option value="Hadir">Hadir</option>
                              <option value="Tidak Hadir">Tidak Hadir</option>
                              <option value="Terlambat">Terlambat</option>
                              <option value="Izin">Izin</option>
                            </select>
                          </div>
                          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="default-modal" type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Simpan Perubahan</button>
                            <button data-modal-hide="default-modal" type="button" className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Batal</button>
                            
                          </div>
                        </form>

                      </div>
                    </div>
                  </div>
                  {/* ============================modal edit ============================ */}



                  
                  {/* <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    Toggle modal
                  </button>

                  
                  <div id="default-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                      
                      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Terms of Service
                          </h3>
                          <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                          </button>
                        </div>
                        
                        <div className="p-4 md:p-5 space-y-4">
                          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                          </p>
                          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                          </p>
                        </div>
                        
                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                          <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                          <button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
                        </div>
                      </div>
                    </div>
                  </div> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}

