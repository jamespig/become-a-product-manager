<script setup lang="ts">
defineProps<{
  steps: string[]
}>()
</script>

<template>
  <ol class="space-y-3">
    <li v-for="(step, index) in steps" :key="step" class="flex items-start gap-3">
      <span
        class="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary"
      >
        {{ index + 1 }}
      </span>
      <p class="text-sm">{{ step }}</p>
    </li>
  </ol>
</template>
