<script setup lang="ts">
import { computed } from 'vue'
import type { FeaturePlanItem, MetricFramework, PrdSummary } from '@/content/topics/communityManagement'

interface Props {
  featureBacklog: FeaturePlanItem[]
  metricFramework?: MetricFramework
  prdSummary?: PrdSummary
}

const props = defineProps<Props>()

const groupedBacklog = computed(() => {
  const phases: Array<'Now' | 'Next' | 'Later'> = ['Now', 'Next', 'Later']
  return phases.map((phase) => ({
    phase,
    items: props.featureBacklog.filter((item) => item.phase === phase),
  }))
})
</script>

<template>
  <section class="rounded-2xl border bg-card p-6">
    <h2 class="text-xl font-semibold tracking-tight sm:text-2xl">功能規劃</h2>
    <p class="mt-2 text-sm text-muted-foreground">
      以 Now / Next / Later 管理功能推進，並對應 KPI、依賴與風險，確保規劃可執行。
    </p>

    <article v-if="prdSummary" class="mt-5 rounded-xl border bg-muted/20 p-5">
      <h3 class="font-semibold">PRD 核心摘要</h3>
      <p class="mt-2 text-sm text-muted-foreground">{{ prdSummary.problemStatement }}</p>

      <div class="mt-4 grid gap-4 xl:grid-cols-2">
        <div>
          <p class="text-sm font-medium">目標用戶</p>
          <ul class="mt-2 space-y-2 text-sm text-muted-foreground">
            <li v-for="user in prdSummary.targetUsers" :key="user.role">
              <span class="font-medium text-foreground">{{ user.priority }} {{ user.role }}</span>：{{ user.painPoint }}
            </li>
          </ul>
        </div>
        <div>
          <p class="text-sm font-medium">MVP 模組</p>
          <ul class="mt-2 space-y-2 text-sm text-muted-foreground">
            <li v-for="module in prdSummary.mvpModules" :key="module.name">
              <span class="font-medium text-foreground">{{ module.priority }} {{ module.name }}</span>：{{ module.objective }}
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-4 grid gap-4 xl:grid-cols-2">
        <div>
          <p class="text-sm font-medium">里程碑</p>
          <ul class="mt-2 space-y-2 text-sm text-muted-foreground">
            <li v-for="milestone in prdSummary.milestones" :key="milestone.phase">
              <span class="font-medium text-foreground">{{ milestone.phase }}（{{ milestone.timeframe }}）</span>：{{ milestone.goal }}
            </li>
          </ul>
        </div>
        <div>
          <p class="text-sm font-medium">主要風險</p>
          <ul class="mt-2 space-y-2 text-sm text-muted-foreground">
            <li v-for="risk in prdSummary.risks" :key="risk.risk">
              <span class="font-medium text-foreground">{{ risk.impact }}風險 {{ risk.risk }}</span>：{{ risk.mitigation }}
            </li>
          </ul>
        </div>
      </div>
    </article>

    <div class="mt-5 grid gap-4 xl:grid-cols-3">
      <article v-for="group in groupedBacklog" :key="group.phase" class="rounded-xl border bg-muted/20 p-4">
        <h3 class="font-semibold">{{ group.phase }}</h3>
        <div class="mt-3 space-y-3">
          <div v-for="item in group.items" :key="item.id" class="rounded-lg border bg-card p-3">
            <p class="text-sm font-medium">{{ item.title }}</p>
            <p class="mt-1 text-sm text-muted-foreground">{{ item.objective }}</p>
            <ul class="mt-2 space-y-1 text-xs text-muted-foreground">
              <li>- KPI：{{ item.kpi }}</li>
              <li>- 依賴：{{ item.dependency }}</li>
              <li>- 風險：{{ item.risk }}</li>
            </ul>
          </div>
        </div>
      </article>
    </div>

    <article v-if="metricFramework" class="mt-6 rounded-xl border bg-muted/20 p-5">
      <h3 class="font-semibold">指標對齊（Metric Framework）</h3>
      <p class="mt-2 text-sm">
        <span class="font-medium">North Star：</span>
        {{ metricFramework.northStar }}
      </p>

      <div class="mt-3">
        <p class="text-sm font-medium">Guardrails</p>
        <ul class="mt-1 space-y-1 text-sm text-muted-foreground">
          <li v-for="guardrail in metricFramework.guardrails" :key="guardrail">- {{ guardrail }}</li>
        </ul>
      </div>

      <div class="mt-4 overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b text-left text-muted-foreground">
              <th class="px-2 py-2 font-medium">指標</th>
              <th class="px-2 py-2 font-medium">Baseline</th>
              <th class="px-2 py-2 font-medium">Target</th>
              <th class="px-2 py-2 font-medium">驗證方式</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in metricFramework.metrics" :key="item.metric" class="border-b last:border-b-0">
              <td class="px-2 py-2">{{ item.metric }}</td>
              <td class="px-2 py-2 text-muted-foreground">{{ item.baseline }}</td>
              <td class="px-2 py-2">{{ item.target }}</td>
              <td class="px-2 py-2 text-muted-foreground">{{ item.validation }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  </section>
</template>
