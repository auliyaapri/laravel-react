import React from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react';

export default function Mahasiswa({ mahasiswa }) {
  const dataMahasiwa = mahasiswa.data
  console.log(mahasiswa);

  const handlePagination = (url) => {
    console.log("Pagination URL:", url); // Log URL pagination
    if (url) {
      Inertia.get(url);
    }
  }

  const changeName = (gender) => {
    if (gender === "L") {
      return <>Laki-Laki</>;
    } else {
      return <>Perempuan</>;
    }


  };

  const updatedMahasiswa = changeName(mahasiswa);
  return (
    <div>
      <AuthenticatedLayout
        header={
          <h2 className="text-2xl font-bold leading-tight text-gray-800">
            Mahasiswa
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
                    Mahasiswa
                  </h1>
                </div>

                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3">No</th>
                        <th scope="col" className="px-6 py-3">Nama Lengkap</th>
                        <th scope="col" className="px-6 py-3">NIM</th>
                        <th scope="col" className="px-6 py-3">Jenis Kelamin</th>
                        <th scope="col" className="px-6 py-3">Email</th>
                        <th scope="col" className="px-6 py-3">Tanggal Lahir</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataMahasiwa.map((item, index) => (
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
                          <td className="px-6 py-4">{item.nama_lengkap}</td>
                          <td className="px-6 py-4">{item.nim}</td>
                          <td className="px-6 py-4">{changeName(item.jenis_kelamin)}</td>
                          <td className="px-6 py-4">{item.user.email}</td>
                          <td className="px-6 py-4">{item.tgl_lahir}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="pagination mt-4">
                    {mahasiswa.links.map((link, index) => (
                      <button
                        key={index}
                        disabled={!link.url} // Nonaktifkan tombol jika URL tidak ada
                        onClick={() => handlePagination(link.url)} // Gunakan link.url untuk navigasi
                        className={`px-4 py-2 border rounded ${link.active
                          ? "bg-indigo-500 text-white"
                          : "bg-white"
                          }`}
                      >
                        {/* Tampilkan label tombol tanpa simbol khusus */}
                        {link.label.replace(/&raquo;|&laquo;/g, "")}
                      </button>
                    ))}
                  </div>
                </div>

                {/* <table
                  border={2}
                  cellPadding={5}
                  style={{ borderCollapse: "collapse" }}
                >
                  <thead>
                    <tr style={{ border: "1px solid black" }}>
                      <th style={{ border: "1px solid black" }}>Nomor</th>
                      <th style={{ border: "1px solid black" }}>
                        Nama Lengkap
                      </th>
                      <th style={{ border: "1px solid black" }}>NIM</th>
                      <th style={{ border: "1px solid black" }}>
                        Jenis Kelamin
                      </th>
                      <th style={{ border: "1px solid black" }}>
                        Tanggal Lahir
                      </th>
                      <th style={{ border: "1px solid black" }}>Alamat</th>
                      <th style={{ border: "1px solid black" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mahasiswa.map((item, index) => (
                      <tr key={index} style={{ border: "1px solid black" }}>
                        <td
                          style={{ border: "1px solid black" }}
                          className="text-center"
                        >
                          {startNumber + 1}
                        </td>
                        <td style={{ border: "1px solid black" }}>
                          {item.nama_lengkap}
                        </td>
                        <td style={{ border: "1px solid black" }}>
                          {item.nim}
                        </td>
                        <td
                          style={{ textAlign: "center", padding: "8px" }}
                          id="jenisKelamin"
                        >
                          {item.jenis_kelamin}
                        </td>
                        <td style={{ border: "1px solid black" }}>
                          {item.tgl_lahir}
                        </td>
                        <td style={{ border: "1px solid black" }}>
                          {item.alamat}
                        </td>
                        <td style={{ border: "1px solid black" }}>
                          <button
                            onClick={() => handleEdit(item.id)}
                            className="text-white rounded-md bg-slate-400 px-3 py-2"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() =>
                              handleDelete(item.id, item.nama_lengkap)
                            }
                            className="text-white ms-3 px-3 py-2 rounded-md bg-red-500 p-3"
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table> */}




              </div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  )
}
