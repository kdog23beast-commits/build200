const CACHE='driverseat-workout-v24';
const ASSETS=['./','./index.html','./manifest.webmanifest','./demo-links.js','./stretches.js','./yoga.js','./meals.js','./completed-workouts.js','./warmup-cardio.js','./C62298BA-6FFE-40CA-A7F8-BF17D81C7522.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(r.mode==='navigate'){
    e.respondWith((async()=>{
      let res;
      try{res=await fetch(r,{cache:'no-store'})}catch{res=await caches.match('./index.html')}
      if(!res)return fetch(r);
      let html=await res.text();
      if(!html.includes('completed-workouts.js'))html=html.replace('</body>','<script src="stretches.js?v=24"></script><script src="yoga.js?v=24"></script><script src="meals.js?v=24"></script><script src="completed-workouts.js?v=24"></script><script src="warmup-cardio.js?v=24"></script></body>');
      return new Response(html,{status:res.status,statusText:res.statusText,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'}});
    })());
    return;
  }
  if(['/demo-links.js','/stretches.js','/yoga.js','/meals.js','/completed-workouts.js','/warmup-cardio.js'].some(path=>u.pathname.endsWith(path))){
    e.respondWith(fetch(r,{cache:'no-store'}).catch(()=>caches.match(r)));
    return;
  }
  e.respondWith(fetch(r).catch(()=>caches.match(r)));
});
