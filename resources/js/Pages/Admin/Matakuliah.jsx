import React, { useState } from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Matakuliah({ matakuliah_jadwalPerkuliahan, search }) {
  const [searchQuery, setSearchQuery] = useState(search || '');
  const dataMatakuliah = matakuliah_jadwalPerkuliahan.data || matakuliah_jadwalPerkuliahan;

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // Debounce search request
    const timeoutId = setTimeout(() => {
      Inertia.get(
        route('matakuliah.admin'),
        { search: query },
        { preserveState: true }
      );
    }, 300);

    return () => clearTimeout(timeoutId);
  };

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
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-semibold text-gray-800">
                    Daftar Matakuliah
                  </h1>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleSearch}
                      placeholder="Cari mata kuliah..."
                      className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
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
                      {dataMatakuliah.length > 0 ? (
                        dataMatakuliah.map((item, index) => (
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
                                Edit
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                            Tidak ada data yang ditemukan
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                {matakuliah_jadwalPerkuliahan.links && (
                  <div className="flex items-center justify-center mt-4">
                    {matakuliah_jadwalPerkuliahan.links.map((link, index) => (
                      <button
                        key={index}
                        className={`px-3 py-1 mx-1 rounded ${
                          link.active
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={() => link.url && Inertia.get(link.url)}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        disabled={!link.url}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  )
}
