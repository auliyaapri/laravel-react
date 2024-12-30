import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react';
import { usePage } from '@inertiajs/inertia-react';

export default function Edit({ mahasiswa }) {
    const [nim, setNim] = useState(mahasiswa.nim);
    const [nama_lengkap, setNama_lengkap] = useState(mahasiswa.nama_lengkap);
    const [alamat, setAlamat] = useState(mahasiswa.alamat);
    const [jenis_kelamin, setJenis_kelamin] = useState(mahasiswa.jenis_kelamin);
    const [tgl_lahir, setTgl_lahir] = useState(mahasiswa.tgl_lahir);

    const [loading, setLoading] = useState(false);

    const { errors } = usePage().props;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', { nama_lengkap, alamat, jenis_kelamin, tgl_lahir });
        setLoading(true);

        const formData = { nama_lengkap, alamat, jenis_kelamin, tgl_lahir };
        Inertia.put(`/mahasiswa/update/${mahasiswa.id}`, formData, {
            onFinish: () => setLoading(false),
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Edit Data Mahasiswa</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                        <label htmlFor="nim" className="block text-sm font-medium text-gray-700">NIM</label>
                        <input
                            type="text"
                            id="nim"
                            name="nim"
                            value={nim}
                            onChange={(e) => setNim(e.target.value)}
                            className={`mt-1 px-3 py-2 block w-full rounded-md border ${errors.nim ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`} disabled/>
                        {errors.nim && <div className='text-red-600'>{errors.nim}</div>}
                    </div>
                    <div>
                        <label htmlFor="nama_lengkap" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                        <input
                            type="text"
                            id="nama_lengkap"
                            name="nama_lengkap"
                            value={nama_lengkap}
                            onChange={(e) => setNama_lengkap(e.target.value)}
                            className={`mt-1 px-3 py-2 block w-full rounded-md border ${errors.nama_lengkap ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                            required
                        />
                        {errors.nama_lengkap && <div className='text-red-600'>{errors.nama_lengkap}</div>}
                    </div>

                    <div>
                        <label htmlFor="jenis_kelamin" className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
                        <select
                            id="jenis_kelamin"
                            name="jenis_kelamin"
                            value={jenis_kelamin}
                            onChange={(e) => setJenis_kelamin(e.target.value)}
                            className={`mt-1 px-3 py-2 block w-full rounded-md border ${errors.jenis_kelamin ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                            required
                        >
                            <option value="P">Perempuan</option>
                            <option value="L">Laki-Laki</option>
                        </select>
                        {errors.jenis_kelamin && <div className='text-red-600'>{errors.jenis_kelamin}</div>}
                    </div>
                    <div>
                        <label htmlFor="tgl_lahir" className="block text-sm font-medium text-gray-700">Tanggal Lahir</label>
                        <input
                            type="date"
                            id="tgl_lahir"
                            name="tgl_lahir"
                            value={tgl_lahir}
                            onChange={(e) => setTgl_lahir(e.target.value)}
                            className={`mt-1 px-3 py-2 block w-full rounded-md border ${errors.tgl_lahir ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                            required
                        />
                        {errors.tgl_lahir && <div className='text-red-600'>{errors.tgl_lahir}</div>}
                    </div>
                    <div>
                        <label htmlFor="alamat" className="block text-sm font-medium text-gray-700">Alamat</label>
                        <textarea
                            id="alamat"
                            name="alamat"
                            rows="3"
                            value={alamat}
                            onChange={(e) => setAlamat(e.target.value)}
                            className={`mt-1 px-3 py-2 block w-full rounded-md border ${errors.alamat ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                            required
                        />
                        {errors.alamat && <div className='text-red-600'>{errors.alamat}</div>}
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button
                            type="reset"
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow hover:bg-gray-300"
                        >
                            Reset
                        </button>
                        <button 
                            type="submit" 
                            disabled={loading}                             
                            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
                        >
                            {loading ? 'Tunggu...' : 'Update Perubahan'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
