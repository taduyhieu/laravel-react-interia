// import React from 'react'
// import {createRoot} from 'react-dom/client'
// import {createInertiaApp } from '@inertiajs/inertia-react'
// import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'
//
//
// createInertiaApp({
//     resolve: name => {
//         const pages = import.meta.glob('./Pages/**/*.jsx', {eager: true})
//         return pages[`./Pages/${name}.jsx`]
//     },
//     setup({el, App, props}) {
//         createRoot(el).render(<App {...props} />)
//     },
// }).then(r =>{
//
// })



// import { createInertiaApp } from '@inertiajs/react'
// import { createRoot } from 'react-dom/client'
//
// createInertiaApp({
//     // id: 'app',
//     resolve: name => {
//         const pages = import.meta.glob('./Pages/**/*.jsx', {eager: true})
//         return pages[`./Pages/${name}.jsx`]
//     },
//     setup({el, App, props}) {
//         createRoot(el).render(<App {...props} />)
//     },
// }).then(r =>{
//
// });



import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: title => `${title} - ${appName}`,
    resolve: name =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx')
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#F87415'
    }
});


