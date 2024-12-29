import React from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import NavLink from '@/components/NavLink';

export default function AdminDashboard() {
  const { auth, mahasiswa, matakuliah } = usePage().props; // Mengambil mahasiswa dan auth dari props

  let roleName = auth.user.role;

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-2xl font-bold leading-tight text-gray-800">
          Dashboard
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
                  Welcome, {auth.user.name}!
                </h1>
                <p className="text-gray-600">
                  {roleName === "admin"
                    ? "You have full access to the system."
                    : "View your schedule and information here."}
                </p>
              </div>

              {/* Conditional Role Display */}
              {roleName === "admin" && (
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    Admin Dashboard
                  </h2>
                  <p className="text-sm text-gray-600">
                    Manage all data and users from here.
                  </p>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a href="#" className="flex justify-between items-center">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          Jumlah Mahasiswa
                        </h5>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {mahasiswa}
                        </h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Terdapat {mahasiswa} user yang terdaftar dalam sistem, masing-masing memiliki informasi lengkap termasuk nama, NIM, dan alamat.
                      </p>
                      <Link href={route('mahasiswa.admin')} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </Link>
                    </div>

                    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a href="#" className="flex justify-between items-center">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          Jumlah Mata Kuliah
                        </h5>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {matakuliah}
                        </h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Terdapat {matakuliah} mata kuliah yang tersedia dalam sistem, masing-masing dilengkapi dengan detail seperti nama mata kuliah, kode, dan deskripsi.
                      </p>
                      <Link href={route('matakuliah.admin')} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </Link>
                    </div>

                    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a href="#" className="flex justify-between items-center">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          Kehadiran mahasiswa
                        </h5>
                        
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Sistem ini memantau kehadiran mahasiswa, mencatat setiap kehadiran secara otomatis dan menyediakan informasi rinci tentang status kehadiran mahasiswa di setiap pertemuan.

                      </p>
                      <Link href={route('kehadiran.admin')} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </Link>
                    </div>

                  </div>

                </div>
              )}

              {roleName === "mahasiswa" && (
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    Mahasiswa Dashboard
                  </h2>
                  <p className="text-sm text-gray-600">
                    Access your personal information and schedule here.
                  </p>
                </div>
              )}

              {roleName !== "admin" && roleName !== "mahasiswa" && (
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    Welcome!
                  </h2>
                  <p className="text-sm text-gray-600">
                    Your role is not recognized. Please contact the administrator.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
