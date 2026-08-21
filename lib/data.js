/* ── 디자인 시스템 토큰 ───────────────────────────────────── */
export const tokens = {
  primary: "#3B82F6",
  text: "#1F2937",
  sub: "#6B7280",
  bg: "#FFFFFF",
  surface: "#F9FAFB",
  border: "#E5E7EB",
  babyblue: "#EAF3FD",
  mint: "#E4F7EF",
  ivory: "#FFFBF0",
};

export const CONTACT_EMAIL = "hello@mommilliliter.com"; // 자리표시자 · 실제 운영 이메일로 교체 필요

/* ── 신뢰도 등급 ──────────────────────────────────────────── */
export const CONFIDENCE_BADGE = {
  official: { label: "공식 확인", color: "#15803D", bg: "#DCFCE7" },
  community: { label: "커뮤니티 참고", color: "#B45309", bg: "#FEF3E2" },
  estimated: { label: "미확인·임시값", color: "#B91C1C", bg: "#FEE2E2" },
  unverified: { label: "비율 확인 불가", color: "#7C2D12", bg: "#FFE4D6" },
};

export const MIX_METHOD_TEXT = {
  domestic: "물을 먼저 담고 분유를 녹여 표시된 총 조유량(물+분유)에 맞추는 '총량 기준' 방식이 흔해요.",
  imported: "물을 정해진 양만큼 먼저 담고 분유를 녹이며, 최종량을 별도로 맞추지 않는 '물 기준 추가식'이 흔해요.",
};

function makeStages(entries, meta) {
  return entries.map((e) => ({ ...e, ...meta }));
}

const AGE_3 = [
  { stage: "1단계", ageRange: "0~6개월" },
  { stage: "2단계", ageRange: "6~12개월" },
  { stage: "3단계", ageRange: "12개월~" },
];
const AGE_2 = [
  { stage: "1단계", ageRange: "0~6개월" },
  { stage: "2단계", ageRange: "6개월~" },
];
const AGE_4 = [
  { stage: "1단계", ageRange: "0~6개월" },
  { stage: "2단계", ageRange: "6~12개월" },
  { stage: "3단계", ageRange: "12~24개월" },
  { stage: "4단계", ageRange: "24개월~" },
];

const estimatedDomestic = { mlPerScoop: 40, gramPerScoop: null, confidence: "estimated", source: "공식 확인 전 · 국내 평균 관행(총량 40ml당 1스푼) 임시 적용", mixMethod: "domestic" };
const estimatedImported = { mlPerScoop: 30, gramPerScoop: null, confidence: "estimated", source: "공식 확인 전 · 수입 분유 일반 관행(물 30ml당 1스푼) 임시 적용", mixMethod: "imported" };

/* ── 브랜드 · 제품 DB ───────────────────────────────────── */
export const BRANDS = [
  {
    id: "maeil",
    name: "매일유업",
    origin: "국산",
    intro: "국내 조제분유 시장 점유율 1위 브랜드로, 앱솔루트 라인업을 중심으로 다양한 특수 분유까지 폭넓게 생산해요.",
    products: [
      { id: "absolute-myeongjak", name: "앱솔루트 명작", note: "검색 결과상 3단계까지만 확인됨 (4단계 근거 없어 정정)", stages: makeStages(AGE_3, { mlPerScoop: 20, gramPerScoop: null, confidence: "official", source: "매일유업 공식몰(maeili.com) 스푼 안내", mixMethod: "domestic" }) },
      { id: "absolute-sensitive", name: "앱솔루트 센서티브", stages: makeStages(AGE_3, { mlPerScoop: 20, gramPerScoop: null, confidence: "official", source: "매일유업 공식몰(maeili.com) 스푼 안내", mixMethod: "domestic" }) },
      { id: "absolute-organic", name: "앱솔루트 유기농궁", note: "검색 결과상 3단계까지만 확인됨 (4단계 근거 없어 정정)", stages: makeStages(AGE_3, { mlPerScoop: 20, gramPerScoop: null, confidence: "official", source: "매일유업 공식몰(maeili.com) 스푼 안내", mixMethod: "domestic" }) },
      { id: "absolute-goat", name: "앱솔루트 산양", stages: makeStages(AGE_3, { mlPerScoop: 20, gramPerScoop: null, confidence: "official", source: "매일유업 공식몰(maeili.com) 스푼 안내", mixMethod: "domestic" }) },
      { id: "absolute-ha", name: "앱솔루트 HA", stages: makeStages(AGE_2, { mlPerScoop: 40, gramPerScoop: null, confidence: "official", source: "매일유업 공식몰(maeili.com) 스푼 안내", mixMethod: "domestic" }) },
    ],
  },
  {
    id: "namyang",
    name: "남양유업",
    origin: "국산",
    intro: "임페리얼XO를 대표 라인으로 하는 국내 대형 유업 브랜드로, 상황별 특수 조제유도 함께 갖추고 있어요.",
    products: [
      { id: "imperial-xo", name: "임페리얼XO", note: "커뮤니티 후기 기준 4단계(12~24개월) 존재 언급 확인", stages: makeStages(AGE_4, { mlPerScoop: 40, gramPerScoop: null, confidence: "community", source: "육아 커뮤니티/블로그 언급 (공식 미확인)", mixMethod: "domestic" }) },
      { id: "imperial-dream-xo", name: "임페리얼드림XO", note: "단계 수 미확인 · 국내 통상 3단계로 보수 적용", stages: makeStages(AGE_3, estimatedDomestic) },
      { id: "im-mother", name: "아이엠마더", stages: makeStages(AGE_3, estimatedDomestic) },
      { id: "im-mother-comfort", name: "아이엠마더 컴포트케어", stages: makeStages(AGE_3, estimatedDomestic) },
      { id: "agisarangsu", name: "아기사랑수 어드밴스", stages: makeStages(AGE_3, estimatedDomestic) },
    ],
  },
  {
    id: "pasteur",
    name: "롯데웰푸드(파스퇴르)",
    origin: "국산",
    intro: "위드맘 시리즈를 중심으로 산모·아기 상황별 맞춤 제품을 선보이는 브랜드예요.",
    products: [
      { id: "withmom", name: "위드맘(엄마의 마음)", note: "단계 수 미확인 · 국내 통상 3단계로 보수 적용", stages: makeStages(AGE_3, { mlPerScoop: 40, gramPerScoop: 5.6, confidence: "community", source: "서드파티 분유 정량 계산기 참고 (공식 미확인)", mixMethod: "domestic" }) },
      { id: "withmom-jewang", name: "위드맘 제왕", note: "단계 수 미확인 · 국내 통상 3단계로 보수 적용", stages: makeStages(AGE_3, { mlPerScoop: 40, gramPerScoop: 5.6, confidence: "community", source: "서드파티 분유 정량 계산기 참고 (공식 미확인)", mixMethod: "domestic" }) },
      { id: "grand-noble", name: "그랑노블", stages: makeStages(AGE_3, estimatedDomestic) },
      { id: "goat-formula", name: "산양분유", stages: makeStages(AGE_3, estimatedDomestic) },
    ],
  },
  {
    id: "ildong",
    name: "일동후디스",
    origin: "국산",
    intro: "산양분유 전문 라인을 강점으로 하는 브랜드로, 로하스 인증 등 원료 관리를 강조해요.",
    products: [
      { id: "premium-goat", name: "프리미엄 산양분유", note: "1~3단계 구성은 쇼핑몰 상품정보 기준 확인됨", stages: makeStages(AGE_3, { ...estimatedDomestic, confidence: "community", source: "다나와 상품정보(단계별 산양유 고형분 표기) 참고 · 스푼 비율은 미확인" }) },
      { id: "goat-toddler", name: "산양유아식", stages: makeStages(AGE_2, estimatedDomestic) },
    ],
  },
  {
    id: "aptamil-kr",
    name: "압타밀 (국내공식)",
    origin: "수입·국내정식",
    intro: "뉴트리시아사우스코리아가 정식 수입·판매하는 국내 공식 라인이에요. Pre 단계 없이 1단계부터 시작하고, 4단계도 없어요.",
    note: "뉴트리시아 공식몰(nutriciastore.co.kr) '한국공식' 카테고리 기준 확인 — Pre·4단계 미판매",
    products: [
      { id: "pronutra-hmo-kr", name: "프로누트라 어드밴스 HMO", note: "국내는 1~3단계만 판매 (Pre·4단계 없음)", stages: makeStages(AGE_3, estimatedImported) },
      { id: "profutura-duo-kr", name: "프로푸트라 듀오어드밴스", note: "국내는 1~3단계만 판매 (Pre·4단계 없음)", stages: makeStages(AGE_3, estimatedImported) },
    ],
  },
  {
    id: "aptamil-import",
    name: "압타밀 (해외직구)",
    origin: "수입·해외직구",
    intro: "독일·유럽 내수용으로, 개인 직구 형태로 국내에 들어와요. 신생아용 'Pre' 단계가 별도로 있어요. 국내 정식 유통이 아니라서 리콜 등 이슈 시 국내 공식 채널 지원을 받기 어려울 수 있어요.",
    note: "독일내수/유럽내수 상품 페이지 기준 (Pre 단계 확인, 정식 수입 아님)",
    products: [
      { id: "pronutra-hmo-import", name: "프로누트라 어드밴스 HMO (Pre~3단계)", stages: makeStages([{ stage: "Pre", ageRange: "0~6개월(신생아용)" }, ...AGE_3], estimatedImported) },
      { id: "profutura-duo-import", name: "프로푸트라 듀오어드밴스 (Pre~3단계)", stages: makeStages([{ stage: "Pre", ageRange: "0~6개월(신생아용)" }, ...AGE_3], estimatedImported) },
    ],
  },
  {
    id: "kabrita",
    name: "카브리타",
    origin: "수입",
    intro: "산양유 기반 수입 분유 브랜드예요.",
    products: [{ id: "kabrita-goat", name: "카브리타 산양분유", stages: makeStages(AGE_3, estimatedImported) }],
  },
  {
    id: "songs",
    name: "쏭스",
    origin: "수입",
    intro: "유기농 인증을 강조하는 수입 분유 브랜드예요.",
    products: [{ id: "songs-organic", name: "쏭스 오가닉", stages: makeStages(AGE_3, estimatedImported) }],
  },
  {
    id: "roobeelac",
    name: "루비락(ROOBEELAC)",
    origin: "수입",
    intro: "덴마크에서 생산되는 수입 분유로, 국내 공식수입원은 ㈜루트비예요. 순한 소화감을 강조하는 골든그램 라인이 대표 제품이에요.",
    note: "㈜루트비 공식몰(rootbe.shop) 기준 1~3단계 확인 · 스푼 비율은 사용자 확인(1스푼=30ml, 공식 사이트 근거)",
    products: [
      {
        id: "golden-gram",
        name: "골든그램",
        stages: makeStages(
          [
            { stage: "1단계", ageRange: "0~6개월" },
            { stage: "2단계", ageRange: "7~12개월" },
            { stage: "3단계", ageRange: "12~36개월" },
          ],
          { mlPerScoop: 30, gramPerScoop: null, confidence: "official", source: "루비락 공식 사이트 기준 (사용자 확인, 1스푼=30ml)", mixMethod: "imported" }
        ),
      },
    ],
  },
];

/* ── 가이드 콘텐츠 (일반적으로 통용되는 육아 정보 수준 · 출처 표기, 전문 의료 조언 아님) ── */
export const GUIDES = [
  {
    slug: "monthly-formula-amount",
    title: "월령별 분유량 가이드",
    desc: "신생아부터 돌 무렵까지, 시기별 분유량과 수유 간격의 대략적인 흐름을 정리했어요.",
    body: [
      "신생아 초기(생후 1주 이내)는 하루 8~12회로 자주 먹이는 시기예요. 위 크기가 아직 작아 1회량은 적지만, 자주 먹이는 것 자체가 정상적인 흐름이에요.",
      "생후 1~3개월에는 1회 수유량이 점차 늘고, 수유 간격은 2~3시간 정도로 자리 잡는 경우가 많아요. 체중 kg당 하루 약 150ml를 기준점으로 참고하되, 아기마다 편차가 큰 값이라는 점을 감안해야 해요.",
      "생후 3~6개월에는 1회 약 100~200ml 범위에서 아기 반응을 보며 조절하는 흐름이 흔하고, 체중 kg당 하루 약 120ml 정도로 기준이 조금씩 낮아지는 경향이 있어요.",
      "생후 5개월 전후로는 이유식 시작 여부에 따라 1회 160~200ml까지 늘어나는 아기도 있어요. 다만 이 수치들은 모두 참고용 출발점이며, 아기가 먹는 시간 간격이 급격히 줄거나 체중 증가가 더딜 때는 소아과 상담을 우선하는 게 좋아요.",
    ],
    sources: [
      { name: "임신육아종합포털 아이사랑", url: "https://www.childcare.go.kr" },
      { name: "인포켓 - 월령별 분유량·수유텀 정리", url: "https://inpoket.com/post/baby-formula-amount-interval/" },
    ],
  },
  {
    slug: "how-to-prepare-formula",
    title: "분유 타는 법",
    desc: "물 온도, 위생, 보관까지 — 분유 조유의 기본 순서를 알려드려요.",
    body: [
      "분유를 타기 전에는 손을 비누로 충분히 씻고, 젖병·젖꼭지는 생후 6개월까지 매번 열탕 소독하는 것이 권장돼요.",
      "물 온도는 세계보건기구(WHO) 기준으로 70도 이상을 권장해요. 크로노박터 사카자키 등 분유에 남아있을 수 있는 균을 줄이기 위한 온도예요. 완전히 끓인 물을 30분 정도 식히면 대략 이 온도에 가까워져요.",
      "제품에 표기된 물·스푼 비율을 그대로 지키는 것이 중요해요. 스푼은 눌러 담지 않고 평평하게 깎아서 계량하고, 진하게 타는 것은 변비나 신장 부담으로 이어질 수 있어 피해야 해요.",
      "다 탄 분유는 먹이기 전 손목 안쪽에 떨어뜨려 온도를 확인하고(미지근한 정도), 상온 2시간·냉장 24시간을 넘기지 않는 것이 일반적인 권장 기준이에요. 아기가 입을 댄 분유는 세균 번식 우려로 1시간 안에 다 먹이거나 버리는 게 안전해요.",
    ],
    sources: [
      { name: "베베스냅 - 분유 타는 법 가이드", url: "https://www.bebesnap.com/ko/blog/formula-preparation-guide-2025-05-20" },
      { name: "CJ온스타일 - 분유 조리법 정리", url: "https://display.cjonstyle.com/nfront/content/info/%EB%B6%84%EC%9C%A0-%EC%A1%B0%EB%A6%AC%EB%B2%95/index.html" },
    ],
  },
  {
    slug: "mixed-feeding",
    title: "혼합수유 가이드",
    desc: "모유와 분유를 함께 먹일 때 알아두면 좋은 방법과 팁을 정리했어요.",
    body: [
      "혼합수유는 모유량이 부족하거나 직장 복귀 등 현실적인 이유로 모유와 분유를 함께 먹이는 방식이에요. 모유를 조금이라도 먹이는 것 자체가 의미 있다는 점이 자주 강조돼요.",
      "방법은 크게 두 가지예요. 모유를 먼저 먹이고 부족한 양만 분유로 보충하는 '보충 수유' 방식, 그리고 시간대를 나눠 낮에는 모유·밤에는 분유처럼 완전히 분리하는 방식이에요. 후자는 양육자의 수유 부담을 줄이는 데 도움이 될 수 있어요.",
      "모유량을 유지하고 싶다면 하루 6회 이상 직접 수유나 유축을 지속하는 것이 도움이 된다고 알려져 있어요. 또한 젖병에 익숙해지면서 젖꼭지를 거부하는 유두혼동이 생길 수 있어, 느린 유속의 젖꼭지를 사용하는 것이 권장돼요.",
      "혼합수유 비율에 정해진 정답은 없고, 아기와 양육자 상황에 맞춰 조절하는 것이 일반적이에요. 모유량 저하나 수유 방식 전환이 고민된다면 소아과나 모유수유 상담 전문가와 함께 조절하는 것을 권해요.",
    ],
    sources: [
      { name: "베베스냅 - 혼합 수유 가이드", url: "https://www.bebesnap.com/ko/blog/mixed-feeding-guide-2025-06-20" },
      { name: "비행테라스 - 모유수유 vs 분유수유 비교", url: "https://baby.tali.kr/breast-vs-formula-feeding" },
    ],
  },
  {
    slug: "formula-refusal",
    title: "분유 거부·트림 대처법",
    desc: "아기가 분유를 거부하거나 자주 게울 때 확인해볼 수 있는 방법들이에요.",
    body: [
      "젖병을 거부하는 이유는 다양해요. 유량이 아기 힘에 비해 너무 느리거나 반대로 너무 빨라 사레가 들 수도 있고, 단순한 졸림이나 감기로 인한 코막힘이 거부처럼 보이기도 해요. 한 번에 여러 요인을 바꾸기보다 유량, 수유 자세, 트림 빈도 등을 하나씩 확인해보는 것이 좋아요.",
      "트림은 수유 중 함께 삼킨 공기를 빼주는 과정이에요. 대표적인 자세는 아기를 세워 안아 턱을 어깨에 걸치고, 한 손으로 엉덩이를 받친 채 다른 손으로 등을 아래에서 위로 부드럽게 쓸어 올리는 방법이에요. 2~3분 시도해도 나오지 않으면 편하게 눕혔다가 10~15분 뒤 다시 시도해도 괜찮아요.",
      "수유 후 소량의 게워냄(위식도역류)은 신생아 상당수가 겪는 흔한 현상으로 알려져 있어요. 다만 분수처럼 멀리 뿜어내는 구토가 반복되거나, 체중 증가가 더디거나, 담즙이 섞인 역류가 있다면 소아과 진료를 받아보는 게 좋아요.",
      "수유 후 15~20분 정도는 아기를 세워 안거나 상체를 살짝 높인 자세로 유지하면 역류 예방에 도움이 된다고 알려져 있어요.",
    ],
    sources: [
      { name: "베베스냅 - 아기 트림 시키는 방법", url: "https://www.bebesnap.com/ko/blog/baby-burping-guide-2025-09-05" },
      { name: "비행테라스 - 트림 방법과 역류 방지 자세", url: "https://baby.tali.kr/baby-burping-techniques" },
      { name: "momq - 젖병 거부 대처법", url: "https://www.momq.co.kr/community/guide/3%EA%B0%9C%EC%9B%94-%EC%95%84%EA%B8%B0-%EC%A0%96%EB%B3%91-%EA%B1%B0%EB%B6%80-%EB%8C%80%EC%B2%98%EB%B2%95" },
    ],
  },
  {
    slug: "choosing-brand",
    title: "분유 브랜드 비교·선택 가이드",
    desc: "일반분유·산양분유 등 종류별 차이와 브랜드 고르는 기준을 정리했어요.",
    body: [
      "국내 분유는 크게 일반(우유 기반) 분유와 산양분유로 나뉘어요. 산양분유는 산양유 고형분 비율이 제품·단계마다 다르게 표기되며, 일반분유와의 우열보다는 아기의 소화 반응·수유 지속성을 보고 선택하는 경우가 많아요.",
      "분유 성분에서 자주 비교되는 요소는 유청단백질과 카제인의 비율, DHA·ARA 같은 불포화지방산 함량이에요. 모유는 유청:카제인 비율이 약 60:40으로 알려져 있고, 이 비율에 가까울수록 소화가 수월하다고 이야기돼요.",
      "특수 분유(저알레르기 HA, 얼리 스타트용, 반역류용 등)는 아기의 특정 상태에 맞춰 처방적으로 사용되는 경우가 많아, 브랜드 이미지만으로 고르기보다 소아과 상담 후 필요에 맞게 선택하는 것이 안전해요.",
      "브랜드를 바꿀 때는 급격한 전환보다 3~7일에 걸쳐 기존 분유와 섞어가며 서서히 바꾸는 방법이 소화 장애를 줄이는 데 도움이 된다고 알려져 있어요.",
    ],
    sources: [
      { name: "베베스냅 - 분유 타는 법(전환 관련)", url: "https://www.bebesnap.com/ko/blog/formula-formula-preparation-guide-2025-06-20" },
      { name: "다나와 쇼핑기획전 - 일반분유 vs 산양분유 비교", url: "https://plan.danawa.com/info/?nPlanSeq=3872" },
    ],
  },
  {
    slug: "faq",
    title: "자주 묻는 질문 (FAQ)",
    desc: "분유 수유와 관련해 부모님들이 가장 많이 궁금해하는 질문을 모았어요.",
    body: [
      "Q. 분유를 진하게 타면 더 든든하게 먹지 않을까요? — 아니에요. 농도를 임의로 진하게 타면 아기 신장에 부담이 가고 탈수·변비로 이어질 수 있어요. 양을 늘리고 싶다면 농도는 그대로 두고 총량만 늘리는 것이 안전해요.",
      "Q. 다 탄 분유, 얼마나 보관할 수 있나요? — 상온에서는 2시간 이내, 냉장 보관은 24시간 이내가 일반적인 기준이에요. 아기가 입을 댄 분유는 침으로 인한 세균 번식 우려가 있어 1시간 안에 다 먹이거나 버리는 것이 권장돼요.",
      "Q. 분유를 전자레인지로 데워도 되나요? — 온도가 불균일하게 데워져 화상 위험이 있어 피하는 것이 좋아요. 따뜻한 물에 담가 중탕하는 방법이 더 안전하다고 알려져 있어요.",
      "Q. 개봉한 분유 가루는 얼마나 보관하나요? — 개봉 후 3~4주 이내 소비를 원칙으로 하고, 냉장고가 아닌 서늘하고 습기 없는 곳에 밀봉 보관하는 것이 일반적인 권장 사항이에요.",
    ],
    sources: [
      { name: "베베스냅 - 분유 타는 법 FAQ", url: "https://www.bebesnap.com/ko/blog/formula-preparation-guide-2025-05-20" },
      { name: "momtrick - 분유 타는 방법 가이드", url: "https://momtrick.com/entry/%EC%B4%88%EB%B3%B4-%EB%B6%80%EB%AA%A8%EB%A5%BC-%EC%9C%84%ED%95%9C-%EB%B6%84%EC%9C%A0-%ED%83%80%EB%8A%94-%EB%B0%A9%EB%B2%95-%EA%B0%80%EC%9D%B4%EB%93%9C-%EB%B3%B4%EA%B4%80-%EB%B9%84%EC%9C%A8-%ED%98%BC%ED%95%A9%EC%88%98%EC%9C%A0%EA%B9%8C%EC%A7%80-%EC%B4%9D%EC%A0%95%EB%A6%AC" },
    ],
  },
];

/* ── 정책 페이지 콘텐츠 (초안 · 정식 게시 전 법률 검토 권장) ── */
export const POLICIES = {
  privacy: {
    title: "개인정보처리방침",
    body: [
      "맘밀리터(이하 '사이트')는 이용자의 개인정보를 중요하게 생각하며, 관련 법령을 준수하기 위해 노력합니다.",
      "1. 수집하는 개인정보 항목: 이 사이트는 별도 회원가입 없이 이용할 수 있으며, 계산기 이용 과정에서 입력하는 체중·개월수 등의 정보는 서버로 전송되지 않고 이용자의 브라우저 안에서만 계산에 사용됩니다. 문의하기를 통해 연락하시는 경우 이메일 주소와 문의 내용이 수집될 수 있습니다.",
      "2. 광고 및 쿠키: 이 사이트는 구글 애드센스 등 제3자 광고 서비스를 이용할 수 있으며, 이 과정에서 쿠키가 사용되어 이용자의 관심사에 맞는 광고가 표시될 수 있습니다. 쿠키 수집을 원하지 않으시면 브라우저 설정에서 쿠키를 거부할 수 있습니다.",
      "3. 개인정보의 보유 및 이용 기간: 문의를 통해 수집된 정보는 문의 처리 목적 달성 후 지체 없이 파기합니다.",
      "4. 문의처: 개인정보 관련 문의는 아래 이메일로 연락해 주세요.",
    ],
  },
  terms: {
    title: "이용약관",
    body: [
      "제1조 (목적) 이 약관은 맘밀리터(이하 '사이트')가 제공하는 분유량 계산기 및 관련 정보 서비스의 이용 조건을 정함을 목적으로 합니다.",
      "제2조 (서비스의 제공) 사이트는 분유량 계산, 브랜드·제품 정보, 육아 가이드 콘텐츠를 무료로 제공합니다. 서비스 내용은 사전 고지 없이 변경될 수 있습니다.",
      "제3조 (이용자의 의무) 이용자는 사이트에서 제공하는 계산 결과와 정보를 참고 자료로만 활용해야 하며, 이를 의료적 판단의 근거로 단독 사용해서는 안 됩니다.",
      "제4조 (책임의 제한) 사이트가 제공하는 계산 결과 및 콘텐츠의 정확성에 대해 완전한 보증을 하지 않으며, 이용자가 이를 신뢰하여 발생한 손해에 대해 사이트는 법이 허용하는 한도 내에서 책임을 지지 않습니다. 자세한 내용은 면책조항을 참고해 주세요.",
      "제5조 (약관의 변경) 이 약관은 필요 시 개정될 수 있으며, 개정된 약관은 사이트에 게시함으로써 효력이 발생합니다.",
    ],
  },
  disclaimer: {
    title: "면책조항",
    body: [
      "이 사이트에서 제공하는 분유량 계산 결과, 스푼·물 비율, 육아 가이드 콘텐츠는 일반적으로 통용되는 정보를 바탕으로 제작된 참고 자료이며, 의료 전문가의 진단이나 처방을 대체하지 않습니다.",
      "아기마다 체질, 건강 상태, 성장 속도가 다르므로, 실제 수유량과 조유 방법은 반드시 소아과 전문의 등 의료 전문가와 상담 후 결정해 주세요.",
      "브랜드·제품별 스푼 비율 정보는 공식 확인 여부에 따라 신뢰도 등급을 표시하고 있으며, '공식 확인' 등급이 아닌 정보는 부정확할 수 있습니다. 실제 조유 전에는 반드시 제품 라벨에 표기된 조유표를 확인해 주세요.",
      "이 사이트를 이용함으로써 발생하는 모든 결정과 그 결과에 대한 책임은 이용자 본인에게 있으며, 사이트 운영자는 이에 대해 법이 허용하는 한도 내에서 책임을 지지 않습니다.",
    ],
  },
};

/* ── 유틸 ───────────────────────────────────────────────── */
export const DAILY_CAP_ML = 1000;
export const PER_FEED_CAP_ML = 240;

export function referenceDaily(weightKg) {
  const raw = Math.round(weightKg * 150);
  return Math.min(raw, DAILY_CAP_ML);
}

export function findProduct(brandId, productId) {
  const brand = BRANDS.find((b) => b.id === brandId);
  const product = brand?.products.find((p) => p.id === productId);
  return { brand, product };
}
