
self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(caches.open('static').then(function(cache){
    console.log('[Service Worker] Precaching');
    cache.addAll(['../src/index.js','/','/index.html','index.html']);
  }))
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ...', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  console.log('[Service Worker] Fetching something ....', event);
  event.respondWith(


    caches.match(event.request).then(function(response){
      if(response){
        return response;
      }else{
        return fetch(event.request);
      }
    }).catch()


  );
});