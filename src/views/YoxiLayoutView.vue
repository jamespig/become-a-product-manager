<script setup lang="ts">
import { BarChart3 } from '@lucide/vue'
import { RouterLink, RouterView } from 'vue-router'

const navItems = [
  { to: '/yoxi/visualization', label: '數據視覺化', icon: BarChart3 },
]
</script>

<template>
  <main class="mx-auto w-full max-w-7xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
    <section class="rounded-2xl border bg-card p-6">
      <h1 class="text-2xl font-semibold tracking-tight sm:text-3xl">yoxi 主題工作台</h1>
      <p class="mt-2 text-sm text-muted-foreground sm:text-base">
        這個主題聚焦於 yoxi 叫車資料分析，優先支援價格帶、時段與熱區洞察。
      </p>
      <nav class="mt-4" aria-label="yoxi 子主題導覽">
        <p class="text-xs font-medium tracking-wide text-muted-foreground">yoxi</p>
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
