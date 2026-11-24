(() => {
  'use strict';
  // Original 2026 project PNGs: source pixels, embedded hands and HUD are preserved.
  // This module owns content only. The shared viewer owns navigation and migration.
  const records = {
  "space": {
    "mode": "gallery",
    "images": [
      {
        "id": "messy",
        "src": "assets/comma-original/messy.png",
        "label": "0% · 과밀",
        "caption": "0% · 생활 물건이 바닥과 가구 위에 쌓인 상태",
        "alt": "0% 여백 게이지와 쓰레기봉투를 든 손이 표시된 반지하 공간 기획 시안",
        "width": 1672,
        "height": 941
      },
      {
        "id": "mid",
        "src": "assets/comma-original/mid.png",
        "label": "65% · 적정 여백",
        "caption": "65% · 책상과 침대 등 생활에 필요한 것을 남긴 상태",
        "alt": "65% 여백 게이지와 파란 천을 든 손이 표시된 정돈된 반지하 공간 기획 시안",
        "width": 1672,
        "height": 941
      },
      {
        "id": "empty",
        "src": "assets/comma-original/empty.png",
        "label": "98% · 과잉 비움",
        "caption": "98% · 생활 소품까지 대부분 덜어낸 상태",
        "alt": "98% 여백 게이지와 빈손이 표시된 반지하 공간 기획 시안",
        "width": 1672,
        "height": 941
      },
      {
        "id": "luxury_messy",
        "src": "assets/comma-original/luxury_messy.png",
        "label": "확장 공간 · 0%",
        "caption": "확장 공간 시안 · 물건으로 밀도가 높아진 넓은 주거공간 · 확장 공간의 시각화 제안",
        "alt": "0% 여백 게이지와 쓰레기봉투를 든 손이 표시된 넓은 주거공간 시안",
        "width": 1672,
        "height": 941
      },
      {
        "id": "luxury_clean",
        "src": "assets/comma-original/luxury_clean.png",
        "label": "확장 공간 · 65%",
        "caption": "확장 공간 시안 · 생활 가구를 남기며 바닥과 빛을 드러낸 상태 · 확장 공간의 시각화 제안",
        "alt": "65% 여백 게이지와 파란 천을 든 손이 표시된 넓은 주거공간 시안",
        "width": 1672,
        "height": 941
      },
      {
        "id": "luxury_empty",
        "src": "assets/comma-original/luxury_empty.png",
        "label": "확장 공간 · 98%",
        "caption": "확장 공간 시안 · 생활 물건을 대부분 덜어낸 상태 · 확장 공간의 시각화 제안",
        "alt": "98% 여백 게이지와 빈손이 표시된 대부분 비워진 넓은 주거공간 시안",
        "width": 1672,
        "height": 941
      }
    ],
    "initial": "mid",
    "storageGroup": "comma-space",
    "label": "기획 시안 · AI 보조",
    "note": "기존 프로젝트의 원본 시안입니다. 0·65·98%는 화면에 표기된 예시이며 실제 플레이 측정값이 아닙니다. 세 장면의 카메라와 물체 위치는 조금씩 다릅니다.",
    "migration": {
      "legacyKey": "jisu-exploration-v2",
      "field": "balance",
      "map": {
        "0": "messy",
        "65": "mid",
        "70": "mid",
        "98": "empty"
      }
    }
  },
  "screen": {
    "mode": "gallery",
    "images": [
      {
        "id": "hud",
        "src": "assets/comma-original/hud.png",
        "label": "플레이 화면",
        "caption": "플레이 화면 시안 · 65% 게이지, 천을 든 손과 cloth 선택을 함께 배치",
        "alt": "책상 쪽에서 본 반지하 방과 65% 여백 게이지, 천을 든 손, 선택된 cloth 슬롯의 화면 설계 시안",
        "width": 1672,
        "height": 941
      },
      {
        "id": "inventory_warm",
        "src": "assets/comma-original/inventory_warm.png",
        "label": "인벤토리",
        "caption": "밝은 배경의 인벤토리 시안 · 공간을 보존하는 반투명 정보 패널",
        "alt": "따뜻한 실내광을 배경으로 도구 가방과 브러시 선택 정보를 보여주는 인벤토리 시안",
        "width": 1672,
        "height": 941
      },
      {
        "id": "inventory_detail",
        "src": "assets/comma-original/inventory_detail.png",
        "label": "도구 상세",
        "caption": "도구 상세 시안 · 선택한 브러시의 형태·상태·분류·위치를 표시",
        "alt": "스크럽 브러시의 형태와 condition 100%, category brush, slot main compartment를 표시한 상세 UI 시안",
        "width": 1672,
        "height": 941
      },
      {
        "id": "cover",
        "src": "assets/comma-original/cover.png",
        "label": "시작 화면",
        "caption": "시작 화면 시안 · 생활의 밀도를 배경으로 전하는 첫 인상",
        "alt": "comma, 로고와 시작·이어하기·설정·종료 메뉴가 놓인 시작 화면 시안",
        "width": 1672,
        "height": 941
      },
      {
        "id": "inventory_dark",
        "src": "assets/comma-original/inventory_dark.png",
        "label": "어두운 배경 UI",
        "caption": "인벤토리 시안 · 도구 목록, 가방, 선택한 도구 정보를 분리",
        "alt": "도구 가방을 중심에 두고 왼쪽 도구 목록과 오른쪽 브러시 정보를 배치한 어두운 인벤토리 시안",
        "width": 1672,
        "height": 941
      }
    ],
    "initial": "hud",
    "storageGroup": "comma-screen",
    "label": "기획 시안 · AI 보조",
    "note": "원본에 포함된 손·도구·HUD를 그대로 보여줍니다. 화면 안의 메뉴는 이미지이며, 이 갤러리는 실행 게임이 아닙니다."
  }
};
  window.RECORD_CONTENT ||= {};
  Object.assign(window.RECORD_CONTENT, records);
  const pages = {
  "space": {
    "world": "comma",
    "nav": "공간과 여백",
    "title": "65%에 남겨 둔 일상",
    "type": "space",
    "tag": "브랜드 경험 · 공간 규칙",
    "intro": "많이 비우는 것보다, 다시 살아갈 만큼의 여백을 찾는 게임. 과밀·적정 여백·과잉 비움을 세 장의 원본 시안으로 비교합니다.",
    "points": [
      [
        "100% 완료율을 균형 구간으로",
        "무조건 더 많이 비우게 만드는 완료율 대신, 필요한 생활을 남기는 60–80 구간을 제안했습니다. 65% 장면에는 침대와 책상, 책과 작은 생활 소품이 남습니다."
      ],
      [
        "수치가 방의 모습으로 읽히도록",
        "0%에서는 생활 물건이 바닥을 채우고, 65%에서는 통로와 바닥이 드러납니다. 98%에서는 생활 소품까지 대부분 사라집니다. 이 차이로 적정 여백의 의미를 설명했습니다."
      ]
    ],
    "me": "브랜드 철학을 공간 정리 행동과 여백 게이지로 연결한 기획, 공간 설정과 비주얼 판단",
    "ai": "기획한 공간을 시각화하는 이미지 제작 보조. 표시된 이미지는 2026년 프로젝트 원본 시안입니다.",
    "status": "게임 제품 기획·시각 경험 설계 · 60–80은 기획 제안 구간",
    "evidence": "개인 프로젝트 PDF 1–3쪽과 2026년 6월 기말과제 ZIP을 대조했습니다. 대표 원본 세 장에는 0%·65%·98%가 표시되어 있습니다. 모두 1672×941이지만 카메라와 물체 위치가 픽셀 정합하지 않아 원본 단위로 비교합니다. 실행 빌드나 플레이테스트 수치는 확인되지 않았습니다. 함께 수록한 넓은 주거공간 3장은 동일한 상태 구분을 적용해 본 확장 시안이며, 구현된 추가 스테이지로 확인된 자료는 아닙니다.",
    "missing": null
  },
  "screen": {
    "world": "comma",
    "nav": "화면과 도구",
    "title": "손과 선택이 같은 행동을 가리키게",
    "type": "screen",
    "tag": "화면·정보 설계",
    "intro": "방을 중심에 두고, 균형 게이지와 손에 든 도구, 선택된 슬롯을 함께 배치했습니다. 플레이 화면부터 인벤토리·도구 상세·시작 화면까지 기존 프로젝트의 원본 시안으로 살펴봅니다.",
    "points": [
      [
        "공간을 읽는 정보는 위와 아래로",
        "상단에는 여백 게이지를, 하단에는 도구 슬롯을 두었습니다. 플레이 시안의 65% 게이지, 천을 든 손과 cloth 선택이 같은 장면을 설명합니다."
      ],
      [
        "도구 선택 뒤에는 필요한 정보를",
        "인벤토리는 도구 목록·가방·상세 정보로 나눴습니다. 선택한 도구의 형태와 상태를 한 화면에서 확인하도록 구성한 UI 시안입니다."
      ]
    ],
    "me": "공간 중심의 화면 방향, 손·도구·선택 상태의 일치 조건과 시안 판단",
    "ai": "공간·손·도구 등 시각 시안 제작 보조. 현재 전시는 기존 원본을 사용하며 새로운 실행 화면으로 재구성하지 않습니다.",
    "status": "시작 화면·플레이 화면·인벤토리·도구 상세 원본 시안",
    "evidence": "2026년 6월 기말과제 ZIP의 완성 화면 11장과 손·도구·HUD 원본을 확인했습니다. 기존 Codex 영문 자산 11개는 ZIP과 SHA256이 일치합니다. hud는 65%와 cloth를 표시합니다. 인벤토리의 공간 수치는 98%, 도구 상태는 시안별 92% 또는 100%로 서로 달라 연속 플레이로 제시하지 않습니다.",
    "missing": null
  }
};
  const D = window.GAME_DATA;
  if (D?.pages) {
    for (const [id, page] of Object.entries(pages)) {
      D.pages[id] = {...D.pages[id], ...page};
    }
  }
})();
