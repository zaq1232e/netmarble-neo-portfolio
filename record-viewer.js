(() => {
  'use strict';
  const D=window.GAME_DATA, content=window.RECORD_CONTENT ||= {};
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const base='assets/hue-evidence/';
  Object.assign(content,{
    camera:{mode:'camera',label:'게임 스크린샷 · 카메라 시야 비교',initial:'01',images:[
      {id:'01',label:'벽과 발판',alt:'오른쪽 벽과 분리된 발판',caption:'벽과 위쪽 발판이 함께 보이는 범위를 비교했습니다.'},
      {id:'04',label:'낮은 천장',alt:'낮은 천장 아래 발판',caption:'천장 아래에서도 다음 발판을 읽을 여유를 살폈습니다.'},
      {id:'06',label:'건너편 지형',alt:'낮은 길과 건너편 발판',caption:'건너편 발판을 미리 보고 이동할 수 있는지 비교했습니다.'}]},
    foreground:{mode:'gallery',label:'전시판 R14 · 실행 렌더와 독립 전경 원본',initial:'start',images:[
      {id:'start',src:base+'foreground-runtime-01.png',label:'시작 구간',caption:'카메라 고정 프레임을 끄고 맵에 독립 전경을 배치한 실행 화면.',alt:'전시판 시작 구간 실행 카메라'},
      {id:'upper',src:base+'foreground-runtime-02.png',label:'상부 구간',caption:'실제 실행 중 Main Camera의 렌더입니다. 현재 베타 상태와 구분합니다.',alt:'전시판 상부 구간 실행 카메라'},
      {id:'boss',src:base+'foreground-runtime-03.png',label:'보스 구간',caption:'전투 중심과 좁은 발판을 가리지 않는 배치 원칙을 검토했습니다.',alt:'전시판 보스 구간 실행 카메라'},
      {id:'fern',src:base+'foreground-fern-native.png',label:'식물 모듈',caption:'맵 안에 독립적으로 배치하는 투명 전경 원본.',alt:'독립 식물 전경 모듈',checker:true},
      {id:'branch',src:base+'foreground-branch-native.png',label:'가지 모듈',caption:'전체 화면 테두리 대신 장소마다 배치하는 전경 조각.',alt:'독립 가지 전경 모듈',checker:true}]},
    route:{mode:'gallery',label:'출시판 설계 제안 · 실제 플레이 화면 아님',initial:'plan',images:[
      {id:'plan',src:base+'route-plan.png',label:'지형과 배치',caption:'시작 구역 방향은 사용자 결정, 상세 배치는 Claude 설계 제안입니다.',alt:'뿌리밑 지형 설계도',zoom:true},
      {id:'flow',src:base+'route-flow.png',label:'동선 표시',caption:'주 경로와 곁길, 보상 이후의 지름길을 분리해 표시한 설계 제안입니다.',alt:'뿌리밑 동선 설계도',zoom:true}]}
  });
  const storageKey='jisu-record-viewer-v4';let saved={};
  const evidenceImages=c=>[...c.images,...(c.supportImages||[])];
  try{saved=JSON.parse(sessionStorage.getItem(storageKey))||{};}catch{}
  const states={};
  const persist=()=>{try{sessionStorage.setItem(storageKey,JSON.stringify({...saved,...states}));}catch{}};
  function stateFor(id){
    if(states[id])return states[id];
    const c=content[id],old=saved[id]||{};let image=old.image;
    if(!c.images.some(i=>i.id===image)&&c.migration){try{const legacy=JSON.parse(sessionStorage.getItem(c.migration.legacyKey));image=c.migration.map[String(legacy?.[c.migration.field])];}catch{}}
    if(!c.images.some(i=>i.id===image)&&id==='camera'){try{const legacy=JSON.parse(sessionStorage.getItem('jisu-hue-v1'));image=legacy?.pair;old.variant=legacy?.variant;}catch{}}
    return states[id]={image:c.images.some(i=>i.id===image)?image:c.initial||c.images[0]?.id||'',variant:old.variant==='640'?'640':'960'};
  }
  function selected(id){
    const c=content[id],s=stateFor(id),img=c.images.find(i=>i.id===s.image)||c.images[0];
    return c.mode==='camera'?{...img,src:base+`camera-${img.id}-${s.variant}.png`,alt:img.alt+' · '+(s.variant==='960'?'960×540 유지안':'640×360 시험안')}:img;
  }
  const button=(id,label,on,attribute='record-image')=>`<button data-${attribute}="${esc(id)}" aria-pressed="${on}" class="${on?'active':''}">${label}</button>`;
  const archiveSeal=()=>window.ARCHIVE_ICONS?.seal('archive-seal')||'<svg class="archive-seal" viewBox="0 0 80 80" aria-hidden="true" fill="none"><path d="M40 3 75 40 40 77 5 40Z"/><path d="M40 12 66 40 40 68 14 40Z"/><path d="M22 28c8-3 13-1 18 3 5-4 10-6 18-3v25c-8-3-13-1-18 3-5-4-10-6-18-3Z"/><path d="M40 31v25M27 35l8 3m-8 4 8 3m10-7 8-3m-8 10 8-3"/><path d="M40 3v9m35 28h-9M40 77v-9M5 40h9"/></svg>';
  function controls(id){
    const c=content[id],s=stateFor(id);
    return `<div class="record-controls"><div class="record-source-picker"><span class="record-control-label">${c.mode==='camera'?'장소':'자료'}</span><div class="record-image-options" role="group" aria-label="${c.mode==='camera'?'비교할 장소':'원본 자료 선택'}">${c.images.map(i=>button(i.id,esc(i.label),i.id===s.image)).join('')}</div></div>${c.mode==='camera'?`<div class="record-range-picker"><span class="record-control-label">카메라</span><div class="record-camera-options" role="group" aria-label="카메라 범위">${button('960','960 × 540 <span>유지</span>',s.variant==='960','record-variant')}${button('640','640 × 360 <span>시험</span>',s.variant==='640','record-variant')}</div></div>`:''}</div>`;
  }
  function chapters(w,pageId){
    return `<aside class="record-project" aria-label="프로젝트 안내"><div class="record-project-identity">${archiveSeal()}<span class="record-project-label">VOLUME ${String(D.worlds.indexOf(w)+1).padStart(2,'0')}</span><h2>${esc(w.name)}</h2><p>${esc(w.line)}</p></div><div class="record-menu-label"><span>기록 목차</span><span>${String(w.pages.length).padStart(2,'0')}</span></div><nav class="record-chapters" aria-label="${esc(w.name)} 포트폴리오 항목">${w.pages.map((id,n)=>`<button data-page="${esc(id)}" aria-current="${id===pageId?'page':'false'}"><span class="record-chapter-number" aria-hidden="true">${String(n+1).padStart(2,'0')}</span><span>${esc(D.pages[id].nav)}</span><span class="record-chapter-mark" aria-hidden="true"></span></button>`).join('')}</nav></aside>`;
  }
  function render(worldId,pageId,{icon}){
    const p=D.pages[pageId],w=D.worlds.find(w=>w.id===worldId),c=content[pageId],idx=w.pages.indexOf(pageId);
    const stage=p.stage||p.tag;
    if(!c)throw new Error('Missing record content: '+pageId);
    const img=selected(pageId);stateFor(pageId);persist();
    const steps=p.process||p.points.map(([title,body])=>({title,body}));
    // Wide game screens and dense planning sheets need the reading width;
    // only isolated character/cutout art belongs in a compact comparison pair.
    const mediaFormat=i=>i.format|| (i.id==='motion'?'sheet':i.zoom||pageId==='journey'&&i.id==='plan'||i.id==='map'?'document':pageId==='aden'&&['rough','illustration','manual','retouch'].includes(i.id)?'portrait':i.checker?'cutout':'landscape');
    function figure(item, lazy) {
      const format = mediaFormat(item);
      const label = esc(item.label).replace(/^실패 시안/, '<em class="proof-state">실패 시안</em>');
      const pixel = item.pixel || c.mode === "pixel";
      return `<figure class="evidence-plate" data-media-format="${format}">
        <button class="plate-open ${pixel ? "pixel-art" : ""} ${item.neutralMatte ? "motion-matte" : ""}" data-record-proof="${esc(item.id)}" aria-label="${esc(item.label)} 원본 확대">
          <img src="${esc(item.previewSrc || item.src)}" alt="${esc(item.alt)}" loading="${lazy ? "lazy" : "eager"}" decoding="async">
          <span class="story-zoom" aria-hidden="true">${icon("expand")}</span>
        </button><figcaption><strong>${label}</strong></figcaption></figure>`;
    }
    function images(ids, lazy=false) {
      const items = (ids || []).map(id => evidenceImages(c).find(item => item.id === id)).filter(Boolean);
      if (!items.length) return "";
      return `<div class="evidence-grid ${items.length === 1 ? "single" : "multiple"}">${items.map(item => figure(item,lazy)).join("")}</div>`;
    }
    const camera=()=>'<section class="record-work process-evidence story-camera" aria-label="카메라 범위 비교"><div class="process-evidence-heading"><span>같은 장소, 다른 시야</span><button data-record-enlarge="true">'+icon('expand')+'원본 확대</button></div><div class="record-stage" data-record-stage><button class="record-media-open" data-record-enlarge="true" aria-label="'+esc(img.alt)+' 원본 확대"><img class="record-original" src="'+esc(img.src)+'" alt="'+esc(img.alt)+'" decoding="async" draggable="false"></button><div class="record-image-loading" role="status"><span>이미지를 불러오는 중</span></div><div class="record-image-error" role="status" hidden><p>이미지를 불러오지 못했습니다.</p><button data-record-retry="true">다시 불러오기</button></div></div><p class="record-caption" aria-live="polite">'+esc(img.caption)+'</p>'+controls(pageId)+'<div class="process-comparison">'+['640','960'].map(v=>'<button data-record-variant="'+v+'" aria-pressed="'+(stateFor(pageId).variant===v)+'" class="process-proof-thumb '+(stateFor(pageId).variant===v?'active':'')+'"><img src="'+base+'camera-'+stateFor(pageId).image+'-'+v+'.png" alt="'+v+' 카메라 범위"><span>'+v+(v==='640'?' · 확대 시야':' · 넓은 시야')+'</span></button>').join('')+'</div><p class="record-scale-note">같은 장소에서 카메라 범위를 바꿔 촬영한 게임 스크린샷</p></section>';
    const connections=window.RECORD_CONNECTIONS||{journey:[['archive','colour','휴포리아 색감 기준']],aden:[['archive','ready-pose','동작을 위한 준비 자세'],['archive','pixel-review','도트 디테일을 지키는 수정']],level:[['archive','direction','원경의 표현 비교']],camera:[['archive','implementation','체력 정보의 크기 수정']],direction:[['huephoria','level','휴포리아 · 맵을 만드는 방법']],colour:[['huephoria','journey','휴포리아 · 게임의 출발']], 'ready-pose':[['huephoria','aden','휴포리아 · 캐릭터 제작']], 'pixel-review':[['huephoria','aden','휴포리아 · 캐릭터 제작']],implementation:[['huephoria','camera','휴포리아 · 시야와 화면 검토']]};
    const related=(connections[pageId]||[]).map(([world,page,label])=>'<a href="#/folio/'+world+'/'+page+'">'+esc(label)+'</a>').join('');
    const continuity=related?'<nav class="process-related" aria-label="이어지는 제작 기록"><p>'+ (worldId==='archive'?'이 기록의 프로젝트':'이어서 볼 기록')+'</p><div>'+related+'</div></nav>':'';
    const team=p.team?'<div class="process-role process-team-role"><b>팀원 도움</b><span>'+esc(p.team)+'</span></div>':'';
    const summaryRows=Array.isArray(p.summary)?p.summary.filter(row=>row&&typeof row.label==='string'&&typeof row.text==='string').slice(0,3):[];
    const summary=summaryRows.length?'<dl class="process-summary">'+summaryRows.map(row=>'<div><dt>'+esc(row.label)+'</dt><dd>'+esc(row.text)+'</dd></div>').join('')+'</dl>':'';
    const audioItems=p.audioSlot==='sound'&&Array.isArray(window.PORTFOLIO_AUDIO?.sound)?window.PORTFOLIO_AUDIO.sound.filter(item=>item&&typeof item.title==='string'&&item.title.trim()&&typeof item.src==='string'&&/^assets\/audio\/.+\.(mp3|wav|ogg|m4a|aac|flac)$/i.test(item.src)&&!item.src.includes('..')&&!/[?#\\]/.test(item.src)):[];
    const audioSummary=p.audioSummary||'배경음악은 Suno, 효과음은 ElevenLabs와 코드 합성을 활용했습니다. 휘두름과 타격 소리를 나누고 장면에 맞는 분위기와 크기로 조정했습니다.';
    const sound=p.audioSlot==='sound'?'<section class="process-audio" aria-label="사운드 제작"><h2>장면에 맞는 소리</h2><p>'+esc(audioSummary)+'</p>'+audioItems.map(item=>'<figure class="audio-record"><figcaption><strong>'+esc(item.title)+'</strong>'+(item.tool?'<span>'+esc(item.tool)+'</span>':'')+(item.note?'<p>'+esc(item.note)+'</p>':'')+'</figcaption><audio controls preload="none" src="'+esc(item.src)+'" aria-label="'+esc(item.title)+' 듣기"></audio></figure>').join('')+'</section>':'';
    const hero=images(p.hero);
    const explicitCamera=steps.some(s=>s.camera===true);
    const details=(label,body)=>body?'<details class="story-details"><summary>'+esc(label)+'</summary><div class="story-details-body">'+body+'</div></details>':'';
    const renderedSteps=steps.map((s,n)=>{const media=images(s.images),showCamera=c.mode==='camera'&&(explicitCamera?s.camera===true:n===0);const decision=(s.problem||s.change)?'<dl class="story-decision">'+(s.problem?'<div><dt>막힌 점</dt><dd>'+esc(s.problem)+'</dd></div>':'')+(s.change?'<div><dt>다음 수정</dt><dd>'+esc(s.change)+'</dd></div>':'')+'</dl>':'';return '<section class="process-step story-step '+(media?'has-media':'text-only')+'"><div class="story-copy">'+(s.phase?'<span class="process-phase">'+esc(s.phase)+'</span>':'')+'<h2>'+esc(s.title)+'</h2><p>'+esc(s.body)+'</p>'+details('문제와 수정 과정',decision)+'</div>'+media+details(s.extraTitle||'추가 자료 보기',images(s.extraImages,true))+'</section>'+(showCamera?camera():'');});
    const story=p.backgroundSteps
      ? renderedSteps.slice(p.backgroundSteps).join('')+details(p.backgroundTitle,renderedSteps.slice(0,p.backgroundSteps).join(''))
      : renderedSteps.join('');
    return '<main class="record-screen process-screen metal-screen screen theme-'+esc(worldId)+'" id="main-content" tabindex="-1" data-record="'+esc(pageId)+'" data-record-world="'+esc(worldId)+'" data-record-loading="true" style="--record-accent:'+esc(w.accent)+'"><header class="record-hud"><button class="hud-back" data-action="world">'+icon('map')+'월드맵</button><div class="record-heading"><span>GAME DESIGN PORTFOLIO</span><div class="archive-title">'+esc(w.name)+'</div></div><div class="record-hud-actions"><button class="icon-button" data-action="settings" aria-label="환경 설정">'+icon('settings')+'</button></div></header>'+chapters(w,pageId)+'<article class="process-document"><div class="process-overview '+(hero?'has-hero':'')+'"><header class="process-intro">'+'<p class="process-kicker">'+esc(p.nav)+'</p><p class="process-status">'+esc(stage)+'</p><h1 tabindex="-1">'+esc(p.title)+'</h1><p class="process-lead">'+esc(p.intro)+'</p>'+ '<div class="process-role"><b>내 역할</b><span>'+esc(p.me)+'</span></div><details class="credits-disclosure"><summary>제작 도구와 협업</summary><div class="process-role"><b>AI 활용</b><span>'+esc(p.ai)+'</span></div>'+team+'</details>'+(summary?'<details class="credits-disclosure"><summary>전투와 탐험 규칙</summary>'+summary+'</details>':'')+'</header>'+(hero?'<div class="story-hero">'+hero+'</div>':'')+'</div><div class="story-flow">'+story+'</div>'+sound+continuity+(w.pages.length>1?'<nav class="process-page-turn" aria-label="프로젝트 페이지 이동"><button data-action="prev-page" '+(idx===0?'disabled':'')+'><small>이전</small><span>'+esc(D.pages[w.pages[Math.max(0,idx-1)]].nav)+'</span></button><span class="story-page-count">'+(idx+1)+' / '+w.pages.length+'</span><button data-action="next-page" '+(idx===w.pages.length-1?'disabled':'')+'><small>다음</small><span>'+esc(D.pages[w.pages[Math.min(w.pages.length-1,idx+1)]].nav)+'</span></button></nav>':'')+'</article><footer class="archive-bottom"><span>정지수 · 게임기획 포트폴리오</span><button type="button" class="archive-world-return" data-action="world">'+icon('map')+'<span>월드맵으로 돌아가기</span><kbd aria-hidden="true">Esc</kbd></button></footer></main>';
  }
  function refresh(root){
    const id=root.dataset.record,c=content[id],s=stateFor(id),img=selected(id);
    root.querySelectorAll('[data-record-image]').forEach(b=>{const on=b.dataset.recordImage===s.image;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});
    root.querySelectorAll('[data-record-variant]').forEach(b=>{const on=b.dataset.recordVariant===s.variant;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});
    root.dataset.recordLoading='true';
    const original=root.querySelector('.record-original'),replacement=original.cloneNode(false);replacement.src=img.src;replacement.alt=img.alt;original.replaceWith(replacement);
    root.querySelector('.record-media-open').setAttribute('aria-label',img.alt+' 원본 확대');
    root.querySelector('.record-caption').textContent=img.caption||'';
    root.querySelector('[data-record-stage]').classList.toggle('checker-stage',!!img.checker);root.querySelector('[data-record-stage]').classList.toggle('pixel-stage',c.mode==='pixel'||!!img.pixel);
    root.querySelector('.record-image-error').hidden=true;
    if(c.mode==='camera')root.querySelectorAll('.process-proof-thumb img').forEach((thumb,index)=>{thumb.src=base+`camera-${s.image}-${index===0?'640':'960'}.png`;});
    persist();
  }
  function handleControl(target,app,{openModal,icon}){
    const root=app.querySelector('.record-screen');if(!root)return false;
    const id=root.dataset.record,c=content[id],s=stateFor(id);
    if(target.dataset.recordProof){const proof=evidenceImages(c).find(i=>i.id===target.dataset.recordProof);if(proof)openModal(proof.label,'<div class="record-zoom '+(c.mode==='pixel'||proof.pixel?'pixel-zoom':'')+'"><img src="'+esc(proof.src)+'" alt="'+esc(proof.alt)+'" '+(proof.zoom?'class="wide-plan"':'')+'></div><p class="record-zoom-note">'+esc(proof.caption)+'</p>','record-zoom-dialog');return true;}
    if(target.dataset.recordImage){if(c.images.some(i=>i.id===target.dataset.recordImage)){s.image=target.dataset.recordImage;refresh(root);}return true;}
    if(target.dataset.recordVariant){if(['960','640'].includes(target.dataset.recordVariant)){s.variant=target.dataset.recordVariant;refresh(root);}return true;}
    if(target.dataset.recordRetry){refresh(root);return true;}
    if(target.dataset.recordIndex){const w=D.worlds.find(w=>w.id===root.dataset.recordWorld);openModal(w.name+' · 기록 목록',`<nav class="record-index-list" aria-label="기록 목록">${w.pages.map((page,n)=>`<button data-page="${page}" aria-current="${page===id?'page':'false'}"><span>${String(n+1).padStart(2,'0')}</span><div><b>${esc(D.pages[page].nav)}</b><small>${esc(D.pages[page].title)}</small></div>${icon('arrow')}</button>`).join('')}</nav>`,'record-index-dialog');return true;}
    if(target.dataset.recordEnlarge){const img=selected(id);openModal(img.alt,`<div class="record-zoom ${c.mode==='pixel'||img.pixel?'pixel-zoom':''}"><img src="${esc(img.src)}" alt="${esc(img.alt)}" ${img.zoom?'class="wide-plan"':''}></div><p class="record-zoom-note">${esc(img.caption)}</p>`,'record-zoom-dialog');return true;}
    return false;
  }
  function handleKey(event,app){
    if(!['ArrowLeft','ArrowRight'].includes(event.key)||!event.target.closest('.record-controls')&&!event.target.closest('.process-comparison'))return false;
    const root=app.querySelector('.record-screen');if(!root)return false;
    event.preventDefault();const id=root.dataset.record,c=content[id],s=stateFor(id);
    const range=!!(event.target.closest('.record-camera-options')||event.target.dataset.recordVariant);
    const group=event.target.closest('.process-comparison')||event.target.closest('.record-camera-options')||event.target.closest('.record-image-options');
    if(range)s.variant=s.variant==='960'?'640':'960';
    else {const index=c.images.findIndex(i=>i.id===s.image);s.image=c.images[(index+(event.key==='ArrowRight'?1:-1)+c.images.length)%c.images.length].id;}
    refresh(root);const selector=range?'[data-record-variant].active':'[data-record-image].active';
    // The range is shown both as buttons and image thumbnails. Keep keyboard
    // focus in the group the reader used instead of jumping to its duplicate.
    const active=group?.querySelector?.(selector)||root.querySelector(selector);active?.focus({preventScroll:true});active?.scrollIntoView({block:'nearest',inline:'nearest'});return true;
  }
  document.addEventListener('error',event=>{if(!event.target.matches?.('.record-original')||!event.target.isConnected)return;const root=event.target.closest('.record-screen');if(root){root.dataset.recordLoading='false';root.querySelector('.record-image-error').hidden=false;}},true);
  document.addEventListener('load',event=>{if(!event.target.matches?.('.record-original')||!event.target.isConnected)return;const root=event.target.closest('.record-screen');if(root){root.dataset.recordLoading='false';root.querySelector('.record-image-error').hidden=true;}},true);
  window.PORTFOLIO_RECORDS={render,handleControl,handleKey};
})();
