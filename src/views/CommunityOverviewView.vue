<script setup lang="ts">
import { ClipboardList, FolderTree } from '@lucide/vue'
import { communityRequirements, folderSummaries } from '@/content/topics/communityManagement'
</script>

<template>
  <section class="space-y-6">
    <section class="rounded-2xl border bg-card p-6">
      <h2 class="inline-flex items-center gap-2 text-xl font-semibold tracking-tight sm:text-2xl">
        <ClipboardList class="size-5 text-primary" />
        需求紀錄
      </h2>
      <div class="mt-5 grid gap-4 md:grid-cols-3">
        <article v-for="item in communityRequirements" :key="item.id" class="rounded-xl border bg-muted/20 p-4">
          <p class="text-xs text-muted-foreground">{{ item.statusLabel }}</p>
          <h3 class="mt-2 font-semibold">{{ item.title }}</h3>
          <p class="mt-2 text-sm text-muted-foreground">{{ item.detail }}</p>
        </article>
      </div>
    </section>

    <section class="rounded-2xl border bg-card p-6">
      <h2 class="inline-flex items-center gap-2 text-xl font-semibold tracking-tight sm:text-2xl">
        <FolderTree class="size-5 text-primary" />
        三個資料夾精簡版
      </h2>
      <div class="mt-5 grid gap-4 md:grid-cols-3">
        <article v-for="folder in folderSummaries" :key="folder.id" class="rounded-xl border bg-muted/20 p-4">
          <p class="text-xs text-muted-foreground">{{ folder.path }}</p>
          <h3 class="mt-2 font-semibold">{{ folder.label }}</h3>
          <p class="mt-2 text-sm text-muted-foreground">{{ folder.description }}</p>
          <div class="mt-3 flex items-center justify-between text-xs text-muted-foreground">
            <span>檔案數：{{ folder.fileCount }}</span>
            <span>{{ folder.focus }}</span>
          </div>
        </article>
      </div>
    </section>
  </section>
</template>
