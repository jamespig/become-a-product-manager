<script setup lang="ts">
import { Route } from '@lucide/vue'
import FeaturePlanningSection from '@/components/community/FeaturePlanningSection.vue'
import { insightReportsByFilter } from '@/content/topics/communityManagement'

const activeReport = insightReportsByFilter['product-strategy']
</script>

<template>
  <section class="space-y-6">
    <section class="rounded-2xl border bg-card p-6">
      <h2 class="inline-flex items-center gap-2 text-xl font-semibold tracking-tight sm:text-2xl">
        <Route class="size-5 text-primary" />
        功能規劃視圖
      </h2>
      <p class="mt-2 text-sm text-muted-foreground">
        這裡固定聚焦產品策略 PRD，不再混入市場或競品切換，避免規劃上下文被干擾。
      </p>
      <div class="mt-4 rounded-xl border bg-muted/20 p-4 text-sm text-muted-foreground">
        <p class="font-medium text-foreground">第一階段詳細文件已建立</p>
        <p class="mt-1">PRD：<code>community_management/product_strategy/第一階段功能需求_PRD_2026H2_v1.md</code></p>
        <p class="mt-1">Spec：<code>community_management/product_strategy/第一階段功能規格_Spec_2026H2_v1.md</code></p>
      </div>
    </section>

    <FeaturePlanningSection
      :feature-backlog="activeReport.featureBacklog"
      :metric-framework="activeReport.metricFramework"
      :prd-summary="activeReport.prdSummary"
    />
  </section>
</template>
