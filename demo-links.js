(()=>{
const V={
'Incline Dumbbell Press':'https://www.youtube.com/watch?v=1ChxmaTBQM0',
'Chest-Supported Row':'https://www.youtube.com/watch?v=uT9mZutc1Zo',
'Machine Chest Press':'https://www.youtube.com/watch?v=lRo9zZ7EwpM',
'Lat Pulldown':'https://www.youtube.com/watch?v=CAwf7n6Luuc',
'Cable Lateral Raise':'https://www.youtube.com/watch?v=3VcKaXpzqRo',
'Rope Triceps Pushdown':'https://www.youtube.com/watch?v=GCa8Q4e7laU',
'Dumbbell Curl':'https://www.youtube.com/watch?v=ykJmrZ5v0Oo',
'Incline Machine Press':'https://www.youtube.com/watch?v=lRo9zZ7EwpM',
'Single-Arm Cable Row':'https://www.youtube.com/watch?v=SqlsitqMeMs',
'Flat Dumbbell Press':'https://www.youtube.com/watch?v=pKZMNVbfUzQ',
'Neutral-Grip Lat Pulldown':'https://www.youtube.com/watch?v=KgZqDuNx7rI',
'Dumbbell Lateral Raise':'https://www.youtube.com/watch?v=3VcKaXpzqRo',
'Overhead Cable Triceps Extension':'https://www.youtube.com/watch?v=_gsUck-7M74',
'Hammer Curl':'https://www.youtube.com/watch?v=TwD-YGVP4Bk',
'Seated Cable Row':'https://www.youtube.com/watch?v=sP_4vybjVJs',
'Assisted Pull-Up':'https://www.youtube.com/watch?v=3YvfRx31xDE',
'Straight-Bar Pushdown':'https://www.youtube.com/watch?v=GCa8Q4e7laU',
'EZ-Bar Curl':'https://www.youtube.com/watch?v=H0dtbu_Bi8c',
'Machine Incline Press':'https://www.youtube.com/watch?v=lRo9zZ7EwpM',
'Chest-Supported Machine Row':'https://www.youtube.com/watch?v=uT9mZutc1Zo',
'Cable Fly':'https://www.youtube.com/watch?v=Iwe6AmxVf7o',
'Lateral Raise':'https://www.youtube.com/watch?v=3VcKaXpzqRo',
'Rope Pushdown':'https://www.youtube.com/watch?v=GCa8Q4e7laU',
'Cable Curl':'https://www.youtube.com/watch?v=NFzTWp2qpiE',
'Hack Squat':'https://www.youtube.com/watch?v=bhfyY8F8F24',
'Romanian Deadlift':'https://www.youtube.com/watch?v=JCXUYuzwNrM',
'Leg Extension':'https://www.youtube.com/watch?v=YyvSfVjQeL0',
'Seated Leg Curl':'https://www.youtube.com/watch?v=ELOCsoDSmrg',
'Standing Calf Raise':'https://www.youtube.com/watch?v=gwLzBJYoWlI',
'Cable Crunch':'https://www.youtube.com/watch?v=AV5PmZJIrrw',
'Leg Press':'https://www.youtube.com/watch?v=cDGOn-yfKJA',
'Dumbbell Romanian Deadlift':'https://www.youtube.com/watch?v=JCXUYuzwNrM',
'Single-Leg Extension':'https://www.youtube.com/watch?v=YyvSfVjQeL0',
'Lying Leg Curl':'https://www.youtube.com/watch?v=lUH80pneL5w',
'Seated Calf Raise':'https://www.youtube.com/watch?v=JbyjNymZOt0',
'Ab Crunch Machine':'https://www.youtube.com/watch?v=AV5PmZJIrrw',
'Barbell Romanian Deadlift':'https://www.youtube.com/watch?v=JCXUYuzwNrM',
'Hanging Knee Raise':'https://www.youtube.com/watch?v=hdng3Nm1x_E',
'Leg Curl':'https://www.youtube.com/watch?v=lUH80pneL5w',
'Calf Raise':'https://www.youtube.com/watch?v=gwLzBJYoWlI',
'Neutral-Grip Pulldown':'https://www.youtube.com/watch?v=KgZqDuNx7rI',
'Machine Shoulder Press':'https://www.youtube.com/watch?v=Wqq43dKW1TU',
'Pec Deck':'https://www.youtube.com/watch?v=Z57CtFmRMxA',
'High Row Machine':'https://www.youtube.com/watch?v=beKbbq6NhWY',
'Dumbbell Shoulder Press':'https://www.youtube.com/watch?v=nHboL27_Sn0',
'Cable Y-Raise':'https://www.youtube.com/watch?v=7C8mL0v976o',
'Incline Dumbbell Curl':'https://www.youtube.com/watch?v=HhHHBj3qTJ4',
'Single-Arm Machine Row':'https://www.youtube.com/watch?v=beKbbq6NhWY',
'Bulgarian Split Squat':'https://www.youtube.com/watch?v=2C-uNgKwPLE',
'Reverse Lunge':'https://www.youtube.com/watch?v=u_zSfK5ZFU4'
};
function apply(){
 document.querySelectorAll('.exercise').forEach(card=>{
  const h=card.querySelector('h3'); const a=card.querySelector('a.demo');
  if(!h||!a) return;
  const url=V[h.textContent.trim()];
  if(url){a.href=url;a.textContent='▶ Demo';a.dataset.curated='1';}
 });
}
apply();
new MutationObserver(apply).observe(document.documentElement,{childList:true,subtree:true});
})();