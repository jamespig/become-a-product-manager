<script setup lang="ts">
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Bar, Line } from 'vue-chartjs'
import { BarChart3, Clock3, MapPinned } from '@lucide/vue'
import { computed } from 'vue'
import {
  analysisHighlights,
  daypartDistribution,
  dropoffHotspots,
  fareDistribution,
  hourlyDemand,
  pickupHotspots,
  weekdayDemand,
  yoxiOverviewMetrics,
} from '@/content/topics/yoxiAnalysis'
import {
  nonStationCategories,
  nonStationHighFreqPlaces,
  nonStationSummary,
} from '@/content/topics/yoxiNonStation'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
)

const baseOptions = {
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

const fareChartData = computed(() => ({
  labels: fareDistribution.map((item) => item.label),
  datasets: [
    {
      label: '訂單數',
      data: fareDistribution.map((item) => item.count),
      borderRadius: 10,
      backgroundColor: '#2563eb',
    },
  ],
}))

const daypartChartData = computed(() => ({
  labels: daypartDistribution.map((item) => item.label),
  datasets: [
    {
      label: '占比(%)',
      data: daypartDistribution.map((item) => item.pct),
      borderRadius: 10,
      backgroundColor: '#14b8a6',
    },
  ],
}))

const hourlyChartData = computed(() => ({
  labels: hourlyDemand.map((item) => item.label),
  datasets: [
    {
      label: '每小時叫車量',
      data: hourlyDemand.map((item) => item.count),
      borderColor: '#6366f1',
      backgroundColor: 'rgba(99, 102, 241, 0.18)',
      tension: 0.25,
      fill: true,
      pointRadius: 2,
    },
  ],
}))

const weekdayChartData = computed(() => ({
  labels: weekdayDemand.map((item) => item.label),
  datasets: [
    {
      label: '訂單數',
      data: weekdayDemand.map((item) => item.count),
      borderRadius: 10,
      backgroundColor: '#f97316',
    },
  ],
}))

const percentChartOptions = {
  ...baseOptions,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value: number | string) => `${value}%`,
      },
    },
  },
}
</script>

<template>
  <section class="space-y-6">
    <section class="rounded-2xl border bg-card p-6">
      <h2 class="inline-flex items-center gap-2 text-xl font-semibold tracking-tight sm:text-2xl">
        <BarChart3 class="size-5 text-primary" />
        yoxi 數據視覺化分析
      </h2>
      <p class="mt-2 text-sm text-muted-foreground">
        依 2026/02-04 的訂單資料，聚焦三件事：消費區間、叫車時段與上下車熱區。
      </p>

      <div class="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <article v-for="item in yoxiOverviewMetrics" :key="item.label" class="rounded-xl border bg-muted/20 p-4">
          <p class="text-xs text-muted-foreground">{{ item.label }}</p>
          <p class="mt-2 text-2xl font-semibold">{{ item.value }}</p>
          <p class="mt-2 text-sm text-muted-foreground">{{ item.insight }}</p>
        </article>
      </div>
    </section>

    <section class="rounded-2xl border bg-card p-6">
      <h3 class="font-semibold">消費區間結構</h3>
      <p class="mt-2 text-sm text-muted-foreground">主力集中在 100-300 元區間，顯示平台核心需求偏向短中程剛需。</p>
      <div class="mt-4 grid gap-6 xl:grid-cols-2">
        <article class="rounded-xl border bg-muted/20 p-5">
          <h4 class="font-medium">價格帶訂單數</h4>
          <div class="mt-4 h-72">
            <Bar :data="fareChartData" :options="baseOptions" />
          </div>
        </article>
        <article class="rounded-xl border bg-muted/20 p-5">
          <h4 class="font-medium">時段占比</h4>
          <div class="mt-4 h-72">
            <Bar :data="daypartChartData" :options="percentChartOptions" />
          </div>
        </article>
      </div>
    </section>

    <section class="rounded-2xl border bg-card p-6">
      <h3 class="inline-flex items-center gap-2 font-semibold">
        <Clock3 class="size-4 text-primary" />
        叫車時段趨勢
      </h3>
      <p class="mt-2 text-sm text-muted-foreground">08:00-10:00 與 17:00-20:00 為主要尖峰，平日需求顯著高於週末。</p>
      <div class="mt-4 grid gap-6 xl:grid-cols-2">
        <article class="rounded-xl border bg-muted/20 p-5">
          <h4 class="font-medium">24 小時叫車量</h4>
          <div class="mt-4 h-72">
            <Line :data="hourlyChartData" :options="baseOptions" />
          </div>
        </article>
        <article class="rounded-xl border bg-muted/20 p-5">
          <h4 class="font-medium">星期別叫車量</h4>
          <div class="mt-4 h-72">
            <Bar :data="weekdayChartData" :options="baseOptions" />
          </div>
        </article>
      </div>
    </section>

    <section class="rounded-2xl border bg-card p-6">
      <h3 class="inline-flex items-center gap-2 font-semibold">
        <MapPinned class="size-4 text-primary" />
        上下車熱區（座標網格 Top 6）
      </h3>
      <p class="mt-2 text-sm text-muted-foreground">
        下車點的集中度高於上車點，代表「目的地導向」的營運設計有更高價值。
      </p>

      <div class="mt-4 grid gap-4 xl:grid-cols-2">
        <article class="rounded-xl border bg-muted/20 p-5">
          <h4 class="font-medium">上車熱區</h4>
          <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
            <li
              v-for="item in pickupHotspots"
              :key="item.location"
              class="rounded-md border bg-card px-3 py-2"
            >
              <p class="font-medium text-foreground">{{ item.address }}</p>
              <p class="mt-1 flex items-center justify-between gap-3 text-xs sm:text-sm">
                <span>座標 {{ item.location }}</span>
                <span>{{ item.count }} 單（{{ item.pct }}%）</span>
              </p>
            </li>
          </ul>
        </article>

        <article class="rounded-xl border bg-muted/20 p-5">
          <h4 class="font-medium">下車熱區</h4>
          <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
            <li
              v-for="item in dropoffHotspots"
              :key="item.location"
              class="rounded-md border bg-card px-3 py-2"
            >
              <p class="font-medium text-foreground">{{ item.address }}</p>
              <p class="mt-1 flex items-center justify-between gap-3 text-xs sm:text-sm">
                <span>座標 {{ item.location }}</span>
                <span>{{ item.count }} 單（{{ item.pct }}%）</span>
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>

    <section class="rounded-2xl border bg-card p-6">
      <h3 class="font-semibold">排除車站後的高頻場所（全列）</h3>
      <p class="mt-2 text-sm text-muted-foreground">
        已排除高鐵/火車站/捷運/機場/轉運等站點關鍵字。命名地點共 {{ nonStationSummary.namedTotal.toLocaleString() }} 筆，其中非車站地點
        {{ nonStationSummary.nonStationNamedTotal.toLocaleString() }} 筆（{{ nonStationSummary.nonStationRatioPct }}%）。
      </p>

      <div class="mt-4 grid gap-4 md:grid-cols-3">
        <article class="rounded-xl border bg-muted/20 p-4">
          <p class="text-xs text-muted-foreground">高頻門檻</p>
          <p class="mt-2 text-2xl font-semibold">>= {{ nonStationSummary.highFreqThreshold }}</p>
          <p class="mt-2 text-sm text-muted-foreground">只保留高頻地點，確保清單可操作。</p>
        </article>
        <article class="rounded-xl border bg-muted/20 p-4">
          <p class="text-xs text-muted-foreground">高頻地點總數</p>
          <p class="mt-2 text-2xl font-semibold">{{ nonStationSummary.highFreqPlacesCount }}</p>
          <p class="mt-2 text-sm text-muted-foreground">以下地點已完整列出。</p>
        </article>
        <article class="rounded-xl border bg-muted/20 p-4">
          <p class="text-xs text-muted-foreground">分類數量</p>
          <p class="mt-2 text-2xl font-semibold">{{ nonStationCategories.length }}</p>
          <p class="mt-2 text-sm text-muted-foreground">顯示各類別上下車分布差異。</p>
        </article>
      </div>

      <div class="mt-6 grid gap-6 xl:grid-cols-2">
        <article class="rounded-xl border bg-muted/20 p-5">
          <h4 class="font-medium">高頻分類（排除車站）</h4>
          <div class="mt-3 overflow-hidden rounded-md border">
            <div class="max-h-96 overflow-auto">
              <table class="w-full text-sm">
                <thead class="sticky top-0 bg-background">
                  <tr class="text-left text-muted-foreground">
                    <th class="px-3 py-2 font-medium">分類</th>
                    <th class="px-3 py-2 font-medium">總筆數</th>
                    <th class="px-3 py-2 font-medium">上車</th>
                    <th class="px-3 py-2 font-medium">下車</th>
                    <th class="px-3 py-2 font-medium">占比</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in nonStationCategories"
                    :key="item.category"
                    class="border-t"
                  >
                    <td class="px-3 py-2">{{ item.category }}</td>
                    <td class="px-3 py-2">{{ item.count.toLocaleString() }}</td>
                    <td class="px-3 py-2">{{ item.pickup_count.toLocaleString() }}</td>
                    <td class="px-3 py-2">{{ item.dropoff_count.toLocaleString() }}</td>
                    <td class="px-3 py-2">{{ item.pct_of_named_non_station }}%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </article>

        <article class="rounded-xl border bg-muted/20 p-5">
          <h4 class="font-medium">高頻地點全清單（排除車站）</h4>
          <div class="mt-3 overflow-hidden rounded-md border">
            <div class="max-h-96 overflow-auto">
              <table class="w-full text-sm">
                <thead class="sticky top-0 bg-background">
                  <tr class="text-left text-muted-foreground">
                    <th class="px-3 py-2 font-medium">地點</th>
                    <th class="px-3 py-2 font-medium">總筆數</th>
                    <th class="px-3 py-2 font-medium">上車</th>
                    <th class="px-3 py-2 font-medium">下車</th>
                    <th class="px-3 py-2 font-medium">占比</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in nonStationHighFreqPlaces"
                    :key="item.place"
                    class="border-t align-top"
                  >
                    <td class="px-3 py-2">{{ item.place }}</td>
                    <td class="px-3 py-2">{{ item.count.toLocaleString() }}</td>
                    <td class="px-3 py-2">{{ item.pickup_count.toLocaleString() }}</td>
                    <td class="px-3 py-2">{{ item.dropoff_count.toLocaleString() }}</td>
                    <td class="px-3 py-2">{{ item.pct_of_named_non_station }}%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="rounded-2xl border bg-card p-6">
      <h3 class="font-semibold">決策重點</h3>
      <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
        <li v-for="item in analysisHighlights" :key="item" class="rounded-lg border bg-muted/20 p-3">- {{ item }}</li>
      </ul>
    </section>
  </section>
</template>
