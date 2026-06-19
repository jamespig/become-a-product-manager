<script setup lang="ts">
import { Rocket } from '@lucide/vue'
import { Button } from '@/components/ui/button'
</script>

<template>
  <main class="min-h-screen bg-background text-foreground">
    <section class="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 class="text-3xl font-semibold tracking-tight">
        Tailwind v4 + shadcn-vue + Lucide 已完成導入
      </h1>
      <p class="text-muted-foreground">
        你現在可以直接使用 shadcn 元件與 Lucide 圖示來建立介面。
      </p>

      <Button class="gap-2">
        <Rocket class="size-4" />
        開始打造產品
      </Button>
    </section>
  </main>
</template>
