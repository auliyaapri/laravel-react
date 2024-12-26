import { Link } from '@inertiajs/inertia-react'
import React from 'react'
// import '../css/app.css'; // Import Tailwind CSS

function Index() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      
        <h1 className='font-bold'>Welcome to My Inertia</h1>
        <Link as='button' type='button' href='mahasiswa' className='text-white bg-indigo-500 py-2 px-3 mt-4 rounded-md'>Madhasiswa</Link>

    </div>
  )
}

export default Index
