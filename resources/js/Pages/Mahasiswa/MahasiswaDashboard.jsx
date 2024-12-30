import React from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import NavLink from '@/components/NavLink';

export default function MahasiswaDashboard() {
      const { auth} = usePage().props; // Mengambil mahasiswa dan auth dari props
    
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
                         </div>
        
                       </div>
                     </div>
                   </div>
                 </div>
        </AuthenticatedLayout>
    );
}
