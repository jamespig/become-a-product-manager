export interface RequirementLog {
  id: string
  title: string
  status: 'recorded' | 'in-progress' | 'next'
  statusLabel: string
  detail: string
}

export type InsightFilterId = 'market-analysis' | 'competitive-analysis' | 'product-strategy'

export interface FolderSummary {
  id: InsightFilterId
  label: string
  path: string
  description: string
  fileCount: number
  focus: string
}

export interface ScorePoint {
  label: string
  score: number
}

export interface KeyMetric {
  label: string
  value: string
  insight: string
}

export interface AnalysisSection {
  id: string
  title: string
  summary: string
  bullets: string[]
}

export interface InsightFilterOption {
  id: InsightFilterId
  label: string
  hint: string
}

export type FeaturePhase = 'Now' | 'Next' | 'Later'

export interface CompetitorProfile {
  id: string
  name: string
  sourceFile: string
  position: string
  scale: string
  strengths: string[]
  weaknesses: string[]
  takeaways: string[]
}

export interface PrdTargetUser {
  role: string
  priority: 'P0' | 'P1' | 'P2'
  painPoint: string
}

export interface PrdModule {
  name: string
  priority: 'P0' | 'P1' | 'P2'
  objective: string
}

export interface PrdMilestone {
  phase: string
  timeframe: string
  goal: string
}

export interface PrdRisk {
  risk: string
  impact: '高' | '中' | '低'
  mitigation: string
}

export interface PrdSummary {
  sourceFile: string
  problemStatement: string
  targetUsers: PrdTargetUser[]
  mvpModules: PrdModule[]
  milestones: PrdMilestone[]
  risks: PrdRisk[]
}

export interface MetricItem {
  metric: string
  baseline: string
  target: string
  validation: string
}

export interface MetricFramework {
  northStar: string
  guardrails: string[]
  metrics: MetricItem[]
}

export interface FeaturePlanItem {
  id: string
  title: string
  phase: FeaturePhase
  objective: string
  kpi: string
  dependency: string
  risk: string
}

export interface InsightReport {
  title: string
  subtitle: string
  keyMetrics: KeyMetric[]
  analysisSections: AnalysisSection[]
  highlights: string[]
  trendSummaries: string[]
  healthScores: ScorePoint[]
  priorityScores: ScorePoint[]
  competitorProfiles?: CompetitorProfile[]
  prdSummary?: PrdSummary
  metricFramework?: MetricFramework
  featureBacklog: FeaturePlanItem[]
}

export const communityRequirements: RequirementLog[] = [
  {
    id: 'topic-intro',
    title: '將 community_management 納入新主題介紹目前進度',
    status: 'recorded',
    statusLabel: '已記錄',
    detail: '在網站新增可瀏覽的主題頁，讓團隊能快速掌握現況與下一步。',
  },
  {
    id: 'folder-condense',
    title: '三個資料夾內容濃縮精簡呈現',
    status: 'in-progress',
    statusLabel: '進行中',
    detail: '以三條主軸摘要展示：市場、競品、產品策略，降低閱讀進入成本。',
  },
  {
    id: 'market-visualization',
    title: '市場分析資料夾視覺化，導入圖表呈現',
    status: 'next',
    statusLabel: '下一步',
    detail: '先以市場規模情境與吸引力評分完成第一版圖表，後續再擴充指標。',
  },
]

export const folderSummaries: FolderSummary[] = [
  {
    id: 'market-analysis',
    label: '市場分析',
    path: 'community_management/market_analysis',
    description: '用母體數據與情境估算評估市場吸引力與切入優先順序。',
    fileCount: 2,
    focus: '市場規模、吸引力評分、12 個月優先級',
  },
  {
    id: 'competitive-analysis',
    label: '競品分析',
    path: 'community_management/competitive_analysis',
    description: '拆解頭部玩家護城河、弱點與可複製策略，形成差異化假設。',
    fileCount: 2,
    focus: '智生活/中保定位、護城河、導入阻力',
  },
  {
    id: 'product-strategy',
    label: '產品策略',
    path: 'community_management/product_strategy',
    description: '把機會轉成可執行 PRD 與選手池，對齊 MVP 範圍與驗證目標。',
    fileCount: 2,
    focus: '12 週 MVP、P0/P1 範圍、成功指標',
  },
]

export const insightFilters: InsightFilterOption[] = [
  { id: 'market-analysis', label: '市場分析', hint: '看母體、結構與機會' },
  { id: 'competitive-analysis', label: '競品分析', hint: '看護城河、弱點與切入點' },
  { id: 'product-strategy', label: '產品策略', hint: '看 MVP、指標與落地節奏' },
]

export const insightReportsByFilter: Record<InsightFilterId, InsightReport> = {
  'market-analysis': {
    title: '市場分析報告',
    subtitle: '聚焦台灣社區服務市場母體、吸引力與切入優先順序。',
    keyMetrics: [
      { label: '全台戶數（TAM）', value: '9,851,532 戶', insight: '短期重點在 SAM 與付費滲透，不在母體教育。' },
      { label: '65+ 人口占比', value: '20.06%', insight: '高齡友善服務是長期結構性機會。' },
      { label: '網路滲透率', value: '96.7%', insight: '導入痛點轉向流程阻力與替換成本。' },
      { label: '行動支付使用率', value: '92%', insight: '金流優化焦點是催繳流程與對帳可視化。' },
      { label: '管理維護公司', value: '837 家', insight: '供給端分散，通路合作是擴張槓桿。' },
      { label: '市場吸引力總評', value: '3.4 / 5', insight: '有吸引力，但不適合做通用平台硬碰硬。' },
    ],
    analysisSections: [
      {
        id: 'market-structure',
        title: '市場結構判讀',
        summary: '需求高、數位成熟、前台流量集中並存，策略需避開寡占核心。',
        bullets: [
          '需求由高齡化、小家庭化與高頻社區服務場景驅動。',
          '頭部平台已掌握主要流量入口，新進者需走垂直切入。',
          '供應端分散提供在地服務整合與履約優化機會。',
        ],
      },
      {
        id: 'market-economics',
        title: '量化與經濟性',
        summary: '基準情境約 26.6 億，關鍵是提高付費率、留存與 ARPU。',
        bullets: [
          '若只提供基礎工具，市場天花板偏低且競爭壓力高。',
          '上行情境需要「高滲透 + 高留存 + 高客單」同時成立。',
          '策略上應先建立高價值場景，再擴大模組覆蓋範圍。',
        ],
      },
      {
        id: 'market-priority',
        title: '12 個月優先順序',
        summary: '先做高齡代辦與金流催繳，再擴展到包裹履約與中小社區模組化。',
        bullets: [
          'P1：高齡到府 + 金流催繳，最易產生可見 ROI。',
          'P2：包裹異常管理，適合作為高頻入口。',
          'P3：中小社區升級，需配套在地供應鏈與導入流程。',
        ],
      },
    ],
    highlights: [
      '市場吸引力高，但平台端寡占明顯，需選擇非正面戰路徑。',
      '最具槓桿的切入點是可量化 KPI 場景，而非功能數量。',
      '導入與治理流程優化，是放大簽約轉換的核心。 ',
    ],
    trendSummaries: [
      '需求端上升趨勢明確，社區服務從加值走向剛需。',
      '前台平台集中化持續，後端履約能力成為差異化來源。',
      '成長策略由擴點轉向提效：更重視單戶價值與續約率。',
    ],
    healthScores: [
      { label: '需求強度', score: 5 },
      { label: '成長性', score: 4 },
      { label: '變現能力', score: 4 },
      { label: '競爭壓力', score: 2 },
      { label: '進入友善度', score: 2 },
    ],
    priorityScores: [
      { label: '高齡+金流（P1）', score: 92 },
      { label: '包裹履約（P2）', score: 81 },
      { label: '中小社區升級（P3）', score: 74 },
    ],
    featureBacklog: [
      {
        id: 'market-segmentation-model',
        title: '市場分層模型（社區類型 x 付費能力）',
        phase: 'Now',
        objective: '把 TAM 轉為可執行 SAM 清單，縮短 BD 篩選時間。',
        kpi: '高潛力社區名單命中率 > 70%',
        dependency: '市場統計與社區屬性資料整併',
        risk: '資料口徑不一致造成分層偏差',
      },
      {
        id: 'roi-pitch-template',
        title: '導入 ROI 提案模板',
        phase: 'Next',
        objective: '以 KPI 語言提高管委會決策效率。',
        kpi: '案場 -> 簽約轉換率提升 15%',
        dependency: '營運側提供前後測指標樣本',
        risk: '社區基線資料不足，導致 ROI 說服力弱',
      },
      {
        id: 'regional-supply-map',
        title: '區域供應鏈地圖',
        phase: 'Later',
        objective: '支援中小社區擴點，降低履約成本波動。',
        kpi: '新區域導入後 4 週內履約達標率 > 90%',
        dependency: '合作供應商評分機制',
        risk: '跨區品質不穩影響 NPS',
      },
    ],
  },
  'competitive-analysis': {
    title: '競品分析報告',
    subtitle: '聚焦智生活與中保好生活的護城河、弱點與可攻擊區。',
    keyMetrics: [
      { label: '智生活覆蓋', value: '10,000+ 社區', insight: '都會區與大型社區滲透高，轉換壁壘強。' },
      { label: '智生活市占', value: '約 80%', insight: '基礎管理功能已趨近標配化。' },
      { label: '中保覆蓋', value: '6,000+ 社區', insight: '保全通路帶來高信任與導入優勢。' },
      { label: '中保會員', value: '20 萬+', insight: '有既有客群可做生活服務交叉銷售。' },
      { label: '兩大共通護城河', value: '線下履約能力', insight: '實體維運車隊與服務網絡難以快速複製。' },
      { label: '主要破口', value: '資安/UX/商業化反感', insight: '可用「信任 + 低干擾體驗」建立差異。' },
    ],
    analysisSections: [
      {
        id: 'comp-moat',
        title: '競爭護城河',
        summary: '頭部玩家同時具備流量入口、硬體能力與線下履約體系。',
        bullets: [
          '智生活強在先發規模、網路效應、轉換成本。',
          '中保強在品牌信任、保全通路與點數經濟。',
          '兩者共同優勢是線下執行力，純軟體較難追上。',
        ],
      },
      {
        id: 'comp-weakness',
        title: '弱點與風險',
        summary: '高速擴張下，資安與體驗治理風險浮現，可成為切入窗口。',
        bullets: [
          '資安事件會直接衝擊住戶採用與續用信任。',
          '過度商業化會稀釋核心高頻功能體驗。',
          '管理端流程複雜化，降低第一線使用效率。',
        ],
      },
      {
        id: 'comp-strategy',
        title: '可攻擊區域',
        summary: '避開都會區基礎功能紅海，聚焦高信任高履約的垂直場景。',
        bullets: [
          '從高齡代辦、履約透明、租客責任分流建立差異。',
          '用可驗證 KPI 取代功能對比作為銷售敘事。',
          '以低摩擦模組導入降低管委會決策阻力。',
        ],
      },
    ],
    highlights: [
      '頭部競品擁有規模優勢，但也承擔治理與體驗複雜度成本。',
      '市場破口在「可信任履約」與「管理端高效率流程」。',
      '對新進者最重要的不是功能齊全，而是場景深度與交付品質。',
    ],
    trendSummaries: [
      '競爭焦點從工具功能比拼，轉向履約品質與治理效率比拼。',
      '住戶對資安與體驗容忍度下降，平台信任門檻提高。',
      '跨線上線下的服務閉環能力將決定中長期勝率。',
    ],
    healthScores: [
      { label: '先發優勢強度', score: 5 },
      { label: '網路效應', score: 5 },
      { label: '轉換成本', score: 4 },
      { label: '資安與體驗風險', score: 2 },
      { label: '新進者機會度', score: 3 },
    ],
    priorityScores: [
      { label: '信任型服務包', score: 90 },
      { label: '管理端流程優化', score: 86 },
      { label: '低摩擦導入', score: 83 },
    ],
    competitorProfiles: [
      {
        id: 'zhilife',
        name: '智生活',
        sourceFile: 'community_management/competitive_analysis/智生活.md',
        position: '都會區智慧社區平台龍頭，主打免費基礎工具換取流量入口。',
        scale: '10,000+ 社區、約 300 萬住戶、市占率約 80%',
        strengths: [
          '高轉換成本與網路效應，社區與服務商雙邊增強。',
          '重資產線下維運能力（工程師車隊、技師訓練體系）。',
          '寬頻本業現金流支撐，能持續採取低價或免費策略。',
        ],
        weaknesses: [
          '資安與隱私爭議會直接侵蝕住戶信任。',
          '商業化內容過多，核心高頻場景體驗受干擾。',
          '管理端流程複雜化，第一線使用負擔上升。',
        ],
        takeaways: [
          '正面挑戰平台規模不具優勢，應聚焦垂直場景。',
          '可用「低干擾、高信任」體驗做差異化定位。',
        ],
      },
      {
        id: 'secom',
        name: '中保好生活',
        sourceFile: 'community_management/competitive_analysis/中保好生活.md',
        position: '由保全龍頭延伸生活服務，強調安全與點數生態整合。',
        scale: '6,000+ 社區、30 萬家庭覆蓋、20 萬+ 會員',
        strengths: [
          '保全品牌信任度高，社區導入安全場景阻力較低。',
          '好點點數可折抵管理費，提升留存與服務消費黏著。',
          '虛實整合執行力強，線下維修與巡邏體系完整。',
        ],
        weaknesses: [
          '管委會決策鏈長，社區滲透速度受行政流程限制。',
          '面對智生活高市占，轉換壁壘與獲客成本偏高。',
          '功能持續擴張後，App 易出現複雜度與體驗挑戰。',
        ],
        takeaways: [
          '可借鏡「可感知回饋機制」設計續用誘因。',
          '避免依賴單一保全通路，需打造跨通路導入能力。',
        ],
      },
    ],
    featureBacklog: [
      {
        id: 'trust-first-onboarding',
        title: 'Trust-first Onboarding',
        phase: 'Now',
        objective: '把資安與資料權限透明化放到導入第一步。',
        kpi: '導入前疑慮問題數下降 30%',
        dependency: '法務與資安條款模板',
        risk: '說明成本過高拖慢簽約節奏',
      },
      {
        id: 'ops-console-lite',
        title: '管理端高頻任務精簡版',
        phase: 'Next',
        objective: '建立與頭部競品差異化的管理端效率體驗。',
        kpi: '高頻任務完成時間縮短 25%',
        dependency: '第一線任務流程盤點',
        risk: '功能縮減過度導致中長期擴充受限',
      },
      {
        id: 'switch-cost-toolkit',
        title: '替換成本診斷工具',
        phase: 'Later',
        objective: '量化舊系統轉換成本，降低決策阻力。',
        kpi: '替換型案場提案接受率 > 40%',
        dependency: '競品流程映射與資料轉移策略',
        risk: '跨平台資料格式不可控',
      },
    ],
  },
  'product-strategy': {
    title: '產品策略報告',
    subtitle: '聚焦 12 週 MVP 雙核心、執行節奏與成效驗證框架。',
    keyMetrics: [
      { label: 'MVP 週期', value: '12 週', insight: '先驗證可導入、可使用、可續用。' },
      { label: '試點社區數', value: '5-10 個', insight: '建立可複製案例後再擴張。' },
      { label: '核心主軸', value: 'B + A', insight: '金流催繳效率 + 高齡代辦履約。' },
      { label: '必做基線', value: 'F + J-Lite', insight: '資安信任與租客流程避免後續補洞。' },
      { label: '收繳率目標', value: '+8%', insight: '作為導入價值的第一優先 KPI。' },
      { label: '催繳工時目標', value: '-20%', insight: '驗證管理端效率改善是否成立。' },
    ],
    analysisSections: [
      {
        id: 'prd-scope',
        title: 'MVP 範圍設計',
        summary: '以雙核心 + 基線能力組成最小可驗證解法，避免一次做太大。',
        bullets: [
          'B-MVP 針對催繳規則、收繳儀表板與對帳狀態。',
          'A-MVP 聚焦代辦派工、履約證據與家屬通知。',
          'F 與 J-Lite 確保權限風險與租客流程可控。',
        ],
      },
      {
        id: 'prd-metrics',
        title: '成功指標與驗證',
        summary: '以收繳率、工時、結案時效與續用意願構成驗證閉環。',
        bullets: [
          '核心 KPI 包含收繳率、催繳工時、履約時效、客訴率。',
          '護欄指標包含通知送達率與權限事故數。',
          '每週追蹤異常並回寫策略，避免僅做報表。',
        ],
      },
      {
        id: 'prd-rollout',
        title: '導入與擴張策略',
        summary: '先建立試點證據鏈，再用可複製方案擴展至更多社區。',
        bullets: [
          'W1-W3 完成 PRD、技術模型與 UX 流程定稿。',
          'W8 完成開發，W10 完成試點導入，W12 完成成效驗證。',
          '對外銷售聚焦 ROI 敘事而非功能清單。',
        ],
      },
    ],
    highlights: [
      '策略重點是先證明價值，再擴模組與擴點。',
      '雙核心架構同時滿足決策者 ROI 與住戶可感知價值。',
      '把資安與角色權限提前納入，可顯著降低後續風險成本。',
    ],
    trendSummaries: [
      '產品策略走向「可驗證交付」，重視前後測與因果關係。',
      '導入成敗關鍵在第一線流程摩擦，不在功能清單完整度。',
      '跨部門協同與資料品質將成為擴張速度上限。',
    ],
    healthScores: [
      { label: '策略聚焦度', score: 5 },
      { label: '驗證可行性', score: 4 },
      { label: '跨部門可執行性', score: 4 },
      { label: '風險可控性', score: 4 },
      { label: '擴張準備度', score: 3 },
    ],
    priorityScores: [
      { label: 'B 金流催繳', score: 94 },
      { label: 'A 高齡代辦', score: 88 },
      { label: 'F/J 基線能力', score: 79 },
    ],
    prdSummary: {
      sourceFile: 'community_management/product_strategy/社區服務核心主軸_PRD_2026H2.md',
      problemStatement:
        '以 B（金流催繳）+ A（高齡代辦）建立 12 週 MVP 雙核心，並以 F（資安信任）與 J-Lite（租客流程）降低導入風險，驗證可複製的續用模型。',
      targetUsers: [
        { role: '管委會主委/財委', priority: 'P0', painPoint: '收繳率與對帳效率不足，缺乏可追蹤催繳流程。' },
        { role: '社區總幹事/管理員', priority: 'P0', painPoint: '第一線工單與異常處理分散，溝通成本高。' },
        { role: '物業公司管理層', priority: 'P0', painPoint: '缺乏可複製導入 SOP 與擴點指標。' },
        { role: '高齡住戶/家屬', priority: 'P1', painPoint: '代辦流程透明度不足，難以建立持續信任。' },
      ],
      mvpModules: [
        { name: 'B-MVP 金流催繳效率模組', priority: 'P0', objective: '提高收繳率並降低催繳工時。' },
        { name: 'A-MVP 高齡代辦履約模組', priority: 'P0', objective: '建立可追溯履約證據與家屬通知。' },
        { name: 'F-Foundation 資安信任基線', priority: 'P0', objective: '確保權限、遮罩、稽核與事件可追蹤。' },
        { name: 'J-Lite 租客協作流程', priority: 'P1', objective: '降低入退租與報修責任爭議。' },
      ],
      milestones: [
        { phase: 'PRD 與技術定案', timeframe: 'W1-W2', goal: '完成需求邊界、資料模型與驗證方法。' },
        { phase: 'UX 流程定稿', timeframe: 'W3', goal: '鎖定 B/A/J-Lite 核心操作流程。' },
        { phase: 'MVP 開發完成', timeframe: 'W8', goal: '完成 Dev Done 與 QA 基線。' },
        { phase: '試點導入', timeframe: 'W10', goal: '完成 5-10 社區上線與教育。' },
        { phase: '成效驗證', timeframe: 'W12', goal: '完成 KPI 前後測與續用決策。' },
      ],
      risks: [
        { risk: '第一線操作抗拒', impact: '高', mitigation: '每週回收流程痛點並小步迭代。' },
        { risk: '資料品質不足', impact: '高', mitigation: '試點前建立基線欄位與採集規範。' },
        { risk: '供應品質不穩', impact: '中', mitigation: '建立 SLA 與供應商評分機制。' },
        { risk: '權限設定錯誤', impact: '高', mitigation: '預設最小權限與稽核告警。' },
      ],
    },
    metricFramework: {
      northStar: '試點社區月度可驗證履約完成數（催繳閉環 + 代辦結案）',
      guardrails: ['通知送達率 >= 98%', '權限重大事故 = 0', '高齡代辦取消率連續 2 週不得超過 15%'],
      metrics: [
        { metric: '管理費收繳率', baseline: '試點前基線', target: '+8%', validation: '社區月報 + 儀表板' },
        { metric: '催繳人工工時', baseline: '試點前 4 週平均', target: '-20%', validation: '管理員工時回報' },
        { metric: '服務結案時效', baseline: '試點前平均', target: '-30%', validation: '工單時間戳' },
        { metric: '客訴率', baseline: '試點前月平均', target: '-25%', validation: '客服工單分類' },
        { metric: '續用意願', baseline: 'N/A', target: '>=70%', validation: '試點後決策訪談' },
      ],
    },
    featureBacklog: [
      {
        id: 'b-mvp',
        title: 'B-MVP 金流催繳與對帳',
        phase: 'Now',
        objective: '建立可視化催繳與對帳閉環，先驗證 ROI。',
        kpi: '收繳率 +8%，催繳工時 -20%',
        dependency: '通知模板、欠費分群規則、財務對帳欄位',
        risk: '跨系統繳費狀態同步延遲',
      },
      {
        id: 'a-mvp',
        title: 'A-MVP 高齡代辦履約',
        phase: 'Now',
        objective: '建立代辦工單流程與履約證據，強化家屬信任。',
        kpi: '結案時效 -30%，NPS 提升',
        dependency: '派工流程、SLA、供應商管理',
        risk: '服務品質波動造成取消率上升',
      },
      {
        id: 'f-foundation',
        title: 'F-Foundation 權限與稽核',
        phase: 'Next',
        objective: '降低資安與治理風險，建立導入信任基線。',
        kpi: '權限事故 0 起',
        dependency: '角色矩陣、事件稽核、資料遮罩',
        risk: '權限策略過細導致操作成本提高',
      },
      {
        id: 'j-lite',
        title: 'J-Lite 租客協作流程',
        phase: 'Later',
        objective: '降低租客/房東/物業責任爭議。',
        kpi: '租客流程客服工單 -30%',
        dependency: '租約資料、責任矩陣、改派記錄',
        risk: '規則不清造成爭議案件堆積',
      },
    ],
  },
}
