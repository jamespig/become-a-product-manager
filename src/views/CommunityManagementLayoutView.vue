<script setup lang="ts">
import { LayoutGrid, LineChart, Palette, Route } from '@lucide/vue'
import { RouterLink, RouterView } from 'vue-router'

const navItems = [
  { to: '/community-management/overview', label: '主題總覽', icon: LayoutGrid },
  { to: '/community-management/insights', label: '分析報告', icon: LineChart },
  { to: '/community-management/planning', label: '功能規劃', icon: Route },
  { to: '/community-management/design-system', label: 'Design System', icon: Palette },
]
</script>

<template>
  <main class="mx-auto w-full max-w-7xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
    <section class="rounded-2xl border bg-card p-6">
      <h1 class="text-2xl font-semibold tracking-tight sm:text-3xl">Community Management 工作台</h1>
      <p class="mt-2 text-sm text-muted-foreground sm:text-base">
        內容已切分為四個頁面，避免資訊過載。可依任務進入總覽、分析、規劃或設計系統視圖。
      </p>
      <nav class="mt-4" aria-label="社區服務子主題導覽">
        <p class="text-xs font-medium tracking-wide text-muted-foreground">社區服務</p>
        <ul class="mt-2 flex flex-wrap gap-2">
          <li v-for="item in navItems" :key="item.to">
            <RouterLink
              :to="item.to"
              custom
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                class="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors"
                :class="isActive ? 'border-primary bg-primary/10 text-foreground' : 'bg-muted/20 hover:bg-muted/40 text-muted-foreground'"
                :aria-current="isActive ? 'page' : undefined"
                @click="navigate"
              >
                <component :is="item.icon" class="size-4" />
                {{ item.label }}
              </a>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </section>

    <RouterView />
  </main>
</template>
