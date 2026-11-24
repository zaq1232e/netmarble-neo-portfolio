(() => {
  'use strict';
  const storageKey = 'jisu-portfolio-regions-v1';
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const regions = {
    huephoria:{name:'HUEPHORIA',number:'01',asset:'assets/scenes/hue-interior.webp',arrival:'탐험의 섬',
      alt:'다리 너머 관측 테라스, 수로 회랑과 갈림 계단이 이어지는 탐험의 섬 내부',points:[
        {id:'camera',label:'관측 테라스',record:'카메라 비교',x:20,y:33},
        {id:'foreground',label:'수로 회랑',record:'전경 배치',x:54,y:47},
        {id:'route',label:'갈림 계단',record:'진행 동선',x:79,y:44}
      ]},
    comma:{name:'comma,',number:'02',asset:'assets/scenes/comma-interior.webp',arrival:'생활의 섬',
      alt:'마당과 생활 공간, 작은 도구의 장소가 길로 연결된 생활의 섬 내부',points:[
        {id:'space',label:'여백의 마당',record:'공간과 여백',x:32,y:49},
        {id:'screen',label:'도구의 골목',record:'플레이 화면',x:68,y:44}
      ]},
    archive:{name:'역량공방',number:'03',asset:'assets/scenes/archive-interior.webp',arrival:'제작의 섬',
      alt:'도트 작업대, 시각 실험실과 설계 공방을 잇는 제작의 섬 내부',points:[
        {id:'pixel',label:'도트 작업대',record:'AI 생성·직접 손질 도트',x:25,y:50},
        {id:'direction',label:'시각 실험실',record:'수정의 판단',x:50,y:35},
        {id:'implementation',label:'설계 공방',record:'구현과 협업',x:76,y:45}
      ]}
  };
  const worldIdFor = id => Object.hasOwn(regions,id) ? id : 'huephoria';
  let saved = {};
  try {saved=JSON.parse(sessionStorage.getItem(storageKey)) || {};} catch {}
  const selected=Object.fromEntries(Object.entries(regions).map(([id,region])=>[
    id,region.points.some(point=>point.id===saved[id])?saved[id]:region.points[0].id
  ]));
  function remember(worldId,pageId) {
    if(!Object.hasOwn(regions,worldId)||!regions[worldId].points.some(point=>point.id===pageId))return;
    selected[worldId]=pageId;
    try {sessionStorage.setItem(storageKey,JSON.stringify(selected));} catch {}
  }
  const pointFor=worldId=>selected[worldIdFor(worldId)];
  function step(worldId,delta) {
    const id=worldIdFor(worldId),points=regions[id].points,index=points.findIndex(point=>point.id===selected[id]);
    const offset=Number.isInteger(delta)?delta:0;
    return points[((index+offset)%points.length+points.length)%points.length].id;
  }
  function camera(point) {
    return {'--scene-pan-x':(50-point.x)*.025+'%','--scene-pan-y':(50-point.y)*.025+'%',
      '--scene-mobile-pan-x':(50-point.x)+'%','--active-x':point.x+'%','--active-y':point.y+'%'};
  }
  function render(worldId,pageId,{icon=()=>'',hint=()=>''}={}) {
    const id=worldIdFor(worldId);remember(id,pageId);
    const region=regions[id],point=region.points.find(item=>item.id===selected[id]);
    const styles=Object.entries(camera(point)).map(([key,value])=>`${key}:${value}`).join(';');
    return `<main class="region-screen screen" id="main-content" tabindex="-1" data-region="${id}" data-region-selected="${point.id}" data-region-status="loading" style="${styles}">
      <div class="region-scene"><div class="region-depth"><div class="region-plane">
        <img class="region-art" data-region-art src="${region.asset}" alt="${esc(region.alt)}" decoding="async" fetchpriority="high" draggable="false">
        <nav class="region-places" aria-label="${esc(region.name)}의 장소">${region.points.map((item,index)=>`<button class="region-pin ${item.id===point.id?'selected':''}" data-region-point="${item.id}" aria-current="${item.id===point.id?'location':'false'}" aria-label="${esc(item.label)} · ${esc(item.record)} 선택" style="--point-x:${item.x}%;--point-y:${item.y}%"><span class="region-pin-mark" aria-hidden="true">${String(index+1).padStart(2,'0')}</span><span class="region-pin-label">${esc(item.label)}</span></button>`).join('')}</nav>
        <div class="region-callout"><button class="region-open" data-region-open="${point.id}"><span class="region-open-title">${esc(point.record)}</span><span>기록 열기 ${icon('arrow')}</span></button></div>
      </div></div></div>
      <div class="region-shade" aria-hidden="true"></div>
      <header class="region-hud"><button class="hud-back" data-action="world">${icon('back')}전체 월드</button><div class="region-title"><span>${esc(region.arrival)} / ${region.number}</span><h1 tabindex="-1">${esc(region.name)}</h1></div><button class="icon-button" data-action="settings" aria-label="환경 설정">${icon('settings')}</button></header>
      <div class="region-arrival" aria-hidden="true"><span>ARRIVED</span><strong>${esc(region.arrival)}</strong></div>
      <div class="region-loading" aria-hidden="true"><i></i><span>장소를 불러오는 중</span></div>
      <section class="region-fallback" aria-labelledby="region-fallback-title" hidden><p>${esc(region.arrival)}</p><h2 id="region-fallback-title">${esc(region.name)}</h2><p>이 장소의 배경을 불러오지 못했습니다.<br>다시 시도하거나 기록을 바로 열 수 있습니다.</p><div><button data-region-retry>다시 불러오기</button><button data-action="world">전체 월드로</button></div></section>
      <nav class="region-mobile-nav" aria-label="장소 이동"><button class="region-step" data-region-step="-1" data-region-point="${step(id,-1)}" aria-label="이전 장소">${icon('back')}</button><span class="region-current-place">${esc(point.label)}</span><button class="region-step" data-region-step="1" data-region-point="${step(id,1)}" aria-label="다음 장소">${icon('arrow')}</button><button class="region-mobile-open" data-region-open="${point.id}" aria-label="${esc(point.record)} 기록 열기">기록 열기 ${icon('arrow')}</button></nav>
      <footer class="region-footer"><div>${hint('← →','장소 선택')}${hint('Enter','기록 열기')}${hint('Esc','전체 월드')}</div><span>포트폴리오 공간 · AI 장면</span></footer>
      <p class="sr-only region-load-status" role="status" aria-live="polite">${esc(region.name)} 장소를 불러오는 중</p>
    </main>`;
  }
  function update(root,worldId,pageId) {
    const id=worldIdFor(worldId);
    if(!root||root.dataset.region!==id)return;
    remember(id,pageId);
    const region=regions[id],point=region.points.find(item=>item.id===selected[id]);
    root.dataset.regionSelected=point.id;
    for(const [key,value] of Object.entries(camera(point)))root.style.setProperty(key,value);
    root.querySelectorAll('[data-region-point]').forEach(button=>{
      if(button.dataset.regionStep){button.dataset.regionPoint=step(id,Number(button.dataset.regionStep));return;}
      const active=button.dataset.regionPoint===point.id;
      button.setAttribute('aria-current',active?'location':'false');button.classList.toggle('selected',active);
    });
    root.querySelectorAll('[data-region-open]').forEach(button=>{
      button.dataset.regionOpen=point.id;button.setAttribute('aria-label',point.record+' 기록 열기');
      const title=button.querySelector('.region-open-title');if(title)title.textContent=point.record;
    });
    const name=root.querySelector('.region-current-place');if(name)name.textContent=point.label;
    // Updating a point deliberately retains the current DOM and keyboard focus.
  }

  // Only the mounted image can settle. Late events from a replaced image or a
  // departed route never finish an old request into a new scene. No input lock.
  let suspended=false;
  function currentRoot(image) {
    if(suspended||!image?.matches?.('[data-region-art]'))return null;
    const root=image.closest('.region-screen');
    if(!root?.isConnected||document.getElementById('main-content')!==root||root.querySelector('[data-region-art]')!==image)return null;
    const route=location.hash.replace(/^#\/?/,'').split('/');
    return route[0]==='region'&&route[1]===root.dataset.region?root:null;
  }
  function settle(image,loaded) {
    const root=currentRoot(image);if(!root)return;
    const ready=loaded&&image.naturalWidth>0&&image.naturalHeight>0;
    if(ready)root.style.setProperty('--scene-aspect',image.naturalWidth/image.naturalHeight);
    root.dataset.regionStatus=ready?'ready':'error';
    root.querySelector('.region-fallback').hidden=ready;
    root.querySelector('.region-load-status').textContent=ready?regions[root.dataset.region].name+'에 도착했습니다.':regions[root.dataset.region].name+' 배경을 불러오지 못했습니다. 다시 불러오거나 기록을 열 수 있습니다.';
  }
  document.addEventListener('load',event=>settle(event.target,true),true);
  document.addEventListener('error',event=>settle(event.target,false),true);
  document.addEventListener('click',event=>{
    const retry=event.target.closest?.('[data-region-retry]');if(!retry)return;
    const root=retry.closest('.region-screen'),old=root?.querySelector('[data-region-art]');
    if(!currentRoot(old))return;
    const image=old.cloneNode(false);image.removeAttribute('src');
    root.dataset.regionStatus='loading';
    root.querySelector('.region-fallback').hidden=true;
    root.querySelector('.region-load-status').textContent=regions[root.dataset.region].name+' 장소를 다시 불러오는 중';
    old.replaceWith(image);
    image.src=regions[root.dataset.region].asset;
    if(image.complete)settle(image,image.naturalWidth>0);
  });
  window.addEventListener('pagehide',()=>{suspended=true;});
  window.addEventListener('pageshow',()=>{
    suspended=false;
    const image=document.getElementById('main-content')?.querySelector('[data-region-art]');
    if(image?.complete)settle(image,image.naturalWidth>0);
  });
  window.PORTFOLIO_REGIONS={render,update,pointFor,step,remember};
})();
