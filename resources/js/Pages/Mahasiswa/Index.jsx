import { Inertia } from '@inertiajs/inertia';
import { Link, usePage } from '@inertiajs/inertia-react';

import React, { useEffect } from 'react';

export default function Index({ mahasiswa }) {

  const changeName = (mahasiswa) => {
    return mahasiswa.map(mahasiswa => {
      if (mahasiswa.jenis_kelamin === "L") {
        return { ...mahasiswa, jenis_kelamin: "laki-laki" };
      } else if (mahasiswa.jenis_kelamin === "P") {
        return { ...mahasiswa, jenis_kelamin: "Perempuan" };
      }
      return mahasiswa;
    });

  };

  const updatedMahasiswa = changeName(mahasiswa);
  const pagination = mahasiswa
  console.log('dasdsadsadasdasdasdsad', pagination)
  // ==== change name mahasiswa ====

  // ==== Action Handle ====
  const handleDelete = (id, nama_lengkap) => {
    if (confirm(`Apakah anda yakin ini menghapus ${nama_lengkap}`)) {
      Inertia.delete(`mahasiswa/delete/${id}`)
    }
  }
  const handleEdit = (id) => {
    let bangHago = Inertia.get(`mahasiswa/edit/${id}`)
    console.log(bangHago);
    
    
  }
  // ==== Action Handle ====
  const { flash } = usePage().props

  useEffect(() => {
    const hideFlashMessage = () => {
      let flashSuccessAdd = document.getElementById('flashSuccessAdd');

      function hideElement() {
        if (flashSuccessAdd) {
          flashSuccessAdd.classList.add('hidden');

        }

        console.log('Elemen disembunyikan');
      }

      setTimeout(hideElement, 5000);
    };

    hideFlashMessage();
  }, [flash]);

  // pagination
  const handlePagination = (page) => {
    Inertia.get(`/mahasiswa?page=${page}`);

  }


  return (
    <div style={{ margin: '2rem' }}>
      <h1 style={{ fontSize: '80px' }}>Data Mahasiswa!</h1>
      {flash.message && (
        <div class="alert mb-10 mt-3 text-2xl bg-amber-500 w-1/2 p-3 rounded-md text-white" id='flashSuccessAdd'>{flash.message}</div>
      )}



      <Link as='button' type='button' href='mahasiswa/add' className='text-white bg-indigo-500 p-3 mb-5 rounded-md'>Tambah data</Link>

      <table border={2} cellPadding={5} style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ border: '1px solid black' }}>
            <th style={{ border: '1px solid black' }}>Nomor</th>
            <th style={{ border: '1px solid black' }}>Nama Lengkap</th>
            <th style={{ border: '1px solid black' }}>NIM</th>
            <th style={{ border: '1px solid black' }}>Jenis Kelamin</th>
            <th style={{ border: '1px solid black' }}>Tanggal Lahir</th>
            <th style={{ border: '1px solid black' }}>Alamat</th>
            <th style={{ border: '1px solid black' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {updatedMahasiswa.map((item, index) => (
            <tr key={index} style={{ border: '1px solid black' }}>

              <td style={{ border: '1px solid black' }} className='text-center'>{index + 1}</td>
              <td style={{ border: '1px solid black' }}>{item.nama_lengkap}</td>
              <td style={{ border: '1px solid black' }}>{item.nim}</td>
              <td style={{ textAlign: 'center', padding: '8px' }} id='jenisKelamin'>{item.jenis_kelamin}</td>
              <td style={{ border: '1px solid black' }}>{item.tgl_lahir}</td>
              <td style={{ border: '1px solid black' }}>{item.alamat}</td>
              <td style={{ border: '1px solid black' }}>
                <button onClick={() => handleEdit(item.id)} className='text-white rounded-full bg-slate-400 p-3'>Edit</button>
                <button onClick={() => handleDelete(item.id, item.nama_lengkap)} className='text-white ms-3 rounded-full bg-red-500 p-3'>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );

}


