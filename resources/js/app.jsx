import { createInertiaApp } from '@inertiajs/inertia-react';
import React from 'react';
import { createRoot } from 'react-dom/client'; // Menggunakan createRoot untuk merender
import './bootstrap';
import '../css/app.css'; // Import Tailwind CSS


createInertiaApp({
    resolve: name => import(`./Pages/${name}`), // Resolusi komponen berdasarkan nama
    setup({ el, App, props }) {
        const root = createRoot(el); // Membuat root dengan createRoot
        root.render(<App {...props} />); // Merender aplikasi ke elemen root
    },
});
