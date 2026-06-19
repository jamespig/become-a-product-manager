<script setup lang="ts">
import { Layers, LayoutList, Waypoints } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import SkillCard from '@/components/skills/SkillCard.vue'
import SkillTimeline from '@/components/skills/SkillTimeline.vue'
import { pmWorkflowSkills, skillCategories } from '@/content/skills/pmWorkflows'

const groupedSkills = skillCategories.map((category) => ({
  category,
  items: pmWorkflowSkills.filter((skill) => skill.category === category),
}))

const coreWorkflow = pmWorkflowSkills.find((skill) => skill.id === 'pm-workflows')
</script>

<template>
  <main class="mx-auto w-full max-w-7xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
    <section class="rounded-2xl border bg-card p-6">
      <h1 class="text-2xl font-semibold tracking-tight sm:text-3xl">技能地圖儀表板</h1>
      <p class="mt-3 max-w-3xl text-muted-foreground">
        這裡把 `.cursor/skills/pm-workflows` 的技能整理成可視覺學習路徑。建議先掌握主流程，再依任務挑選細項技能深入。
      </p>

      <div class="mt-5 grid gap-4 sm:grid-cols-3">
        <article class="rounded-xl border bg-muted/30 p-4">
          <p class="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Layers class="size-3.5" />
            分類數
          </p>
          <p class="mt-2 text-2xl font-semibold">{{ skillCategories.length }}</p>
        </article>
        <article class="rounded-xl border bg-muted/30 p-4">
          <p class="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <LayoutList class="size-3.5" />
            技能數
          </p>
          <p class="mt-2 text-2xl font-semibold">{{ pmWorkflowSkills.length }}</p>
        </article>
        <article class="rounded-xl border bg-muted/30 p-4">
          <p class="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Waypoints class="size-3.5" />
            推薦路徑
          </p>
          <p class="mt-2 text-sm font-medium">主技能 → 任務技能 → 模板輸出</p>
        </article>
      </div>

      <div v-if="coreWorkflow" class="mt-6 rounded-xl border bg-muted/20 p-5">
        <h2 class="text-lg font-semibold">推薦先走這條主流程</h2>
        <p class="mt-1 text-sm text-muted-foreground">
          使用 {{ coreWorkflow.title }} 先對齊產品階段與目標，之後再進入單點技能。
        </p>
        <div class="mt-4">
          <SkillTimeline :steps="coreWorkflow.steps" />
        </div>
      </div>
    </section>

    <section
      v-for="group in groupedSkills"
      :key="group.category"
      class="space-y-4 rounded-2xl border bg-card p-6"
    >
      <div class="flex items-center justify-between gap-3">
        <h2 class="text-xl font-semibold tracking-tight sm:text-2xl">{{ group.category }}</h2>
        <span class="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">{{ group.items.length }} 項</span>
      </div>
      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <RouterLink
          v-for="skill in group.items"
          :key="skill.id"
          :to="`/skills/${skill.id}`"
          class="block transition-transform hover:-translate-y-0.5"
        >
          <SkillCard :skill="skill" />
        </RouterLink>
      </div>
    </section>
  </main>
</template>
