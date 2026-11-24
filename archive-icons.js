(() => {
  'use strict';
  const enabled=true;
  const assets={map:'treasure-map',settings:'cog',expand:'magnifying-glass',book:'open-book'};
  const icon=(id,cls='')=>enabled&&assets[id]?`<span class="glyph game-art-icon game-icon-${assets[id]} ${cls}" aria-hidden="true"></span>`:'';
  window.ARCHIVE_ICONS={icon,seal:(cls='crest')=>enabled?`<span class="${cls} archive-book-emblem" aria-hidden="true"><span class="game-art-icon game-icon-open-book"></span></span>`:'',credit:()=>enabled?'<p class="icon-credit">메뉴 아이콘: <a href="https://game-icons.net/" target="_blank" rel="noopener noreferrer">Lorc · Game-icons.net</a> · <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>. 원본 형태를 유지하고 화면의 색과 크기에 맞춰 표시했습니다.</p>':''};
})();
