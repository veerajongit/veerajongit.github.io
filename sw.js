var cacheName = 'hello-world-page';
var filesToCache = [
  '/',
  '/index.html',
  '/assets/css/main.css',
  '/assets/js/gtag.js',
  '/assets/js/main.js',
  '/assets/js/projects.js',
  '/assets/js/side-projects.js',
  '/assets/img/3ionetra.min.png',
  '/assets/img/3iopos.min.png',
  '/assets/img/3iosales.min.png',
  '/assets/img/animation-app.min.png',
  '/assets/img/banner.min.jpg',
  '/assets/img/blockchain.min.jpg',
  '/assets/img/deideaz.min.jpg',
  '/assets/img/dskm.min.jpg',
  '/assets/img/family-tree.min.jpg',
  '/assets/img/gagroup.min.jpg',
  '/assets/img/gsbdb.min.jpg',
  '/assets/img/gsbsevamandal.min.jpg',
  '/assets/img/hariguru.min.png',
  '/assets/img/hospital.min.png',
  '/assets/img/iris.min.png',
  '/assets/img/karate.min.png',
  '/assets/img/paypeoples.min.png',
  '/assets/img/prithu.min.png',
  '/assets/img/punjabi.min.png',
  '/assets/img/sagar-properties.min.png',
  '/assets/img/siiexpo.min.jpg',
  '/assets/img/superloans.min.png',
  '/assets/img/tesseract.jpg',
  '/assets/img/thirdwavepower.min.jpg',
  '/assets/img/usc.min.jpg',
  '/assets/img/web-component.png'
];
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
