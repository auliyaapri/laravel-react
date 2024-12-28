import Navbar from '@/components/Navbar';
import { usePage } from '@inertiajs/inertia-react';
import React from 'react';

export default function Welcome() {
    const { auth } = usePage().props; // Mengambil data auth dari props

    return (
        <>
            <section className="bg-slate-200 h-screen flex items-center">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">
                            Platform Belajar untuk Mahasiswa
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                            Dari manajemen tugas hingga kolaborasi kelompok, platform ini membantu mahasiswa untuk tetap produktif selama kuliah.
                        </p>

                        {auth?.user ? (
                            <>
                                <a
                                    href="/dashboard"
                                    className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center bg-black text-white rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-primary-300"
                                >
                                    Dashboard
                                </a>
                                <span className="text-base font-medium text-gray-700">
                                    Selamat datang, {auth.user.name}!
                                </span>
                            </>
                        ) : (
                            <>
                                <a
                                    href="/login"
                                    className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center bg-black text-white rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-primary-300"
                                >
                                    Login
                                    <svg
                                        className="w-5 h-5 ml-2 -mr-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                                <a
                                    href="/register"
                                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-400 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                                >
                                    Daftar
                                </a>
                            </>
                        )}
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
                            alt="mockup"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
