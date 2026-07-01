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
      <h3 class="font-semibold">決策重點</h3>
      <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
        <li v-for="item in analysisHighlights" :key="item" class="rounded-lg border bg-muted/20 p-3">- {{ item }}</li>
      </ul>
    </section>
  </section>
</template>
