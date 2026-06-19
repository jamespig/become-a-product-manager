<script setup lang="ts">
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import { Bar, Radar } from 'vue-chartjs'
import { BarChart3, CheckCheck, FileText, TrendingUp } from '@lucide/vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import {
  insightFilters,
  insightReportsByFilter,
  type InsightFilterId,
} from '@/content/topics/communityManagement'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale,
)

const route = useRoute()
const router = useRouter()

const activeFilter = computed<InsightFilterId>({
  get() {
    const filter = route.query.filter
    if (filter === 'market-analysis' || filter === 'competitive-analysis' || filter === 'product-strategy') {
      return filter
    }
    return 'market-analysis'
  },
  set(value) {
    void router.replace({
      query: {
        ...route.query,
        filter: value,
      },
    })
  },
})

const activeReport = computed(() => insightReportsByFilter[activeFilter.value])
const getFilterTabId = (id: InsightFilterId) => `insight-tab-${id}`
const getFilterPanelId = (id: InsightFilterId) => `insight-panel-${id}`

const sharedOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: '#64748b',
        boxWidth: 10,
      },
    },
  },
}

const healthChartOptions = {
  ...sharedOptions,
  scales: {
    r: {
      suggestedMin: 0,
      suggestedMax: 5,
      ticks: {
        stepSize: 1,
      },
    },
  },
}

const priorityChartOptions = {
  ...sharedOptions,
  scales: {
    y: {
      beginAtZero: true,
      suggestedMax: 100,
      ticks: {
        stepSize: 20,
      },
    },
  },
}

const healthChartData = computed(() => ({
  labels: activeReport.value.healthScores.map((item) => item.label),
  datasets: [
    {
      label: '主題健康度（5 分制）',
      data: activeReport.value.healthScores.map((item) => item.score),
      backgroundColor: 'rgba(59, 130, 246, 0.16)',
      borderColor: '#2563eb',
      pointBackgroundColor: '#2563eb',
      pointRadius: 4,
    },
  ],
}))

const priorityChartData = computed(() => ({
  labels: activeReport.value.priorityScores.map((item) => item.label),
  datasets: [
    {
      label: '執行優先權（100 分制）',
      data: activeReport.value.priorityScores.map((item) => item.score),
      borderRadius: 10,
      backgroundColor: ['#14b8a6', '#0ea5e9', '#6366f1'],
    },
  ],
}))
</script>

<template>
  <section class="space-y-6">
    <section class="rounded-2xl border bg-card p-6">
      <h2 class="inline-flex items-center gap-2 text-xl font-semibold tracking-tight sm:text-2xl">
        <FileText class="size-5 text-primary" />
        分析報告（互動式）
      </h2>
      <p class="mt-2 text-sm text-muted-foreground">
        可切換「市場分析 / 競品分析 / 產品策略」，下方內容、圖表與趨勢總結會同步更新。
      </p>

      <div class="mt-4">
        <p id="insight-filter-label" class="text-xs font-medium text-muted-foreground">分析報告切換</p>
        <div class="mt-2 flex flex-wrap gap-2" role="tablist" aria-labelledby="insight-filter-label">
          <Button
            v-for="item in insightFilters"
            :id="getFilterTabId(item.id)"
            :key="item.id"
            type="button"
            role="tab"
            :aria-selected="item.id === activeFilter"
            :aria-controls="getFilterPanelId(item.id)"
            :tabindex="item.id === activeFilter ? 0 : -1"
            :variant="item.id === activeFilter ? 'default' : 'outline'"
            class="justify-start"
            @click="activeFilter = item.id"
          >
            {{ item.label }}
          </Button>
        </div>
        <p class="mt-2 text-xs text-muted-foreground">
          {{ insightFilters.find((item) => item.id === activeFilter)?.hint }}
        </p>
      </div>

      <div
        :id="getFilterPanelId(activeFilter)"
        class="mt-5 rounded-xl border bg-muted/20 p-4"
        role="tabpanel"
        :aria-labelledby="getFilterTabId(activeFilter)"
      >
        <h3 class="font-semibold">{{ activeReport.title }}</h3>
        <p class="mt-2 text-sm text-muted-foreground">{{ activeReport.subtitle }}</p>
      </div>

      <div class="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <article v-for="metric in activeReport.keyMetrics" :key="metric.label" class="rounded-xl border bg-muted/20 p-4">
          <p class="text-xs text-muted-foreground">{{ metric.label }}</p>
          <p class="mt-2 text-2xl font-semibold">{{ metric.value }}</p>
          <p class="mt-2 text-sm text-muted-foreground">{{ metric.insight }}</p>
        </article>
      </div>

      <div class="mt-6 grid gap-4 xl:grid-cols-3">
        <article
          v-for="section in activeReport.analysisSections"
          :key="section.id"
          class="rounded-xl border bg-muted/20 p-5"
        >
          <h3 class="font-semibold">{{ section.title }}</h3>
          <p class="mt-2 text-sm text-muted-foreground">{{ section.summary }}</p>
          <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
            <li v-for="item in section.bullets" :key="item">- {{ item }}</li>
          </ul>
        </article>
      </div>

      <div
        v-if="activeReport.competitorProfiles?.length"
        class="mt-6 rounded-xl border bg-muted/20 p-5"
      >
        <h3 class="font-semibold">競品資料夾內容整理</h3>
        <p class="mt-2 text-sm text-muted-foreground">
          以下整理自 `community_management/competitive_analysis`，方便直接做策略對照。
        </p>
        <div class="mt-4 grid gap-4 xl:grid-cols-2">
          <article
            v-for="profile in activeReport.competitorProfiles"
            :key="profile.id"
            class="rounded-lg border bg-card p-4"
          >
            <p class="text-xs text-muted-foreground">{{ profile.sourceFile }}</p>
            <h4 class="mt-2 text-lg font-semibold">{{ profile.name }}</h4>
            <p class="mt-1 text-sm text-muted-foreground">{{ profile.position }}</p>
            <p class="mt-2 text-sm font-medium">規模：{{ profile.scale }}</p>

            <p class="mt-3 text-sm font-medium">優勢</p>
            <ul class="mt-1 space-y-1 text-sm text-muted-foreground">
              <li v-for="item in profile.strengths" :key="item">- {{ item }}</li>
            </ul>

            <p class="mt-3 text-sm font-medium">弱點</p>
            <ul class="mt-1 space-y-1 text-sm text-muted-foreground">
              <li v-for="item in profile.weaknesses" :key="item">- {{ item }}</li>
            </ul>

            <p class="mt-3 text-sm font-medium">我方啟示</p>
            <ul class="mt-1 space-y-1 text-sm text-muted-foreground">
              <li v-for="item in profile.takeaways" :key="item">- {{ item }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="rounded-2xl border bg-card p-6">
      <h2 class="inline-flex items-center gap-2 text-xl font-semibold tracking-tight sm:text-2xl">
        <BarChart3 class="size-5 text-primary" />
        視覺化重點（Chart.js）
      </h2>
      <p class="mt-2 text-sm text-muted-foreground">依目前篩選主題，顯示該主題的健康度雷達與執行優先權圖表。</p>

      <div class="mt-6 grid gap-6 xl:grid-cols-2">
        <article class="rounded-xl border bg-muted/20 p-5">
          <h3 class="inline-flex items-center gap-2 font-semibold">
            <CheckCheck class="size-4 text-primary" />
            主題健康度（5 分制）
          </h3>
          <div class="mt-4 h-72">
            <Radar :data="healthChartData" :options="healthChartOptions" />
          </div>
        </article>

        <article class="rounded-xl border bg-muted/20 p-5">
          <h3 class="inline-flex items-center gap-2 font-semibold">
            <BarChart3 class="size-4 text-primary" />
            執行優先權（100 分制）
          </h3>
          <div class="mt-4 h-72">
            <Bar :data="priorityChartData" :options="priorityChartOptions" />
          </div>
        </article>
      </div>

      <article class="mt-6 rounded-xl border bg-muted/20 p-5">
        <h3 class="font-semibold">關鍵解讀</h3>
        <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
          <li v-for="item in activeReport.highlights" :key="item">- {{ item }}</li>
        </ul>
      </article>
    </section>

    <section class="rounded-2xl border bg-card p-6">
      <h2 class="inline-flex items-center gap-2 text-xl font-semibold tracking-tight sm:text-2xl">
        <TrendingUp class="size-5 text-primary" />
        趨勢總結
      </h2>
      <p class="mt-2 text-sm text-muted-foreground">以下趨勢會隨篩選主題切換，協助你快速抓到各主題的決策方向。</p>
      <ul class="mt-4 space-y-3 text-sm text-muted-foreground">
        <li v-for="item in activeReport.trendSummaries" :key="item" class="rounded-lg border bg-muted/20 p-3">- {{ item }}</li>
      </ul>
    </section>
  </section>
</template>
