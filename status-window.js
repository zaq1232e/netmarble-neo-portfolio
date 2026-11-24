(() => {
  'use strict';

  const experience = {
    neo: [
      ['AI 제작 디렉션', '일러스트에서 동작마다 달라지던 주인공의 형태를 도트로 잡았습니다. PixelLab으로 만든 도트의 망토와 다리는 직접 손질했습니다.'],
      ['탐험 동선 설계', '첫 방에서는 걷기와 낮은 점프로 조작을 익히게 했습니다. 처음엔 닿지 않는 길을 보여 주고, 새 기술을 얻은 뒤 돌아오게 했습니다.']
    ],
    pearl: [
      ['전투 동작 설계', '휴포리아에서 망토 공격의 타격 방향이 잘 읽히지 않아 맨손 전투로 바꾸고, 준비 자세와 몸통 회전부터 다시 잡았습니다.'],
      ['플레이 검증', '같은 방에서 두 카메라 시야를 비교했습니다. 대시한 뒤 다음 발판까지 보이는 960 × 540 시야를 골랐습니다.']
    ]
  };
  const spaceDesign = ['공간과 게임 규칙', '방을 얼마나 비워야 생활하기 편할지부터 생각했습니다. comma,의 적정 여백을 60–80%로 제안하고, 65% 시안에는 침대와 책상을 남겼습니다.'];

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
