const CACHE='driverseat-workout-v11';
const ASSETS=['./','./index.html','./manifest.webmanifest','./demo-links.js','./C62298BA-6FFE-40CA-A7F8-BF17D81C7522.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request;if(r.mode==='navigate'){e.respondWith(fetch(r,{cache:'no-store'}).catch(()=>caches.match('./index.html')));return}e.respondWith(fetch(r).catch(()=>caches.match(r)))});