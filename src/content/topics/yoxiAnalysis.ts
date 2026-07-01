export interface MetricCard {
  label: string
  value: string
  insight: string
}

export interface DistributionPoint {
  label: string
  count: number
  pct: number
}

export interface TimePoint {
  label: string
  count: number
}

export interface GeoHotspot {
  location: string
  address: string
  count: number
  pct: number
}

export const yoxiOverviewMetrics: MetricCard[] = [
  {
    label: '總訂單數',
    value: '964,991',
    insight: '期間為 2026/02/01 - 2026/04/30，共 3 個月樣本。',
  },
  {
    label: '獨立 Rider 數',
    value: '132,035',
    insight: '平均每位 Rider 約 7.3 筆訂單，具重複使用特性。',
  },
  {
    label: '主力價格帶',
    value: '100-300 元',
    insight: '100-300 元合計 68.26%，為平台主要交易帶。',
  },
  {
    label: '平日訂單占比',
    value: '74.47%',
    insight: '需求主體來自工作日通勤與日常剛需場景。',
  },
]

export const fareDistribution: DistributionPoint[] = [
  { label: '0-100', count: 50745, pct: 5.26 },
  { label: '100-200', count: 378105, pct: 39.18 },
  { label: '200-300', count: 280626, pct: 29.08 },
  { label: '300-400', count: 142111, pct: 14.73 },
  { label: '400-500', count: 60015, pct: 6.22 },
  { label: '500+', count: 53389, pct: 5.53 },
]

export const daypartDistribution: DistributionPoint[] = [
  { label: '凌晨(0-5)', count: 92296, pct: 9.56 },
  { label: '早高峰(7-10)', count: 220828, pct: 22.88 },
  { label: '午間(11-13)', count: 159307, pct: 16.51 },
  { label: '下午(14-16)', count: 150565, pct: 15.6 },
  { label: '晚高峰(17-20)', count: 207016, pct: 21.45 },
  { label: '晚間(21-23)', count: 114345, pct: 11.85 },
]

export const hourlyDemand: TimePoint[] = [
  { label: '00', count: 25227 },
  { label: '01', count: 18456 },
  { label: '02', count: 14281 },
  { label: '03', count: 11539 },
  { label: '04', count: 10918 },
  { label: '05', count: 11875 },
  { label: '06', count: 20634 },
  { label: '07', count: 38904 },
  { label: '08', count: 58896 },
  { label: '09', count: 63592 },
  { label: '10', count: 59436 },
  { label: '11', count: 55692 },
  { label: '12', count: 50469 },
  { label: '13', count: 53146 },
  { label: '14', count: 50479 },
  { label: '15', count: 49799 },
  { label: '16', count: 50287 },
  { label: '17', count: 55260 },
  { label: '18', count: 55164 },
  { label: '19', count: 48715 },
  { label: '20', count: 47877 },
  { label: '21', count: 47673 },
  { label: '22', count: 37299 },
  { label: '23', count: 29373 },
]

export const weekdayDemand: TimePoint[] = [
  { label: '週一', count: 132005 },
  { label: '週二', count: 140920 },
  { label: '週三', count: 148119 },
  { label: '週四', count: 151468 },
  { label: '週五', count: 146126 },
  { label: '週六', count: 129957 },
  { label: '週日', count: 116396 },
]

export const pickupHotspots: GeoHotspot[] = [
  {
    location: '24.113, 120.616',
    address: '台中烏日高鐵特區排班計程車上車帶（嘟嘟房P2周邊）',
    count: 3967,
    pct: 0.411,
  },
  {
    location: '24.184, 120.604',
    address: '台中市西屯區台灣大道四段 1650 號周邊',
    count: 2594,
    pct: 0.269,
  },
  {
    location: '25.047, 121.518',
    address: '台北市中正區公園路（台北車站商圈）',
    count: 1507,
    pct: 0.156,
  },
  {
    location: '22.619, 120.297',
    address: '高雄市前金區允文街 63 號周邊',
    count: 1489,
    pct: 0.154,
  },
  {
    location: '22.998, 120.212',
    address: '台南市北區北門路二段 15 巷周邊',
    count: 1445,
    pct: 0.15,
  },
  {
    location: '25.015, 121.463',
    address: '新北市板橋區站前路（新板特區）',
    count: 1349,
    pct: 0.14,
  },
]

export const dropoffHotspots: GeoHotspot[] = [
  {
    location: '24.112, 120.616',
    address: '台中烏日高鐵站區二路（高鐵台中站）',
    count: 9183,
    pct: 0.952,
  },
  {
    location: '22.687, 120.308',
    address: '高雄左營高鐵路 105 號（高鐵左營站）',
    count: 5632,
    pct: 0.584,
  },
  {
    location: '25.048, 121.516',
    address: '台北市中正區承德路一段計程車上客處（台北車站）',
    count: 4149,
    pct: 0.43,
  },
  {
    location: '25.047, 121.518',
    address: '台北市中正區公園路（台北車站商圈）',
    count: 3229,
    pct: 0.335,
  },
  {
    location: '25.063, 121.552',
    address: '台北市松山區敦化北路 340-9 號周邊',
    count: 2685,
    pct: 0.278,
  },
  {
    location: '22.997, 120.212',
    address: '台南市中西區北門路一段周邊',
    count: 2658,
    pct: 0.275,
  },
]

export const analysisHighlights = [
  '100-300 元價格帶占比達 68.26%，短中程是主要營收來源。',
  '叫車需求高峰集中於 08:00-10:00 與 17:00-20:00，兩段合計 44.33%。',
  '平日需求顯著高於週末，週二至週四為主要尖峰調度窗口。',
  '下車熱區集中度高於上車熱區，適合做「交通樞紐到站接駁」專案化營運。',
]
