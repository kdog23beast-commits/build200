(()=>{
const VIDEO_BY_TAG={
chest:'https://www.youtube.com/watch?v=NePr1XKRTLU',
shoulders:'https://www.youtube.com/watch?v=DJvQ3ZGWUfQ',
triceps:'https://www.youtube.com/watch?v=hSaqjF0dMMg',
biceps:'https://www.youtube.com/watch?v=_e1hQUxTAHc',
forearms:'https://www.youtube.com/watch?v=06Oq6ZtaY_E',
lats:'https://www.youtube.com/watch?v=x1SdnOkQoo0',
'upper back':'https://www.youtube.com/watch?v=4aR-v_5f-T4',
'lower back':'https://www.youtube.com/watch?v=2VuLBYrgG94',
core:'https://www.youtube.com/watch?v=2VuLBYrgG94',
quads:'https://www.youtube.com/watch?v=SiC8v3Q_cbE',
hamstrings:'https://www.youtube.com/watch?v=oRdXgERlSag',
glutes:'https://www.youtube.com/watch?v=Y3T4IedBd4o',
hips:'https://www.youtube.com/watch?v=7bRaX6M2nr8',
calves:'https://www.youtube.com/watch?v=kqgZeOQhNzM'
};
const VIDEO_BY_NAME={
'Cross-Body Shoulder Stretch':'https://www.youtube.com/watch?v=h_5_0zAzU5Y',
'Thread the Needle':'https://www.youtube.com/watch?v=UomKzkyp6kQ',
'Doorway Chest Stretch':'https://www.youtube.com/watch?v=CiIshHzAkQQ',
'Wrist Extensor Stretch':'https://www.youtube.com/watch?v=_uINTR_7X-g',
'Cat Cow':'https://www.youtube.com/watch?v=KpNznspZZEY',
'Standing Quad Stretch':'https://www.youtube.com/watch?v=SiC8v3Q_cbE'
};
const STRETCHES=[
['Doorway Chest Stretch',['chest'],'30 sec/side'],['Wall Pec Stretch',['chest'],'30 sec/side'],['Corner Chest Stretch',['chest'],'30 sec'],['Single-Arm Doorway Pec Stretch',['chest'],'30 sec/side'],['Floor Chest Opener',['chest'],'30 sec'],
['Cross-Body Shoulder Stretch',['shoulders'],'30 sec/side'],['Overhead Shoulder Stretch',['shoulders'],'30 sec/side'],['Sleeper Stretch',['shoulders'],'30 sec/side'],['Wall Shoulder Flexion Stretch',['shoulders'],'30 sec'],['Thread the Needle',['shoulders','upper back'],'6 reps/side'],
['Overhead Triceps Stretch',['triceps'],'30 sec/side'],['Wall Triceps Stretch',['triceps'],'30 sec/side'],['Bench Triceps Stretch',['triceps'],'30 sec'],['Prayer Triceps Stretch',['triceps'],'30 sec'],
['Standing Biceps Wall Stretch',['biceps'],'30 sec/side'],['Doorway Biceps Stretch',['biceps'],'30 sec/side'],['Behind-Back Biceps Stretch',['biceps'],'30 sec'],['Table Biceps Stretch',['biceps'],'30 sec'],
['Wrist Flexor Stretch',['forearms'],'25 sec/side'],['Wrist Extensor Stretch',['forearms'],'25 sec/side'],['Prayer Wrist Stretch',['forearms'],'25 sec'],['Reverse Prayer Stretch',['forearms'],'25 sec'],
['Kneeling Lat Stretch',['lats'],'30 sec'],['Bench Lat Stretch',['lats'],'30 sec'],['Standing Side Lat Stretch',['lats'],'30 sec/side'],['Hanging Lat Stretch',['lats'],'20 sec'],['Child Pose Lat Reach',['lats'],'30 sec/side'],
['Cat Cow',['upper back','lower back'],'8 reps'],['Child Pose',['upper back','lower back'],'40 sec'],['Open Book Rotation',['upper back'],'6 reps/side'],['Seated Thoracic Rotation',['upper back'],'6 reps/side'],['Bear Hug Upper Back Stretch',['upper back'],'30 sec'],
['Knees to Chest',['lower back'],'30 sec'],['Supine Spinal Twist',['lower back'],'30 sec/side'],['Cobra to Child Pose',['lower back','core'],'6 reps'],['Standing Back Extension',['lower back'],'8 reps'],
['Standing Quad Stretch',['quads'],'30 sec/side'],['Couch Stretch',['quads','hips'],'35 sec/side'],['Kneeling Quad Stretch',['quads'],'30 sec/side'],['Side-Lying Quad Stretch',['quads'],'30 sec/side'],
['Standing Hamstring Stretch',['hamstrings'],'30 sec/side'],['Seated Hamstring Stretch',['hamstrings'],'30 sec/side'],['Supine Hamstring Strap Stretch',['hamstrings'],'30 sec/side'],['Half Split Stretch',['hamstrings'],'30 sec/side'],['Dynamic Hamstring Sweep',['hamstrings'],'8 reps/side'],
['Figure Four Stretch',['glutes','hips'],'30 sec/side'],['Pigeon Stretch',['glutes','hips'],'35 sec/side'],['Seated Glute Stretch',['glutes'],'30 sec/side'],['Supine Glute Stretch',['glutes'],'30 sec/side'],['90/90 Hip Stretch',['hips','glutes'],'30 sec/side'],
['Half-Kneeling Hip Flexor Stretch',['hips'],'30 sec/side'],['Frog Stretch',['hips'],'35 sec'],['Butterfly Stretch',['hips'],'35 sec'],['Adductor Rock Back',['hips'],'8 reps/side'],['World Greatest Stretch',['hips','hamstrings','upper back'],'5 reps/side'],
['Wall Calf Stretch',['calves'],'30 sec/side'],['Bent-Knee Soleus Stretch',['calves'],'30 sec/side'],['Downward Dog Calf Pedal',['calves'],'8 reps/side'],['Step Calf Stretch',['calves'],'30 sec/side'],
['Standing Side Bend',['core'],'25 sec/side'],['Cobra Ab Stretch',['core'],'25 sec'],['Half-Kneeling Side Bend',['core','hips'],'25 sec/side'],['Dead Hang Decompression',['lats','upper back'],'20 sec']
].map(([name,tags,dose])=>({name,tags,dose,video:VIDEO_BY_NAME[name]||VIDEO_BY_TAG[tags[0]]}));
function tagsForExercise(name){const n=name.toLowerCase(),t=new Set();if(/press|fly|pec/.test(n))t.add('chest');if(/shoulder|lateral|y-raise/.test(n))t.add('shoulders');if(/triceps|pushdown/.test(n))t.add('triceps');if(/curl/.test(n))t.add('biceps');if(/row/.test(n)){t.add('upper back');t.add('lats')}if(/pulldown|pull-up/.test(n))t.add('lats');if(/squat|leg press|extension|lunge/.test(n)){t.add('quads');t.add('hips')}if(/deadlift|leg curl/.test(n)){t.add('hamstrings');t.add('glutes')}if(/calf/.test(n))t.add('calves');if(/crunch|knee raise/.test(n))t.add('core');return t}
function workoutTags(){const tags=new Set();document.querySelectorAll('#workoutArea .exercise h3').forEach(h=>tagsForExercise(h.textContent).forEach(t=>tags.add(t)));return tags}
function seed(){const title=document.querySelector('#workoutArea h2')?.textContent||'',week=document.querySelector('#weekBanner .weekTitle')?.textContent||'';let x=0;for(const c of title+week)x=(x*31+c.charCodeAt(0))>>>0;return x}
function pick(){const tags=workoutTags(),pool=STRETCHES.filter(s=>s.tags.some(t=>tags.has(t))),fallback=STRETCHES.filter(s=>s.tags.includes('hips')||s.tags.includes('upper back')),src=pool.length>=5?pool:pool.concat(fallback);const out=[],used=new Set(),start=seed()%Math.max(1,src.length);for(let i=0;i<src.length&&out.length<6;i++){const s=src[(start+i*7)%src.length];if(!used.has(s.name)){used.add(s.name);out.push(s)}}return out}
function render(){const area=document.getElementById('workoutArea');if(!area||!area.querySelector('.exercise')||area.querySelector('.dsStretchBlock'))return;const btn=area.querySelector('#finishWorkout');if(!btn)return;const list=pick();const wrap=document.createElement('div');wrap.className='dsStretchBlock';wrap.innerHTML=`<div class="dsStretchHead"><div><div class="dsStretchEyebrow">POST-WORKOUT</div><h3>Recommended stretches</h3><div class="muted small">Matched to the muscles trained today. Stretches rotate with your workouts.</div></div></div>${list.map(s=>`<div class="dsStretchRow"><div><b>${s.name}</b><div class="muted small">${s.dose}</div></div><a class="demo" href="${s.video}" target="_blank" rel="noopener">▶ Demo</a></div>`).join('')}`;btn.parentNode.insertBefore(wrap,btn)}
function styles(){if(document.getElementById('dsStretchStyles'))return;const s=document.createElement('style');s.id='dsStretchStyles';s.textContent='.dsStretchBlock{margin:18px 0 8px;padding-top:16px;border-top:1px solid #333}.dsStretchHead{margin-bottom:6px}.dsStretchHead h3{margin:3px 0 2px;font-size:18px}.dsStretchEyebrow{color:#39d273;font-size:11px;font-weight:900;letter-spacing:1.2px}.dsStretchRow{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:12px 0;border-top:1px solid #292929}.dsStretchRow:first-of-type{border-top:0}.dsStretchRow b{font-size:14px}';document.head.appendChild(s)}
function init(){styles();render();const area=document.getElementById('workoutArea');if(area)new MutationObserver(()=>{document.querySelector('.dsStretchBlock')?.remove();render()}).observe(area,{childList:true,subtree:true})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();