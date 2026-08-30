const CACHE='driverseat-workout-v8';
const ASSETS=['./','./index.html','./manifest.webmanifest','./demo-links.js','./C62298BA-6FFE-40CA-A7F8-BF17D81C7522.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.mode==='navigate'||new URL(r.url).pathname.endsWith('/index.html')||new URL(r.url).pathname.endsWith('/build200/')){
    e.respondWith((async()=>{
      let res;
      try{res=await fetch(r,{cache:'no-store'});const c=await caches.open(CACHE);c.put('./index.html',res.clone()).catch(()=>{})}catch{res=await caches.match('./index.html')||await caches.match('./')}
      if(!res)return fetch(r);
      let html=await res.text();
      if(!html.includes('demo-links.js'))html=html.replace('</body>','<script src="demo-links.js?v=8"></script></body>');
      return new Response(html,{status:res.status,statusText:res.statusText,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'}});
    })());
    return;
  }
  e.respondWith(fetch(r).catch(()=>caches.match(r)));
});