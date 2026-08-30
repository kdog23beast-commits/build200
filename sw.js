const CACHE='driverseat-workout-v5';
const ASSETS=['./','./index.html','./manifest.webmanifest','./C62298BA-6FFE-40CA-A7F8-BF17D81C7522.png','./demo-links.js'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>{e.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))]))});
self.addEventListener('fetch',e=>{
 const r=e.request;
 if(r.mode==='navigate'){
  e.respondWith((async()=>{
   let resp=await fetch(r).catch(()=>caches.match('./index.html'));
   if(!resp) return new Response('Offline',{status:503});
   let html=await resp.text();
   if(!html.includes('demo-links.js')) html=html.replace('</body>','<script src="demo-links.js"></script></body>');
   return new Response(html,{headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-cache'}});
  })());
  return;
 }
 e.respondWith(caches.match(r).then(c=>c||fetch(r)));
});