<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { designSystemPlan } from '@/content/topics/designSystemPlan'

const colorSwatches = [
  { label: 'Primary', className: 'bg-primary', textClass: 'text-primary' },
  { label: 'Secondary', className: 'bg-secondary', textClass: 'text-secondary-foreground' },
  { label: 'Muted', className: 'bg-muted', textClass: 'text-muted-foreground' },
  { label: 'Success', className: 'bg-emerald-500', textClass: 'text-emerald-600' },
  { label: 'Warning', className: 'bg-amber-500', textClass: 'text-amber-600' },
  { label: 'Danger', className: 'bg-destructive', textClass: 'text-destructive' },
]

const typographyScale = [
  { label: 'H1', className: 'text-3xl font-semibold', sample: 'Community Dashboard Title' },
  { label: 'H2', className: 'text-2xl font-semibold', sample: 'Section Heading' },
  { label: 'H3', className: 'text-lg font-semibold', sample: 'Card Heading' },
  { label: 'Body', className: 'text-sm', sample: 'Body copy for explanation and insight details.' },
  { label: 'Caption', className: 'text-xs text-muted-foreground', sample: 'Caption / metadata / helper text' },
]

const spacingScale = [
  { token: 'space-2', width: '0.5rem' },
  { token: 'space-3', width: '0.75rem' },
  { token: 'space-4', width: '1rem' },
  { token: 'space-6', width: '1.5rem' },
  { token: 'space-8', width: '2rem' },
  { token: 'space-10', width: '2.5rem' },
]

const statusBadges = [
  { label: 'Recorded', className: 'bg-slate-500/15 text-slate-700 dark:text-slate-200' },
  { label: 'In Progress', className: 'bg-amber-500/15 text-amber-700 dark:text-amber-200' },
  { label: 'Next', className: 'bg-sky-500/15 text-sky-700 dark:text-sky-200' },
  { label: 'P0', className: 'bg-destructive/15 text-destructive' },
  { label: 'P1', className: 'bg-violet-500/15 text-violet-700 dark:text-violet-200' },
  { label: 'P2', className: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-200' },
]
</script>

<template>
  <section class="rounded-2xl border bg-card p-6">
    <h2 class="text-xl font-semibold tracking-tight sm:text-2xl">Design System 規劃</h2>
    <p class="mt-2 text-sm text-muted-foreground">
      以 Foundation -> Component -> Pattern -> Interaction 建立完整規範，並用視覺樣板直接呈現。
    </p>

    <div class="mt-5 grid gap-4 xl:grid-cols-3">
      <article class="rounded-xl border bg-muted/20 p-4 xl:col-span-2">
        <h3 class="font-semibold">Color Tokens 視覺化</h3>
        <div class="mt-3 grid gap-3 sm:grid-cols-3">
          <div v-for="item in colorSwatches" :key="item.label" class="space-y-2 rounded-lg border bg-card p-3">
            <div class="h-12 rounded-md border" :class="item.className" />
            <p class="text-xs font-medium">{{ item.label }}</p>
            <p class="text-xs text-muted-foreground">token preview</p>
          </div>
        </div>
      </article>

      <article class="rounded-xl border bg-muted/20 p-4">
        <h3 class="font-semibold">Status Badge</h3>
        <div class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="badge in statusBadges"
            :key="badge.label"
            class="rounded-full px-2.5 py-1 text-xs font-medium"
            :class="badge.className"
          >
            {{ badge.label }}
          </span>
        </div>
      </article>
    </div>

    <div class="mt-6 grid gap-4 xl:grid-cols-2">
      <article class="rounded-xl border bg-muted/20 p-4">
        <h3 class="font-semibold">Typography Scale</h3>
        <div class="mt-3 space-y-3 rounded-lg border bg-card p-4">
          <div v-for="typeItem in typographyScale" :key="typeItem.label">
            <p class="text-xs text-muted-foreground">{{ typeItem.label }}</p>
            <p :class="typeItem.className">{{ typeItem.sample }}</p>
          </div>
        </div>
      </article>

      <article class="rounded-xl border bg-muted/20 p-4">
        <h3 class="font-semibold">Spacing Scale</h3>
        <div class="mt-3 space-y-3 rounded-lg border bg-card p-4">
          <div v-for="space in spacingScale" :key="space.token" class="flex items-center gap-3">
            <p class="w-16 text-xs text-muted-foreground">{{ space.token }}</p>
            <div class="h-2 rounded-full bg-primary" :style="{ width: space.width }" />
            <p class="text-xs text-muted-foreground">{{ space.width }}</p>
          </div>
        </div>
      </article>
    </div>

    <article class="mt-6 rounded-xl border bg-muted/20 p-4">
      <h3 class="font-semibold">Component States Preview</h3>
      <div class="mt-3 flex flex-wrap items-center gap-2 rounded-lg border bg-card p-4">
        <Button>Primary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button disabled>Disabled</Button>
      </div>
      <p class="mt-2 text-xs text-muted-foreground">
        以上為主要操作元件的預覽，對應互動狀態規範（hover / active / focus / disabled）。
      </p>
    </article>

    <article class="mt-6 rounded-xl border bg-muted/20 p-5">
      <h3 class="font-semibold">為什麼這樣設計</h3>
      <p class="mt-2 text-sm text-muted-foreground">
        下列設計依據整合心理學、UX、色彩學、UI 與目標客群特性，目標是讓社區服務產品的決策與執行資訊更容易理解。
      </p>
      <div class="mt-4 grid gap-4 xl:grid-cols-2">
        <article
          v-for="item in designSystemPlan.rationale"
          :key="item.domain"
          class="rounded-lg border bg-card p-4"
        >
          <p class="text-xs font-medium text-primary">{{ item.domain }}</p>
          <h4 class="mt-1 font-semibold">{{ item.principle }}</h4>
          <p class="mt-2 text-sm text-muted-foreground">{{ item.application }}</p>
        </article>
      </div>
    </article>

    <article class="mt-6 rounded-xl border bg-muted/20 p-5">
      <h3 class="font-semibold">決策使用的真實資料</h3>
      <p class="mt-2 text-sm text-muted-foreground">
        下列數據直接來自本專案既有市場與競品文件，用於支持設計選擇，而非主觀假設。
      </p>
      <div class="mt-4 grid gap-4 xl:grid-cols-2">
        <article
          v-for="item in designSystemPlan.evidence"
          :key="`${item.metric}-${item.value}`"
          class="rounded-lg border bg-card p-4"
        >
          <p class="text-xs text-muted-foreground">{{ item.source }}</p>
          <h4 class="mt-1 font-semibold">{{ item.metric }}</h4>
          <p class="mt-1 text-lg font-semibold text-primary">{{ item.value }}</p>
          <p class="mt-2 text-sm text-muted-foreground">{{ item.implication }}</p>
        </article>
      </div>
    </article>

    <article class="mt-6 rounded-xl border bg-muted/20 p-5">
      <h3 class="font-semibold">重新評估結果</h3>
      <p class="mt-2 text-sm text-muted-foreground">
        依據上述資料與目前使用情境，以下是本次 Design System 的再評估與調整決策。
      </p>
      <div class="mt-4 space-y-3">
        <article
          v-for="item in designSystemPlan.reevaluation"
          :key="item.dimension"
          class="rounded-lg border bg-card p-4"
        >
          <p class="text-sm font-semibold">{{ item.dimension }}</p>
          <p class="mt-1 text-sm text-muted-foreground">
            <span class="font-medium text-foreground">觀察：</span>{{ item.finding }}
          </p>
          <p class="mt-1 text-sm text-muted-foreground">
            <span class="font-medium text-foreground">調整：</span>{{ item.decision }}
          </p>
        </article>
      </div>
    </article>

    <div class="mt-5 grid gap-4 xl:grid-cols-2">
      <article
        v-for="group in designSystemPlan.foundations"
        :key="group.title"
        class="rounded-xl border bg-muted/20 p-4"
      >
        <h3 class="font-semibold">{{ group.title }}</h3>
        <p class="mt-1 text-sm text-muted-foreground">{{ group.description }}</p>
        <ul class="mt-2 space-y-1 text-sm text-muted-foreground">
          <li v-for="token in group.tokens" :key="token">- {{ token }}</li>
        </ul>
      </article>
    </div>

    <div class="mt-6 grid gap-4 xl:grid-cols-2">
      <article
        v-for="component in designSystemPlan.components"
        :key="component.name"
        class="rounded-xl border bg-muted/20 p-4"
      >
        <h3 class="font-semibold">{{ component.name }}</h3>
        <p class="mt-1 text-sm text-muted-foreground">{{ component.usage }}</p>
        <p class="mt-3 text-xs font-medium text-muted-foreground">Variants</p>
        <p class="mt-1 text-sm">{{ component.variants.join(' / ') }}</p>
        <p class="mt-3 text-xs font-medium text-muted-foreground">States</p>
        <p class="mt-1 text-sm">{{ component.states.join(' / ') }}</p>
        <ul class="mt-3 space-y-1 text-sm text-muted-foreground">
          <li v-for="rule in component.guidelines" :key="rule">- {{ rule }}</li>
        </ul>
      </article>
    </div>

    <div class="mt-6 grid gap-4 xl:grid-cols-2">
      <article class="rounded-xl border bg-muted/20 p-4">
        <h3 class="font-semibold">Pattern 規範</h3>
        <div class="mt-3 space-y-3">
          <div v-for="pattern in designSystemPlan.patterns" :key="pattern.name">
            <p class="text-sm font-medium">{{ pattern.name }}</p>
            <p class="text-sm text-muted-foreground">{{ pattern.purpose }}</p>
            <p class="mt-1 text-xs text-muted-foreground">Structure: {{ pattern.structure }}</p>
          </div>
        </div>
      </article>

      <article class="rounded-xl border bg-muted/20 p-4">
        <h3 class="font-semibold">Interaction States</h3>
        <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
          <li v-for="state in designSystemPlan.interactions" :key="state.state">
            <span class="font-medium text-foreground">{{ state.state }}</span>：{{ state.rule }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
