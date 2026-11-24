window.HUE_CATALOGUE = {
  "schema_version": 1,
  "locale": "ko-KR",
  "project": {
    "name": "HUEPHORIA",
    "subtitle": "이동과 탐험이 읽히는 화면을 찾는 과정",
    "state": "졸업 전시판 이후 출시판을 재설계하고 있습니다. 이 도감은 각 자료의 제작 시점과 상태를 함께 보여 줍니다.",
    "world_note": "월드 공간은 포트폴리오용 재구성입니다. 실제 게임 자료는 각 기록 안에서 확인할 수 있습니다."
  },
  "entries": [
    {
      "id": "camera-scale",
      "title": "더 크게 보일 때, 놓치는 것",
      "eyebrow": "카메라 범위 비교",
      "format": "paired-image-switcher",
      "status": "판단 확정 · 2026.11.11",
      "summary": "픽셀과 캐릭터를 크게 보는 640×360안을 시험한 뒤, 주변 지형과 이동을 읽을 여유가 있는 960×540을 유지했습니다.",
      "hero_asset": "camera-01-960",
      "pair_ids": [
        "camera-pair-01",
        "camera-pair-04",
        "camera-pair-06"
      ],
      "labels": {
        "a": "960×540 · 유지",
        "b": "640×360 · 시험 후 반려",
        "source": "실제 게임 씬 · 카메라 비교 렌더",
        "image_output": "두 안을 같은 크기로 비교합니다. 카메라 내부 해상도는 각각 960×540과 640×360이며, PNG 출력은 둘 다 1920×1080입니다."
      },
      "decision": {
        "question": "캐릭터를 더 크게 보여 주면 이동도 더 잘 읽힐까?",
        "comparison": "같은 장소에 아덴을 두고 두 카메라 범위를 비교했습니다. 640×360안에서는 캐릭터와 픽셀이 커지는 만큼 한 번에 보이는 지형이 줄어듭니다.",
        "user_observation": "직접 시험한 뒤, 가까운 화면의 어지러움과 대시 한 번에 화면의 큰 부분을 이동하는 감각을 문제로 판단했습니다.",
        "outcome": "2026년 11월 11일, 640×360 테스터안을 반려하고 960×540을 유지했습니다.",
        "quote": "960이 낫겠다. 지금 건 너무 가까워서 어지러운 느낌이 있더라.",
        "quote_attribution": "정지수 · 2026.11.11 결정 기록"
      },
      "look_for": [
        {
          "pair_id": "camera-pair-01",
          "text": "오른쪽 벽과 위쪽 발판이 한 화면에 얼마나 남는지 보세요."
        },
        {
          "pair_id": "camera-pair-04",
          "text": "천장과 이웃 발판을 함께 보는 여유가 달라집니다."
        },
        {
          "pair_id": "camera-pair-06",
          "text": "앞쪽의 빈 공간과 건너편 발판이 얼마나 일찍 보이는지 비교하세요."
        }
      ],
      "roles": {
        "정지수": "플레이 감각 평가와 유지안 결정.",
        "Claude": "Unity 비교 도구·테스터 구현과 촬영.",
        "Codex/GPT": "픽셀 규격 재검토 및 비교안 제안."
      },
      "limits": "정지 이미지는 가시 범위의 차이를 보여 줍니다. 어지러움·대시 감각은 당시 사용자의 테스터 피드백이며, 이 이미지 자체가 플레이 영상이나 정량 사용자 테스트는 아닙니다.",
      "evidence_ids": [
        "camera_decision",
        "camera_capture_method",
        "roles"
      ]
    },
    {
      "id": "foreground-space",
      "title": "화면 테두리에서, 공간 속 전경으로",
      "eyebrow": "전시판 공간 표현",
      "format": "runtime-gallery-with-modules",
      "status": "당시 전시 빌드 적용 기록 · R14",
      "summary": "카메라를 따라붙던 전경 프레임을 끄고, 독립된 전경 조각을 맵에 배치했습니다. 가까운 가지와 풀이 지나가는 구간 사이에 시야가 열린 곳을 남겼습니다.",
      "hero_asset": "foreground-runtime-01",
      "gallery_assets": [
        "foreground-runtime-01",
        "foreground-runtime-02",
        "foreground-runtime-03"
      ],
      "module_assets": [
        "foreground-fern-native",
        "foreground-branch-native"
      ],
      "labels": {
        "gallery": "실제 실행 중 게임 카메라 렌더 · 전시판",
        "modules": "전경용 별도 모듈 · 투명 PNG"
      },
      "decision": {
        "question": "어느 장소에서도 같은 모서리가 보이면 공간을 이동하는 느낌이 생길까?",
        "comparison": "R13의 카메라 고정 프레임을 비활성화하고, R14에서는 맵에 독립 전경 8개를 배치했습니다. 좁은 발판과 전투 중심은 가리지 않는 배치 원칙을 세웠습니다.",
        "outcome": "전경 적용 빌드의 실행 카메라 PNG와 위치 기록을 남겼습니다. 여기에는 확인용 대표 3장을 싣습니다."
      },
      "roles": {
        "정지수": "전시판에서 얻은 맵 제작 방향을 출시판에도 이어가는 방향 결정.",
        "Codex/GPT": "당시 전경 자산·배치·검증 패키지 제작.",
        "공동 작업 구분": "별도로 진행된 조명과 게임 코드 수정은 R14 전경 성과에 합산하지 않습니다."
      },
      "limits": "실행 중 Main Camera를 따로 렌더한 자료로 HUD와 창 전체 화면은 포함하지 않습니다. 전시판 기록이며 현재 베타의 동일 상태를 증명하지 않습니다. 사용자의 개별 전경 배치 직접 작업은 이 기록에서 확인되지 않습니다.",
      "evidence_ids": [
        "foreground_method",
        "foreground_runtime_log",
        "foreground_native",
        "current_rules",
        "codex_historical_work"
      ]
    },
    {
      "id": "route-structure",
      "title": "처음 지나갈 길과, 다시 돌아올 길",
      "eyebrow": "뿌리밑 동선 설계",
      "format": "plan-flow-switcher",
      "status": "출시판 설계 제안 · 상세 배치 검토 중",
      "summary": "거목 아래 지하에서 시작한다는 방향을 바탕으로, 주 경로·곁길·지름길·나중에 열리는 길을 분리한 칸 지도를 만들었습니다.",
      "hero_asset": "route-plan",
      "state_assets": {
        "plan": "route-plan",
        "flow": "route-flow"
      },
      "labels": {
        "plan": "지형과 배치",
        "flow": "동선 표시",
        "source": "개발 설계도 · 실제 플레이 화면 아님"
      },
      "decision": {
        "question": "처음에는 길을 읽고, 능력을 얻은 뒤에는 돌아올 이유를 어떻게 남길까?",
        "comparison": "주 경로를 따라 허브에 도달하고, 준보스 뒤에는 승강기로 허브와 연결되는 안입니다. 곁길과 나중 능력으로 여는 자리는 동선도에서 별도로 표시합니다.",
        "outcome": "시작 구역이 거목 아래 지하라는 점은 확정됐습니다. 이 도감의 구체 방 배치와 전체 구역 순서는 설계 제안으로 읽어 주세요."
      },
      "roles": {
        "정지수": "시작 구역을 거목 아래 지하로 정하는 방향 결정.",
        "Claude": "칸 지도·구역별 배치·동선 설계와 이동 시뮬레이션.",
        "Codex/GPT": "지역·주민·생물·유물 잔재 설정의 기초 제안."
      },
      "limits": "이동 시뮬레이션과 설계도는 실제 전투·카메라·플레이 검수 완료와 다릅니다. 문서의 예상 플레이 시간은 검증된 성과로 싣지 않았습니다. 상세 배치 전체를 정지수의 수작업이나 확정안으로 표시하지 않습니다.",
      "evidence_ids": [
        "route_plan",
        "camera_decision",
        "current_rules"
      ]
    }
  ],
  "excluded_claims": [
    {
      "claim": "심장 획득량 2→1",
      "reason": "과거 자기소개서/PDF와 현 게임 기록의 원문 대조 필요. 이번 도감에서 실제 개선 수치로 사용하지 않음."
    },
    {
      "claim": "모든 공격 전조 통일·접촉 피해 완전 제거 완료",
      "reason": "설계 방향과 버전별 구현 상태를 구분해야 하므로 완료 성과로 사용하지 않음."
    }
  ],
  "implementation_notes": [
    "프레젠테이션에서는 roles와 status를 짧게 먼저 표시하고 limits·출처는 펼쳐 볼 수 있게 한다.",
    "카메라 PNG에 별도 크롭/자동 확대를 적용하지 않아야 A/B 비교가 유지된다. 같은 화면상 종횡비와 크기로 표시한다.",
    "동선도는 글자가 작으므로 원본 확대·이동 기능이 필요하다.",
    "전경 원본 모듈은 배경과 구분되는 검수용 바탕에 보여 준다.",
    "공간 월드의 비주얼 확정은 사용자 검토 후이며 콘텐츠의 확인된 사실과 분리한다."
  ]
}
;