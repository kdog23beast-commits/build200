(()=>{
function goHome(){
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav button').forEach(b=>b.classList.remove('active'));
  document.getElementById('home')?.classList.add('active');
  document.querySelector('.nav [data-v="home"]')?.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}
function init(){
  const logo=document.querySelector('.brandbar .logoimg');
  if(!logo)return;
  logo.style.cursor='pointer';
  logo.setAttribute('role','button');
  logo.setAttribute('tabindex','0');
  logo.setAttribute('aria-label','Go to home');
  logo.addEventListener('click',goHome);
  logo.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();goHome();}});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();