<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
import type { PmSkill } from '@/content/skills/pmWorkflows'

defineProps<{
  skill: PmSkill
}>()
</script>

<template>
  <article class="rounded-xl border bg-card p-5 transition-colors hover:bg-muted/20">
    <p class="inline-flex rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">{{ skill.category }}</p>
    <h3 class="mt-2 text-lg font-semibold">{{ skill.title }}</h3>
    <p class="mt-2 text-sm text-muted-foreground">{{ skill.purpose }}</p>

    <dl class="mt-4 grid gap-3 border-t pt-4 text-sm">
      <div>
        <dt class="font-medium">何時使用</dt>
        <dd class="mt-1 text-muted-foreground">{{ skill.whenToUse[0] }}</dd>
      </div>
      <div>
        <dt class="font-medium">主要輸出</dt>
        <dd class="mt-1 text-muted-foreground">{{ skill.outputTemplate[0] }}</dd>
      </div>
    </dl>

    <footer class="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
      查看詳情
      <ArrowRight class="size-4" />
    </footer>
  </article>
</template>
