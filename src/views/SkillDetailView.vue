<script setup lang="ts">
import { ArrowLeft, CircleAlert, ClipboardList, FileText, Lightbulb } from '@lucide/vue'
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import SkillTimeline from '@/components/skills/SkillTimeline.vue'
import { getSkillById } from '@/content/skills/pmWorkflows'

const route = useRoute()

const skill = computed(() => {
  const id = String(route.params.id ?? '')
  return getSkillById(id)
})
</script>

<template>
  <main class="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
    <RouterLink to="/skills" class="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
      <ArrowLeft class="size-4" />
      返回技能總覽
    </RouterLink>

    <section v-if="skill" class="mt-4 space-y-8">
      <header class="rounded-2xl border bg-card p-6">
        <p class="text-xs font-medium text-primary">{{ skill.category }}</p>
        <h1 class="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{{ skill.title }}</h1>
        <p class="mt-3 text-muted-foreground">{{ skill.purpose }}</p>
        <p class="mt-4 text-xs text-muted-foreground">來源：{{ skill.sourceFile }}</p>
      </header>

      <section class="grid gap-4 xl:grid-cols-12">
        <article class="rounded-xl border bg-card p-5 xl:col-span-4">
          <h2 class="inline-flex items-center gap-2 font-semibold">
            <Lightbulb class="size-4 text-primary" />
            何時使用
          </h2>
          <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
            <li v-for="item in skill.whenToUse" :key="item">- {{ item }}</li>
          </ul>
        </article>

        <article class="rounded-xl border bg-card p-5 xl:col-span-4">
          <h2 class="inline-flex items-center gap-2 font-semibold">
            <FileText class="size-4 text-primary" />
            輸出模板重點
          </h2>
          <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
            <li v-for="item in skill.outputTemplate" :key="item">- {{ item }}</li>
          </ul>
        </article>

        <article class="rounded-xl border bg-card p-5 xl:col-span-4">
          <h2 class="inline-flex items-center gap-2 font-semibold">
            <CircleAlert class="size-4 text-destructive" />
            常見陷阱
          </h2>
          <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
            <li v-for="item in skill.pitfalls" :key="item">- {{ item }}</li>
          </ul>
        </article>
      </section>

      <article class="rounded-xl border bg-card p-5">
        <h2 class="inline-flex items-center gap-2 font-semibold">
          <ClipboardList class="size-4 text-primary" />
          建議流程
        </h2>
        <div class="mt-4">
          <SkillTimeline :steps="skill.steps" />
        </div>
      </article>
    </section>

    <section v-else class="mt-6 rounded-xl border bg-card p-6">
      <h1 class="text-xl font-semibold">找不到此技能</h1>
      <p class="mt-2 text-sm text-muted-foreground">請回到技能總覽重新選擇。</p>
    </section>
  </main>
</template>
