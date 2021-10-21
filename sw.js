self.addEventListener('install', (event) =>{
    console.log('Service worker instalado');
});

self.addEventListener('activate', async (event) =>{
    console.log('sw: Activo y listo para controlar');
});

self.addEventListener('fetch', (event) =>{
    console.log('Service worker escuchando');
});