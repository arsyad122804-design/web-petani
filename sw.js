var CACHE = 'tani-app-v1';
var FILES = [
  '/home.html', '/index.html',
  '/style.css', '/navbar.css', '/hero.css',
  '/script.js', '/navbar.js',
  '/berita.html', '/berita.css', '/berita.js',
  '/forum.html', '/forum.css', '/forum.js',
  '/marketplace.html', '/marketplace.css', '/marketplace.js',
  '/keuangan.html', '/keuangan.css', '/keuangan.js',
  '/akun.html', '/akun.css', '/akun.js',
  '/diagnosa.html', '/diagnosa.css', '/diagnosa.js',
  '/panduan.html', '/panduan.css', '/panduan.js',
  '/pupuk.html', '/pupuk.css', '/pupuk.js',
  '/harga-pasar.html', '/harga-pasar.css', '/harga-pasar.js',
  '/cuaca.html', '/cuaca.css', '/cuaca.js',
  '/sewa.html', '/sewa.css', '/sewa.js',
  '/manifest.json'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(FILES.map(function(f) {
        return new Request(f, { cache: 'reload' });
      })).catch(function(){});
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      return cached || fetch(e.request).catch(function() { return cached; });
    })
  );
});
