(() => {
  'use strict';
  const D = window.GAME_DATA;
  const C = window.HUE_CATALOGUE;
  const E = 'assets/hue-evidence/';
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const pairs = [
    {id:'01',name:'벽과 발판',look:'오른쪽 벽과 위쪽 발판이 한 화면에 얼마나 남는지 보세요.'},
    {id:'04',name:'낮은 천장',look:'천장과 이웃 발판을 함께 보는 여유가 달라집니다.'},
    {id:'06',name:'건너편 지형',look:'앞쪽의 빈 공간과 건너편 발판이 얼마나 일찍 보이는지 비교하세요.'}
  ];
  // This module presents project evidence inside the catalogue, not a portfolio world.
  const defaults = {pair:'01',variant:'960',foreground:'01',route:'plan'};
  let saved = {};
  try {saved=JSON.parse(sessionStorage.getItem('jisu-hue-v1')) || {};} catch {}
  const state = {
    pair:pairs.some(p=>p.id===saved.pair)?saved.pair:defaults.pair,
    variant:['960','640'].includes(saved.variant)?saved.variant:defaults.variant,
    foreground:['01','02','03'].includes(saved.foreground)?saved.foreground:defaults.foreground,
    route:['plan','flow'].includes(saved.route)?saved.route:defaults.route
  };
  const persist=()=>{try{sessionStorage.setItem('jisu-hue-v1',JSON.stringify(state));}catch{}};
  const entries = Object.fromEntries(['camera','foreground','route'].map((id,i)=>[id,C.entries[i]]));
  for (const [id,e] of Object.entries(entries)) {
    const ai = Object.entries(e.roles).filter(([name])=>name!=='정지수').map(([name,role])=>`${name}: ${role}`).join(' ');
    D.pages[id]={world:'huephoria',nav:e.eyebrow,title:e.title,type:'hue-'+id,tag:e.eyebrow,intro:e.summary,
      points:[[e.decision.question,e.decision.comparison],[id==='camera'?'직접 시험한 뒤의 선택':'자료에 남은 결과',id==='camera'?e.decision.user_observation+' '+e.decision.outcome:e.decision.outcome]],
      me:e.roles['정지수'],ai,status:e.status,evidence:e.limits+' '+(id==='camera'?'출처: 2026.11.11 결정 기록, HueSpecPreview.cs 비교 도구, 2026.11.10 규격 비교 PNG.':id==='foreground'?'출처: 2026.11.03 전시 장식 R14 패키지, runtime_camera_probe 기록 및 원본 PNG.':'출처: 출시판 뿌리밑 칸 지도·동선도 및 공유폴더 결정 기록.'),missing:null};
  }
  D.worlds.find(w=>w.id==='huephoria').pages=['camera','foreground','route','abilities','combat','level'];

  const choice=(attr,value,label,current)=>`<button data-hue-${attr}="${value}" aria-pressed="${value===current}" class="${value===current?'active':''}">${label}</button>`;
  function frame(src,alt,caption,cls='') {
    return `<figure class="hue-evidence-frame ${cls}"><button class="image-open" data-image="${src}" data-alt="${esc(alt)}" aria-label="${esc(alt)} 원본 확대"><img src="${src}" alt="${esc(alt)}" width="1920" height="1080"><span class="hue-expand">원본 확대 ↗</span></button><figcaption>${caption}</figcaption></figure>`;
  }
  function camera() {
    const p=pairs.find(p=>p.id===state.pair), label=state.variant==='960'?'960×540 · 유지':'640×360 · 시험안';
    return `<div class="hue-evidence camera-evidence"><div class="evidence-kicker"><span>실제 게임 씬 · 카메라 비교 렌더</span><span>2026.11</span></div><div class="evidence-selector" role="group" aria-label="비교할 장소">${pairs.map((q,i)=>choice('pair',q.id,`${i+1}. ${q.name}`,state.pair)).join('')}</div><div class="camera-variants" role="group" aria-label="카메라 범위">${choice('variant','960','<b>960 × 540</b><span>유지한 범위</span>',state.variant)}${choice('variant','640','<b>640 × 360</b><span>가까이 본 시험안</span>',state.variant)}</div>${frame(E+`camera-${p.id}-${state.variant}.png`,`${p.name} · ${label}`,`<span class="camera-caption" aria-live="polite">${p.name} · ${label}</span>`)}<p class="camera-observation">${p.look}</p><p class="hue-source-note">같은 아덴 위치에서 촬영한 두 안입니다. 이미지 출력은 모두 1920×1080이며, 위 수치는 내부 카메라 범위입니다.</p><blockquote class="hue-quote">“960이 낫겠다. 지금 건 너무 가까워서 어지러운 느낌이 있더라.”<cite>정지수 · 2026.11.11 결정 기록</cite></blockquote></div>`;
  }
  const sceneNames={'01':'시작 구간','02':'상부 구간','03':'보스 구간'};
  function foreground(){
    return `<div class="hue-evidence foreground-evidence"><div class="evidence-kicker"><span>실제 실행 카메라 렌더 · 전시판 R14</span></div><div class="evidence-selector" role="group" aria-label="실행 화면 구간">${Object.entries(sceneNames).map(([id,name])=>choice('foreground',id,name,state.foreground)).join('')}</div>${frame(E+`foreground-runtime-${state.foreground}.png`,`R14 ${sceneNames[state.foreground]} 실행 카메라`,`<span class="foreground-caption" aria-live="polite">${sceneNames[state.foreground]} · HUD 제외</span>`)}<p class="hue-source-note">화면에 붙은 테두리를 끄고, 맵 안에 전경 8개를 배치했습니다. 가까운 가지와 풀 사이로 플레이 공간을 남겼습니다.</p><div class="foreground-modules"><figure><img src="${E}foreground-fern-native.png" alt="맵에 배치하는 독립 양치식물 전경 모듈" loading="lazy"><figcaption>식물 전경</figcaption></figure><figure><img src="${E}foreground-branch-native.png" alt="맵에 배치하는 독립 가지 전경 모듈" loading="lazy"><figcaption>가지 전경</figcaption></figure><p>전체 화면을 덮는 프레임에서<br><b>장소마다 배치하는 조각으로</b></p></div></div>`;
  }
  function route(){
    const label=state.route==='plan'?'지형과 배치':'동선 표시';
    return `<div class="hue-evidence route-evidence"><div class="evidence-kicker"><span>개발 설계도 · 상세 배치 검토 중</span></div><div class="evidence-selector" role="group" aria-label="설계도 보기">${choice('route','plan','지형과 배치',state.route)}${choice('route','flow','동선 표시',state.route)}</div>${frame(E+`route-${state.route}.png`,`뿌리밑 설계도 · ${label}`,`<span class="route-caption" aria-live="polite">${label} · Claude 설계 제안</span>`,'route-plan-frame')}<p class="hue-source-note">원본 확대에서 칸 지도와 경로를 살펴볼 수 있습니다. 시작 구역 방향은 확정됐으며, 상세 배치는 제안 단계입니다.</p><div class="route-reading"><span><i>01</i>처음 읽는 주 경로</span><span><i>02</i>보상 뒤 연결되는 지름길</span><span><i>03</i>새 능력으로 돌아오는 길</span></div></div>`;
  }
  function updateImage(root,src,alt) {
    const button=root.querySelector('.hue-evidence-frame .image-open');
    button.dataset.image=src;button.dataset.alt=alt;button.setAttribute('aria-label',alt+' 원본 확대');
    const image=button.querySelector('img');image.src=src;image.alt=alt;
  }
  function selectButtons(root,attr,value){root.querySelectorAll(`[data-hue-${attr}]`).forEach(b=>{const on=b.getAttribute(`data-hue-${attr}`)===value;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});}
  function handleControl(target,root) {
    for(const attr of ['pair','variant','foreground','route']) {
      const value=target.getAttribute(`data-hue-${attr}`);
      if(value===null)continue;
      const allowed=attr==='pair'?pairs.map(p=>p.id):attr==='variant'?['960','640']:attr==='foreground'?['01','02','03']:['plan','flow'];
      if(!allowed.includes(value))return false;
      state[attr]=value;persist();selectButtons(root,attr,value);
      if(attr==='pair'||attr==='variant') {
        const p=pairs.find(p=>p.id===state.pair),label=state.variant==='960'?'960×540 · 유지':'640×360 · 시험안';
        updateImage(root,E+`camera-${p.id}-${state.variant}.png`,`${p.name} · ${label}`);
        root.querySelector('.camera-caption').textContent=`${p.name} · ${label}`;
        root.querySelector('.camera-observation').textContent=p.look;
      } else if(attr==='foreground') {
        updateImage(root,E+`foreground-runtime-${value}.png`,`R14 ${sceneNames[value]} 실행 카메라`);
        root.querySelector('.foreground-caption').textContent=`${sceneNames[value]} · HUD 제외`;
      } else {
        const label=value==='plan'?'지형과 배치':'동선 표시';
        updateImage(root,E+`route-${value}.png`,`뿌리밑 설계도 · ${label}`);
        root.querySelector('.route-caption').textContent=`${label} · Claude 설계 제안`;
      }
      return true;
    }
    return false;
  }
  window.HUE_EXPERIENCE = {handleControl,visuals:{'hue-camera':camera,'hue-foreground':foreground,'hue-route':route}};
})();
