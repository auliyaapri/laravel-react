import React from 'react';

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
  console.log(updatedMahasiswa);

  return (
    <div style={{margin:'2rem'}}>
      <h1 style={{ fontSize: '80px' }}>Data Mahasiswa!</h1>
      <hr />

      <table border={2} cellPadding={5} style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ border: '1px solid black' }}>
            <th style={{ border: '1px solid black' }}>Nama Lengkap</th>
            <th style={{ border: '1px solid black' }}>NIM</th>
            <th style={{ border: '1px solid black' }}>Jenis Kelamin</th>
            <th style={{ border: '1px solid black' }}>Tanggal Lahir</th>
            <th style={{ border: '1px solid black' }}>Alamat</th>
          </tr>
        </thead>
        <tbody>
          {updatedMahasiswa.map((item, index) => (
            <tr key={index} style={{ border: '1px solid black' }}>

              <td style={{ border: '1px solid black' }}>{item.nama_lengkap}</td>
              <td style={{ border: '1px solid black' }}>{item.nim}</td>
              <td style={{ textAlign:'center', padding: '8px' }} id='jenisKelamin'>{item.jenis_kelamin}</td>
              <td style={{ border: '1px solid black' }}>{item.tgl_lahir}</td>
              <td style={{ border: '1px solid black' }}>{item.alamat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
