self.addEventListener('install', event => {
  console.log('Service Worker installiert');
});

self.addEventListener('fetch', event => {
  // Standardmäßig wird einfach aus dem Netzwerk geladen
});
