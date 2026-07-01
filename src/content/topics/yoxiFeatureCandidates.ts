export interface YoxiInsightSummary {
  label: string
  value: string
  implication: string
}

export interface FeatureCandidate {
  id: string
  name: string
  targetSegment: string
  dailyValue: string
  primaryScenario: string
  coreInfo: string
  conversionTrigger: string
  northStarImpact: string
  kpi: string
  priority: 'P0' | 'P1' | 'P2'
}

export const yoxiInsightSummaries: YoxiInsightSummary[] = [
  {
    label: '價格帶結構',
    value: '0-300 元占 73.52%',
    implication: '短中程剛需為主，應強化日常高頻體驗而非一次性長途。',
  },
  {
    label: '時段分布',
    value: '早晚高峰合計 44.33%',
    implication: '通勤場景是每日打開 App 的核心動機。',
  },
  {
    label: '地點特性',
    value: '上車偏住家/公司，下車偏樞紐/醫療/商業',
    implication: '可做「去程規劃 + 回程提醒」的雙向日常服務。',
  },
  {
    label: '客群推估',
    value: '日常通用 + 上班族通勤 > 77% 訂單',
    implication: '先滿足通勤與日常規劃，再擴展到差旅與夜生活。',
  },
]

export const dailyOpenFeatureCandidates: FeatureCandidate[] = [
  {
    id: 'city-morning-brief',
    name: '城市移動晨報',
    targetSegment: '上班族通勤客、日常通用移動客',
    dailyValue: '每天早上先看今天城市移動難度，形成固定打開習慣',
    primaryScenario: '平日 06:30-09:00 起床後到出門前',
    coreInfo: '今日尖峰壓力指數、主要商圈/醫療/辦公區叫車難度、建議出門時間',
    conversionTrigger: '當系統偵測「接下來 30 分鐘等待將拉長」時，提示提早叫車',
    northStarImpact: '把 yoxi 從工具型 App 變成早晨資訊入口',
    kpi: '晨報 DAU、晨報查看後 2 小時內轉單率、平均提前叫車分鐘數',
    priority: 'P0',
  },
  {
    id: 'weather-mobility-assistant',
    name: '天氣 x 移動助理',
    targetSegment: '家庭生活採買客、上班族通勤客',
    dailyValue: '每天看天氣時同步知道「今天哪個時段最難叫車」',
    primaryScenario: '早晚查天氣與行程安排時',
    coreInfo: '降雨/高溫提醒、體感不適通勤建議、各時段叫車成功率預測',
    conversionTrigger: '遇降雨/高溫且需求壓力上升時，提供「最佳叫車時間窗」快捷入口',
    northStarImpact: '增加非意圖型打開，轉為行程型下單',
    kpi: '天氣卡片打開率、天氣觸發下單率、尖峰失敗率下降',
    priority: 'P0',
  },
  {
    id: 'daily-life-agenda',
    name: '生活行程清單（買菜/接送/就醫）',
    targetSegment: '家庭生活採買客、醫療就診客',
    dailyValue: '把今天的生活任務集中管理，不用每次臨時決定交通方式',
    primaryScenario: '午前規劃當日行程、午後補行程',
    coreInfo: '多目的地順路建議、任務時間提醒、各任務建議移動方式',
    conversionTrigger: '當行程時間逼近且預估大眾運輸不及時，出現「準時到達叫車建議」',
    northStarImpact: '提升跨場景多次下單與全天黏著',
    kpi: '建立行程用戶比例、每用戶日均任務數、同日多單率',
    priority: 'P0',
  },
  {
    id: 'event-dispersal-radar',
    name: '活動散場雷達',
    targetSegment: '夜生活娛樂客、商務活動客',
    dailyValue: '每天晚上看熱門活動散場時段，避開最難叫車時間',
    primaryScenario: '18:00 之後安排聚餐、演唱會、球賽或商務活動',
    coreInfo: '活動場館散場預估、周邊熱區壅塞等級、替代上車點',
    conversionTrigger: '散場前 20 分鐘推送「現在叫車較省時」或「延後 15 分鐘更容易」',
    northStarImpact: '提高晚間時段轉單與體驗滿意',
    kpi: '晚間 DAU、散場提醒點擊率、晚間取消率',
    priority: 'P1',
  },
  {
    id: 'medical-followup-companion',
    name: '就醫追蹤小幫手',
    targetSegment: '醫療就診客（45-70 推估）與家屬',
    dailyValue: '不是就醫當天才開，而是每天查看下一次回診與交通風險',
    primaryScenario: '慢性病回診、復健、家屬代安排',
    coreInfo: '回診倒數、院所尖峰時段、家屬共同查看與提醒',
    conversionTrigger: '回診前一天與當天早上，提供「準時到院」叫車時機建議',
    northStarImpact: '建立高信任週期性使用',
    kpi: '回診提醒開啟率、醫療場景預約單、家屬共同使用率',
    priority: 'P1',
  },
  {
    id: 'safe-home-widget',
    name: '今晚安全返家小工具',
    targetSegment: '夜生活娛樂客、女性通勤客、晚歸族',
    dailyValue: '每天晚間查看返家安全指數與等待風險，降低焦慮',
    primaryScenario: '21:00 後離開辦公室、聚會、活動現場前',
    coreInfo: '返家安全指數、夜間熱區風險、常用返家路線一鍵分享',
    conversionTrigger: '安全指數偏低或等待風險高時，優先推薦可信賴叫車方案',
    northStarImpact: '強化夜間場景品牌心智與轉單',
    kpi: '夜間工具 DAU、夜間叫車轉化率、到家回報完成率',
    priority: 'P2',
  },
]

export const roadmapSuggestion = {
  now: ['城市移動晨報', '天氣 x 移動助理', '生活行程清單（買菜/接送/就醫）'],
  next: ['活動散場雷達', '就醫追蹤小幫手'],
  later: ['今晚安全返家小工具'],
}
