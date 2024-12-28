import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard({auth}) {
    let roleName = auth.user.role;
    

    return (
        
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {roleName === "admin" && (
                                <p>Welcome, Admin! You have full access to the system.</p>
                            )}
                            {roleName === "mahasiswa" && (
                                <p>Welcome, Mahasiswa! You can view your schedule and information here.</p>
                            )}
                            {roleName !== "admin" && roleName !== "mahasiswa" && (
                                <p>Welcome! Your role is not recognized.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
