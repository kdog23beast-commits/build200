(()=>{
const PROFILE_KEY='ds_profile_v2';
const AREA_ID='workoutArea';
const STYLE_ID='ds-warmup-cardio-style';
const INJECT_ID='ds-warmup-cardio-wrap';
const $=s=>document.querySelector(s);
function readProfile(){try{return JSON.parse(localStorage.getItem(PROFILE_KEY)||'{}')||{}}catch{return{}}}
function goal(){const p=readProfile();const g=String(p.goal||p.goalType||'gain').toLowerCase();return g==='lose'?'loss':g}
function round5(n){return Math.max(5,Math.round(n/5)*5)}
function firstWorkingWeight(area){const ex=area.querySelector('.exercise');if(!ex)return 0;const nums=[...ex.querySelectorAll('input[type="number"]')];for(const n of nums){const v=+n.value;if(Number.isFinite(v)&&v>0)return v}return 0}
function title(area){const h=area.querySelector('.workoutCard h2, h2');return h?h.textContent.trim():''}
function firstExercise(area){const h=area.querySelector('.exercise h3');return h?h.textContent.trim():'first exercise'}
function kind(name){const n=name.toLowerCase();if(n.includes('lower')||/leg|squat|lunge|deadlift|calf/i.test(firstExercise($("#"+AREA_ID)||document.body)))return'lower';if(n.includes('upper'))return'upper';return'full'}
function warmup(name,area){const k=kind(name),first=firstExercise(area),w=firstWorkingWeight(area);let cardio,moves;
if(k==='lower'){
 cardio='5–8 min easy treadmill walk, incline walk, or bike. Finish feeling warmer, not tired.';
 moves=['Leg swings × 8 each direction/side','Ankle rocks × 8–10/side','Bodyweight squats × 8–10','Reverse lunges × 5/side'];
}else if(k==='upper'){
 cardio='3–5 min easy treadmill, bike, or rower.';
 moves=['Arm circles × 10 each way','Band pull-aparts or cable face pulls × 12–15','Scapular push-ups × 8–10','Light shoulder external rotations × 8–10/side'];
}else{
 cardio='5 min easy treadmill, bike, or rower.';
 moves=['Arm circles × 10 each way','Leg swings × 8/side','Bodyweight squats × 8–10','Scapular push-ups × 8–10'];
}
let ramp='Then perform 2–4 lighter ramp-up sets for '+first+' before your working sets.';
if(w>0){const a=round5(w*.50),b=round5(w*.70),c=round5(w*.85);ramp=`Ramp-up for ${first}: about ${a} lb × 8, ${b} lb × 5, ${c} lb × 2–3, then start your working sets. Adjust for machine starting resistance.`}
return{cardio,moves,ramp};}
function cardioPlan(name){const g=goal(),n=name.toLowerCase(),upper=n.includes('upper'),full=n.includes('full body'),lower=n.includes('lower');
if(g==='gain'||g==='strength'){
 if(upper||full)return{show:true,title:'Cardio · Easy conditioning',time:'15–20 min',text:'Easy Zone 2 / conversational pace after lifting. Keep it smooth enough that it does not compromise recovery.'};
 return{show:false};
}
if(g==='recomp'||g==='maintain'){
 if(upper||full)return{show:true,title:'Cardio · Conditioning',time:'20–25 min',text:'Easy-to-moderate Zone 2 / conversational pace after lifting.'};
 return{show:false};
}
if(g==='loss'){
 if(upper||full)return{show:true,title:'Cardio · Fat-loss support',time:'20–30 min',text:'Zone 2 / brisk conversational pace after lifting. Keep resistance moderate so strength work stays the priority.'};
 if(lower&&/2|3/.test(n))return{show:true,title:'Cardio · Separate from lifting if possible',time:'15–20 min',text:'Easy walk or bike later in the day or on a recovery day. Avoid turning the leg session into a conditioning workout.'};
}
return{show:false};}
function cooldown(name){const k=kind(name);if(k==='lower')return['Hip-flexor stretch · 30–45 sec/side','Hamstring stretch · 30–45 sec/side','Calf stretch · 30–45 sec/side'];if(k==='upper')return['Doorway chest stretch · 30–45 sec/side','Lat stretch · 30–45 sec/side','Cross-body shoulder stretch · 30–45 sec/side'];return['Hip-flexor stretch · 30 sec/side','Chest stretch · 30 sec/side','Lat stretch · 30 sec/side'];}
function styles(){if(document.getElementById(STYLE_ID))return;const s=document.createElement('style');s.id=STYLE_ID;s.textContent=`.dsPrepCard{margin:12px 0;border:1px solid #3a3a3a;border-radius:16px;padding:14px;background:#101010}.dsPrepCard h3{margin:0 0 7px;font-size:16px}.dsPrepEyebrow{font-size:11px;font-weight:900;letter-spacing:.8px;color:#ff5960}.dsPrepMeta{margin:5px 0 10px;color:#ffbf47;font-weight:800;font-size:12px}.dsPrepList{margin:8px 0 0;padding-left:19px;color:#c7c7c7}.dsPrepList li{margin:5px 0}.dsPrepText{color:#b9b9b9;font-size:13px;line-height:1.45}.dsPrepBtn{margin-top:10px;border:1px solid #3b3b3b;background:#202020;color:#fff;border-radius:11px;padding:10px 12px;font-weight:800;min-height:42px}.dsPrepDivider{height:1px;background:#2f2f2f;margin:11px 0}`;document.head.appendChild(s)}
function yogaButton(){const b=document.createElement('button');b.type='button';b.className='dsPrepBtn';b.textContent='Open Yoga / Mobility';b.addEventListener('click',()=>{const nav=[...document.querySelectorAll('.nav button,[data-v]')].find(x=>String(x.dataset?.v||'').toLowerCase()==='yoga'||x.textContent.trim().toLowerCase()==='yoga');if(nav)nav.click();else alert('Open the Yoga tab for a longer recovery session.');});return b}
function render(){styles();const area=document.getElementById(AREA_ID);if(!area)return;const card=area.querySelector('.workoutCard');if(!card)return;const name=title(area);if(!name)return;area.querySelector('#'+INJECT_ID)?.remove();const first=card.querySelector('.exercise');if(!first)return;
 const wrap=document.createElement('div');wrap.id=INJECT_ID;
 const w=warmup(name,area);const warm=document.createElement('div');warm.className='dsPrepCard';warm.innerHTML=`<div class="dsPrepEyebrow">WARM-UP · REQUIRED</div><h3>Get ready before working sets</h3><div class="dsPrepText">${w.cardio}</div><ul class="dsPrepList">${w.moves.map(x=>`<li>${x}</li>`).join('')}</ul><div class="dsPrepDivider"></div><div class="dsPrepText"><b style="color:#fff">Ramp-up sets:</b> ${w.ramp}</div>`;wrap.appendChild(warm);
 first.before(wrap);
 const c=cardioPlan(name);if(c.show){const box=document.createElement('div');box.className='dsPrepCard';box.innerHTML=`<div class="dsPrepEyebrow">CARDIO · PROGRAMMED</div><h3>${c.title}</h3><div class="dsPrepMeta">${c.time}</div><div class="dsPrepText">${c.text}</div>`;wrap.appendChild(box)}
 const cool=document.createElement('div');cool.className='dsPrepCard';cool.innerHTML=`<div class="dsPrepEyebrow">COOLDOWN · 3–6 MIN</div><h3>Post-workout stretch</h3><ul class="dsPrepList">${cooldown(name).map(x=>`<li>${x}</li>`).join('')}</ul><div class="dsPrepText" style="margin-top:8px">For a longer recovery session, use the existing Yoga section.</div>`;cool.appendChild(yogaButton());wrap.appendChild(cool);
}
function init(){styles();let queued=false;const run=()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;render()})};run();const area=document.getElementById(AREA_ID);if(area)new MutationObserver(run).observe(area,{childList:true,subtree:true});document.addEventListener('click',e=>{if(e.target.closest?.('#workoutTabs,.tab,.nav'))setTimeout(run,0)},true)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();