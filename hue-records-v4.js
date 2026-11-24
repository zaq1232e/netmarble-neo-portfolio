/* HUE evidence records v4 — exact local originals, prepared 2026-11-18. */
(() => {
  'use strict';
  window.RECORD_CONTENT ||= {};
  Object.assign(window.RECORD_CONTENT, {
  "abilities": {
    "mode": "gallery",
    "images": [
      {
        "id": "runtime",
        "src": "assets/hue-original/red-wall-runtime.jpg",
        "label": "RED로 붉은 벽 파괴",
        "caption": "실행 빌드 자동 검사에서 벽을 부순 뒤 촬영한 화면입니다. 사용자 수동 플레이 영상은 아닙니다.",
        "alt": "지하 유적의 붉은 벽을 파괴한 뒤 RED 효과가 보이는 아덴과 HUD",
        "width": 1920,
        "height": 1080,
        "period": "2026-11-11",
        "source": "32_red_wall_ok.jpg"
      },
      {
        "id": "plan",
        "src": "assets/hue-original/ability-progression-plan.png",
        "label": "능력 습득 기획도",
        "caption": "획득 방향은 확정, 세부 동선·연출·시간은 기획 제안입니다. 시간은 실제 플레이 측정값이 아닙니다.",
        "alt": "이단점프와 활공 획득을 구역 진행과 연결한 기획표",
        "width": 1900,
        "height": 980,
        "period": "2026-11-15",
        "source": "4_능력습득_진행표.png"
      }
    ],
    "initial": "runtime",
    "label": "RED 실행 검사 · 능력 습득 기획"
  },
  "combat": {
    "mode": "gallery",
    "images": [
      {
        "id": "full",
        "src": "assets/hue-original/heart-full-runtime.jpg",
        "label": "심장이 찬 상태",
        "caption": "시험 함수로 심장을 채운 상태입니다. 체력 불꽃과 왼쪽 위 10/10 게이지를 확인할 수 있습니다.",
        "alt": "체력이 줄고 심장 게이지가 10/10으로 찬 실제 검사 화면",
        "width": 1920,
        "height": 1080,
        "period": "2026-11-11",
        "source": "37_hud_heart_full.jpg"
      },
      {
        "id": "heal",
        "src": "assets/hue-original/heart-heal-runtime.jpg",
        "label": "심장을 써서 회복",
        "caption": "회복 함수 실행 직후입니다. 같은 검사 로그에 체력 3→5, 심장 0이 기록되어 있습니다.",
        "alt": "체력 불꽃이 다시 채워지고 심장 게이지가 0/10이 된 실제 검사 화면",
        "width": 1920,
        "height": 1080,
        "period": "2026-11-11",
        "source": "38_hp_in_mid.jpg"
      }
    ],
    "initial": "full",
    "label": "공유 자원 · 실행 검사 기록"
  },
  "level": {
    "mode": "gallery",
    "images": [
      {
        "id": "map",
        "src": "assets/hue-original/level-beta-map.png",
        "zoom": true,
        "label": "1·2구역 전체 배치",
        "caption": "칸 지도에서 만든 시험 씬의 전체 배치도입니다. 출시판 완성 아트가 아닙니다.",
        "alt": "여러 방과 세로 통로가 연결된 1·2구역 회색 칸 지도",
        "width": 3072,
        "height": 3664,
        "period": "2026-11-18 안내 기준",
        "source": "전체지도.png"
      },
      {
        "id": "start",
        "src": "assets/hue-original/level-beta-start.jpg",
        "label": "A01 시작방",
        "caption": "회색 벽과 파란 발판으로 이동을 시험하는 별도 플레이 씬입니다.",
        "alt": "회색 격자 지형과 파란 발판으로 구성된 A01 시작방의 실제 실행 화면",
        "width": 1280,
        "height": 720,
        "period": "2026-11-16 이후 시험 씬",
        "source": "2_A01_시작방.jpg"
      },
      {
        "id": "threshold",
        "src": "assets/hue-original/level-threshold.jpg",
        "label": "문턱에서는 이름 숨기기",
        "caption": "11월 18일 베타. 문턱에서는 숨은 방 이름을 표시하지 않습니다.",
        "alt": "숨은 방 문턱 앞에 있는 아덴. 화면 위에 방 이름이 나타나지 않은 상태",
        "width": 1280,
        "height": 720,
        "period": "2026-11-18",
        "source": "14_숨은방_문턱_이름없음.jpg"
      },
      {
        "id": "inside",
        "src": "assets/hue-original/level-inside.jpg",
        "label": "몸이 들어오면 표시",
        "caption": "11월 18일 베타. 아덴의 몸이 방 안에 들어간 뒤 이름이 표시됩니다.",
        "alt": "숨은 방 안에 들어간 아덴과 화면 위에 나타난 굴쥐 둥지 이름",
        "width": 1280,
        "height": 720,
        "period": "2026-11-18",
        "source": "15_숨은방_안_이름뜸.jpg"
      }
    ],
    "initial": "map",
    "label": "1·2구역 베타 · 지형과 진입 조건"
  },
  "pixel": {
    "mode": "pixel",
    "images": [
      {
        "id": "original",
        "src": "assets/hue-original/aden-manual-pixel.png",
        "label": "PixelLab 생성 후 직접 손질한 도트",
        "caption": "기존 제작 기록에서 확인한 64×64 원본입니다. 재그림 없이 원본 픽셀을 확대합니다.",
        "alt": "PixelLab 생성 후 사용자가 망토·빛·다리를 손질한 아덴 64픽셀 스프라이트",
        "width": 64,
        "height": 64,
        "period": "2026-10-13 제작 기록",
        "source": "aden_manual_pixel.png"
      },
      {
        "id": "motion",
        "src": "assets/hue-original/aden-motion-study.png",
        "label": "AI 동작 탐색 시트",
        "caption": "PixelLab으로 확장한 16프레임 시안입니다. 손질한 기준형과 당시 모션 탐색 결과를 구분합니다.",
        "alt": "아덴의 자세를 변화시킨 PixelLab 16프레임 모션 탐색 시트",
        "width": 1024,
        "height": 64,
        "period": "기존 아덴 변화 기록",
        "source": "aden_pixellab_motion_study.png"
      }
    ],
    "initial": "original",
    "label": "AI 생성·직접 손질 기준형 + 모션 시안"
  },
  "direction": {
    "mode": "gallery",
    "images": [
      {
        "id": "original",
        "src": "assets/hue-original/backdrop-original.png",
        "label": "원화 원경 · 선택",
        "caption": "같은 자리의 Unity 실제 씬 비교 렌더입니다. 사용자는 원경을 원화 이미지로 유지하기로 했습니다.",
        "alt": "원화풍 원경과 픽셀 아덴이 함께 있는 유적 씬 비교 렌더",
        "width": 1920,
        "height": 1080,
        "period": "2026-11-11",
        "source": "1-1_원화그대로.png"
      },
      {
        "id": "pixel",
        "src": "assets/hue-original/backdrop-pixel.png",
        "label": "픽셀 변환안 · 비교",
        "caption": "원경만 픽셀 표현으로 바꾼 비교안입니다. 이쪽이 채택된 수정 후 화면은 아닙니다.",
        "alt": "동일한 위치에서 원경을 픽셀 변환안으로 바꾼 유적 씬 비교 렌더",
        "width": 1920,
        "height": 1080,
        "period": "2026-11-11",
        "source": "1-2_픽셀로변환.png"
      }
    ],
    "initial": "original",
    "label": "원화 원경과 픽셀 변환 비교"
  },
  "implementation": {
    "mode": "gallery",
    "images": [
      {
        "id": "before",
        "src": "assets/hue-original/hud-before.jpg",
        "label": "HUD 확대 전",
        "caption": "11월 11일 같은 시작 장면의 실행 빌드 자동 캡처입니다.",
        "alt": "작은 체력과 심장 HUD, 오른쪽 아래 스킬 표시가 있는 시작방 화면",
        "width": 1920,
        "height": 1080,
        "period": "2026-11-11",
        "source": "15_tutorial_start.jpg"
      },
      {
        "id": "after",
        "src": "assets/hue-original/hud-after.jpg",
        "label": "HUD 확대 후",
        "caption": "기록상 체력·심장 묶음은 1.5배, 스킬 칸은 1.25배로 조정했습니다.",
        "alt": "왼쪽 위 체력과 심장 HUD 및 오른쪽 아래 스킬 표시가 확대된 같은 시작방 화면",
        "width": 1920,
        "height": 1080,
        "period": "2026-11-11",
        "source": "15_tutorial_start.jpg"
      }
    ],
    "initial": "before",
    "label": "HUD 가독성 · 요청에서 실행 화면까지"
  }
});
  const D = window.GAME_DATA;
  if (!D || !D.pages) throw new Error('hue-records-v4.js requires data-v2.js first');
  Object.assign(D.pages, {
  "abilities": {
    "world": "huephoria",
    "nav": "능력과 성장",
    "title": "같은 기술이 전투와 길 찾기에 쓰이도록",
    "type": "abilities",
    "tag": "RED 실행 검사 · 능력 습득 기획",
    "intro": "붉은 능력은 공격이면서 막힌 길을 여는 수단입니다. 실제 벽 파괴 검사 화면과, 이후 신체 능력을 얻는 기획을 나누어 보여줍니다.",
    "points": [
      [
        "RED로 길을 여는 장면",
        "11월 11일 실행 빌드의 자동 검사에서 RED로 붉은 벽을 부순 뒤 촬영한 화면입니다. 같은 폴더의 검사 로그에도 벽 파괴 성공이 기록되어 있습니다."
      ],
      [
        "능력의 획득을 생물과 연결하기",
        "이단점프는 옹이청서, 활공은 골바람솔개를 제압해 얻는 방향이 정해졌습니다. 진행표의 세부 배치·연출·시간은 기획 제안이며 완성된 플레이 결과를 뜻하지 않습니다."
      ]
    ],
    "me": "능력의 역할과 획득 방식 결정, NPC가 일괄 지급하는 안의 수정 방향 제시",
    "ai": "Claude — 능력·맵 구현과 자동 검사, 진행표 및 세부 기획 작성",
    "status": "RED 벽 파괴는 11월 11일 검사 기록. 성장 기획의 모든 단계가 구현된 것은 아님.",
    "evidence": "RED 벽 파괴 원본 캡처와 같은 폴더의 성공 로그, 최신 01·02의 획득 방향을 대조했습니다. 진행표의 분 단위 시간은 기획 예상입니다. 11월 18일 베타에서 옹이청서는 골렘 대역이고 이단점프 습득 연출은 습득물로 대신합니다.",
    "missing": null
  },
  "combat": {
    "world": "huephoria",
    "nav": "전투의 선택",
    "title": "공격에 쓸 심장, 회복을 위해 남길 심장",
    "type": "combat",
    "tag": "공유 자원 · 실행 검사 기록",
    "intro": "빨강 스킬과 회복이 같은 심장 자원을 사용합니다. 자원을 채운 상태와 회복 직후를 실제 검사 화면으로 비교합니다.",
    "points": [
      [
        "회복 뒤 자원이 비워지는가",
        "검사 코드는 다친 상태와 가득 찬 심장을 준비한 뒤 회복 함수를 실행했습니다. 기록에는 체력 3→5, 심장 0이 남아 있으며 두 화면에서 체력 불꽃과 심장 게이지의 변화를 볼 수 있습니다."
      ],
      [
        "공격도 같은 자원을 쓰는가",
        "같은 검사 로그에 RED 베기 후 심장 2칸 소비가 기록되어 있습니다. 공격과 회복이 한 자원을 공유한다는 규칙의 작동 예시입니다."
      ]
    ],
    "me": "공격과 생존 사이에 선택을 남기는 전투 방향과 플레이 피드백",
    "ai": "Claude — 심장·전투·회복 구현과 조건별 자동 검사·캡처",
    "status": "11월 11일 실행 검사 기록. 현재 모든 버전의 밸런스와 실제 전투 체감까지 검증한 결과는 아님.",
    "evidence": "11월 11일 원본 캡처 37·38과 같은 폴더 검사 로그를 대조했습니다. 심장은 시험 함수로 채웠으며, 자원 획득 검사는 당시 대상 적이 없어 수행되지 않았습니다. 이 자료는 자연 전투의 체감이나 과거 획득량 2→1 개선을 입증하지 않습니다.",
    "missing": null
  },
  "level": {
    "world": "huephoria",
    "nav": "레벨의 구조",
    "title": "칸 지도를 걸을 수 있는 시험 공간으로",
    "type": "level",
    "tag": "1·2구역 베타 · 지형과 진입 조건",
    "intro": "아트를 얹기 전에 이동 경로와 방의 경계를 시험합니다. 1·2구역 칸 지도, 시작방, 숨은 방 진입 조건을 실제 시험 씬 자료로 보여줍니다.",
    "points": [
      [
        "배경 없는 시험 지형",
        "회색 벽과 파란 발판으로 1·2구역을 구성한 별도 플레이 씬입니다. 전시판의 장식을 비우고, 칸 지도의 구조를 실제 이동과 진행 조건으로 옮겼습니다."
      ],
      [
        "발견한 순간에 이름을 보여주기",
        "숨은 방은 문턱에 걸친 순간이 아니라 아덴의 몸이 방 안으로 들어간 뒤 이름을 표시하도록 요청했습니다. 11월 18일 자료에 문턱과 진입 후 화면이 각각 남아 있습니다."
      ]
    ],
    "me": "지하 시작 방향과 탐험 조건 결정, 숨은 방 이름이 뜨는 시점 수정 요청",
    "ai": "Claude — 칸 지도·시험 씬 구현, 배치 검사와 실행 화면 기록",
    "status": "11월 18일 베타 안내 기준. 대역과 미완 구간이 포함된 시험 씬이며 출시판 완성 맵이 아님.",
    "evidence": "11월 18일 베타 안내·짓기보고와 전체지도·실행 화면을 대조했습니다. 옹이청서는 골렘 대역, 일부 몹과 보상은 표시 또는 대역입니다. 몹의 배치 자동 검사와 실제 전투 검수는 구분하며, 당시 실제 전투 검수는 미완입니다.",
    "missing": null
  },
  "pixel": {
    "world": "archive",
    "nav": "도트 생성·직접 손질",
    "title": "생성 도트를 손질해 동작의 기준으로",
    "type": "pixel",
    "tag": "AI 생성·직접 손질 · 동작 탐색",
    "intro": "아덴의 기준 도트와 그 원본을 바탕으로 탐색한 동작을 나란히 봅니다. PixelLab 원본을 직접 손질한 기준형과 AI가 확장한 프레임을 구분합니다.",
    "points": [
      [
        "기준 원본을 보존하기",
        "PixelLab 생성 원본에서 망토·빛·다리를 직접 손질한 64×64 도트입니다. 흰 얼굴·붉은 후드와 망토·검은 다리의 형태를 원본 픽셀 그대로 보여줍니다."
      ],
      [
        "동작을 늘려도 같은 인물인가",
        "옆의 16프레임 시트는 PixelLab 모션 탐색 자료입니다. 캐릭터의 형태와 색을 기준 원본과 비교하기 위한 시안이며, 전체를 수작업이나 최종 사용 모션으로 소개하지 않습니다."
      ]
    ],
    "me": "PixelLab 생성 원본의 망토·빛·다리 직접 손질, 형태 기준과 선별·수정 방향",
    "ai": "PixelLab — 원본 도트와 기준형에 따른 동작 시안 생성",
    "status": "기존에 검증한 제작 원본 보존. 최신 게임 적용 스프라이트와 동일하다고 단정하지 않음.",
    "evidence": "기존 Codex가 대조한 아덴 변화 기록 7쪽의 PixelLab 생성 후 직접 손질한 기준형과 8쪽의 PixelLab 탐색 시트를 그대로 보존했습니다. 이번에는 원본 크기와 파일 동일성을 확인했으며, 최신 게임 적용 스프라이트와 동일하다고 단정하지 않습니다.",
    "missing": null
  },
  "direction": {
    "world": "archive",
    "nav": "비주얼 판단",
    "title": "같은 장면으로 비교하고, 배경 표현을 정하기",
    "type": "direction",
    "tag": "원화 원경과 픽셀 변환 비교",
    "intro": "배경까지 픽셀로 바꿔야 할지 실제 씬의 같은 자리에서 비교했습니다. 차이를 본 뒤 원경은 원화 이미지로 유지하기로 결정했습니다.",
    "points": [
      [
        "대상을 고정하고 표현만 바꾸기",
        "같은 위치의 원경을 원화와 픽셀 변환안으로 바꿔 1920×1080으로 렌더한 비교 자료입니다. 한쪽이 수정 전이고 다른 쪽이 성공한 수정 후라는 구성이 아니라, 선택을 위한 두 안입니다."
      ],
      [
        "배경은 원화 이미지로 유지",
        "사용자는 차이가 크게 두드러지지 않는다고 보고 배경을 이미지로 유지하기로 했습니다. 캐릭터·지형의 점 크기 기준과 원경의 표현 방식을 구분한 결정입니다."
      ]
    ],
    "me": "같은 장면 비교 후 표현 방향 판단, 원화 원경 유지 결정",
    "ai": "Claude — 픽셀 변환안 제작 및 실제 씬 비교 렌더. 원화의 개별 생성 도구 이력은 이 비교 자료로 확정하지 않음.",
    "status": "원경 원화 유지 확정. 전체 환경 그림을 직접 그린 성과나 픽셀 변환 채택으로 표시하지 않음.",
    "evidence": "11월 11일 원경비교_원화vs픽셀의 1-1·1-2 원본, 최신 01·02의 사용자 결정과 HueSpecPreview 비교 방식을 대조했습니다.",
    "missing": null
  },
  "implementation": {
    "world": "archive",
    "nav": "AI 구현 협업",
    "title": "체력이 잘 안 보인다는 피드백을 화면으로 고치기",
    "type": "implementation",
    "tag": "HUD 가독성 · 요청에서 실행 화면까지",
    "intro": "플레이 중 자신의 체력 상태를 읽기 어렵다는 문제를 짚고, HUD 크기를 조정한 결과를 같은 시작 장면에서 비교합니다.",
    "points": [
      [
        "문제를 플레이 언어로 전달",
        "사용자는 HUD가 너무 작아 자신의 체력이 어떻게 되고 있는지 모르겠다고 피드백했습니다. 크기를 키우는 요구는 최신 결정 기록에 남아 있습니다."
      ],
      [
        "구현 결과를 같은 장면에서 확인",
        "Claude는 체력·심장 묶음을 1.5배, 스킬 칸을 1.25배로 키웠습니다. 변경 전후 자동 캡처에서 왼쪽 위 HUD와 오른쪽 아래 스킬 표시의 실제 차이를 확인할 수 있습니다."
      ]
    ],
    "me": "플레이에서 가독성 문제 발견, 확대 요구와 결과 판단",
    "ai": "Claude — HuephoriaDemoHud.cs 크기 조정, 실행 빌드 자동 캡처",
    "status": "2026년 11월 11일 수정 사례. 사용자 전반의 가독성 향상률이나 테스트 수치를 주장하지 않음.",
    "evidence": "최신 02의 11월 11일 HUD 요구·배율 기록과 UI촬영_1111 / UI촬영_1111b_HUD키움의 같은 시작 장면 원본을 대조했습니다.",
    "missing": null
  }
});
})();
