import React from "react";

export default function AdminDashboard({ mahasiswa }) {
  console.log(mahasiswa)
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <hr />
      {mahasiswa && mahasiswa.length > 0 ? (
        mahasiswa.map((item, index) => (
          <div key={index}>
            <p>{item.nama_lengkap}</p>
            <p>{item.nim}</p>
          </div>
        ))
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}
