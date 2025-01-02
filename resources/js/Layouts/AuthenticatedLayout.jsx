import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage, useForm } from '@inertiajs/inertia-react';
import { useState } from 'react';


export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    // const isDashboard = route().current

    const { post } = useForm();

    const handleLogout = (e) => {
        e.preventDefault();
        post(route('logout'));
    };

    // console.log(isDashboard);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="border-b border-gray-100 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex items-center space-x-8">
                            <div className="flex shrink-0 items-center">
                                <Link href="/">
                                    <h1 className="font-bold text-purple-700 text-xl">User Logo</h1>
                                </Link>
                            </div>

                            <div className="flex space-x-8">
                                <NavLink
                                    href={route('dashboard')}
                                    active={route().current('dashboard')}
                                    className="text-gray-700 hover:text-purple-700"
                                >
                                    Home
                                </NavLink>

                                {user.role === 'admin' ? (
                                    <>
                                        <NavLink
                                            href={route('dashboard.admin')}
                                            active={route().current('dashboard.admin')}
                                            className="text-gray-700 hover:text-purple-700"
                                        >
                                            Dashboard
                                        </NavLink>
                                        <NavLink
                                            href={route('mahasiswa.admin')}
                                            active={route().current('mahasiswa.admin')}
                                            className="text-gray-700 hover:text-purple-700"
                                        >
                                            Mahasiswa
                                        </NavLink>

                                        <NavLink
                                            href={route('matakuliah.admin')}
                                            active={
                                                route().current('matakuliah.admin') ||
                                                route().current('matakuliah.edit.admin')
                                            }
                                            className="text-gray-700 hover:text-purple-700"
                                        >
                                            Mata Kuliah (Admin)
                                        </NavLink>

                                        <NavLink
                                            href={route('kehadiran.admin')}
                                            active={
                                                route().current('kehadiran.admin') ||
                                                route().current('kehadiran.edit.admin') ||
                                                route().current('kehadiran.show.admin')
                                            }
                                            className="text-gray-700 hover:text-purple-700"
                                        >
                                            Kehadiran
                                        </NavLink>
                                    </>

                                ) : (
                                    <NavLink href={route('matakuliah.index')} active={route().current('matakuliah.index') || route().current('matakuliah.show')} className="text-gray-700 hover:text-purple-700">
                                        Mata Kuliah
                                    </NavLink>
                                )}                                
                                <NavLink onClick={handleLogout} className="text-gray-700 hover:text-purple-700">
                                    Logout
                                </NavLink>
                            </div>
                        </div>

                    </div>
                </div>

            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
