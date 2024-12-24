import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react';

export default function FormTabah() {
    const [nim, setNim] = useState('');
    const [nama_lengkap, setNama_lengkap] = useState('');
    const [alamat, setAlamat] = useState('');
    const [jenis_kelamin, setJenis_kelamin] = useState('');
    const [tgl_lahir, setTgl_lahir] = useState('');

    const [loading, setLoading] = useState('');

    const { errors } = usePage().props

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', { nim, nama_lengkap, alamat, jenis_kelamin, tgl_lahir });        
        setLoading(true);

        const formData = { nim, nama_lengkap, alamat, jenis_kelamin, tgl_lahir };
        Inertia.post('/mahasiswa', formData, {
            onFinish: () => setLoading(false)
        });
    };

    

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="w-1/2 p-6 bg-white shadow-md rounded-md">
                <h1 className="text-2xl font-bold mb-4">Tambah Data Mahasiswa</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="nim" className="block text-sm font-medium text-gray-700">NIM</label>
                        <input
                            type="text"
                            id="nim"
                            name="nim"
                            value={nim}
                            onChange={(e) => setNim(e.target.value)}
                            className={`mt-1 block w-full px-3 py-2 border ${errors.nim ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        />
                        {errors.nim && <div className='text-red-600 fw-bolder'>{errors.nim}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="nama_lengkap" className="block text-sm font-medium text-gray-700">nama_lengkap Lengkap</label>
                        <input
                            type="text"
                            id="nama_lengkap"
                            name="nama_lengkap"
                            value={nama_lengkap}
                            onChange={(e) => setNama_lengkap(e.target.value)}
                            className={`mt-1 block w-full px-3 py-2 border ${errors.nama_lengkap ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        />
                        {errors.nama_lengkap && <div className='text-red-600 fw-bolder'>{errors.nama_lengkap}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="alamat" className="block text-sm font-medium text-gray-700">Alamat</label>
                        <textarea
                            id="alamat"
                            name="alamat"
                            value={alamat}
                            onChange={(e) => setAlamat(e.target.value)}
                            className={`mt-1 block w-full px-3 py-2 border ${errors.alamat ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                            rows="3"
                        />
                        {errors.alamat && <div className='text-red-600 fw-bolder'>{errors.alamat}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="jenis_kelamin" className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
                        <select
                            id="jenis_kelamin"
                            name="jenis_kelamin"
                            value={jenis_kelamin}
                            onChange={(e) => setJenis_kelamin(e.target.value)}
                            className={`mt-1 block w-full px-3 py-2 border ${errors.jenis_kelamin ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        >
                            <option value="">Pilih Jenis Kelamin</option>
                            <option value="L">Laki-laki</option>
                            <option value="P">Perempuan</option>
                        </select>
                        {errors.jenis_kelamin && <div className='text-red-600 fw-bolder'>{errors.jenis_kelamin}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="tgl_lahir" className="block text-sm font-medium text-gray-700">Tanggal Lahir</label>
                        <input
                            type="date"
                            id="tgl_lahir"
                            name="tgl_lahir"
                            value={tgl_lahir}
                            onChange={(e) => setTgl_lahir(e.target.value)}
                            className={`mt-1 block w-full px-3 py-2 border ${errors.tgl_lahir ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        />
                        {errors.tgl_lahir && <div className='text-red-600 fw-bolder'>{errors.tgl_lahir}</div>}
                    </div>
                    <button
                        type="submit" disabled={loading} className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                        {loading ? 'tunggu...' : 'simpan data'}    
                        
                    </button>
                </form>

            </div>
        </div>
    );
}
