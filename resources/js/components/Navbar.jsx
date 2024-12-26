import { usePage } from '@inertiajs/inertia-react';
import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home')
  const {url } = usePage()


  useEffect(() => {

    const currentPath = url.replace('/', '');
    setActiveLink(currentPath);

    

  },[]);
  
  console.log('dsadasd', activeLink);

  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="h-16 mx-9 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">MyNavbar</div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className={activeLink === 'home' ? 'text-blue-600 font-bold' : 'text-gray-700'}>Home</a>
            <a href="#" className={activeLink === 'mahasiswa' ? 'text-blue-600 font-bold' : 'text-gray-700'}>Mahasiswa</a>            
            <a href="#" className={activeLink === 'dosen' ? 'text-blue-600 font-bold' : 'text-gray-700'}>Dosen</a>            
            <a href="#" className={activeLink === 'matakuliah' ? 'text-blue-600 font-bold' : 'text-gray-700'}>Matakuliah</a>            
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none">
              {/* Icon for mobile menu */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
