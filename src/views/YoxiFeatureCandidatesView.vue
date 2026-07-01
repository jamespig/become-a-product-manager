<script setup lang="ts">
import { Lightbulb, ListChecks, Sparkles } from '@lucide/vue'
import {
  dailyOpenFeatureCandidates,
  roadmapSuggestion,
  yoxiInsightSummaries,
} from '@/content/topics/yoxiFeatureCandidates'
</script>

<template>
  <section class="space-y-6">
    <section class="rounded-2xl border bg-card p-6">
      <h2 class="inline-flex items-center gap-2 text-xl font-semibold tracking-tight sm:text-2xl">
        <Sparkles class="size-5 text-primary" />
        yoxi 功能選手池（每日必開導向）
      </h2>
      <p class="mt-2 text-sm text-muted-foreground">
        以目前資料洞察回推「城市生活中每天會打開 App 查看」的功能，先提供日常決策資訊，再在合適時機自然轉化為叫車行為。
      </p>
      <div class="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="item in yoxiInsightSummaries"
          :key="item.label"
          class="rounded-xl border bg-muted/20 p-4"
        >
          <p class="text-xs text-muted-foreground">{{ item.label }}</p>
          <p class="mt-2 text-xl font-semibold">{{ item.value }}</p>
          <p class="mt-2 text-sm text-muted-foreground">{{ item.implication }}</p>
        </article>
      </div>
    </section>

    <section class="rounded-2xl border bg-card p-6">
      <h3 class="inline-flex items-center gap-2 font-semibold">
        <Lightbulb class="size-4 text-primary" />
        功能候選清單
      </h3>
      <p class="mt-2 text-sm text-muted-foreground">
        以下候選以「每日打開動機」優先，並設計「轉化觸發點」，避免一開始就硬推叫車。
      </p>

      <div class="mt-4 overflow-hidden rounded-md border">
        <div class="max-h-144 overflow-auto">
          <table class="w-full text-sm">
            <thead class="sticky top-0 bg-background">
              <tr class="text-left text-muted-foreground">
                <th class="px-3 py-2 font-medium">優先級</th>
                <th class="px-3 py-2 font-medium">功能</th>
                <th class="px-3 py-2 font-medium">目標客群</th>
                <th class="px-3 py-2 font-medium">每日價值</th>
                <th class="px-3 py-2 font-medium">主要場景</th>
                <th class="px-3 py-2 font-medium">核心資訊</th>
                <th class="px-3 py-2 font-medium">轉化觸發點</th>
                <th class="px-3 py-2 font-medium">KPI</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in dailyOpenFeatureCandidates"
                :key="item.id"
                class="border-t align-top"
              >
                <td class="px-3 py-2">
                  <span
                    class="inline-flex rounded-full px-2 py-0.5 text-xs font-medium"
                    :class="
                      item.priority === 'P0'
                        ? 'bg-primary/15 text-primary'
                        : item.priority === 'P1'
                          ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300'
                          : 'bg-muted text-muted-foreground'
                    "
                  >
                    {{ item.priority }}
                  </span>
                </td>
                <td class="px-3 py-2 font-medium text-foreground">{{ item.name }}</td>
                <td class="px-3 py-2">{{ item.targetSegment }}</td>
                <td class="px-3 py-2">{{ item.dailyValue }}</td>
                <td class="px-3 py-2">{{ item.primaryScenario }}</td>
                <td class="px-3 py-2">{{ item.coreInfo }}</td>
                <td class="px-3 py-2">{{ item.conversionTrigger }}</td>
                <td class="px-3 py-2">{{ item.kpi }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="rounded-2xl border bg-card p-6">
      <h3 class="inline-flex items-center gap-2 font-semibold">
        <ListChecks class="size-4 text-primary" />
        推進節奏建議
      </h3>
      <div class="mt-4 grid gap-4 md:grid-cols-3">
        <article class="rounded-xl border bg-muted/20 p-4">
          <p class="text-xs font-medium text-primary">Now（先做）</p>
          <ul class="mt-2 space-y-2 text-sm text-muted-foreground">
            <li v-for="item in roadmapSuggestion.now" :key="item">- {{ item }}</li>
          </ul>
        </article>
        <article class="rounded-xl border bg-muted/20 p-4">
          <p class="text-xs font-medium text-primary">Next（接續）</p>
          <ul class="mt-2 space-y-2 text-sm text-muted-foreground">
            <li v-for="item in roadmapSuggestion.next" :key="item">- {{ item }}</li>
          </ul>
        </article>
        <article class="rounded-xl border bg-muted/20 p-4">
          <p class="text-xs font-medium text-primary">Later（後續）</p>
          <ul class="mt-2 space-y-2 text-sm text-muted-foreground">
            <li v-for="item in roadmapSuggestion.later" :key="item">- {{ item }}</li>
          </ul>
        </article>
      </div>
    </section>
  </section>
</template>
