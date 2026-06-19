<script setup lang="ts">
import { ArrowRight, BookOpen, LayoutDashboard, Presentation, Route, Target, Workflow } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { pmWorkflowSkills } from '@/content/skills/pmWorkflows'

const quickStartSteps = [
  {
    title: '先看全局框架',
    description: '先掌握分階段驗證邏輯，確認目前產品處於哪一個階段。',
    icon: Route,
  },
  {
    title: '再選任務技能',
    description: '依任務進入競品分析、PRD、Roadmap 或指標定義流程。',
    icon: Target,
  },
  {
    title: '照模板輸出',
    description: '按既有模板填寫內容，最後附上資料來源與日期，形成可追溯文件。',
    icon: BookOpen,
  },
]

const dashboardStats = [
  { label: '技能總數', value: String(pmWorkflowSkills.length), hint: '可直接套用' },
  { label: '學習路徑', value: '3', hint: '從框架到輸出' },
  { label: '主題分類', value: '4', hint: '核心框架/分析/規劃/衡量' },
]
</script>

<template>
  <main class="mx-auto w-full max-w-7xl space-y-8 px-4 py-6 sm:px-6 sm:py-8">
    <section class="grid gap-4 lg:grid-cols-3">
      <article class="rounded-2xl border bg-card p-6 lg:col-span-2">
        <div class="inline-flex items-center gap-2 rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
          <LayoutDashboard class="size-3.5" />
          導覽儀表板
        </div>
        <h1 class="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          用視覺化方式學會產品經理核心工作流程
        </h1>
        <p class="mt-3 max-w-3xl text-sm text-muted-foreground sm:text-base">
          這個網站把 PM 工作拆成可操作的步驟與模板，讓你快速知道「現在該做什麼、為什麼這樣做、怎麼判斷做得好不好」。
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <RouterLink to="/skills">
            <Button class="gap-2">
              進入技能地圖
              <ArrowRight class="size-4" />
            </Button>
          </RouterLink>
          <RouterLink to="/community-management">
            <Button variant="secondary" class="gap-2">
              <Presentation class="size-4" />
              社區主題進度
            </Button>
          </RouterLink>
          <RouterLink to="/skills/pm-workflows">
            <Button variant="outline" class="gap-2">
              <Workflow class="size-4" />
              先看主技能
            </Button>
          </RouterLink>
        </div>
      </article>

      <div class="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        <article
          v-for="stat in dashboardStats"
          :key="stat.label"
          class="rounded-xl border bg-card p-4"
        >
          <p class="text-xs text-muted-foreground">{{ stat.label }}</p>
          <p class="mt-2 text-2xl font-semibold">{{ stat.value }}</p>
          <p class="mt-1 text-xs text-muted-foreground">{{ stat.hint }}</p>
        </article>
      </div>
    </section>

    <section class="rounded-2xl border bg-card p-6">
      <h2 class="text-xl font-semibold tracking-tight sm:text-2xl">三步驟開始使用</h2>
      <p class="mt-2 text-sm text-muted-foreground">
        建議初次使用依序完成，避免跳步造成策略與執行脫節。
      </p>
      <div class="mt-5 grid gap-4 md:grid-cols-3">
        <article
          v-for="(step, index) in quickStartSteps"
          :key="step.title"
          class="rounded-xl border bg-muted/30 p-5"
        >
          <div class="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <component :is="step.icon" class="size-4" />
            Step {{ index + 1 }}
          </div>
          <h3 class="mt-3 font-semibold">{{ step.title }}</h3>
          <p class="mt-2 text-sm text-muted-foreground">{{ step.description }}</p>
        </article>
      </div>
    </section>

    <section class="rounded-2xl border bg-card p-6">
      <div class="flex items-center justify-between gap-4">
        <div>
          <h2 class="text-xl font-semibold tracking-tight sm:text-2xl">技能地圖預覽</h2>
          <p class="mt-2 text-sm text-muted-foreground">共 {{ pmWorkflowSkills.length }} 個可直接套用的技能。</p>
        </div>
        <RouterLink to="/skills" class="text-sm font-medium text-primary hover:underline">
          查看完整地圖
        </RouterLink>
      </div>

      <div class="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <RouterLink
          v-for="skill in pmWorkflowSkills"
          :key="skill.id"
          :to="`/skills/${skill.id}`"
          class="rounded-xl border bg-card p-5 transition-colors hover:bg-muted/50"
        >
          <p class="text-xs font-medium text-primary">{{ skill.category }}</p>
          <h3 class="mt-2 font-semibold">{{ skill.title }}</h3>
          <p class="mt-2 text-sm text-muted-foreground">{{ skill.purpose }}</p>
        </RouterLink>
      </div>
    </section>
  </main>
</template>
