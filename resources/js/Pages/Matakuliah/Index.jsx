import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Index({ matakuliah }) {

    let nomor = 1;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Matakuliah
                </h2>
            }
        >
            <Head title="Index" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-lg font-bold mb-4">Jadwal Mata Kuliah</h3>
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left text-black dark:text-black">
                                    <thead className="text-xs uppercase dark:bg-gray-700 dark:text-white">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">No</th>
                                            <th scope="col" className="px-6 py-3">Nama Mata Kuliah</th>
                                            <th scope="col" className="px-6 py-3">Kode Mata Kuliah</th>
                                            <th scope="col" className="px-6 py-3">Deskripsi</th>
                                            <th scope="col" className="px-6 py-3">Jadwal Pelajaran</th>
                                            <th scope="col" className="px-6 py-3">Aksi</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {matakuliah.map((item, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 font-medium text-black whitespace-nowrap ">
                                                    {nomor++}
                                                </td>
                                                <td className="px-6 py-4">{item.nama_mata_kuliah}</td>
                                                <td className="px-6 py-4">{item.kode_mata_kuliah}</td>
                                                <td className="px-6 py-4">{item.deskripsi}</td>
                                                <td className="px-6 py-4">
                                                    <ul>
                                                        {/* Perulangan untuk menampilkan jadwal berdasarkan hari */}
                                                        {Object.keys(item.jadwalPerkuliahan).map((hari, idx) => (
                                                            <div key={idx}>
                                                                <h4 className="font-semibold text-lg">{hari}</h4>
                                                                <ul>
                                                                    {item.jadwalPerkuliahan[hari].map((jadwal, jadwalIdx) => (
                                                                        <li key={jadwalIdx}>
                                                                            {jadwal.jam_mulai} - {jadwal.jam_selesai} ({jadwal.ruang})
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </ul>
                                                </td>
                                                <td>
                                                    <Link href="/" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                                    Detail
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
