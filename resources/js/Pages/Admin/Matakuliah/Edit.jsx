import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/inertia-react';
import InputError from '@/components/InputError';


export default function Edit({ matakuliah }) {
    // State untuk form input
    const [namaMataKuliah, setNamaMataKuliah] = useState(matakuliah.nama_mata_kuliah);
    const [kodeMataKuliah, setKodeMataKuliah] = useState(matakuliah.kode_mata_kuliah);
    const [deskripsi, setDeskripsi] = useState(matakuliah.deskripsi);
    const [jadwal, setJadwal] = useState(matakuliah.jadwal_perkuliahan);

    // State untuk error messages
    const [errors, setErrors] = useState({});

    useEffect(() => {
        // Mengatur jadwal jika data jadwal ada
        if (matakuliah.jadwal_perkuliahan) {
            setJadwal(matakuliah.jadwal_perkuliahan);
        }
    }, [matakuliah]);

    // Fungsi untuk meng-handle submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedData = {
            nama_mata_kuliah: namaMataKuliah,
            kode_mata_kuliah: kodeMataKuliah,
            deskripsi: deskripsi,
            jadwal_perkuliahan: jadwal.map(item => ({
                id: item.id, // Sertakan ID
                hari: item.hari,
                jam_mulai: item.jam_mulai,
                jam_selesai: item.jam_selesai,
                ruang: item.ruang,
            })),
        };

        Inertia.put(route('matakuliah.update.admin', { id: matakuliah.id }), updatedData);
    };

    // Fungsi untuk mengubah jadwal
    const handleJadwalChange = (idx, field, value) => {
        const updatedJadwal = [...jadwal];
        updatedJadwal[idx][field] = value; // Perbarui field yang berubah
        setJadwal(updatedJadwal); // Simpan ke state
    };

    return (
        <div>
            <AuthenticatedLayout
                header={
                    <h2 className="text-2xl font-bold leading-tight text-gray-800">
                        Edit Matakuliah
                    </h2>
                }
            >
                <Head title="Edit Matakuliah" />

                <div className="py-10 bg-gray-100">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="bg-white shadow-md sm:rounded-lg">
                            <div className="p-6 space-y-6">
                                {/* Form untuk Edit Matakuliah */}
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Nama Mata Kuliah</label>
                                        <input
                                            type="text"
                                            value={namaMataKuliah}
                                            onChange={(e) => setNamaMataKuliah(e.target.value)}
                                            className="mt-1 p-2 w-full border rounded"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Kode Mata Kuliah</label>
                                        <input
                                            type="text"
                                            value={kodeMataKuliah}
                                            onChange={(e) => setKodeMataKuliah(e.target.value)}
                                            className="mt-1 p-2 w-full border rounded"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Deskripsi</label>
                                        <textarea
                                            required
                                            value={deskripsi}
                                            onChange={(e) => setDeskripsi(e.target.value)}
                                            className="mt-1 p-2 w-full border rounded"
                                        ></textarea>
                                        

                                    </div>

                                    {/* Menampilkan dan Mengubah Jadwal Perkuliahan */}
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Jadwal Perkuliahan</label>
                                        {jadwal.map((item, idx) => (
                                            <div key={idx} className="mb-2">
                                                <div className="flex gap-4">
                                                    {/* Hidden input untuk mengirim ID jadwal */}
                                                    <input
                                                        type="hidden"
                                                        value={item.id}
                                                        name={`jadwal_perkuliahan[${idx}].id`}
                                                    />
                                                    <select
                                                        value={item.hari}
                                                        name="hari"
                                                        onChange={(e) => handleJadwalChange(idx, 'hari', e.target.value)}
                                                        className="p-2 border rounded w-1/4"
                                                        required
                                                    >
                                                        <option value="">Pilih Hari</option>
                                                        <option value="Senin">Senin</option>
                                                        <option value="Selasa">Selasa</option>
                                                        <option value="Rabu">Rabu</option>
                                                        <option value="Kamis">Kamis</option>
                                                        <option value="Jumat">Jumat</option>
                                                        <option value="Sabtu">Sabtu</option>
                                                        <option value="Minggu">Minggu</option>
                                                    </select>
                                                    
                                                    <InputError message={errors[`hari-${idx}`]} className="mt-2" />

                                                    <input
                                                        type="time"
                                                        value={item.jam_mulai}
                                                        onChange={(e) => handleJadwalChange(idx, 'jam_mulai', e.target.value)}
                                                        className="p-2 border rounded w-1/4"
                                                        required
                                                    />
                                                    <input
                                                        type="time"
                                                        value={item.jam_selesai}
                                                        onChange={(e) => handleJadwalChange(idx, 'jam_selesai', e.target.value)}
                                                        className="p-2 border rounded w-1/4"
                                                        required
                                                    />
                                                    <input
                                                        type="text"
                                                        value={item.ruang}
                                                        onChange={(e) => handleJadwalChange(idx, 'ruang', e.target.value)}
                                                        placeholder="Ruang"
                                                        className="p-2 border rounded w-1/4"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mb-4">
                                        <button
                                            type="submit"
                                            className="px-6 py-2 bg-blue-600 text-white rounded"
                                        >
                                            Simpan Perubahan
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
}
