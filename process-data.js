(()=>{"use strict";const D=window.GAME_DATA;
Object.assign(D.pages,{
  "aden": {
    "world": "huephoria",
    "nav": "플레이어 캐릭터 제작",
    "title": "플레이어 캐릭터의 기준 도트",
    "intro": "자세마다 달라지던 아덴의 가면과 망토를 하나의 도트로 정리했습니다.",
    "me": "외형 기준 설정, 망토·다리 도트 직접 수정, 공격 동작 검수",
    "ai": "Claude: 코드 기반 조작 시험, 제작 도구 조사와 PixelLab API 모션 생성·후처리. ComfyUI: 비율·자세 실험. GPT: 일러스트 시안. PixelLab: 기준 도트·모션 생성.",
    "stage": "기준 도트 제작 · 모션 개선 중",
    "process": [
      {
        "phase": "초기 구상",
        "title": "가면과 망토의 앞·옆·뒤",
        "body": "가면의 폭과 찢어진 망토 밑단을 다면도에서 맞춰, 돌아서도 같은 인물로 보이게 했습니다.",
        "images": [
          "first-paper-rough",
          "early-color-turnaround"
        ]
      },
      {
        "phase": "일러스트 실험 · 비율과 움직임",
        "title": "일러스트에서 도트로",
        "body": "ComfyUI 시안에서 흰 가면과 짧은 망토를 남겼습니다. 동작마다 외형이 달라지고 인원도 줄어 도트를 시험했습니다.",
        "images": [
          "comfy-proportions",
          "generation-drift"
        ],
        "extraTitle": "GPT 일러스트 형태 비교",
        "extraImages": [
          "illustration-turnaround",
          "body-connection-problem"
        ]
      },
      {
        "phase": "기준 도트 제작과 색감 수정",
        "title": "망토 주름과 다리 수정",
        "body": "Claude의 첫 도트는 형태가 무너졌습니다. PixelLab 기본형의 망토 주름과 다리를 직접 고치고 배경에 맞춰 붉은색을 조정했습니다.",
        "images": [
          "early-dot-trial",
          "retouched-standard"
        ],
        "extraTitle": "기준 도트와 망토 주름 수정",
        "extraImages": [
          "manual-pixel-basis",
          "pixellab-cloak-failure"
        ]
      },
      {
        "phase": "망토 공격 실패와 전투 방식 변경",
        "title": "망토 공격에서 맨손 전투로",
        "body": "자락만 몸에서 떨어져 보이는 공격은 제외했습니다. 망토는 남기고 몸의 회전으로 치는 동작을 택했습니다.",
        "images": [
          "cape31-motion-preview",
          "cape35-failed-strip"
        ]
      },
      {
        "phase": "맨손 전투 재설계와 검수",
        "title": "주먹을 당기는 위치",
        "body": "주먹이 망토를 뚫고 나왔습니다. 복싱 자세를 참고해 옆구리에서 당긴 팔이 몸통 회전을 따라 뻗도록 수정 요청했습니다.",
        "images": [
          "punch53-failed-preview",
          "punch63-revised-preview"
        ],
        "extraTitle": "준비 자세와 가면 수정 비교",
        "extraImages": [
          "punch62-windup-preview",
          "face-before",
          "face-after"
        ]
      }
    ],
    "status": "기준 도트 제작 · 모션 개선 중",
    "tag": "플레이어 캐릭터 제작",
    "hero": [],
    "points": [
      [
        "가면과 망토를 여러 방향에서 탐색하기",
        "처음에는 붕대와 바지, 찢어진 망토까지 세부를 잡았습니다. 러프와 채색 다면도로 앞·옆·뒤에서 이어지는 복장과 움직일 때의 형태를 구상했습니다."
      ],
      [
        "움직이기 전에, 주인공으로 보여야 했다",
        "왼쪽은 Claude로 만든 움직임 시험용 캐릭터입니다. 오른쪽은 ComfyUI에서 캐릭터를 학습시키고 자세를 만들려 했던 시험입니다."
      ],
      [
        "자연어로 설명하면 같은 주인공을 이어갈 수 있을까",
        "자연어로 수정할 수 있는 GPT 이미지 기능이라면 일관성을 유지하며 동작을 만들 수 있지 않을까 생각했습니다. 상세한 일러스트와 단순화한 후보를 만들어 비교했습니다."
      ],
      [
        "원본은 PixelLab으로, 어긋난 형태는 직접 고치기",
        "먼저 Claude에 도트 제작을 맡겼지만 주인공의 형태가 무너졌습니다. 다른 제작 AI를 조사하게 하고, 도트 애니메이션 확장에 유용하다고 판단한 PixelLab을 선택했습니다."
      ],
      [
        "주름이 목까지 이어지며 천의 형태가 무너졌다",
        "망토의 명암과 주름을 다듬는 과정에서도 의도하지 않은 형태가 생겼습니다."
      ],
      [
        "따로 좋아 보이는 색보다, 배경과 어울리는 색으로",
        "캐릭터를 게임에 넣어 보니 배경과 주인공의 분위기가 따로 놀았습니다. 단독 이미지가 아닌 실제 게임 화면을 기준으로 색을 다시 잡았습니다."
      ],
      [
        "망토의 정체성은 남기고, 공격 방식은 바꾸기",
        "망토를 활용한 공격을 여러 방식으로 시도했지만 생각한 방향과 달랐고 움직임도 자연스럽지 않았습니다."
      ],
      [
        "권투의 회전·준비 자세부터 다시 조사하기",
        "맨손으로 바꾼 첫 모션도 어색했습니다. API로 작업하던 Claude에 실제 권투와 맨손 전투 자료를 모아 동작 원리를 조사하도록 요청했습니다."
      ],
      [
        "자세가 잡힌 뒤에도 얼굴과 프레임을 확인하기",
        "동작 조사와 자세 수정을 거친 뒤, Claude가 PixelLab 관절·키 포즈를 지정해 후속 모션을 생성했습니다. 저는 타격 방향과 자세가 의도대로 읽히는지 검토했습니다."
      ]
    ]
  },
  "level": {
    "world": "huephoria",
    "nav": "맵 동선·타일 제작",
    "title": "다시 찾는 길과 밟을 수 있는 지형",
    "intro": "전시 맵에는 발판의 경계를, 베타에는 새 능력을 얻고 돌아올 길을 설계했습니다.",
    "me": "전시 맵 도트 직접 제작, 탐험 동선 기획, 타일·환경 소품 검수",
    "ai": "전시용 타일은 GPT에 요청했습니다. Codex는 동선과 타일 조립안을 제안했고, Claude는 PixelLab 타일 시안을 만들고 Unity에서 소품의 충격 반응을 구현했습니다.",
    "stage": "전시 맵 완성 · 후속 베타 설계·검증 중",
    "process": [
      {
        "phase": "플레이 목표",
        "title": "하나의 자원, 두 가지 선택",
        "body": "붉은 힘으로 적을 치거나 벽을 부술 수 있습니다. 회복도 같은 심장을 쓰게 해 다음 행동을 고민하게 했습니다.",
        "images": [
          "red",
          "heal"
        ],
        "extraTitle": "초기 기획 · 린 캔버스",
        "extraImages": [
          "plan"
        ]
      },
      {
        "phase": "초기 실패 시안 · 전시판",
        "title": "뿌리에 묻힌 발판",
        "body": "전체 이미지로 만든 맵은 발판 하나도 옮기기 어려웠습니다. 전시 지형을 직접 찍고, 뿌리는 바위 안으로 넣어 밟는 면을 살렸습니다.",
        "images": [
          "history-root-failed",
          "history-exhibition-stage"
        ],
        "extraTitle": "초기 맵 원화와 타일 이음새 수정 전후",
        "extraImages": [
          "map-mixed-original",
          "history-tile-seams"
        ],
        "terrainCase": "history"
      },
      {
        "phase": "출시판 베타 동선 검증",
        "title": "새 능력으로 돌아오는 길",
        "body": "첫 방은 걷기와 낮은 점프로 시작합니다. 닿지 않는 길을 먼저 보여 주고 기술을 얻은 뒤 돌아오도록 설계했습니다.",
        "images": [
          "map",
          "start"
        ],
        "extraTitle": "능력 진행 기획과 동선 설계도",
        "extraImages": [
          "ability-plan",
          "codex-forest-blueprint",
          "codex-root-blueprint"
        ]
      },
      {
        "phase": "베타 · 타일 재제작 중",
        "title": "흙에 묻힌 고철, 이어지는 나뭇결",
        "body": "반복 타일이 평면 무늬로 보여 고철의 깊이와 크기를 달리하도록 요청했습니다. 썩은 나무는 방을 조립해 결이 이어지는지 보고 있습니다.",
        "images": [
          "current-material-test",
          "current-room-studies"
        ],
        "terrainCase": "current"
      },
      {
        "phase": "베타 · 환경 소품",
        "title": "착지에 반응하는 고철",
        "body": "강하게 착지할 때만 헐거운 고철이 튀는 반응을 제안했습니다. Claude가 임시 도형으로 구현했고, 소품은 이동을 막지 않습니다.",
        "images": [
          "current-props"
        ],
        "extraTitle": "전시용으로 분리한 전경 식물과 가지",
        "extraImages": [
          "fern",
          "branch"
        ],
        "terrainCase": "current"
      },
      {
        "phase": "색감·원경 선택",
        "title": "원경의 재질과 색",
        "body": "천·가죽·돌의 명암을 살리고 네 가지 색을 강조했습니다. 같은 위치에서 비교한 뒤 차이가 작았던 원경은 원화를 유지했습니다.",
        "extraTitle": "재질색 시안과 원경 비교",
        "extraImages": [
          "colour",
          "original",
          "pixel"
        ]
      }
    ],
    "status": "전시 맵 완성 · 후속 베타 설계·검증 중",
    "tag": "맵 동선·타일 제작",
    "hero": [],
    "points": [
      [
        "한 장의 그림만으로 플레이 공간이 되지는 않았다",
        "처음에는 GPT 이미지 기능으로 실제 맵을 제작하려 했습니다."
      ],
      [
        "맵은 직접 찍고, 타일은 조건을 나눠 요청하기",
        "전시 일정이 가까워져 맵의 도트는 직접 작업하고, GPT에는 지형·발판·장식에 쓸 타일셋을 요청했습니다."
      ],
      [
        "정해진 일정 안에 플레이할 수 있는 공간 만들기",
        "직접 작업한 맵 도트와 요청해 만든 타일셋으로 전시용 맵을 완성했습니다. 앞쪽 식물과 가지는 독립 조각으로 배치하도록 하고, 이동할 발판과 전투 중심은 비워 두도록 했습니다. 맵 도트와 AI로 만든 전경 이미지를 역할에 맞게 조합했습니다."
      ],
      [
        "능력으로 열리는 길과, 다시 돌아올 이유부터",
        "전시 이후 실제 맵의 베타를 준비하면서 Codex에 여러 게임의 맵과 메트로배니아 제작 규칙을 조사하도록 했습니다. 능력을 얻는 곳과 그 능력으로 열리는 길, 선택 보상, 되돌아오는 길을 설계 기준으로 삼았습니다. 아래는 이 설계 과정을 보여 주는 이전 작업안입니다."
      ],
      [
        "도면의 연결을 실제 이동으로 확인하기",
        "기획 방향과 설계 제안을 바탕으로 Claude가 상세 구역 배치와 Unity 시험 공간을 구현했습니다. 연결 검사만으로는 지형의 뭉툭함이나 짧은 탐험 흐름이 드러나지 않았습니다. 직접 플레이한 뒤 얇은 턱과 천장, 능력을 조합하는 구간, 되돌아올 길을 요청하며 다듬고 있습니다."
      ]
    ],
    "team": "초기 4인 팀에서 팀원은 주로 맵·캐릭터 이미지 제작을 도왔습니다."
  },
  "space": {
    "world": "comma",
    "nav": "공간 정리와 여백",
    "title": "생활이 남는 방",
    "intro": "라이프스타일 브랜드 comma,의 ‘여백’을 반지하 자취방 정리 게임으로 기획했습니다. 이미지 시안으로 규칙과 화면을 검토했습니다.",
    "me": "공간 정리 규칙 기획, 방 배치·화풍·도구 화면 검수",
    "ai": "ChatGPT·Gemini가 공간과 HUD의 시각화 시안을, ChatGPT가 손·도구·인벤토리 이미지를 만들었습니다.",
    "stage": "개인 게임 기획 · AI 제작 시안",
    "process": [
      {
        "phase": "브랜드와 정리 규칙",
        "title": "적정 여백 60–80%",
        "body": "방을 끝까지 비우면 생활할 자리도 사라졌습니다. 65% 시안에는 침대와 책상을 남기고 이 상태를 정리 목표로 삼았습니다.",
        "images": [
          "messy",
          "mid",
          "empty"
        ],
        "extraTitle": "초기 공간 구상과 넓은 방 시험",
        "extraImages": [
          "candidate-20",
          "luxury_clean"
        ]
      },
      {
        "phase": "배치 재검토",
        "title": "정리 전의 방 배치",
        "body": "옷과 책이 가지런해 정리할 이유가 보이지 않았습니다. 뭉친 옷과 생활용품을 바닥에 흩어 놓도록 요청했습니다.",
        "images": [
          "candidate-16",
          "candidate-10"
        ],
        "extraImages": [
          "candidate-9"
        ],
        "extraTitle": "초기 물건 배치 시안 더 보기"
      },
      {
        "phase": "그림체 재작업",
        "title": "실사풍에서 게임 화면으로",
        "body": "사진처럼 보이는 시안에서는 조작할 대상이 모호했습니다. 반지하 설정을 살리면서 손과 도구가 눈에 띄도록 화풍을 바꿨습니다.",
        "images": [
          "candidate-8"
        ]
      },
      {
        "phase": "HUD의 중간 시도",
        "title": "여백 게이지와 도구 선택",
        "body": "점수와 과제를 덜고 위에는 여백 범위, 아래에는 현재 도구를 뒀습니다. 인벤토리에서는 목록과 선택한 도구가 대응하도록 했습니다.",
        "images": [
          "candidate-1",
          "hud"
        ],
        "extraTitle": "가방과 도구 상세 시안",
        "extraImages": [
          "inventory_warm",
          "inventory_detail"
        ]
      }
    ],
    "status": "개인 게임 기획 · AI 제작 시안",
    "tag": "공간 정리와 여백",
    "hero": [],
    "points": [
      [
        "게임 회사를 만드는 것이 아니라, 브랜드를 경험하는 게임",
        "게임 장르와 조작이 앞서면 상위 브랜드의 의미가 약해질 수 있다고 봤습니다. 과잉된 일상에서 자극을 덜어낸다는 라이프스타일 브랜드의 철학을, 필요한 물건과 불필요한 물건을 구분하는 정리 행동으로 연결했습니다."
      ],
      [
        "물건이 많아도 가지런하면 어지러운 방이 아니다",
        "한국적인 반지하를 배경으로 물건의 양과 배치를 여러 안으로 탐색했습니다. 시안을 검토하며 정리 전의 방이 가지런한 나열처럼 보인다는 점을 지적했습니다."
      ],
      [
        "100%를 채우면, 생활까지 사라진다",
        "완료율은 많이 비울수록 좋다는 인상을 줬습니다. 게이지를 공간의 균형으로 재정의하고 60–80%를 적정 구간으로 제안했습니다. 65% 시안에는 침대·책상·생활 소품을 남기고, 과잉 비움과 차이를 보이도록 지시했습니다."
      ],
      [
        "같은 기준이 넓은 방에서도 읽히는지",
        "반지하에서 잡은 기준을 넓은 주거 공간에도 적용해 시안을 제작하도록 했습니다. 방이 달라져도 과밀·적정 여백·과잉 비움의 차이가 보이는지 비교했습니다."
      ]
    ]
  },
  "camera": {
    "world": "huephoria",
    "nav": "전투 화면과 조작",
    "title": "전투 중에 보이는 정보",
    "intro": "같은 방에서 체력 표시, 카메라 시야, 대시와 점프를 비교했습니다.",
    "me": "UI 시안 선정, HUD 크기·카메라 시야 결정, 이동안 직접 플레이",
    "ai": "ComfyUI·Midjourney·GPT로 UI 시안을 만들고, Claude가 HUD·카메라·이동 비교와 실행 검사를 구현했습니다.",
    "stage": "HUD 확대 적용 · 960 × 540 시야 유지",
    "process": [
      {
        "phase": "초기 UI 선택",
        "title": "보스 체력바 선택",
        "body": "광택이 먼저 보이는 ComfyUI 시안은 제외했습니다. 다크 판타지 장식 속에서도 게이지가 읽히는 Midjourney 시안을 골랐습니다.",
        "images": [
          "ui-comfy-excess",
          "ui-midjourney-selected"
        ],
        "extraTitle": "보스 체력바 후보 보기",
        "extraImages": [
          "ui-midjourney-sheet",
          "ui-gpt-unselected-bossbar"
        ]
      },
      {
        "phase": "HUD 크기 변경",
        "title": "체력 표시 1.5배",
        "body": "남은 체력이 잘 보이지 않아 확대를 요청했습니다. 같은 장면에서 체력·심장 1.5배, 스킬 칸 1.25배 적용 전후를 비교했습니다.",
        "images": [
          "before",
          "after"
        ]
      },
      {
        "phase": "카메라 시야 비교",
        "title": "대시 후 착지점이 보이는 시야",
        "body": "도트 크기는 유지하고 640 × 360과 960 × 540을 비교했습니다. 대시 뒤 다음 발판까지 보이는 960 × 540을 택했습니다.",
        "images": [],
        "camera": true
      },
      {
        "phase": "직접 플레이로 조작 검증",
        "title": "대시와 점프를 따로 검증",
        "body": "같은 방에서 이동안 세 가지를 번갈아 플레이했습니다. 대시는 참고작의 수치를 환산한 안, 점프는 휴포리아 조정안을 골랐습니다."
      }
    ],
    "status": "HUD 확대 적용 · 960 × 540 시야 유지",
    "tag": "전투 화면과 조작",
    "hero": [],
    "points": [
      [
        "과한 장식에서, 읽기 쉬운 테두리로",
        "Claude·ComfyUI로 만든 첫 UI는 장식과 금속 명암이 과했습니다. 참고 방향을 다시 잡고 Midjourney로 만든 막대 시안을 비교했습니다."
      ],
      [
        "새로 만든 UI라고 전부 바꾸지는 않기",
        "이후 GPT UI 묶음에서는 메뉴 장식과 아이콘, 일부 틀을 골라 적용했습니다. 보스 체력바는 앞서 고른 Midjourney 시안을 유지했습니다."
      ],
      [
        "전투 중 확인할 정보를 먼저 키우기",
        "남은 체력을 한눈에 읽기 어려워 체력·심장 표시 확대를 요청했습니다. Claude가 체력·심장 묶음을 1.5배, 스킬 칸을 1.25배로 수정했습니다. 같은 시작 장면에서 정보가 차지하는 크기를 비교했습니다."
      ],
      [
        "원본 도트는 유지하고, 화면 범위만 시험하기",
        "초기에는 방 전체를 그린 이미지를 한 화면에 배치하면서 캐릭터와 지형의 크기가 맞지 않았습니다. 캐릭터의 도트 자체를 줄이는 방식도 점 크기를 어긋나게 했습니다. 원본 비율을 유지한 채 640 × 360과 960 × 540 시야를 비교했고, 대시 이후의 발판을 볼 여유가 있는 960 시야를 유지했습니다."
      ]
    ],
    "audioSlot": "sound",
    "audioSummary": "처음 합성한 공격음이 악기처럼 들려 휘두르는 소리와 맞는 소리를 따로 만들도록 했습니다. 초기 효과음에는 ElevenLabs를 썼고, Suno 배경음은 장면에 맞게 더 따뜻한 분위기로 조정했습니다. 이후 효과음은 PixelLab으로 제작하도록 요청했습니다."
  },
  "method": {
    "world": "archive",
    "nav": "전시 이후 달라진 적 설계",
    "title": "유물이 바꾼 적의 행동",
    "intro": "전시판의 골렘에서 출발해, 베타에서는 생물의 습성과 유물의 영향을 공격 동작에 담았습니다.",
    "me": "전시 이후 적의 변형 기준 기획, 공격 전조와 모션 선정",
    "ai": "GPT·Codex가 컨셉 시안을, PixelLab이 모션 시안을 만들었습니다. Claude가 바뀐 패턴을 Unity 베타에 적용했습니다.",
    "stage": "휴포리아 · 생물 컨셉 시안 · 신규 적 베타 적용",
    "process": [
      {
        "phase": "세계관과 생태",
        "title": "실제 변형과 아덴의 시점",
        "body": "유물로 변한 긴등지렁이의 몸에 초록빛을 남겼습니다. 아덴의 시점에서는 각질 머리와 수축한 몸이 더 두드러집니다.",
        "images": [
          "creature-actual",
          "creature-perceived"
        ]
      },
      {
        "phase": "전시판 → 출시판 베타",
        "title": "굴을 파는 동작을 기습으로",
        "body": "짐틀두더지는 바닥의 흙이 먼저 움직이고 그 자리에서 솟아오릅니다. 골렘과 다른 전조를 보고 피하게 했습니다.",
        "images": [
          "exhibit-golem",
          "beta-pack-mole"
        ]
      },
      {
        "phase": "실패 시안 → 베타 적용",
        "title": "몸을 말아 구르는 돌진",
        "body": "몸을 펴서 미는 시안은 공격으로 읽히지 않았습니다. 베타에서는 돌등쥐며느리가 몸을 말고 제자리에서 돌면 돌진이 이어집니다.",
        "images": [
          "pillbug-shove-rejected",
          "pillbug-roll-applied"
        ]
      }
    ]
  },
  "intro": {
    "world": "huephoria",
    "nav": "게임 소개",
    "title": "HUEPHORIA",
    "stage": "졸업 전시판 제작 · 1·2구역 베타 테스트",
    "intro": "붉은 심장을 지닌 아덴이 색을 잃은 왕국을 탐험하는 2D 메트로배니아입니다. 보스에게 얻은 능력으로 지나온 길을 다시 엽니다.",
    "summary": [
      {
        "label": "색과 전투",
        "text": "보스에게 얻은 색을 전투 기술로 씁니다. 붉은 기술은 벽도 부숩니다."
      },
      {
        "label": "탐험과 이동",
        "text": "이단점프와 활공을 얻으면 이전에 닿지 못한 길로 돌아갑니다."
      },
      {
        "label": "공격과 회복",
        "text": "공격과 회복은 심장 자원을 함께 소모합니다."
      }
    ],
    "me": "세계관·플레이 규칙 기획, 캐릭터·맵·UI 제작 방향과 플레이 검수",
    "ai": "이미지와 모션 시안 제작, Unity 구현과 실행 검사에 AI를 활용했습니다.",
    "hero": [
      "exhibit"
    ],
    "process": []
  }
});
Object.assign(window.RECORD_CONTENT,{
  "aden": {
    "mode": "gallery",
    "initial": "first-paper-rough",
    "label": "초기 제작 실패에서 PixelLab 생성·직접 손질·전투 모션 재설계까지",
    "images": [
      {
        "id": "first-paper-rough",
        "src": "assets/development/aden-first-paper-rough.jpg",
        "label": "처음의 종이 러프",
        "alt": "종이 러프에서 가면·망토·복장·동작 탐색",
        "caption": "앞·옆·뒤 모습과 동작을 탐색한 첫 러프.",
        "width": 4744,
        "height": 3560,
        "format": "portrait",
        "pixel": false,
        "checker": false,
        "previewSrc": "assets/compact/aden-rough-preview.jpg"
      },
      {
        "id": "early-color-turnaround",
        "src": "assets/development/aden-early-color-turnaround.png",
        "label": "초기 색·복장 다면도",
        "alt": "선화에 색을 입힌 정면·측면·후면·행동 시트",
        "caption": "붕대·바지·찢어진 망토를 포함한 초기 복장 시안.",
        "width": 1248,
        "height": 485,
        "format": "landscape",
        "pixel": false,
        "checker": false
      },
      {
        "id": "illustration-turnaround",
        "src": "assets/development/aden-illustration-turnaround.png",
        "label": "일러스트 방향별 시안",
        "alt": "상세 일러스트의 정면·측면·후면 후보",
        "caption": "일러스트 방식으로 맞춘 방향별 모습.",
        "width": 1448,
        "height": 1086,
        "format": "landscape",
        "pixel": false,
        "checker": false
      },
      {
        "id": "simplified-ingame",
        "src": "assets/development/aden-simplified-ingame.png",
        "label": "장식을 줄인 인게임 후보",
        "alt": "바지·다리 붕대 대신 검은 다리로 정리한 정면·측면 후보",
        "caption": "장식을 덜어내고 가면·망토·검은 신체를 강조한 후보.",
        "width": 1402,
        "height": 1122,
        "format": "portrait",
        "pixel": false,
        "checker": false
      },
      {
        "id": "generation-drift",
        "src": "assets/development/aden-generation-drift.png",
        "label": "동작 실험 · 코드 조작 시험과 ComfyUI 자세 실패",
        "alt": "왼쪽 Claude 움직임 시험용 캐릭터와 오른쪽 ComfyUI 캐릭터 학습·동작 시험 결과",
        "caption": "왼쪽은 코드로 만든 조작 시험용 그림입니다. 오른쪽은 자세마다 가면과 망토가 달라진 ComfyUI 결과입니다.",
        "width": 1080,
        "height": 370,
        "format": "landscape",
        "pixel": false,
        "checker": false,
        "previewSrc": "assets/compact/aden-generation-preview.jpg"
      },
      {
        "id": "body-connection-problem",
        "src": "assets/development/aden-body-connection-problem.png",
        "label": "수정 요청 후보 · 망토 안의 몸통 연결",
        "alt": "ChatGPT에서 수정 입력으로 다시 보낸 후기 일러스트",
        "caption": "몸통 연결이 어색한 후보. 근육을 강조하기보다 망토 안에서 자연스럽게 이어지도록 요청했습니다.",
        "width": 1038,
        "height": 1516,
        "format": "portrait",
        "pixel": false,
        "checker": false
      },
      {
        "id": "early-dot-trial",
        "src": "assets/development/aden-early-dot-trial.png",
        "label": "실패 시안 · Claude 도트",
        "alt": "Claude에 도트 제작을 맡겼지만 주인공의 형태가 무너진 초기 결과",
        "caption": "도트 표현을 시험했지만 형태가 무너져, 다른 제작 AI를 찾는 계기가 됐습니다.",
        "width": 768,
        "height": 768,
        "format": "portrait",
        "pixel": true,
        "checker": false
      },
      {
        "id": "manual-pixel-basis",
        "src": "assets/development/aden-manual-pixel-basis.png",
        "label": "PixelLab 생성 후 직접 손질한 기준형",
        "alt": "PixelLab 원본에서 망토·빛·다리를 직접 수정한 주인공 도트",
        "caption": "PixelLab 원본의 망토 결·표현·빛을 손보고, 발이 생긴 다리 부분은 대부분 다시 고쳤습니다.",
        "width": 64,
        "height": 64,
        "format": "portrait",
        "pixel": true,
        "checker": true
      },
      {
        "id": "pixellab-cloak-failure",
        "src": "assets/development/aden-pixellab-cloak-failure.png",
        "label": "실패 시안 · 목까지 이어진 망토 주름",
        "alt": "기준 도트와 망토 주름이 목 부분까지 이어진 PixelLab 수정 실패 비교",
        "caption": "오른쪽 수정 결과에서 망토 주름이 목 부분까지 이어진 것이 문제였습니다.",
        "width": 1136,
        "height": 690,
        "format": "landscape",
        "pixel": true,
        "checker": false
      },
      {
        "id": "shape-repair-options",
        "src": "assets/development/aden-shape-repair-options.png",
        "label": "밑단 복원·주름 두 안 비교",
        "alt": "밑단·망토 틈을 복원하고 주름없음/전부 두 방향 비교",
        "caption": "밑단과 틈을 복원하고 주름의 양을 비교한 중간 시안.",
        "width": 1048,
        "height": 540,
        "format": "landscape",
        "pixel": true,
        "checker": false
      },
      {
        "id": "retouched-standard",
        "src": "assets/development/aden-retouched-standard.png",
        "label": "게임 화면에 맞춰 바꾼 색감",
        "alt": "게임 배경과 어울리도록 망토색과 외곽선을 다시 손질한 주인공",
        "caption": "게임에 적용했을 때 배경과 캐릭터가 따로 보여 색과 빛을 다시 맞췄습니다.",
        "width": 64,
        "height": 64,
        "format": "portrait",
        "pixel": true,
        "checker": true
      },
      {
        "id": "later-skeleton-motion",
        "src": "assets/development/aden-later-skeleton-motion.png",
        "label": "격투 모션의 생성·검수 과정",
        "alt": "관절과 키 포즈를 지정해 생성한 PixelLab 크로스 동작 9프레임",
        "caption": "격투 전환 당시 생성한 크로스 동작. 얼굴 후처리 전 검토 원본.",
        "width": 1152,
        "height": 128,
        "format": "sheet",
        "pixel": true,
        "checker": true
      },
      {
        "id": "face-before",
        "src": "assets/process/aden-face-before.png",
        "label": "생성 프레임의 얼굴",
        "alt": "격투 모션 제작 당시 생성된 주인공 얼굴",
        "caption": "격투 모션 제작 과정에서 원래 인상과 달라진 얼굴.",
        "pixel": true,
        "checker": true,
        "format": "portrait"
      },
      {
        "id": "face-after",
        "src": "assets/process/aden-face-after.png",
        "label": "얼굴 후처리 비교",
        "alt": "같은 격투 프레임에서 얼굴을 후처리한 주인공",
        "caption": "동작 생성과 얼굴 수정을 나눈 당시 비교안.",
        "pixel": true,
        "checker": true,
        "format": "portrait"
      },
      {
        "id": "cape31-motion-preview",
        "src": "assets/development/cape31-motion-preview.gif",
        "label": "실패 시안 · 반복 검토한 망토 공격",
        "alt": "실패 시안 · 반복 검토한 망토 공격",
        "caption": "원하는 방향과 자연스러움이 맞지 않았던 초기 망토 공격 시안.",
        "width": 480,
        "height": 222,
        "format": "landscape",
        "pixel": true,
        "neutralMatte": true
      },
      {
        "id": "cape35-failed-strip",
        "src": "assets/development/cape35-failed-strip.png",
        "label": "실패 시안 · 망토가 몸에서 분리되는 공격",
        "alt": "실패 시안 · 망토가 몸에서 분리되는 공격",
        "caption": "몸은 거의 움직이지 않고 망토 자락이 실 같은 초승달로 분리된 후속 실패 시트.",
        "width": 480,
        "height": 192,
        "format": "landscape",
        "pixel": true,
        "previewSrc": "assets/compact/aden-cape-preview.png"
      },
      {
        "id": "punch53-failed-preview",
        "src": "assets/development/punch53-failed-preview.gif",
        "label": "실패 시안 · 초기 맨손 펀치",
        "alt": "실패 시안 · 초기 맨손 펀치",
        "caption": "준비한 팔과 때리는 팔이 어긋나고, 팔이 망토를 관통했던 초기 맨손 동작.",
        "width": 660,
        "height": 420,
        "format": "landscape",
        "pixel": true,
        "neutralMatte": true
      },
      {
        "id": "punch62-windup-preview",
        "src": "assets/development/punch62-windup-preview.gif",
        "label": "수정 전 · 머리 쪽으로 모이는 주먹",
        "alt": "수정 전 · 머리 쪽으로 모이는 주먹",
        "caption": "몸통을 비틀었지만 주먹을 모으는 위치가 의도와 달라 다시 수정한 후보.",
        "width": 552,
        "height": 420,
        "format": "landscape",
        "pixel": true,
        "neutralMatte": true
      },
      {
        "id": "punch63-revised-preview",
        "src": "assets/development/punch63-revised-preview.gif",
        "label": "수정 후보 · 옆구리에서 이어지는 크로스",
        "alt": "수정 후보 · 옆구리에서 이어지는 크로스",
        "caption": "주먹을 몸 쪽으로 당기도록 고친 당시 비교안. 공격 범위와 대기 자세 연결은 계속 검토했습니다.",
        "width": 552,
        "height": 420,
        "format": "landscape",
        "pixel": true,
        "neutralMatte": true
      },
      {
        "id": "comfy-proportions",
        "src": "assets/development/aden-comfy-proportions.png",
        "label": "ComfyUI 비율 시안 · 기본형, 짧은 망토, 긴 망토",
        "alt": "흰 가면과 붉은 후드를 유지한 아덴 비율 시안 세 가지",
        "caption": "긴 망토는 길고 날카로운 외곽이 두드러졌습니다. 원본에는 160px·96px 크기 비교가 있습니다.",
        "previewSrc": "assets/compact/aden-comfy-proportions-preview.jpg",
        "width": 1152,
        "height": 570,
        "format": "landscape"
      }
    ]
  },
  "level": {
    "mode": "gallery",
    "images": [
      {
        "id": "map-mixed-original",
        "src": "assets/development/map-mixed-original-1017.webp",
        "label": "실패 시안 · 이미지로 만든 초기 맵",
        "alt": "처음의 한 장 맵",
        "caption": "GPT로 제작했던 초기 맵 이미지. 이후 실제 플레이 공간을 만드는 방식부터 바꿨습니다.",
        "width": 1728,
        "height": 910,
        "format": "landscape"
      },
      {
        "id": "tile-trial",
        "src": "assets/evidence/terrain-review.webp",
        "label": "실패 시안 · 재질과 접점이 어색한 타일",
        "alt": "어두운 단색 벽과 얇은 발판으로 구성된 타일 검토 화면",
        "caption": "발판 윗면은 불분명하고 지형은 단조롭게 반복됐습니다. 어두운 분위기만 맞추는 대신, 밟는 면과 재질 연결부터 다시 확인하도록 기준을 바꿨습니다."
      },
      {
        "id": "exhibit",
        "src": "assets/hue-evidence/foreground-runtime-01.png",
        "label": "완성한 전시 맵 · 게임 스크린샷",
        "alt": "식물과 가지가 앞쪽에 놓인 전시판 시작 구간의 게임 스크린샷",
        "caption": "전시 일정에 맞춰 맵의 도트를 직접 작업하고, GPT에 요청한 타일셋을 활용해 전시용 공간을 완성했습니다.",
        "previewSrc": "assets/compact/exhibition-map-preview.jpg"
      },
      {
        "id": "start",
        "src": "assets/hue-original/level-beta-start.jpg",
        "label": "베타 시험 공간 · 게임 스크린샷",
        "caption": "Claude가 구현한 시험 공간에서 실제 이동과 발판 간격을 확인하며, 설계가 플레이로 이어지는지 다듬고 있습니다.",
        "alt": "회색 지형과 파란 발판이 놓인 베타 시작방의 게임 스크린샷",
        "width": 1280,
        "height": 720,
        "period": "2026-11-16 이후 시험 씬",
        "source": "2_A01_시작방.jpg"
      },
      {
        "id": "fern",
        "src": "assets/hue-evidence/foreground-fern-native.png",
        "label": "식물 모듈",
        "caption": "맵 안에 독립적으로 배치하는 투명 전경 원본.",
        "alt": "독립 식물 전경 모듈",
        "checker": true
      },
      {
        "id": "branch",
        "src": "assets/hue-evidence/foreground-branch-native.png",
        "label": "가지 모듈",
        "caption": "전체 화면 테두리 대신 장소마다 배치하는 전경 조각.",
        "alt": "독립 가지 전경 모듈",
        "checker": true
      },
      {
        "id": "map",
        "src": "assets/hue-original/level-beta-map.png",
        "label": "베타 입구 동선 · 설계도 발췌",
        "alt": "Claude가 구체화한 후속 베타의 방 연결과 지형 배치",
        "caption": "입구에서 첫 구간으로 이어지는 부분입니다. 전체 설계도는 확대해서 볼 수 있습니다.",
        "format": "landscape",
        "previewSrc": "assets/compact/beta-route-preview.jpg",
        "width": 1200,
        "height": 586
      },
      {
        "id": "codex-forest-blueprint",
        "src": "assets/development/codex-forest-blueprint.png",
        "label": "초기 설계 · 숲의 능력·보상 연결",
        "caption": "초기에는 숲을 중심으로 능력 획득과 보상, 능력으로 열리는 길을 한눈에 볼 수 있는 설계도를 Codex에 요청했습니다.",
        "alt": "능력 획득 구간과 선택 보상, 방 연결을 표시한 초기 숲 설계도",
        "width": 950,
        "height": 676,
        "format": "landscape",
        "previewSrc": "assets/compact/forest-route-preview.jpg"
      },
      {
        "id": "codex-root-blueprint",
        "src": "assets/development/codex-root-blueprint.png",
        "label": "설계 제안 · 시작부 스케치에서 확장한 방 배치",
        "caption": "제가 잡은 시작부 스케치를 바탕으로 Codex와 보상으로 열리는 길과 되돌아오는 길을 정리했습니다.",
        "alt": "시작부 스케치와 탐험·전투 갈림길, 귀환 경로를 정리한 지하 뿌리 배치 제안",
        "width": 950,
        "height": 457,
        "format": "landscape",
        "previewSrc": "assets/compact/root-route-preview.jpg"
      },
      {
        "id": "plan",
        "src": "assets/process/early-lean-canvas.png",
        "label": "처음 작성한 린캔버스",
        "alt": "탐험과 도전, 핸드 드로잉 아트를 정리한 휴포리아 초기 린캔버스",
        "caption": "처음 기대한 플레이 경험과 아트 방향을 적은 기획 출발점.",
        "format": "landscape",
        "previewSrc": "assets/compact/lean-canvas-preview.jpg",
        "width": 1000,
        "height": 579
      },
      {
        "id": "red",
        "src": "assets/hue-original/red-wall-runtime.jpg",
        "label": "RED로 벽을 연 순간",
        "caption": "RED로 붉은 벽을 부수고 지나갈 길을 연 게임 스크린샷.",
        "alt": "붉은 벽을 부순 주인공과 RED 효과가 보이는 게임 스크린샷",
        "width": 1920,
        "height": 1080,
        "period": "2026-11-11",
        "source": "32_red_wall_ok.jpg",
        "previewSrc": "assets/compact/red-wall-preview.jpg"
      },
      {
        "id": "heal",
        "src": "assets/hue-original/heart-heal-runtime.jpg",
        "label": "심장을 써서 회복",
        "caption": "회복 직후 체력은 차고 심장 게이지는 비워집니다.",
        "alt": "회복 후 체력이 차고 심장 게이지가 0/10이 된 게임 스크린샷",
        "width": 1920,
        "height": 1080,
        "period": "2026-11-11",
        "source": "38_hp_in_mid.jpg",
        "previewSrc": "assets/compact/heart-heal-preview.jpg"
      },
      {
        "id": "ability-plan",
        "src": "assets/hue-original/ability-progression-plan.png",
        "label": "능력 습득 기획도",
        "caption": "획득 방향은 확정, 세부 동선·연출·시간은 기획 제안입니다. 시간은 실제 플레이 측정값이 아닙니다.",
        "alt": "이단점프와 활공 획득을 구역 진행과 연결한 기획표",
        "width": 1900,
        "height": 980,
        "period": "2026-11-15",
        "source": "4_능력습득_진행표.png"
      },
      {
        "id": "original",
        "src": "assets/hue-original/backdrop-original.png",
        "label": "유지한 원화 원경",
        "caption": "원화 배경과 도트 캐릭터·지형을 함께 사용한 장면. 이 표현을 유지했습니다.",
        "alt": "원화 원경과 도트 캐릭터·지형을 함께 사용한 게임 스크린샷",
        "width": 1920,
        "height": 1080,
        "period": "2026-11-11",
        "source": "1-1_원화그대로.png"
      },
      {
        "id": "pixel",
        "src": "assets/hue-original/backdrop-pixel.png",
        "label": "비교한 픽셀 원경",
        "caption": "같은 장소에서 원경만 픽셀로 바꾸어 차이를 살폈습니다.",
        "alt": "같은 장소의 원경만 픽셀 표현으로 바꾼 게임 스크린샷",
        "width": 1920,
        "height": 1080,
        "period": "2026-11-11",
        "source": "1-2_픽셀로변환.png"
      },
      {
        "id": "colour",
        "src": "assets/archive-evidence/colour-concepts.png",
        "label": "이전 컨셉과 새 색감",
        "alt": "회갈색 중심의 이전 인물 컨셉과 재질별 색·명암을 살린 새 컨셉 비교",
        "caption": "어두운 분위기 속에서도 돌·천·가죽의 색과 명암이 읽히도록 새 컨셉의 방향을 잡았습니다.",
        "zoom": true
      },
      {
        "id": "pose",
        "src": "assets/archive-evidence/ready-pose-theb.png",
        "label": "작업의 대상을 함께 구성하기",
        "alt": "망치를 든 테브의 기존 자세와 작업대·고정 부품을 갖춘 준비 자세 비교",
        "caption": "망치만 든 자세에서, 작업대 위의 부품을 향해 움직일 수 있는 준비 자세로 바꿨습니다.",
        "pixel": true
      },
      {
        "id": "history-root-failed",
        "pixel": true,
        "label": "실패 시안 · 뿌리 타일 조립",
        "alt": "어두운 뿌리 무늬가 천장, 벽, 발판 윗면에 같은 간격으로 반복된 시험 방",
        "caption": "다음에 뛰어오를 발판과 뒤쪽 벽이 같은 무늬로 보였습니다.",
        "src": "assets/terrain-case/history-root-failed.webp"
      },
      {
        "id": "history-exhibition-stage",
        "pixel": true,
        "label": "전시판 제작 당시 · 게임 스크린샷",
        "alt": "붉은 망토의 플레이어 왼쪽에 작은 암반 발판 세 개가 있고, 오른쪽 단차 아래로 뿌리가 뻗은 장면",
        "caption": "작은 암반 세 개의 밝은 윗면을 따라 점프할 길이 보입니다. 오른쪽 뿌리는 단차 아래로 지나갑니다.",
        "src": "assets/terrain-case/history-exhibition-stage.webp"
      },
      {
        "id": "history-tile-seams",
        "pixel": true,
        "label": "동굴 타일 · 이음새 수정 전후",
        "alt": "동굴 발판의 밝은 윗선에 일정 간격으로 찍힌 점이 아래 수정본에서 사라진 모습",
        "caption": "위 시안은 바닥을 늘리자 32픽셀마다 어두운 점이 생겼습니다. 아래 수정본은 윗선과 바위 무늬가 칸을 넘어 이어집니다.",
        "src": "assets/terrain-case/history-tile-seams.webp"
      },
      {
        "id": "current-material-test",
        "pixel": true,
        "label": "베타 타일 검토 · 석축과 흙",
        "alt": "왼쪽의 반듯한 회색 벽돌과 오른쪽 플레이어가 선 울퉁불퉁한 흙 단면",
        "caption": "왼쪽 석축은 제외했고, 오른쪽 흙은 첫 구역에 남겼습니다.",
        "src": "assets/terrain-case/current-material-test.webp"
      },
      {
        "id": "current-room-studies",
        "pixel": true,
        "label": "조립 시안 · 고철 비탈과 빈 줄기",
        "alt": "두 방에서 플레이어 발밑의 재질을 비교한 모습. 왼쪽은 철판이 묻힌 흙, 오른쪽은 가로로 갈라진 속나무",
        "caption": "왼쪽은 흙 밖으로 드러난 철판의 깊이, 오른쪽은 발밑을 따라 이어지는 나뭇결을 검토하는 장면입니다.",
        "src": "assets/terrain-case/current-room-studies.webp"
      },
      {
        "id": "current-props",
        "pixel": true,
        "label": "환경 소품 도트 · 작업 종과 버려진 물건",
        "alt": "나무틀에 걸린 작업 종, 깨진 종 조각, 낡은 냄비와 부러진 수레바퀴",
        "caption": "작업 종의 또렷한 윤곽은 새 지형의 그림체를 잡는 기준으로 삼았습니다. 종 조각, 냄비, 수레바퀴는 바닥에 흩어질 소품의 도트 시안입니다.",
        "src": "assets/terrain-case/current-props.webp"
      }
    ],
    "initial": "map-mixed-original",
    "label": "초기 실패부터 전시 맵·후속 베타 설계까지"
  },
  "space": {
    "mode": "gallery",
    "images": [
      {
        "id": "candidate-20",
        "src": "assets/development/comma-candidate-20.png",
        "label": "과제·점수·청결도를 넣은 작업실",
        "alt": "과제·점수·청결도를 넣은 작업실 · comma, 게임 기획 과정의 이미지 시안",
        "caption": "할 일·청결도·점수·시간을 함께 표시한 초기 시각화.",
        "width": 2816,
        "height": 1536,
        "format": "landscape"
      },
      {
        "id": "candidate-19",
        "src": "assets/development/comma-candidate-19.png",
        "label": "여백 게이지를 시험한 방",
        "alt": "여백 게이지를 시험한 방 · comma, 게임 기획 과정의 이미지 시안",
        "caption": "여백 게이지와 정리 행동을 함께 시험한 초기 방 시안.",
        "width": 2816,
        "height": 1536,
        "format": "landscape"
      },
      {
        "id": "candidate-18",
        "src": "assets/development/comma-candidate-18.png",
        "label": "밝은 작업실 변형",
        "alt": "밝은 작업실 변형 · comma, 게임 기획 과정의 이미지 시안",
        "caption": "작업실을 밝게 바꾸며 공간과 정보의 비중을 탐색한 시안.",
        "width": 2816,
        "height": 1536,
        "format": "landscape"
      },
      {
        "id": "candidate-9",
        "src": "assets/development/comma-candidate-9.png",
        "label": "초기 과밀 반지하 시안",
        "alt": "초기 과밀 반지하 시안 · comma, 게임 기획 과정의 이미지 시안",
        "caption": "초기 기획서에 담은 과밀한 반지하 방.",
        "width": 1672,
        "height": 941,
        "format": "landscape"
      },
      {
        "id": "candidate-16",
        "src": "assets/development/comma-candidate-16.png",
        "label": "초기 배치 시안 · 접힌 옷과 고르게 놓인 책",
        "alt": "옷과 책이 규칙적으로 정돈된 반지하 초기 탐색 이미지",
        "caption": "물건이 많은데도 가지런히 배열돼 있어 정리 전 방의 상태가 약하게 보입니다.",
        "width": 1659,
        "height": 948,
        "format": "landscape",
        "previewSrc": "assets/compact/comma-candidate-16-preview.jpg"
      },
      {
        "id": "candidate-10",
        "src": "assets/development/comma-candidate-10.png",
        "label": "다음 배치 방향 · 생활 물건을 불규칙하게",
        "alt": "옷가지와 생활 물건이 바닥에 흩어진 반지하 탐색 시안",
        "caption": "별도의 공간 시안으로, 옷과 생활 물건을 흐트러뜨려 정리할 곳이 먼저 보이는지 비교했습니다.",
        "width": 1672,
        "height": 941,
        "format": "landscape",
        "previewSrc": "assets/compact/comma-candidate-10-preview.jpg"
      },
      {
        "id": "messy",
        "src": "assets/comma-original/messy.png",
        "label": "0% · 과밀",
        "caption": "바닥과 가구 위에 물건이 쌓여 통로와 생활 공간이 좁아진 방.",
        "alt": "물건이 바닥과 가구 위에 쌓인 comma, 공간 시안",
        "width": 1672,
        "height": 941,
        "previewSrc": "assets/compact/comma-messy-preview.jpg"
      },
      {
        "id": "mid",
        "src": "assets/comma-original/mid.png",
        "label": "65% · 적정 여백",
        "caption": "침대와 책상, 생활 소품은 남기고 바닥과 통로에 여유를 둔 방.",
        "alt": "생활에 필요한 가구를 남기고 여백을 확보한 comma, 공간 시안",
        "width": 1672,
        "height": 941,
        "previewSrc": "assets/compact/comma-mid-preview.jpg"
      },
      {
        "id": "empty",
        "src": "assets/comma-original/empty.png",
        "label": "98% · 과잉 비움",
        "caption": "생활 소품까지 덜어낸 방과 비교하며, 많이 비우는 것만으로 목표를 삼지 않도록 했습니다.",
        "alt": "생활 소품까지 대부분 비워낸 comma, 공간 시안",
        "width": 1672,
        "height": 941,
        "previewSrc": "assets/compact/comma-empty-preview.jpg"
      },
      {
        "id": "luxury_messy",
        "src": "assets/comma-original/luxury_messy.png",
        "label": "넓은 방 · 과밀",
        "alt": "넓은 방 · 과밀 · comma, 게임 기획 과정의 이미지 시안",
        "caption": "많은 물건이 생활 동선을 가리는 상태.",
        "width": 1672,
        "height": 941,
        "format": "landscape"
      },
      {
        "id": "luxury_clean",
        "src": "assets/comma-original/luxury_clean.png",
        "label": "넓은 방 · 적정 여백",
        "alt": "넓은 방 · 적정 여백 · comma, 게임 기획 과정의 이미지 시안",
        "caption": "가구와 생활 소품을 남기고 통로를 확보한 상태.",
        "width": 1672,
        "height": 941,
        "format": "landscape"
      },
      {
        "id": "luxury_empty",
        "src": "assets/comma-original/luxury_empty.png",
        "label": "넓은 방 · 과잉 비움",
        "alt": "넓은 방 · 과잉 비움 · comma, 게임 기획 과정의 이미지 시안",
        "caption": "필요한 생활 흔적까지 사라지는 상태를 비교했습니다.",
        "width": 1672,
        "height": 941,
        "format": "landscape"
      },
      {
        "id": "candidate-8",
        "src": "assets/development/comma-candidate-8.png",
        "label": "표현 탐색 예시 · 실사풍 반지하",
        "alt": "손과 천의 재질, 조명이 사진처럼 표현된 초기 정리 화면",
        "caption": "실사에 가까운 재질과 조명 때문에 표현 방향을 다시 잡았습니다.",
        "width": 1672,
        "height": 941,
        "format": "landscape",
        "previewSrc": "assets/compact/comma-candidate-8-preview.jpg"
      },
      {
        "id": "candidate-1",
        "src": "assets/development/comma-candidate-1.png",
        "label": "구간·도구 선택을 더한 시안",
        "alt": "구간·도구 선택을 더한 시안 · comma, 게임 기획 과정의 이미지 시안",
        "caption": "게이지의 구간과 슬롯 구성을 더하며 정보량을 탐색한 화면.",
        "width": 1672,
        "height": 941,
        "format": "landscape",
        "previewSrc": "assets/compact/comma-candidate-1-preview.jpg"
      },
      {
        "id": "hud",
        "src": "assets/comma-original/hud.png",
        "label": "정리하는 화면 시안",
        "caption": "방을 중심에 두고, 위쪽 여백 게이지와 아래쪽 도구 슬롯을 나눈 시안.",
        "alt": "65% 여백 게이지와 천을 든 손, cloth 선택을 배치한 comma, HUD 시안",
        "width": 1672,
        "height": 941,
        "previewSrc": "assets/compact/comma-hud-preview.jpg"
      },
      {
        "id": "inventory_detail",
        "src": "assets/comma-original/inventory_detail.png",
        "label": "도구 상세 시안",
        "caption": "도구의 형태·상태·분류를 모은 상세 화면 시안.",
        "alt": "선택한 브러시의 형태와 상태를 보여 주는 도구 상세 시안",
        "width": 1672,
        "height": 941
      },
      {
        "id": "cover",
        "src": "assets/comma-original/cover.png",
        "label": "시작 화면 시안",
        "caption": "생활 물건과 창의 빛을 담은 시작 화면 시안.",
        "alt": "생활 물건이 놓인 방을 배경으로 한 comma, 시작 화면 시안",
        "width": 1672,
        "height": 941
      },
      {
        "id": "inventory_dark",
        "src": "assets/comma-original/inventory_dark.png",
        "label": "목록·가방 중심의 시안",
        "alt": "목록·가방 중심의 시안 · comma, 게임 기획 과정의 이미지 시안",
        "caption": "가방·도구 목록·글 설명을 나눠 배치한 인벤토리 탐색안.",
        "width": 1672,
        "height": 941,
        "format": "landscape"
      },
      {
        "id": "inventory_warm",
        "src": "assets/comma-original/inventory_warm.png",
        "label": "밝은 배경으로 바꾼 시안",
        "alt": "밝은 배경으로 바꾼 시안 · comma, 게임 기획 과정의 이미지 시안",
        "caption": "목록과 가방의 구성을 유지하며 배경과 분위기를 바꾼 탐색안.",
        "width": 1672,
        "height": 941,
        "format": "landscape"
      }
    ],
    "initial": "candidate-20",
    "storageGroup": "comma-space",
    "label": "여백의 차이를 담은 공간 시안",
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
  "camera": {
    "mode": "camera",
    "label": "카메라 시야를 비교한 게임 스크린샷",
    "initial": "01",
    "images": [
      {
        "id": "01",
        "label": "벽과 발판",
        "alt": "주인공 오른쪽의 벽과 위쪽 발판이 함께 보이는 게임 스크린샷",
        "caption": "오른쪽 벽과 위쪽 발판이 한 화면에 남는 범위를 비교했습니다."
      },
      {
        "id": "04",
        "label": "낮은 천장",
        "alt": "낮은 천장 아래 주인공과 이웃 발판이 보이는 게임 스크린샷",
        "caption": "천장이 낮은 곳에서도 다음 발판을 볼 여유를 살폈습니다."
      },
      {
        "id": "06",
        "label": "건너편 지형",
        "alt": "낮은 길에 선 주인공과 건너편 지형이 보이는 게임 스크린샷",
        "caption": "건너편 지형을 미리 보고 이동할 수 있는지 살폈습니다."
      }
    ],
    "supportImages": [
      {
        "id": "ui-comfy-excess",
        "src": "assets/development/ui-comfy-bossbar-trial.png",
        "label": "실패 시안 · 장식이 과한 ComfyUI 결과",
        "alt": "ComfyUI 초기 시험작",
        "caption": "초기 UI 생성 결과에는 장식과 금속 명암이 과하게 들어갔습니다. 필요한 테두리가 읽히도록 그라데이션과 복잡한 무늬를 줄이는 방향으로 다시 지시했습니다.",
        "width": 1536,
        "height": 640,
        "format": "landscape",
        "previewSrc": "assets/compact/bossbar-trial-preview.png"
      },
      {
        "id": "ui-midjourney-sheet",
        "src": "assets/development/ui-midjourney-bars-original.webp",
        "label": "Midjourney 체력바 후보",
        "alt": "Midjourney 체력바 후보",
        "caption": "다른 방식으로 만든 여러 막대 시안을 비교하고, 양끝에 구슬이 있는 형태를 보스 체력바로 골랐습니다.",
        "width": 2000,
        "height": 2000,
        "format": "portrait"
      },
      {
        "id": "ui-midjourney-selected",
        "src": "assets/development/ui-midjourney-bossbar-selected.png",
        "label": "채택한 보스 체력바 · 초기 다크 판타지 UI",
        "alt": "당시 선택한 보스 체력바",
        "caption": "세부 장식의 보는 맛을 살리면서도 막대의 형태가 읽히는 안을 보스 체력바로 골랐습니다.",
        "width": 1839,
        "height": 153,
        "format": "landscape"
      },
      {
        "id": "ui-gpt-unselected-bossbar",
        "src": "assets/development/ui-gpt-bossbar-unselected.png",
        "label": "채택하지 않은 GPT 보스바",
        "alt": "채택하지 않은 GPT 보스바",
        "caption": "GPT UI 묶음에서는 메뉴 장식과 일부 아이콘·틀을 골라 적용했습니다. 보스 체력바와 기존 화면보다 무거워진 요소는 빼고, 이미 잘 맞는 부분은 유지했습니다.",
        "width": 2172,
        "height": 724,
        "format": "landscape"
      },
      {
        "id": "before",
        "src": "assets/hue-original/hud-before.jpg",
        "label": "HUD 확대 전",
        "caption": "플레이할 때 읽기 어려웠던 왼쪽 위 체력·심장과 오른쪽 아래 스킬 표시.",
        "alt": "체력·심장과 스킬 표시를 키우기 전의 게임 스크린샷",
        "width": 1920,
        "height": 1080,
        "period": "2026-11-11",
        "source": "15_tutorial_start.jpg",
        "previewSrc": "assets/compact/hud-before-preview.jpg"
      },
      {
        "id": "after",
        "src": "assets/hue-original/hud-after.jpg",
        "label": "HUD 확대 후",
        "caption": "체력·심장 묶음과 스킬 칸을 키워 같은 장면에서 크기 차이를 살폈습니다.",
        "alt": "체력·심장과 스킬 표시를 키운 뒤의 게임 스크린샷",
        "width": 1920,
        "height": 1080,
        "period": "2026-11-11",
        "source": "15_tutorial_start.jpg",
        "previewSrc": "assets/compact/hud-after-preview.jpg"
      }
    ]
  },
  "method": {
    "mode": "article",
    "images": [
      {
        "id": "creature-actual",
        "src": "assets/archive-evidence/creature-actual.jpg",
        "format": "landscape",
        "width": 1080,
        "height": 540,
        "label": "긴등지렁이 · 유물 영향 기본형 시안",
        "alt": "몸 안쪽에서 은은한 초록빛이 나는 긴등지렁이 컨셉아트",
        "caption": "몸 안쪽 빛에 유물의 흔적을 담았습니다."
      },
      {
        "id": "creature-perceived",
        "src": "assets/archive-evidence/creature-perceived.jpg",
        "format": "landscape",
        "width": 1080,
        "height": 360,
        "label": "긴등지렁이 · 아덴 시점 컨셉 시안",
        "alt": "초록빛을 유지하고 머리의 각질과 굵은 마디가 강조된 긴등지렁이 컨셉아트",
        "caption": "같은 초록빛을 남기고 머리와 마디의 형태를 과장했습니다."
      },
      {
        "id": "exhibit-golem",
        "src": "assets/archive-evidence/exhibit-golem-sheet.png",
        "format": "landscape",
        "pixel": true,
        "width": 768,
        "height": 464,
        "label": "졸업 전시판 · 돌 골렘",
        "alt": "전시판 골렘이 두 팔을 올린 뒤 바닥을 내리치는 여섯 자세",
        "caption": "두 팔을 들어 바닥을 내리치는 동작. 전시판의 주요 프레임."
      },
      {
        "id": "beta-pack-mole",
        "src": "assets/archive-evidence/beta-pack-mole-sheet.png",
        "format": "landscape",
        "pixel": true,
        "width": 768,
        "height": 464,
        "label": "출시판 베타 · 짐틀두더지",
        "alt": "베타 짐틀두더지가 흙을 뚫고 솟아오른 뒤 바닥에 내려앉는 여섯 프레임",
        "caption": "잠복 끝에 흙을 가르고 솟아올라 착지하는 동작. 베타의 주요 프레임."
      },
      {
        "id": "pillbug-roll-applied",
        "src": "assets/archive-evidence/pillbug-roll-applied-sheet.png",
        "format": "landscape",
        "pixel": true,
        "width": 768,
        "height": 464,
        "label": "베타 적용 · 몸을 말아 구르기",
        "alt": "돌등쥐며느리가 몸을 말기 시작해 회전하며 돌진하고 다시 펴는 프레임",
        "caption": "몸 말기 → 회전 → 구르기 → 몸 펴기."
      },
      {
        "id": "pillbug-shove-rejected",
        "src": "assets/archive-evidence/pillbug-shove-failed-sheet.png",
        "format": "landscape",
        "pixel": true,
        "width": 768,
        "height": 464,
        "label": "실패 시안 · 몸을 펴서 밀기",
        "alt": "돌등쥐며느리가 웅크렸다 펴는 데 그치는 밀기 시안의 프레임",
        "caption": "몸을 펴는 동작이 공격보다 대기 자세로 돌아오는 모습에 가까웠습니다."
      }
    ]
  },
  "intro": {
    "mode": "gallery",
    "initial": "exhibit",
    "images": [
      {
        "id": "exhibit",
        "src": "assets/hue-evidence/foreground-runtime-01.png",
        "label": "졸업 전시판 · 게임 스크린샷",
        "alt": "식물과 가지가 앞쪽에 놓인 전시판 시작 구간의 게임 스크린샷",
        "caption": "붉은 망토의 플레이어 캐릭터가 거목 아래 지하를 탐험하는 장면.",
        "previewSrc": "assets/compact/exhibition-map-preview.jpg"
      }
    ]
  }
});
const chapterSets={"huephoria":["intro","aden","level","camera"],"comma":["space"],"archive":["method"]};
for(const world of D.worlds) world.pages=chapterSets[world.id];
Object.assign(D.worlds.find(w=>w.id==="archive"),{title:"휴포리아 · 전시 이후 적 설계",line:"휴포리아의 유물과 주인공의 시점을 적의 외형과 행동에 담은 과정"});
window.RECORD_CONNECTIONS={"method":[["huephoria","intro","휴포리아 게임 소개"]]};
})();
