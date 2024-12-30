// Index.jsx
import { Inertia } from "@inertiajs/inertia";

import { usePage, Link } from '@inertiajs/inertia-react';

import React, { useEffect, useState } from "react";
import Layouts from "../../Layouts/Layouts";

export default function Index({ mahasiswa, search: initialSearch }) {
  const [search, setSearch] = useState(initialSearch || "");

  const handleSearch = (e) => {
    e.preventDefault();
    Inertia.get("/mahasiswa", { search });
  };

  const changeName = (mahasiswa) => {
    return mahasiswa.data.map((mahasiswa) => {
      // Menyesuaikan dengan struktur paginated
      if (mahasiswa.jenis_kelamin === "L") {
        return { ...mahasiswa, jenis_kelamin: "laki-laki" };
      } else if (mahasiswa.jenis_kelamin === "P") {
        return { ...mahasiswa, jenis_kelamin: "Perempuan" };
      }
      return mahasiswa;
    });
  };

  const updatedMahasiswa = changeName(mahasiswa);
  const startNumber = (mahasiswa.current_page - 1) * mahasiswa.per_page;

  // Action Handle
  const handleDelete = (id, nama_lengkap) => {
    if (confirm(`Apakah anda yakin ini menghapus ${nama_lengkap}`)) {
      Inertia.delete(`mahasiswa/delete/${id}`);
    }
  };

  const handleEdit = (id) => {
    Inertia.get(`mahasiswa/edit/${id}`);
  };

  const flash  = usePage().props;

  useEffect(() => {
    const hideFlashMessage = () => {
      let flashSuccessAdd = document.getElementById("flashSuccessAdd");

      function hideElement() {
        if (flashSuccessAdd) {
          flashSuccessAdd.classList.add("hidden");
        }
      }

      setTimeout(hideElement, 5000);
    };

    hideFlashMessage();
  }, [flash]);

  const handlePagination = (url) => {
    console.log("Pagination URL:", url); // Log URL pagination
    if (url) {
      Inertia.get(url);
    }
  };

  return (
    
    <Layouts>
      
      <h1 style={{ fontSize: "80px" }}>Data Mahasiswa!</h1>
      {flash.message && (
        <div className="alert mb-10 mt-3 text-2xl bg-amber-500 w-1/2 p-3 rounded-md text-white" id="flashSuccessAdd" >
          {flash.message}
        </div>
      )}

      <Link
        as="button"
        type="button"
        href="mahasiswa/add"
        className="text-white bg-indigo-500 py-2 px-3 mb-5 rounded-md"
      >
        Tambah data
      </Link>

      <form
        action=""
        onSubmit={handleSearch}
        className="mb-4"
        style={{ maxWidth: "390px" }}
      >
        <input
          type="text"
          placeholder="Search..."
          className="focus:outline-none border-solid border-2 border-sky-500 py-1 px-4 rounded-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="ms-1 text-white bg-indigo-500 py-1.5 px-4 rounded-md"
        >
          Search
        </button>
      </form>

      <table
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
          {updatedMahasiswa.map((item, index) => (
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
    </Layouts>
  );
}
