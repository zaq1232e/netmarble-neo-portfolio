(() => {
  'use strict';
  const D = window.GAME_DATA;
  const P = window.PORTFOLIO_ENTRY;
  const V = window.PORTFOLIO_RECORDS;
  const app = document.getElementById('app');
  const dialog = document.getElementById('detail-dialog');
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const read = (key, fallback) => { try { return localStorage.getItem(key) ?? fallback; } catch { return fallback; } };
  const save = (key,value) => { try {localStorage.setItem(key,value);} catch {} };
  const explorationKey = 'jisu-exploration-v2';
  const validBalance = value => [0,70,98].includes(value) ? value : 70;
  const validTool = value => value === 'box' ? 'box' : 'cloth';
  const exploration = (() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem(explorationKey));
      return {
        world: D.worlds.some(w => w.id === saved?.world) ? saved.world : D.worlds[0].id,
        balance: validBalance(saved?.balance), tool: validTool(saved?.tool)
      };
    } catch { return {world:D.worlds[0].id,balance:70,tool:'cloth'}; }
  })();
  const saveExploration = () => { try {sessionStorage.setItem(explorationKey,JSON.stringify(exploration));} catch {} };
  let motion = read('jisu-motion-v2',matchMedia('(prefers-reduced-motion: reduce)').matches ? 'off':'on') !== 'off';
  let sound = read('jisu-sound-v2','off') === 'on';
  let selection = D.worlds.findIndex(w => w.id === exploration.world), current = {view:'start'}, returnFocus = null, audioCtx;
  let touchArmed = null, worldPointerType = '';
  const paths = {
    hue:'M12 2 16 8 22 12 16 16 12 22 8 16 2 12 8 8ZM12 6v12M6 12h12',
    comma:'M17 5c-5-4-13-1-13 5 0 5 6 8 10 5 3-2 3-7 0-9M16 15c1 3 0 6-3 7',
    craft:'m5 3 16 16-3 3L2 6Zm12-1-3 6 3 3 6-3M11 13l-7 8-2-2 8-7',
    person:'M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8M4 22v-4c0-6 16-6 16 0v4',
    arrow:'m9 5 7 7-7 7', back:'m15 5-7 7 7 7', close:'m5 5 14 14M19 5 5 19',
    expand:'M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5',
    settings:'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8M12 1v4M12 19v4M1 12h4M19 12h4M4 4l3 3M17 17l3 3M4 20l3-3M17 7l3-3',
    sound:'M3 9h4l5-5v16l-5-5H3ZM16 8c3 2 3 6 0 8M19 5c5 4 5 10 0 14',
    sword:'m5 20 14-14 2-4-4 2L3 18M2 14l8 8', shield:'m12 2 9 4v6c0 6-9 10-9 10S3 18 3 12V6Z',
    dash:'m12 4 8 8-8 8M3 7h7M2 12h10M3 17h7', leaf:'M20 3C8 0 0 10 6 17c6 6 16-2 14-14ZM5 20 16 8',
    heart:'M12 21 3 12C-2 4 8 0 12 7c4-7 14-3 9 5Z',
    play:'m7 3 14 9-14 9Z', pause:'M7 3v18M17 3v18',
    cloth:'m3 5 17 2-3 15L1 18ZM8 8l8 2M6 12l9 2',
    box:'m3 7 9-5 9 5v12l-9 4-9-4ZM3 7l9 5 9-5M12 12v11',
    check:'m4 12 5 5L21 5', info:'M12 11v7M12 6v1M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20'
  };
  const icon = (id,cls='') => window.ARCHIVE_ICONS?.icon(id,cls) || `<svg class="glyph ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[id] || paths.hue}"/></svg>`;
  const mark = () => window.ARCHIVE_ICONS?.seal() || `<svg class="crest" viewBox="0 0 80 80" aria-hidden="true" fill="none"><path d="M40 3 75 40 40 77 5 40Z"/><path d="M40 12 66 40 40 68 14 40Z"/><path d="M22 28c8-3 13-1 18 3 5-4 10-6 18-3v25c-8-3-13-1-18 3-5-4-10-6-18-3Z"/><path d="M40 31v25M27 35l8 3m-8 4 8 3m10-7 8-3m-8 10 8-3"/><path d="M40 3v9m35 28h-9M40 77v-9M5 40h9"/></svg>`;
  const hint = (key,label) => `<span class="key-hint"><kbd>${key}</kbd>${label}</span>`;
  const worldFor = id => D.worlds.find(w => w.id === id) || D.worlds[0];
  // Coordinates follow the existing 1672 × 941 artwork. SVG's slice mapping
  // matches the image's object-fit:cover, including ultra-wide crops and pans.
  const islandOutlines = {
    "huephoria": "250,195 265,160 290,138 343,117 380,115 420,97 452,92 488,75 527,55 545,32 592,18 662,23 742,53 827,50 874,30 922,32 960,18 1020,15 1074,28 1157,23 1210,40 1247,58 1314,57 1359,73 1417,82 1445,105 1424,130 1445,145 1485,180 1455,207 1404,212 1384,245 1365,265 1334,280 1344,295 1289,314 1260,340 1224,350 1167,360 1114,374 1060,369 1002,379 945,405 912,410 912,429 872,440 885,455 837,455 802,435 747,437 678,425 610,404 592,380 550,380 502,365 455,335 443,299 392,299 348,264 302,259 280,240 255,225",
    "comma": "32,305 53,274 97,262 137,255 177,260 207,252 252,257 290,280 302,297 278,319 227,325 215,344 265,350 308,355 348,364 378,377 423,374 465,400 508,422 543,447 577,464 620,471 663,482 707,496 743,527 752,564 722,582 673,587 657,567 613,564 587,546 548,541 537,516 495,511 458,509 433,497 390,497 375,514 408,526 420,552 438,574 490,582 497,599 555,594 605,617 658,649 672,672 645,694 612,711 573,719 543,741 490,757 463,774 478,794 520,803 545,796 592,784 627,791 657,828 635,851 588,856 558,869 510,868 463,878 412,876 362,876 330,854 293,854 267,839 235,836 198,828 168,799 133,793 108,764 88,741 42,716 35,682 22,652 28,634 15,601 17,571 35,541 35,506 23,476 38,449 68,425 55,404 78,382 112,385 127,374 87,367 50,347 28,332",
    "archive": "785,659 830,622 840,597 882,586 864,561 875,539 905,521 939,512 967,486 1015,471 1052,474 1089,450 1127,429 1185,414 1227,407 1245,380 1295,364 1339,340 1367,319 1397,307 1434,317 1465,287 1500,270 1554,267 1589,280 1605,307 1644,344 1657,384 1639,414 1654,449 1652,484 1655,516 1654,554 1660,602 1650,636 1649,676 1634,704 1650,741 1632,786 1589,816 1539,843 1500,854 1465,871 1427,894 1380,906 1327,903 1277,903 1234,893 1184,888 1157,866 1114,848 1132,828 1174,814 1212,789 1247,769 1207,761 1167,756 1147,734 1097,734 1035,722 990,722 949,747 907,762 864,762 820,739 812,706 785,697"
  };
  // The original map remains the only bitmap. Remove each island's interior
  // from the fixed foundation before compositing its soft-edged movable layer.
  // This avoids leaving a second mountain/roof underneath the enlarged copy.
  const worldFoundation = () => `<svg class="world-foundation" viewBox="0 0 1672 941" aria-hidden="true" focusable="false"><defs><mask id="world-foundation-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="1672" height="941"><rect width="1672" height="941" fill="white"/>${D.worlds.map(w=>`<polygon class="island-base-hole" data-points="${islandOutlines[w.id]}" data-x="${w.x*16.72}" data-y="${w.y*9.41}" points="${islandOutlines[w.id]}" fill="black" transform="translate(${w.x*16.72} ${w.y*9.41}) scale(.97) translate(${-w.x*16.72} ${-w.y*9.41})"/>`).join('')}</mask></defs><image href="assets/world-sea.png" width="1672" height="941" mask="url(#world-foundation-mask)"/></svg>`;
  const islandSurface = w => `<svg class="island-surface" viewBox="0 0 1672 941" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false"><defs><filter id="island-soft-${w.id}" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="4"/></filter><mask id="island-mask-${w.id}" maskUnits="userSpaceOnUse" x="-40" y="-40" width="1752" height="1021"><polygon points="${islandOutlines[w.id] || ''}" fill="white" filter="url(#island-soft-${w.id})"/></mask></defs><g class="island-cutout" data-points="${islandOutlines[w.id] || ''}" style="transform-origin:${(w.x*16.72).toFixed(3)}px ${(w.y*9.41).toFixed(3)}px"><image href="assets/world-sea.png" width="1672" height="941" mask="url(#island-mask-${w.id})"/></g><polygon class="island-hit" points="${islandOutlines[w.id] || ''}"/></svg>`;
  const go = hash => { if (location.hash !== hash) {cancelTravel();location.hash = hash;} };
  const recordTarget = (world,page) => {
    const aliases={"huephoria/abilities":["huephoria","level"],"huephoria/combat":["huephoria","level"],"huephoria/journey":["huephoria","intro"],"huephoria/foreground":["huephoria","level"],"huephoria/route":["huephoria","level"],"huephoria/direction":["huephoria","level"],"huephoria/exhibition":["huephoria","camera"],"comma/screen":["comma","space"],"archive/pixel":["huephoria","aden"],"archive/colour":["huephoria","level"],"archive/direction":["huephoria","level"],"archive/ready-pose":["huephoria","level"],"archive/pixel-review":["huephoria","level"],"archive/camera":["huephoria","camera"],"archive/implementation":["huephoria","camera"]};
    const target=aliases[world+'/'+page];
    return target?{world:target[0],page:target[1]}:{world,page};
  };
  const folio = (w,p) => {const target=recordTarget(w,p);return `#/folio/${target.world}/${pageFor(target.world,target.page)}`;};
  function ping(type='focus') {
    if (!sound) return;
    try {
      audioCtx ||= new (window.AudioContext || window.webkitAudioContext)();
      audioCtx.resume();
      const o=audioCtx.createOscillator(),g=audioCtx.createGain(),t=audioCtx.currentTime;
      o.type='sine'; o.frequency.setValueAtTime(type==='enter'?440:660,t); o.frequency.exponentialRampToValueAtTime(type==='enter'?880:440,t+.12);
      g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.035,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+.18);
      o.connect(g);g.connect(audioCtx.destination);o.start(t);o.stop(t+.2);
    } catch {}
  }
  function applyPreferences(){document.documentElement.classList.toggle('reduced-motion',!motion);}
  function openModal(title,body,cls=''){
    returnFocus=document.activeElement;
    dialog.className=cls;
    dialog.innerHTML=`<div class="dialog-head"><h2 id="dialog-title">${title}</h2><button class="icon-button" data-action="close" aria-label="닫기">${icon('close')}</button></div>${body}`;
    dialog.showModal();
  }
  function settings(){
    openModal('환경 설정',`<div class="settings-body"><p>움직임과 효과음을 조절할 수 있습니다.</p><button class="setting-row" data-action="motion" aria-pressed="${motion}"><span>카메라·화면 움직임</span><b>${motion?'켜짐':'꺼짐'}</b></button><button class="setting-row" data-action="sound" aria-pressed="${sound}"><span>선택 효과음</span><b>${sound?'켜짐':'꺼짐'}</b></button><p class="small-note">배경음악은 사용하지 않습니다.</p><button class="text-action" data-action="credits">이미지·제작 안내 ${icon('info')}</button></div>`);
  }
  function credits(){
    openModal('이미지·제작 안내',`<div class="source-body"><p>포트폴리오 기획·아트 디렉션: 정지수<br>사이트 구현·포트폴리오 월드 이미지: ChatGPT</p><p>휴포리아의 기획부터 캐릭터·맵·UI 제작까지, 작업 중 마주한 문제와 바꿔 온 과정을 담았습니다. 각 작업의 담당 범위와 AI 활용은 본문에 함께 소개합니다.</p>${window.ARCHIVE_ICONS?.credit()||''}</div>`);
  }
  function showProfile(){
    openModal('기획자 기록',`<div class="profile"><div class="profile-emblem">${mark()}</div><p class="eyebrow">게임 시스템 · 콘텐츠 기획</p><h3>정지수</h3><p class="profile-intro">플레이의 방향을 정하고,<br>기획부터 제작까지 이어갑니다.</p><div class="profile-lines"><div><b>시스템과 전투</b><span>피격 조건, 자원 획득·소모, 능력의 역할</span></div><div><b>공간과 화면</b><span>진행 동선, 플레이 상태와 UI의 일치</span></div><div><b>제작 디렉션</b><span>캐릭터·맵·UI의 컨셉과 구체적인 제작 지시, 결과 선택·수정</span></div><div><b>직접 손질·제작</b><span>PixelLab로 만든 주인공의 망토·빛·다리 수정, 전시용 맵 도트 제작</span></div><div><b>팀과 담당 범위</b><span>초기 4인 팀에서 시작했습니다. 전시판 적의 초기 콘셉트는 팀원이 맡았고, 인원 감축 후에는 몹 컨셉을 제외한 제작 전반을 담당했습니다. 전시 이후에는 적의 표현 기준과 공격 방향을 정했습니다.</span></div></div><p class="small-note">기획과 아이디어를 주로 제안하고 팀원의 의견과 동의를 구하며 진행했습니다. 팀원들은 주로 맵·캐릭터 이미지 제작을 도왔습니다.<br>기획과 판단은 제가 맡고, 이미지·UI 생성과 구현에는 AI를 활용했습니다.<br>넷마블네오 인턴십의 졸업 지원 조건을 충족하며, 2027년 3월부터 5개월간 풀타임 근무가 가능합니다.</p><button class="game-button" data-action="profile-archive">ARCHIVE 열기 ${icon('arrow')}</button></div>`,'profile-dialog');
  }
  let sharedEntry = null;
  function getSharedEntry() {
    const navType=window.performance?.getEntriesByType?.('navigation')?.[0]?.type;
    if(navType==='reload'||navType==='back_forward'||history.state?.portfolioRoute===location.hash)return null;
    const [kind,area,chapter]=location.hash.replace(/^#\/?/,'').split('/');
    if(!['folio','region','hue'].includes(kind))return null;
    const entry=kind==='hue'?recordTarget('huephoria',area):recordTarget(area,chapter);
    if(!D.worlds.find(w=>w.id===entry.world)?.pages.includes(entry.page))return null;
    return folio(entry.world,entry.page);
  }
  function openTitle(){
    cancelTravel();
    if(location.hash!=='#/start')history.replaceState(history.state,'','#/start');
    render();
  }
  function renderStart(){
    const sharedLink = sharedEntry ? `<a class="title-quick-case" href="${esc(sharedEntry)}">공유받은 기록 열기</a>` : '';
    app.innerHTML=`<main class="title-screen screen" id="main-content" tabindex="-1"><div class="title-scene" aria-hidden="true"><img class="title-art" src="assets/title-v2.webp" alt="" decoding="sync" fetchpriority="high"></div><img src="assets/world-sea.png" alt="" hidden aria-hidden="true" decoding="async"><div class="title-shade" aria-hidden="true"></div><div class="title-grain" aria-hidden="true"></div><div class="title-composition">${mark()}<p class="title-overline">JISU · GAME DESIGN ARCHIVE</p><h1 tabindex="-1">PORTFOLIO</h1><div class="title-divider"><i></i><span>막힌 기획을 플레이로 검증한 기록</span><i></i></div></div><div class="title-menu"><button class="start-choice" data-action="start">시작하기 ${icon('arrow')}</button>${sharedLink}</div><footer class="title-footer"><button type="button" class="title-identity" data-action="start" aria-label="정지수 기획자 상태창 보기">정지수 <i>·</i> 게임 시스템 · 콘텐츠 기획</button><button class="quiet-button" data-action="settings">${icon('settings')}환경 설정</button></footer></main>`;
  }
  function renderWorld(){
    touchArmed=null;worldPointerType='';
    app.innerHTML=`<main class="world-screen world-natural screen" id="main-content" tabindex="-1"><div class="world-ambient" aria-hidden="true"></div><div class="world-vignette" aria-hidden="true"></div>
      <header class="world-navigation"><button data-action="title">시작 화면</button><h1 class="world-select-heading" tabindex="-1">월드 선택</h1><div><button class="mobile-profile-button" data-action="profile">정지수 소개</button><button data-action="settings">환경 설정</button></div></header>
      <div class="map-viewport"><div class="world-plane"><img class="world-art" src="assets/world-sea.png" alt="바다 너머의 휴포리아 성문, 왼쪽의 comma, 마을, 오른쪽의 서고 섬 ARCHIVE">${worldFoundation()}
        ${D.worlds.map((w,i)=>`<button class="world-node ${i===selection?'selected':''}" style="--x:${w.x}%;--y:${w.y}%;--accent:${w.accent}" data-world="${w.id}" data-index="${i}" aria-label="${esc(w.name)} — ${esc(w.title)} 섬의 기록 보관소 들어가기" aria-describedby="world-interaction-hint">${islandSurface(w)}<span class="island-name">${esc(w.name)}<small class="island-touch-hint">한 번 더 눌러 입장</small></span></button>`).join('')}
      </div></div>
      <footer class="world-bottom"><p id="world-interaction-hint"><span class="world-pointer-guide">원하는 월드를 선택하세요 · 방향키 선택 · Enter 입장</span><span class="world-touch-guide">섬을 선택한 뒤 한 번 더 눌러 입장</span></p><button data-action="credits">이미지·제작 안내</button></footer></main>`;
    updateSelection(false);
  }
  function updateSelection(withSound=true){
    const w=D.worlds[selection];
    exploration.world=w.id;saveExploration();
    app.querySelectorAll('.world-node').forEach((b,i)=>{
      b.classList.toggle('selected',i===selection);b.classList.toggle('is-armed',b.dataset.world===touchArmed);
      b.classList.toggle('is-raised',i===selection&&(worldPointerType==='mouse'||touchArmed===b.dataset.world||document.activeElement===b));
      b.setAttribute('aria-current',i===selection?'true':'false');
    });
    // The world camera stays fixed. Only a clipped island responds to selection.
    if(withSound)ping();
  }

  function pageFor(worldId,requested){
    const {pages}=worldFor(worldId);
    return pages.includes(requested)?requested:pages[0];
  }
  function cancelTravel(){P?.cancel();}
  function openStatus(){
    if(current.view!=='start'||P?.isActive())return;
    ping('enter');
    go('#/status');
  }
  function enterWorld(){
    if(current.view!=='status'||P?.isActive())return;
    ping('enter');
    // Like island entry, this reveals the destination immediately underneath
    // a snapshot. Animation completion never changes history or the route.
    try{P?.beginStart?.({targetHash:'#/world',motion});}catch{P?.cancel();}
    location.hash='#/world';
  }
  function travel(id){
    if(current.view!=='world'||P?.isActive())return;
    const w=worldFor(id);
    selection=D.worlds.indexOf(w);updateSelection(false);ping('enter');
    const destination=folio(w.id);
    // The route changes now; the outgoing map animates independently above it.
    // No animation callback is allowed to navigate, including after Back or Escape.
    try{P?.begin(w,{targetHash:destination,motion});}catch{P?.cancel();}
    location.hash=destination;
  }
  function changePage(delta,wrap=false){
    const w=worldFor(current.world),index=w.pages.indexOf(current.page)+delta;
    if(wrap)go(folio(w.id,w.pages[(index+w.pages.length)%w.pages.length]));
    else if(index>=0&&index<w.pages.length)go(folio(w.id,w.pages[index]));
  }
  function render(){
    P?.sync(location.hash);
    const previous={...current},focusedPage=document.activeElement?.dataset?.page;
    if(dialog.open)dialog.close();
    let parts=location.hash.replace(/^#\/?/,'').split('/');
    if(parts[0]==='folio'){
      const target=recordTarget(parts[1],parts[2]);
      if(target.world!==parts[1]||target.page!==parts[2]){
        const destination=folio(target.world,target.page);
        history.replaceState(history.state,'',destination);parts=destination.slice(2).split('/');
      }
    }
    if(parts[0]==='region'||parts[0]==='hue'){
      const worldId=parts[0]==='hue'?'huephoria':worldFor(parts[1]).id;
      const requested=parts[0]==='hue'?parts[1]:parts[2];
      const destination=folio(worldId,requested);
      history.replaceState(history.state,'',destination);
      parts=destination.slice(2).split('/');
    }
    // Retired v9 summary links return to the original title entrance.
    if(parts[0]==='overview'){history.replaceState(history.state,'','#/start');parts=['start'];}
    if(parts[0]==='status'){
      current={view:'status'};
      app.innerHTML=window.PORTFOLIO_STATUS.render({icon,mark,edition:'neo'});
    }else if(parts[0]==='world'){
      current={view:'world'};renderWorld();
    }else if(parts[0]==='folio'&&D.worlds.find(w=>w.id===parts[1])?.pages.includes(parts[2])){
      current={view:'folio',world:parts[1],page:parts[2]};
      selection=D.worlds.findIndex(w=>w.id===current.world);
      exploration.world=current.world;saveExploration();
      app.innerHTML=V.render(current.world,current.page,{icon});
    }else if(parts[0]==='codex'){
      const destination=parts[1]==='creator'?'#/world':folio(worldFor(parts[1]).id);
      history.replaceState(history.state,'',destination);render();return;
    }else{
      current={view:'start'};renderStart();
    }
    if(current.view!=='start'){
      sharedEntry=null;
      if(history.state?.portfolioRoute!==location.hash)history.replaceState({...history.state,portfolioRoute:location.hash},'');
    }
    applyPreferences();
    const keepChapterFocus=current.view==='folio'&&previous.view==='folio'&&previous.world===current.world&&focusedPage===current.page;
    const focusTarget=keepChapterFocus?app.querySelector('.record-chapters [data-page="'+current.page+'"]'):app.querySelector('h1');
    focusTarget?.focus({preventScroll:true});
    if(current.view==='folio')app.querySelector('.record-chapters [data-page="'+current.page+'"]')?.scrollIntoView({block:'nearest',inline:'nearest'});
    window.scrollTo(0,0);
  }
  document.addEventListener('click',e=>{
    const target=e.target.closest('button,a');if(!target)return;
    if(target.classList.contains('skip-link')){
      e.preventDefault();document.getElementById('main-content')?.focus();return;
    }
    if(V?.handleControl(target,app,{openModal,icon})){ping();return;}
    if(target.dataset.world){
      const touch=e.detail>0&&(worldPointerType==='touch'||worldPointerType==='pen'||matchMedia('(hover: none) and (pointer: coarse)').matches);
      if(current.view==='world'&&touch&&touchArmed!==target.dataset.world){
        touchArmed=target.dataset.world;selection=D.worlds.findIndex(w=>w.id===touchArmed);updateSelection();return;
      }
      travel(target.dataset.world);return;
    }
    if(target.dataset.page&&current.view==='folio'&&worldFor(current.world).pages.includes(target.dataset.page)){
      ping();go(folio(current.world,target.dataset.page));return;
    }
    switch(target.dataset.action){
      case 'start':openStatus();break;
      case 'enter-map':enterWorld();break;
      case 'title':go('#/start');break;
      case 'world':
      case 'region-return':go('#/world');break;
      case 'world-prev':selection=(selection+D.worlds.length-1)%D.worlds.length;updateSelection();break;
      case 'world-next':selection=(selection+1)%D.worlds.length;updateSelection();break;
      case 'enter':travel(D.worlds[selection].id);break;
      case 'profile':showProfile();break;
      case 'profile-archive':dialog.close();go(folio('archive'));break;
      case 'settings':settings();break;
      case 'credits':if(dialog.open)dialog.close();credits();break;
      case 'close':dialog.close();break;
      case 'motion':
        motion=!motion;save('jisu-motion-v2',motion?'on':'off');applyPreferences();
        if(!motion)cancelTravel();
        target.setAttribute('aria-pressed',motion);target.querySelector('b').textContent=motion?'켜짐':'꺼짐';break;
      case 'sound':
        sound=!sound;save('jisu-sound-v2',sound?'on':'off');
        target.setAttribute('aria-pressed',sound);target.querySelector('b').textContent=sound?'켜짐':'꺼짐';ping('enter');break;
      case 'prev-page':changePage(-1);break;
      case 'next-page':changePage(1);break;
    }
  });
  app.addEventListener('pointerover',e=>{
    const node=e.target.closest('.world-node');
    if(node&&e.pointerType==='mouse'&&!P?.isActive()){
      worldPointerType='mouse';touchArmed=null;const changed=Number(node.dataset.index)!==selection;selection=Number(node.dataset.index);updateSelection(changed);
    }
  });
  app.addEventListener('pointerout',e=>{
    if(current.view!=='world'||e.pointerType!=='mouse')return;
    const from=e.target.closest('.world-node'),to=e.relatedTarget?.closest?.('.world-node');
    if(from&&!to){worldPointerType='';app.querySelectorAll('.world-node').forEach(b=>b.classList.remove('is-raised'));}
  });
  app.addEventListener('pointerdown',e=>{
    if(current.view!=='world')return;
    worldPointerType=e.pointerType||'';
    if(!e.target.closest('.world-node')&&touchArmed){touchArmed=null;updateSelection(false);}
  });
  app.addEventListener('focusin',e=>{
    const node=e.target.closest('.world-node');
    if(node){if(!['touch','pen'].includes(worldPointerType))worldPointerType='keyboard';selection=Number(node.dataset.index);updateSelection(false);}
  });
  app.addEventListener('pointermove',e=>{
    if(!motion||current.view!=='start')return;
    const s=app.querySelector('.title-scene');
    s.style.setProperty('--look-x',((e.clientX/innerWidth-.5)*12)+'px');
    s.style.setProperty('--look-y',((e.clientY/innerHeight-.5)*8)+'px');
  });
  dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
  dialog.addEventListener('close',()=>{if(returnFocus?.isConnected)returnFocus.focus({preventScroll:true});});
  window.addEventListener('keydown',e=>{
    if(dialog.open)return;
    if(e.key==='Escape'){
      if(P?.isActive()){cancelTravel();go('#/world');return;}
      if(current.view==='folio')go('#/world');else if(current.view==='world'||current.view==='status')go('#/start');
      return;
    }
    if(e.target.closest('input,select,textarea'))return;
    if(V?.handleKey(e,app))return;
    if(e.key==='Enter'&&e.repeat&&['start','status','world'].includes(current.view)){
      e.preventDefault();return;
    }
    if(e.key==='Enter'&&!e.target.closest('button,a')&&(current.view==='start'||current.view==='status')){
      e.preventDefault();
      if(current.view==='start')openStatus();else enterWorld();
      return;
    }
    if(current.view==='world'){
      if(['ArrowLeft','ArrowRight'].includes(e.key)){
        e.preventDefault();touchArmed=null;selection=(selection+(e.key==='ArrowLeft'?-1:1)+D.worlds.length)%D.worlds.length;
        updateSelection();app.querySelectorAll('.world-node')[selection]?.focus({preventScroll:true});
      }
      if(e.key==='Enter'&&!e.target.closest('button,a')){e.preventDefault();travel(D.worlds[selection].id);}
    }
    if(current.view==='folio'){
      if(e.target.closest('.record-chapters')&&['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){
        e.preventDefault();
        const w=worldFor(current.world),delta=['ArrowLeft','ArrowUp'].includes(e.key)?-1:1;
        const next=w.pages[(w.pages.indexOf(current.page)+delta+w.pages.length)%w.pages.length];
        app.querySelector('.record-chapters [data-page="'+next+'"]')?.focus({preventScroll:true});
        go(folio(w.id,next));return;
      }
      if(['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();changePage(e.key==='ArrowLeft'?-1:1);}
    }
  });
  window.addEventListener('hashchange',render);
  window.addEventListener('pagehide',cancelTravel);
  window.addEventListener('pageshow',event=>{
    if(event.persisted){sharedEntry=null;openTitle();}
  });
  sharedEntry=getSharedEntry();
  openTitle();
})();
