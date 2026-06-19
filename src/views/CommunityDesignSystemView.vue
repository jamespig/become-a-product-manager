<script setup lang="ts">
import { Palette } from '@lucide/vue'
import DesignSystemSection from '@/components/community/DesignSystemSection.vue'
</script>

<template>
  <section class="space-y-6">
    <section class="rounded-2xl border bg-card p-6">
      <h2 class="inline-flex items-center gap-2 text-xl font-semibold tracking-tight sm:text-2xl">
        <Palette class="size-5 text-primary" />
        Design System 視覺樣板
      </h2>
      <p class="mt-2 text-sm text-muted-foreground">
        這裡固定為設計規範頁，專注展示設計系統與設計依據，不混入市場或競品切換。
      </p>
    </section>

    <DesignSystemSection />
  </section>
</template>
