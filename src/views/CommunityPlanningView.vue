<script setup lang="ts">
import { Route } from '@lucide/vue'

const successThresholds = [
  '收繳率相較基線提升至少 8%（試點社區平均）',
  '催繳人工工時相較基線下降至少 20%',
  '高齡代辦結案時效相較基線下降至少 30%',
  '試點後管理端續用意願達 70% 以上',
]

const targetUsers = [
  { role: '管委會主委／財委', priority: 'P0', goal: '快速判斷收繳效率與 ROI 決策' },
  { role: '社區總幹事／管理員', priority: 'P0', goal: '日常高頻任務可追蹤、低摩擦完成' },
  { role: '物業公司管理層', priority: 'P0', goal: '導入流程可擴張且風險可控' },
  { role: '高齡住戶／家屬', priority: 'P1', goal: '服務履約透明、通知可確認' },
]

const featureScope = [
  'B-MVP 金流催繳看板（欠費分群、催繳狀態、對帳進度）',
  'A-MVP 高齡代辦工單（派工、SLA、履約證據、家屬通知）',
  'F-Foundation 權限與稽核基線（角色矩陣、操作紀錄）',
  'J-Lite 租客責任欄位（最低可行責任歸屬）',
]

const featureDetails = [
  {
    id: 'B-MVP',
    title: '金流催繳看板',
    objective: '縮短逾期追蹤與對帳時間，讓催繳成效可量化追蹤。',
    scenarios: '管理員進入工作台後，依 7/14/30 天逾期分群快速鎖定優先名單。',
    flow: '查看分群清單 -> 記錄聯繫狀態 -> 更新承諾繳款時間 -> 對帳入帳結果',
    io: '輸入：欠費名單、聯繫紀錄、入帳結果；輸出：收繳率、追蹤中案件、異常名單。',
    exceptions: '資料缺欄位時阻擋匯入並提示；同戶衝突時顯示合併建議規則。',
  },
  {
    id: 'A-MVP',
    title: '高齡代辦工單',
    objective: '提升代辦服務履約透明度，降低逾時與爭議。',
    scenarios: '管理員接獲來電或櫃台需求時，建立工單並設定 SLA 與責任人。',
    flow: '建立工單 -> 指派人員 -> SLA 監控 -> 上傳履約證據 -> 發送家屬通知',
    io: '輸入：服務類型、時限、負責人、履約證據；輸出：結案時效、取消率、通知結果。',
    exceptions: '派工不可用需支援改派且保留軌跡；通知失敗需進入重送佇列並標示原因。',
  },
  {
    id: 'F-Foundation',
    title: '權限與稽核基線',
    objective: '降低導入阻力與資安疑慮，建立可追溯治理能力。',
    scenarios: '使用者查詢個資、調整權限或進行結案覆核時，自動套用權限驗證。',
    flow: '檢查角色矩陣 -> 驗證授權 -> 允許或拒絕操作 -> 寫入稽核記錄',
    io: '輸入：使用者角色、操作事件、資源類型；輸出：授權結果、稽核事件流水。',
    exceptions: '權限不足需明確告知缺少權限項目，不可出現模糊錯誤訊息。',
  },
  {
    id: 'J-Lite',
    title: '租客責任欄位',
    objective: '在爭議案件中快速釐清責任歸屬，降低溝通成本。',
    scenarios: '催繳或代辦案件出現爭議時，標示住戶/租客/物業責任方與覆核狀態。',
    flow: '建立或更新案件 -> 指派責任方 -> 必要時覆核 -> 產出責任紀錄',
    io: '輸入：案件資訊、責任方、覆核註記；輸出：責任歸屬欄位、爭議追蹤紀錄。',
    exceptions: '責任方變更需保留版本紀錄，避免覆寫造成責任不清。',
  },
]

const dashboardBlocks = [
  'KPI 摘要列：收繳率、催繳工時、結案時效、送達率',
  '流程切換列：催繳流程 / 高齡代辦',
  '主要內容區：任務卡、狀態、下一步',
  '週次執行區：W1-W12 里程碑與 DoD',
  '風險依賴區：高風險提醒、阻塞原因、下一步動作',
]

const acceptanceCriteria = [
  '導覽可看見完整層級，標題層級連續（H2 -> H3）',
  '流程切換與主要按鈕可鍵盤操作，ARIA 語意完整',
  '畫面同時呈現 KPI、任務、里程碑、風險四層資訊',
  'Demo 可對應 B/A/F/J-Lite 模組語意且每流程至少 2 個可操作任務',
]

const timeline = [
  { week: 'W1-W2', milestone: 'PRD / Spec 定稿', owner: 'PM + Tech Lead' },
  { week: 'W3', milestone: 'Demo 與流程評審', owner: 'PM + Design + FE' },
  { week: 'W8', milestone: 'MVP 開發完成', owner: 'Engineering' },
  { week: 'W10', milestone: '試點導入完成', owner: 'PM + Ops' },
  { week: 'W12', milestone: '成效驗證與決策', owner: 'PM + Business' },
]
</script>

<template>
  <main class="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6">
    <section class="space-y-6">
      <header class="rounded-2xl border bg-card p-6">
        <h2 class="inline-flex items-center gap-2 text-xl font-semibold tracking-tight sm:text-2xl">
          <Route class="size-5 text-primary" />
          第一階段功能內容（2026H2）
        </h2>
        <p class="mt-2 text-sm leading-6 text-muted-foreground">
          以「B 金流催繳 + A 高齡代辦」作為第一階段可驗證 MVP，12 週內在 5-10 個試點社區驗證收繳效率、
          履約時效與續用意願可被量化提升。
        </p>
        <div class="mt-4 rounded-xl border bg-muted/20 p-4 text-sm text-muted-foreground">
          <p class="font-medium text-foreground">來源文件</p>
          <p class="mt-1">PRD：<code>community_management/product_strategy/第一階段功能需求_PRD_2026H2_v1.md</code></p>
          <p class="mt-1">Spec：<code>community_management/product_strategy/第一階段功能規格_Spec_2026H2_v1.md</code></p>
        </div>
      </header>

      <section class="grid gap-4 lg:grid-cols-2">
        <article class="rounded-2xl border bg-card p-6">
          <h3 class="text-lg font-semibold">本期驗證假設</h3>
          <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
            <li class="rounded-lg border bg-muted/20 p-3">
              H1：管委會/物業願意為「可追蹤催繳成效」導入並續用。
            </li>
            <li class="rounded-lg border bg-muted/20 p-3">
              H2：高齡代辦流程透明化可提升家屬信任與服務完成率。
            </li>
            <li class="rounded-lg border bg-muted/20 p-3">
              H3：先提供權限與稽核基線（F）可降低導入阻力。
            </li>
          </ul>
        </article>

        <article class="rounded-2xl border bg-card p-6">
          <h3 class="text-lg font-semibold">成功門檻</h3>
          <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
            <li v-for="item in successThresholds" :key="item" class="rounded-lg border bg-muted/20 p-3">
              {{ item }}
            </li>
          </ul>
        </article>
      </section>

      <section class="grid gap-4 lg:grid-cols-2">
        <article class="rounded-2xl border bg-card p-6">
          <h3 class="text-lg font-semibold">目標使用者</h3>
          <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
            <li v-for="user in targetUsers" :key="user.role" class="rounded-lg border bg-muted/20 p-3">
              <p class="font-medium text-foreground">{{ user.role }}（{{ user.priority }}）</p>
              <p class="mt-1">{{ user.goal }}</p>
            </li>
          </ul>
        </article>

        <article class="rounded-2xl border bg-card p-6">
          <h3 class="text-lg font-semibold">第一階段功能範圍</h3>
          <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
            <li v-for="scope in featureScope" :key="scope" class="rounded-lg border bg-muted/20 p-3">
              {{ scope }}
            </li>
          </ul>
        </article>
      </section>

      <article class="rounded-2xl border bg-card p-6">
        <h3 class="text-lg font-semibold">第一階段功能詳細描述</h3>
        <p class="mt-2 text-sm text-muted-foreground">
          以下內容對齊 PRD 與 Spec，補齊每個模組的目標、使用情境、流程、輸入輸出與例外處理。
        </p>
        <ul class="mt-4 grid gap-3 lg:grid-cols-2">
          <li v-for="feature in featureDetails" :key="feature.id" class="rounded-xl border bg-muted/20 p-4">
            <p class="text-sm font-semibold text-foreground">{{ feature.id }}｜{{ feature.title }}</p>
            <p class="mt-2 text-sm text-muted-foreground"><span class="font-medium text-foreground">目標：</span>{{ feature.objective }}</p>
            <p class="mt-1 text-sm text-muted-foreground"><span class="font-medium text-foreground">使用情境：</span>{{ feature.scenarios }}</p>
            <p class="mt-1 text-sm text-muted-foreground"><span class="font-medium text-foreground">主要流程：</span>{{ feature.flow }}</p>
            <p class="mt-1 text-sm text-muted-foreground"><span class="font-medium text-foreground">輸入/輸出：</span>{{ feature.io }}</p>
            <p class="mt-1 text-sm text-muted-foreground"><span class="font-medium text-foreground">例外處理：</span>{{ feature.exceptions }}</p>
          </li>
        </ul>
      </article>

      <article class="rounded-2xl border bg-card p-6">
        <h3 class="text-lg font-semibold">管理端工作台內容架構</h3>
        <ul class="mt-3 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
          <li v-for="block in dashboardBlocks" :key="block" class="rounded-lg border bg-muted/20 p-3">
            {{ block }}
          </li>
        </ul>
      </article>

      <section class="grid gap-4 lg:grid-cols-2">
        <article class="rounded-2xl border bg-card p-6">
          <h3 class="text-lg font-semibold">驗收標準（AC）</h3>
          <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
            <li
              v-for="criterion in acceptanceCriteria"
              :key="criterion"
              class="rounded-lg border bg-muted/20 p-3"
            >
              {{ criterion }}
            </li>
          </ul>
        </article>

        <article class="rounded-2xl border bg-card p-6">
          <h3 class="text-lg font-semibold">12 週里程碑</h3>
          <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
            <li v-for="item in timeline" :key="item.week" class="rounded-lg border bg-muted/20 p-3">
              <p class="font-medium text-foreground">{{ item.week }}｜{{ item.milestone }}</p>
              <p class="mt-1">負責角色：{{ item.owner }}</p>
            </li>
          </ul>
        </article>
      </section>
    </section>
  </main>
</template>
