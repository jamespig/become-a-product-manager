export type SkillCategory = '核心框架' | '分析' | '規劃' | '衡量'

export interface PmSkill {
  id: string
  title: string
  category: SkillCategory
  purpose: string
  whenToUse: string[]
  steps: string[]
  outputTemplate: string[]
  pitfalls: string[]
  sourceFile: string
}

export const pmWorkflowSkills: PmSkill[] = [
  {
    id: 'pm-workflows',
    title: 'PM Workflows 主技能',
    category: '核心框架',
    purpose: '先判斷任務與產品階段，再選對應方法，避免只做功能清單而忽略商業驗證。',
    whenToUse: [
      '不確定該先做競品、PRD、Roadmap 或指標定義時',
      '要快速對齊產品階段與本期目標時',
      '需要確保輸出格式與來源可追溯時',
    ],
    steps: [
      '先確認產品階段：導入期 / 成長期 / 成熟期 / 衰退期',
      '定義本期要驗證的商業模式假設',
      '選擇對應技能文件（競品、PRD、Roadmap、指標）',
      '產出文件時帶入主指標與驅動指標',
      '補上來源連結、日期與待驗證假設',
    ],
    outputTemplate: [
      '一句話核心摘要',
      '產品階段與本期目標',
      '主指標 + 驅動指標',
      '可追溯資料來源與日期',
    ],
    pitfalls: [
      '直接進入解法討論，跳過問題與階段對齊',
      '只寫結論不附來源',
      '沒有定義本期不做事項',
    ],
    sourceFile: '.cursor/skills/pm-workflows/SKILL.md',
  },
  {
    id: 'competitive-analysis',
    title: '競品分析',
    category: '分析',
    purpose: '理解對手正在驗證的商業模式假設，找出可借鏡策略與可攻擊弱點。',
    whenToUse: ['要評估市場對手', '要做策略定位', '要判斷我方差異化切入點'],
    steps: [
      '蒐集資料與來源：官網、評論、新聞、法說會',
      '建立時間軸，找轉折與里程碑',
      '拆解商業模式與主要金流',
      '評估護城河與難以複製能力',
      '診斷對手階段與四大契合，推論下一步',
    ],
    outputTemplate: [
      '歷史前世今生',
      '市場地位與客群價值主張',
      '商業模式與營收支柱',
      '護城河、弱點、最終點評',
    ],
    pitfalls: [
      '只比較功能，不比較變現模式',
      '引用市占或營收數字沒有出處',
      '沒有提出對我方可執行的啟示',
    ],
    sourceFile: '.cursor/skills/pm-workflows/competitive-analysis.md',
  },
  {
    id: 'prd-template',
    title: 'PRD 模板',
    category: '規劃',
    purpose: '讓跨職能團隊在 PM 不在場時，也能理解要做什麼與如何判斷成功。',
    whenToUse: ['準備啟動功能開發', '要對齊工程/設計/QA 範圍', '要避免需求蔓延'],
    steps: [
      '先寫問題背景、用戶痛點與商業目標',
      '列出本次要驗證的商業模式假設',
      '定義 In-Scope / Out-of-Scope',
      '撰寫功能需求、邊界情境與非功能需求',
      '補齊成功指標、驗證計畫與風險',
    ],
    outputTemplate: [
      'Problem Statement',
      'Target Users + User Story',
      'Feature Scope + Functional Requirements',
      'Success Metrics + Validation Plan',
    ],
    pitfalls: [
      '把行動當作 KR，沒有可衡量結果',
      '沒有清楚定義範圍外需求',
      '過度描述技術實作細節，壓縮工程設計空間',
    ],
    sourceFile: '.cursor/skills/pm-workflows/prd-template.md',
  },
  {
    id: 'roadmap-planning',
    title: 'Roadmap 規劃',
    category: '規劃',
    purpose: '用策略意圖與優先邏輯安排 3-12 個月方向，不把 Roadmap 當待辦清單。',
    whenToUse: ['季度規劃', '跨部門對齊資源', '需要排序多個需求時'],
    steps: [
      '先對齊產品階段、本期主指標與不做清單',
      '用 RICES 或 MoSCoW 評估優先順序',
      '輸出 Now / Next / Later',
      '補上不做項目與決策原因',
      '針對受眾調整溝通版本',
    ],
    outputTemplate: [
      '策略主軸',
      'Now / Next / Later 表',
      '不做清單 Non-Goals',
      '里程碑與成功判斷條件',
    ],
    pitfalls: [
      '用功能重要性主觀排序，沒有量化依據',
      'Roadmap 太細導致頻繁失效',
      '沒有設定鎖定節奏與調整規則',
    ],
    sourceFile: '.cursor/skills/pm-workflows/roadmap-planning.md',
  },
  {
    id: 'metrics-definition',
    title: '指標定義',
    category: '衡量',
    purpose: '建立北極星指標、驅動指標與護欄指標，讓決策可驗證且可迭代。',
    whenToUse: ['要定義季度目標與 OKR', '要拆解成長漏斗', '要設計實驗評估方式'],
    steps: [
      '先確定階段目標，再選主指標',
      '定義北極星指標與公式',
      '拆解為 3-5 個驅動指標',
      '建立健康/護欄指標，設定警戒線',
      '以觀測週期追蹤並回寫迭代決策',
    ],
    outputTemplate: [
      '北極星指標定義與基準值',
      'AARRR 指標拆解',
      '增長模型方程式',
      '季度 OKR 與 Anti-goals',
    ],
    pitfalls: [
      '導入期只追營收，忽略價值驗證',
      '只有總指標，沒有拆解漏斗',
      '做實驗卻沒設護欄指標',
    ],
    sourceFile: '.cursor/skills/pm-workflows/metrics-definition.md',
  },
  {
    id: 'staged-validation-framework',
    title: '分階段驗證框架',
    category: '核心框架',
    purpose: '把市場、產品、渠道、模型放進同一套驗證循環，確保策略與執行一致。',
    whenToUse: ['啟動新產品策略', '年度策略盤點', '專案失速需要回到根因時'],
    steps: [
      '判斷當前產品階段與目標',
      '拆解客群、價值、渠道、收益、成本',
      '定義主指標與驅動指標公式',
      '依價值/成本/風險排序方案',
      '設定觀測窗口與下一步 if/then 決策',
    ],
    outputTemplate: [
      '四階段策略地圖',
      '任務執行通用流程',
      '優先排序檢核',
      '交付前檢核清單',
    ],
    pitfalls: [
      '把指標當報表而非驗證工具',
      '同一套策略硬套所有階段',
      '沒有把假設與驗證方法成對設計',
    ],
    sourceFile: '.cursor/skills/pm-workflows/staged-validation-framework.md',
  },
]

export const skillCategories: SkillCategory[] = ['核心框架', '分析', '規劃', '衡量']

export function getSkillById(id: string) {
  return pmWorkflowSkills.find((skill) => skill.id === id)
}
