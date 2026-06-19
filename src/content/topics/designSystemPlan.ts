export interface FoundationTokenGroup {
  title: string
  description: string
  tokens: string[]
}

export interface ComponentSpec {
  name: string
  usage: string
  variants: string[]
  states: string[]
  guidelines: string[]
}

export interface PatternSpec {
  name: string
  purpose: string
  structure: string
}

export interface InteractionSpec {
  state: string
  rule: string
}

export interface DesignRationale {
  domain: '心理學' | 'UX' | '色彩學' | 'UI' | '目標客群'
  principle: string
  application: string
}

export interface EvidencePoint {
  metric: string
  value: string
  implication: string
  source: string
}

export interface DesignReevaluation {
  dimension: string
  finding: string
  decision: string
}

export interface DesignSystemPlan {
  foundations: FoundationTokenGroup[]
  components: ComponentSpec[]
  patterns: PatternSpec[]
  interactions: InteractionSpec[]
  rationale: DesignRationale[]
  evidence: EvidencePoint[]
  reevaluation: DesignReevaluation[]
}

export const designSystemPlan: DesignSystemPlan = {
  foundations: [
    {
      title: 'Color Tokens',
      description: '建立語意化色彩，避免在頁面直接使用硬編碼色值。',
      tokens: [
        'color.bg.base / color.bg.card / color.bg.muted',
        'color.text.primary / color.text.secondary / color.text.inverse',
        'color.status.success / warning / danger / info',
        'color.chart.primary / secondary / accent',
      ],
    },
    {
      title: 'Typography Tokens',
      description: '統一標題層級與內文可讀性，維持報告型內容掃讀效率。',
      tokens: ['type.heading.h1-h4', 'type.body.default/small', 'type.caption', 'lineHeight.tight/normal/relaxed'],
    },
    {
      title: 'Spacing & Layout Tokens',
      description: '讓區塊間距一致，避免資訊密度過高。',
      tokens: ['space.2/3/4/6/8/10', 'container.max.7xl', 'section.gap.lg', 'card.padding.md/lg'],
    },
    {
      title: 'Radius & Elevation',
      description: '統一卡片與按鈕圓角、層次與邊界。',
      tokens: ['radius.sm/md/lg', 'border.default/muted', 'elevation.none/subtle'],
    },
  ],
  components: [
    {
      name: 'Filter Button Group',
      usage: '切換分析主題（市場/競品/產品策略）。',
      variants: ['default', 'outline'],
      states: ['default', 'hover', 'active', 'focus-visible', 'disabled'],
      guidelines: ['按鈕文案簡短且一致', '當前選項需具備明顯主色態'],
    },
    {
      name: 'Insight Card',
      usage: '呈現關鍵指標、分析段落與風險資訊。',
      variants: ['metric', 'analysis', 'risk'],
      states: ['default', 'hover'],
      guidelines: ['同區塊卡片高度盡量一致', '標題固定單行，內容可換行'],
    },
    {
      name: 'Data Visualization Card',
      usage: '承載 Chart.js 圖表與結論。',
      variants: ['radar', 'bar'],
      states: ['default', 'loading', 'empty', 'error'],
      guidelines: ['每張圖搭配一句決策導向說明', '避免超過 6 個維度造成讀取困難'],
    },
    {
      name: 'Status Badge',
      usage: '標示需求狀態、優先級與風險等級。',
      variants: ['recorded', 'in-progress', 'next', 'p0', 'p1', 'p2'],
      states: ['default'],
      guidelines: ['顏色語意固定', '同一頁面同語意只用一種樣式'],
    },
  ],
  patterns: [
    {
      name: 'Dashboard Section Pattern',
      purpose: '建立統一段落節奏（標題 -> 說明 -> 內容）。',
      structure: 'SectionHeader + ContentGrid + SummaryBlock',
    },
    {
      name: 'Report Pattern',
      purpose: '讓分析報告能快速掃讀並回推決策。',
      structure: 'FilterControls + KeyMetrics + AnalysisCards + Trends',
    },
    {
      name: 'Comparison Pattern',
      purpose: '支援競品對照與策略取捨。',
      structure: 'TwoColumnCards + StrengthWeakness + Takeaways',
    },
  ],
  interactions: [
    { state: 'Hover', rule: '可點擊元素需有背景或邊框變化，避免誤觸不確定感。' },
    { state: 'Active', rule: '篩選按鈕與主要操作需有清楚 active 狀態。' },
    { state: 'Focus', rule: '鍵盤操作保留 focus-visible ring，符合無障礙要求。' },
    { state: 'Disabled', rule: '禁用狀態保留語意但降低對比，避免誤解為可操作。' },
    { state: 'Error', rule: '圖表資料缺失時顯示文字提示與後續動作。' },
    { state: 'Loading', rule: '資料切換需保留容器高度，避免畫面跳動。' },
  ],
  rationale: [
    {
      domain: '心理學',
      principle: '認知負荷理論（Cognitive Load）',
      application: '把內容拆成多頁與區塊卡片，降低單頁資訊壓力，讓使用者先抓重點再看細節。',
    },
    {
      domain: 'UX',
      principle: 'Nielsen 可用性啟發式（可見性、一致性）',
      application: '導覽層級固定、按鈕狀態明確、同類資訊使用一致排版，降低學習與操作成本。',
    },
    {
      domain: '色彩學',
      principle: '語意色彩與前注意力（Pre-attentive Processing）',
      application: '主色用於關鍵操作、警示色用於風險資訊、低彩度背景承載大量文字，維持可讀性與掃讀效率。',
    },
    {
      domain: 'UI',
      principle: '視覺層級與間距節奏',
      application: '用固定字級層級（H1/H2/H3/Body）與 spacing scale 建立節奏，避免資訊塊互相干擾。',
    },
    {
      domain: '目標客群',
      principle: 'B2B 決策者與營運角色的任務導向閱讀',
      application: '優先顯示 KPI、風險、依賴與下一步，讓管委會/物業/PM 可在短時間完成判斷。',
    },
  ],
  evidence: [
    {
      metric: '65+ 人口占比',
      value: '20.06%',
      implication: '需提高字體可讀性與流程清晰度，降低高齡與家屬理解門檻。',
      source: 'community_management/market_analysis/台灣社區服務市場現況分析_2026Q2.md（MOI/CNA）',
    },
    {
      metric: '網路滲透率',
      value: '96.7%',
      implication: '重點不在教育使用，而在降低切換與操作摩擦。',
      source: 'community_management/market_analysis/台灣社區服務市場現況分析_2026Q2.md（DataReportal）',
    },
    {
      metric: '行動支付使用率',
      value: '92%',
      implication: '金流流程應優先凸顯狀態與下一步，而非支付教學。',
      source: 'community_management/market_analysis/台灣社區服務市場現況分析_2026Q2.md（MIC）',
    },
    {
      metric: '管理維護公司數',
      value: '837 家',
      implication: 'B2B 導入者多元，介面需高一致性與低學習成本。',
      source: 'community_management/market_analysis/台灣社區服務市場現況分析_2026Q2.md（內政部國土管理署）',
    },
    {
      metric: '頭部平台規模',
      value: '智生活 10,000+ 社區 / 約 80% 市占',
      implication: '需強化信任感與可讀性，避免被視為功能堆砌型替代品。',
      source: 'community_management/competitive_analysis/智生活.md',
    },
    {
      metric: '次頭部平台規模',
      value: '中保 6,000+ 社區 / 20萬+ 會員',
      implication: '需突出差異化資訊架構與決策效率，而非單純功能對標。',
      source: 'community_management/competitive_analysis/中保好生活.md',
    },
  ],
  reevaluation: [
    {
      dimension: '資訊密度',
      finding: '先前單頁過長導致掃讀中斷，重要資訊難以定位。',
      decision: '已切分成總覽/分析/規劃/Design System 四頁，採任務導向導覽。',
    },
    {
      dimension: '可理解性',
      finding: '純文字規範對非設計背景角色不友善。',
      decision: '新增色票、字級、間距、元件狀態視覺樣板，降低理解成本。',
    },
    {
      dimension: '決策可追溯性',
      finding: '設計說明缺少與真實市場數據的連結。',
      decision: '新增資料依據區塊，逐條映射「數據 -> 設計影響」。',
    },
    {
      dimension: 'B2B 導入效率',
      finding: '功能與規劃切換過多，容易偏離 PRD 核心。',
      decision: '功能規劃固定聚焦 product-strategy，避免跨主題干擾。',
    },
    {
      dimension: '信任感',
      finding: '競品風險顯示資安/過度商業化會影響採用。',
      decision: '採低干擾視覺基調與清楚狀態語意，優先建立可靠感。',
    },
  ],
}
