(() => {
  'use strict';

  const experience = {
    neo: [
      ['AI 제작 디렉션', 'PixelLab 도트의 망토와 다리를 직접 손질해 동작 제작의 기준을 잡았습니다.'],
      ['탐험 동선 설계', '처음엔 닿지 않는 길을 보여 주고, 새 기술을 얻은 뒤 돌아오게 했습니다.']
    ],
    pearl: [
      ['전투 동작 설계', '망토 공격을 맨손 전투로 바꾸고 준비 자세와 몸통 회전을 다시 잡았습니다.'],
      ['플레이 검증', '대시 뒤 다음 발판이 보이는 960 × 540 시야를 골랐습니다.']
    ]
  };
  const spaceDesign = ['공간과 게임 규칙', 'comma,의 65% 여백 시안에 침대와 책상을 남겼습니다.'];

  function render({icon, mark, edition}) {
    const skills = [...(experience[edition] || experience.neo), spaceDesign];
    const items = skills.map(([name, description]) => `
      <div class="status-skill"><dt>${name}</dt><dd>${description}</dd></div>`).join('');

    return `<main class="status-screen screen" id="main-content" tabindex="-1">
      <div class="status-scene" aria-hidden="true"><img class="title-art" src="assets/title-v2.webp" alt="" decoding="sync"></div>
      <section class="status-window" aria-label="기획자 상태창">
        <header class="status-head">
          <span class="status-heading"><i aria-hidden="true"></i>상태창</span>
          <span class="status-signal"><i aria-hidden="true"></i>시스템 가동</span>
        </header>
        <div class="status-content">
          <div class="status-identity">
            <div class="status-emblem" aria-hidden="true">${mark()}</div>
            <p class="status-profession">게임 시스템 · 콘텐츠 기획</p>
            <h1 tabindex="-1">정지수</h1>
            <p class="status-introduction">플레이어가 어디에서 선택하고 어디에서 막히는지 살피며 게임을 만듭니다.</p>
          </div>
          <div class="status-skills">
            <h2>주요 역량</h2>
            <dl>${items}</dl>
          </div>
        </div>
        <footer class="status-actions">
          <button type="button" class="status-back" data-action="title">시작 화면</button>
          <button type="button" class="status-enter" data-action="enter-map">${icon('map')}월드 선택</button>
        </footer>
      </section>
    </main>`;
  }

  window.PORTFOLIO_STATUS = {render};
})();
