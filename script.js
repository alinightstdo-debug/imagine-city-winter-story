const chapters=window.CHAPTERS;
const codes=['DGD','DGA','AFX','IGD','DEN'];
const names={DGD:'นักสร้างอัตลักษณ์แห่งธานี',DGA:'นักรังสรรค์จินตนาการ',AFX:'ผู้มอบชีวิตแด่ภาพ',IGD:'นักสร้างเป้าหมายแห่งเกม',DEN:'ผู้รวมใจให้เป็นหนึ่ง'};
const degrees={DGD:'Digital Graphic Design',DGA:'Digital Arts',AFX:'Computer Animation and Visual Effects',IGD:'Interactive and Game Design',DEN:'Digital Entertainment'};
const endings={DGA:'ภาพวาดของเธอคือสีแรกที่ย้อมเมืองให้กลับมามีชีวิต ทุกคนเงยหน้ามองแล้วพูดตรงกันว่า “นี่แหละโลกที่เราเคยฝันถึง”',DGD:'ภาพลักษณ์ใหม่ที่เธอออกแบบทำให้ทั้งเมืองมีหน้าตาเป็นของตัวเอง ไม่มีใครสับสนอีกแล้วว่าที่นี่คือที่ไหน',IGD:'ทั้งเมืองกลายเป็นสนามเล่นของเธอ ทุกคนหัวเราะ ตื่นเต้น และไม่มีใครอยากให้เกมจบ',AFX:'ภาพเคลื่อนไหวของเธอทำให้ท้องฟ้าสว่างวาบ ไม่มีใครเชื่อว่าทั้งหมดนี้เป็นฝีมือคนคนเดียว',DEN:'เธอไม่ได้ขึ้นเวทีคนเดียว เธอทำให้ทั้งเมืองได้ขึ้นเวทีไปพร้อมกัน'};
const jobs={DGA:['Character Designer','Concept Artist / Background Artist','Webtoon / Comic / Storyboard Artist','Illustrator / Art Toy / Sticker Creator'],DGD:['Brand Identity Designer','UI Designer','Packaging Designer','Art Director / Key Visual Designer'],IGD:['Game Designer / Level Designer','Game Artist','VR / AR Designer','Game Producer'],AFX:['3D Animator / Rigging Artist','3D Modeler / Texture Artist','VFX Artist','Compositor'],DEN:['Content Creator / Scriptwriter','Event / Show Producer','Virtual Talent / Streaming Producer','Entertainment Marketer / Community Manager']};
const districts={DGA:{title:'ย่านศิลป์ · ตรอกจินตนาการ',story:'ศิลปินสูงวัยคนหนึ่งยื่นขวดสีวิเศษให้เธอ',q:'เธออยากเป็นคนแบบไหนในเมืองนี้?',options:['คนที่สร้างตัวละครให้ทั้งโลกจำได้','คนที่วาดโลกและฉากหลังให้เรื่องเล่ามีชีวิต','คนที่เล่าเรื่องด้วยภาพหลายช่อง','คนที่ทำให้ภาพวาดกลายเป็นสินค้าหรือของสะสม']},DGD:{title:'ย่านดีไซน์ · ถนนเอกลักษณ์',story:'นักออกแบบยืนอยู่หน้าร้านที่ป้ายยังว่างเปล่า',q:'ถ้าได้ฝากลายเซ็นไว้ที่ไหนสักแห่งในเมืองนี้ เธออยากให้เป็นที่ไหน?',options:['ป้ายและโลโก้ที่ทุกคนเห็นทุกวัน','หน้าจอแอปและเว็บไซต์ของเมือง','กล่องและแพ็กเกจที่ใคร ๆ ก็อยากเก็บไว้','โปสเตอร์ใหญ่กลางเมืองที่คนเดินผ่านต้องหันมอง']},IGD:{title:'ย่านเกม · สนามแห่งการเล่น',story:'หัวหน้าสนามเกมเดินมาหาเธอ',q:'เกมของเธอจะเริ่มจากอะไร?',options:['คิดกติกาและระบบให้คนเล่นแล้วติดใจ','ออกแบบฉากและตัวละครในเกม','สร้างโลกเสมือนที่เดินเข้าไปได้จริง','ดูแลทีมให้เกมไปถึงมือผู้เล่นได้']},AFX:{title:'ย่านภาพยนตร์ · กำแพงแห่งเรื่องราว',story:'ผู้กำกับลึกลับยื่นสคริปต์มาให้เธอ',q:'เธออยากคุมฉากไหนของหนังเรื่องนี้?',options:['ตัวละครที่ขยับเหมือนมีชีวิตจริง','ของและตัวละครที่ปั้นขึ้นมาจากความว่างเปล่า','ฉากระเบิด ไฟ น้ำ ควัน ที่ทำให้คนดูตกใจ','การรวมทุกชั้นภาพให้ดูเหมือนถ่ายจริงชิ้นเดียว']},DEN:{title:'ย่านบันเทิง · เวทีแห่งตัวตน',story:'พิธีกรประจำเมืองยื่นไมโครโฟนมาให้',q:'บทบาทไหนทำให้เธอใจเต้นแรงที่สุด?',options:['คนคิดรายการและคอนเทนต์ที่ทุกคนรอดู','คนจัดงานที่ทำให้คนนับพันได้ประสบการณ์เดียวกัน','คนเบื้องหลังตัวตนเสมือนและสตรีมเมอร์','คนที่ทำให้ชุมชนแฟนคลับเติบโต']}};
const $=id=>document.getElementById(id),content=$('content'),next=$('next'),overlay=$('transition'),scene=$('scene'),illumination=$('cityIllumination');
const answers=Array(chapters.length).fill(null),districtAnswers={};let route=[],position=0,busy=false,motion=!matchMedia('(prefers-reduced-motion: reduce)').matches;
function score(part=answers){let s=Object.fromEntries(codes.map(c=>[c,0]));part.forEach(a=>{if(a)s[a]++});return s}
function ranking(s){return codes.slice().sort((a,b)=>s[b]-s[a]||codes.indexOf(a)-codes.indexOf(b))}
function buildRoute(){const s=score(answers.slice(0,6)),r=ranking(s);route=[r[0]];if(s[r[0]]-s[r[1]]<=1)route.push(r[1]);}
function steps(){const a=[{type:'cover'}];chapters.forEach((c,i)=>{if(i===6){route.forEach(code=>{a.push({type:'districtStory',code},{type:'districtQuestion',code})})}a.push({type:'story',i},{type:'question',i})});a.push({type:'form'},{type:'result'});return a}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function shuffle(a){return a.map(v=>({v,k:Math.random()})).sort((a,b)=>a.k-b.k).map(x=>x.v)}
const orders=chapters.map(c=>shuffle(c.choices));
function updateLight(){const n=answers.filter(Boolean).length;const level=n/chapters.length;scene.style.setProperty('--light-progress',level.toFixed(3));scene.classList.toggle('city-awakening',n>0);scene.classList.toggle('city-restored',n===chapters.length);illumination.setAttribute('aria-label',`แสงเมือง ${Math.round(level*100)} เปอร์เซ็นต์`)}
function render(){const st=steps()[position];let html='';next.disabled=false;
if(st.type==='cover'){html='<h1 class="opening-story-title">คืนที่เมืองเริ่มมืดลง</h1><p>คืนนี้ สีสันของเมืองกำลังเลือนหาย...</p><p>Lumi ภูตแสงตัวน้อยชวนเธอออกเดินทาง<br>เพื่อช่วยเมืองก่อนรุ่งสาง</p>';next.innerHTML='เริ่มการเดินทาง →'}
else if(st.type==='story'){const c=chapters[st.i];html='<h1>'+esc(c.title)+'</h1>'+c.paragraphs.map(t=>'<p>'+esc(t)+'</p>').join('');next.innerHTML='เดินทางต่อ →'}
else if(st.type==='question'){const c=chapters[st.i];const isObjectChoice=c.title==='ของติดตัว';html='<h1>'+esc(c.quote)+'</h1><div class="choices'+(isObjectChoice?' object-choices':'')+'">'+orders[st.i].map(([code,label])=>'<button class="choice '+(isObjectChoice?'object-choice ':'')+(answers[st.i]===code?'selected':'')+'" data-code="'+code+'" aria-label="'+esc(label)+'">'+(isObjectChoice?'<img src="assets/choice-'+code.toLowerCase()+'.png" alt="'+esc(label)+'" draggable="false">':esc(label))+'</button>').join('')+'</div>';next.disabled=!answers[st.i];next.innerHTML='เลือกแล้วเดินทางต่อ →'}
else if(st.type==='districtStory'){const d=districts[st.code];html='<h1>'+esc(d.title)+'</h1><p>Lumi พาเธอเข้ามายังย่านที่ใกล้กับความสนใจของเธอ</p><p>'+esc(d.story)+'</p>';next.innerHTML='เดินทางต่อ →'}
else if(st.type==='districtQuestion'){const d=districts[st.code];html='<h1>'+esc(d.q)+'</h1><div class="choices">'+d.options.map((o,i)=>'<button class="choice '+(districtAnswers[st.code]===i?'selected':'')+'" data-job="'+i+'">'+esc(o)+'</button>').join('')+'</div>';next.disabled=districtAnswers[st.code]===undefined;next.innerHTML='เลือกแล้วเดินทางต่อ →'}
else if(st.type==='form'){html='<h1>บัตรผ่านนักเดินทาง</h1><p>ก่อนก้าวขึ้นเวที ผู้เฝ้าประตูขอข้อมูลเล็กน้อย ทุกช่องข้ามได้</p><div class="traveler-form">'+[['nickname','ชื่อเล่น'],['province','จังหวัด']].map(([k,l])=>'<label>'+l+'<input data-field="'+k+'" placeholder="ไม่บังคับ"></label>').join('')+[['level','ระดับชั้น',['ม.4','ม.5','ม.6','ปวช.','ปวส.','อื่น ๆ']],['track','สายการเรียน',['ศิลป์-คำนวณ','ศิลป์-ภาษา','วิทย์-คณิต','สายอาชีพ','อื่น ๆ']],['source','รู้จักคณะจากที่ไหน',['Facebook','Instagram','TikTok','เพื่อนหรือรุ่นพี่','ครูแนะแนว','งานกิจกรรม','อื่น ๆ']],['status','ขั้นตอนการเลือกคณะ',['เพิ่งเริ่มหาข้อมูล','กำลังเปรียบเทียบหลายที่','ตั้งใจสมัครแล้ว','รอผลสอบที่อื่นก่อน']],['experience','ประสบการณ์สร้างสรรค์',['วาดรูป','ออกแบบ','ตัดต่อวิดีโอ','ทำเกม','จัดกิจกรรม','ถ่ายคอนเทนต์','ยังไม่เคยเลย']],['contact','ช่องทางรับข่าวสาร',['LINE','อีเมล','Facebook','Instagram','โทรศัพท์']]].map(([k,l,opts])=>'<label>'+l+'<select data-field="'+k+'"><option value="">ข้ามได้</option>'+opts.map(o=>'<option>'+esc(o)+'</option>').join('')+'</select></label>').join('')+'<label>ปัจจัยเลือกคณะ (เลือกได้ไม่เกิน 2 ข้อ)<div class="checks">'+['ค่าเทอม','ทุนการศึกษา','ชื่อเสียงมหาวิทยาลัย','อาชีพหลังเรียนจบ','ผลงานรุ่นพี่','การเดินทาง','ความชอบของตัวเอง','ผู้ปกครองสนับสนุน'].map(x=>'<label><input type="checkbox" data-factor="'+esc(x)+'">'+esc(x)+'</label>').join('')+'</div></label></div>';next.innerHTML='เปิดเผยผลลัพธ์ →'}
else{const s=score(),r=ranking(s);let first=r[0],second=r[1];if(s[first]===s[second]&&[first,second].includes(answers[10]))first=answers[10],second=r.find(c=>c!==first);const mixed=s[first]-s[second]<=1;html='<div class="result-character-lead"><img src="assets/character-'+first.toLowerCase()+'.png" alt="ภูตประจำสาขา '+esc(degrees[first])+'" draggable="false"></div><h1>สีสันกลับมาแล้ว</h1><p>การเดินทางของเธอทำให้ Imagine City ส่องสว่างอีกครั้ง</p>'+[first,...(mixed?[second]:[])].map((code,i)=>'<div class="result-character-entry">'+(i?'<img class="result-character-secondary" src="assets/character-'+code.toLowerCase()+'.png" alt="ภูตประจำสาขา '+esc(degrees[code])+'" draggable="false">':'')+'</div><p class="quote">'+esc(names[code])+'</p><p>'+esc(endings[code])+'</p><p>เรียนได้ที่: '+esc(degrees[code])+'</p><p class="result-jobs">อาชีพที่เกี่ยวข้อง: '+esc([...(districtAnswers[code]===undefined?[]:[jobs[code][districtAnswers[code]]]),...jobs[code].filter((j,i)=>i!==districtAnswers[code])].join(' · '))+'</p>').join('')+'<p>นี่เป็นแนวทางค้นพบความสนใจ ไม่ใช่คำตัดสินความสามารถของเธอ</p><p>เมืองนี้ยังมีที่ว่างรออยู่เสมอ</p>';next.innerHTML='เริ่มเรื่องอีกครั้ง ↻'}
scene.classList.toggle('is-cover',st.type==='cover');updateLight();content.classList.toggle('scroll-page',st.type==='cover'||st.type==='story'||st.type==='districtStory');content.classList.toggle('scroll-cover',st.type==='cover');content.classList.toggle('result-page',st.type==='result');if(['cover','story','districtStory'].includes(st.type))html='<div class="scroll-reveal"><img class="scroll-art" src="assets/winter-scroll.png" alt="กรอบนิทาน"><div class="scroll-copy">'+html+'</div></div>';if(st.type==='result')html='<div class="result-scroll-reveal"><img class="result-scroll-art" src="assets/result-scroll.png" alt="กรอบผลลัพธ์"><div class="result-scroll-copy">'+html+'</div></div>';content.innerHTML=html;
content.querySelectorAll('[data-code]').forEach(el=>el.onclick=()=>{answers[st.i]=el.dataset.code;content.querySelectorAll('[data-code]').forEach(b=>b.classList.toggle('selected',b===el));next.disabled=false;updateLight()});content.querySelectorAll('[data-job]').forEach(el=>el.onclick=()=>{districtAnswers[st.code]=Number(el.dataset.job);content.querySelectorAll('[data-job]').forEach(b=>b.classList.toggle('selected',b===el));next.disabled=false});content.querySelectorAll('[data-factor]').forEach(el=>el.onchange=()=>{const selected=[...content.querySelectorAll('[data-factor]:checked')];if(selected.length>2)el.checked=false})}
function move(){if(busy)return;const st=steps()[position];if((st.type==='question'&&!answers[st.i])||(st.type==='districtQuestion'&&districtAnswers[st.code]===undefined))return;const action=()=>{if(st.type==='result'){answers.fill(null);route=[];Object.keys(districtAnswers).forEach(k=>delete districtAnswers[k]);position=0;showOpening()}else{if(st.type==='question'&&st.i===5)buildRoute();position++}render();scene.classList.remove('enter');void scene.offsetWidth;scene.classList.add('enter')};if(!motion){action();return}busy=true;overlay.classList.remove('active');void overlay.offsetWidth;overlay.classList.add('active');setTimeout(action,490);setTimeout(()=>{overlay.classList.remove('active');busy=false},1120)}
next.addEventListener('click',move);$('motion').addEventListener('click',()=>{motion=!motion;$('motion').textContent=motion?'✧ Motion เปิด':'✧ Motion ปิด';$('motion').setAttribute('aria-pressed',String(motion))});const snow=$('snow');for(let i=0;i<42;i++){const f=document.createElement('i');f.className='flake';f.style.cssText=`--x:${(i*73.7)%100}%;--s:${1+i%3}px;--o:${.25+(i%6)*.095};--d:${13+i%13}s;--delay:-${(i*1.97)%24}s;--wind:${(i%2?1:-1)*(25+i%70)}px`;snow.appendChild(f)}render();

// V14: separate cinematic opening title, then automatically reveal the first story.
const openingScreen = document.getElementById('openingScreen');
let openingTimer;
function finishOpening(){
  if(!openingScreen || openingScreen.classList.contains('opening-exit'))return;
  clearTimeout(openingTimer);
  openingScreen.classList.add('opening-exit');
  openingScreen.addEventListener('transitionend',e=>{if(e.target===openingScreen)openingScreen.hidden=true},{once:true});
  setTimeout(()=>{openingScreen.hidden=true},1200);
}
function showOpening(){
  if(!openingScreen)return;
  clearTimeout(openingTimer);
  openingScreen.hidden=false;
  openingScreen.classList.remove('opening-exit');
  openingTimer=setTimeout(finishOpening,matchMedia('(prefers-reduced-motion: reduce)').matches?500:3200);
}
showOpening();

// Background music: user-gesture start, gentle fade, looping and accessible toggle.
(() => {
  const audio = document.getElementById('backgroundMusic');
  const toggle = document.getElementById('musicToggle');
  if (!audio || !toggle) return;
  const targetVolume = 0.32;
  let enabled = true;
  let started = false;
  let fadeFrame = null;
  audio.volume = 0;
  function sync() {
    toggle.textContent = enabled ? '♫ ปิดเพลง' : '♫ เปิดเพลง';
    toggle.setAttribute('aria-pressed', String(enabled));
    toggle.setAttribute('aria-label', enabled ? 'ปิดเพลงประกอบ' : 'เปิดเพลงประกอบ');
  }
  function fadeTo(goal, duration = 1000, after) {
    if (fadeFrame !== null) cancelAnimationFrame(fadeFrame);
    const initial = audio.volume;
    const start = performance.now();
    const tick = now => {
      const t = Math.min(1, (now - start) / duration);
      const ease = t * t * (3 - 2 * t);
      audio.volume = Math.max(0, Math.min(1, initial + (goal - initial) * ease));
      if (t < 1) fadeFrame = requestAnimationFrame(tick);
      else { fadeFrame = null; if (after) after(); }
    };
    fadeFrame = requestAnimationFrame(tick);
  }
  async function start() {
    if (!enabled) return;
    try {
      await audio.play();
      started = true;
      fadeTo(targetVolume, 1700);
    } catch (e) {
      // Browsers may require an additional deliberate tap.
      started = false;
      toggle.textContent = '♫ แตะเพื่อเปิดเพลง';
    }
  }
  function firstGesture(e) {
    if (e.target.closest && e.target.closest('#musicToggle')) return;
    if (!started && enabled) start();
  }
  document.addEventListener('pointerdown', firstGesture, { passive: true });
  document.addEventListener('keydown', firstGesture);
  toggle.addEventListener('click', () => {
    enabled = !enabled;
    sync();
    if (enabled) start();
    else fadeTo(0, 450, () => audio.pause());
  });
  sync();
})();
