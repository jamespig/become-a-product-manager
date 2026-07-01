<script setup lang="ts">
import { ChevronDown, Compass, Map, Menu, Presentation, X } from '@lucide/vue'
import { computed, ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

interface ThemeNavItem {
  to: string
  label: string
}

interface ThemeNavGroup {
  id: string
  label: string
  basePath: string
  items: ThemeNavItem[]
}

const route = useRoute()
const isMobileMenuOpen = ref(false)
const isDesktopThemeMenuOpen = ref(false)
const openDesktopGroupId = ref('community')
const openMobileGroupIds = ref<string[]>([])

const themeNavGroups: ThemeNavGroup[] = [
  {
    id: 'community',
    label: '社區服務',
    basePath: '/community-management',
    items: [
      { to: '/community-management/overview', label: '主題總覽' },
      { to: '/community-management/insights', label: '分析報告' },
      { to: '/community-management/planning', label: '功能規劃' },
      { to: '/community-management/design-system', label: 'Design System' },
    ],
  },
  {
    id: 'yoxi',
    label: 'yoxi',
    basePath: '/yoxi',
    items: [
      { to: '/yoxi/visualization', label: '數據視覺化分析' },
      { to: '/yoxi/candidates', label: '功能選手池' },
    ],
  },
]

const fallbackThemeGroup: ThemeNavGroup = {
  id: 'fallback',
  label: '主題',
  basePath: '/',
  items: [],
}

const isCommunityRoute = computed(() => route.path.startsWith('/community-management'))
const isYoxiRoute = computed(() => route.path.startsWith('/yoxi'))
const isThemeRoute = computed(() => isCommunityRoute.value || isYoxiRoute.value)
const activeThemeGroupId = computed(() => {
  const activeGroup = themeNavGroups.find((group) => route.path.startsWith(group.basePath))
  return activeGroup?.id ?? 'community'
})
const activeDesktopGroup = computed(
  () =>
    themeNavGroups.find((group) => group.id === openDesktopGroupId.value) ??
    themeNavGroups.find((group) => group.id === activeThemeGroupId.value) ??
    themeNavGroups[0] ??
    fallbackThemeGroup,
)

const toggleMobileThemeGroup = (groupId: string) => {
  if (openMobileGroupIds.value.includes(groupId)) {
    openMobileGroupIds.value = openMobileGroupIds.value.filter((id) => id !== groupId)
    return
  }
  openMobileGroupIds.value = [...openMobileGroupIds.value, groupId]
}

watch(
  () => route.fullPath,
  () => {
    openDesktopGroupId.value = activeThemeGroupId.value
    openMobileGroupIds.value = [activeThemeGroupId.value]
    isMobileMenuOpen.value = false
    isDesktopThemeMenuOpen.value = false
  },
  { immediate: true },
)
</script>

<template>
  <div class="min-h-screen bg-muted/20 text-foreground">
    <header class="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div class="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <RouterLink to="/" class="inline-flex items-center gap-2 text-sm font-semibold">
          <Compass class="size-4 text-primary" />
          PM Learning Hub
        </RouterLink>
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
          :aria-expanded="isMobileMenuOpen"
          aria-label="切換導覽選單"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <Menu v-if="!isMobileMenuOpen" class="size-5" />
          <X v-else class="size-5" />
        </button>

        <nav aria-label="主要導覽" class="hidden md:block">
          <ul class="inline-flex items-center gap-1 text-sm sm:gap-2">
            <li>
              <RouterLink
                to="/"
                class="rounded-md px-2.5 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:px-3"
                active-class="bg-muted text-foreground"
              >
                首頁
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/skills"
                class="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:px-3"
                active-class="bg-muted text-foreground"
              >
                <Map class="size-4" />
                技能地圖
              </RouterLink>
            </li>
            <li class="relative">
              <button
                id="desktop-theme-menu-button"
                type="button"
                class="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:px-3"
                :class="isThemeRoute ? 'bg-muted text-foreground' : ''"
                aria-haspopup="true"
                aria-controls="desktop-theme-menu-panel"
                :aria-expanded="isDesktopThemeMenuOpen"
                @click="isDesktopThemeMenuOpen = !isDesktopThemeMenuOpen"
              >
                <Presentation class="size-4" />
                產品規劃主題
                <ChevronDown class="size-4" />
              </button>

              <div
                v-if="isDesktopThemeMenuOpen"
                id="desktop-theme-menu-panel"
                role="menu"
                aria-labelledby="desktop-theme-menu-button"
                class="absolute right-0 mt-2 w-md rounded-lg border bg-background p-3 shadow-lg"
              >
                <div class="grid grid-cols-[11rem_1fr] gap-3">
                  <div class="rounded-md border bg-muted/20 p-2">
                    <p class="px-2 py-1 text-xs font-medium tracking-wide text-muted-foreground">第一層：主題群組</p>
                    <button
                      v-for="group in themeNavGroups"
                      :key="group.id"
                      type="button"
                      class="mt-1 flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-sm transition-colors first:mt-0"
                      :class="openDesktopGroupId === group.id ? 'bg-primary/10 text-foreground' : 'text-muted-foreground hover:bg-muted hover:text-foreground'"
                      :aria-expanded="openDesktopGroupId === group.id"
                      @click="openDesktopGroupId = group.id"
                    >
                      <span>{{ group.label }}</span>
                      <ChevronDown class="size-4" />
                    </button>
                  </div>

                  <div class="rounded-md border p-2">
                    <p class="px-2 py-1 text-xs font-medium tracking-wide text-muted-foreground">
                      第二層：{{ activeDesktopGroup.label }} 子頁
                    </p>
                    <RouterLink
                      v-for="item in activeDesktopGroup.items"
                      :key="item.to"
                      :to="item.to"
                      role="menuitem"
                      class="mt-1 block rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground first:mt-0"
                      active-class="bg-muted text-foreground"
                      @click="isDesktopThemeMenuOpen = false"
                    >
                      {{ item.label }}
                    </RouterLink>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <nav v-if="isMobileMenuOpen" aria-label="手機主要導覽" class="border-t px-4 py-3 md:hidden">
        <ul class="space-y-1">
          <li>
            <RouterLink
              to="/"
              class="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              active-class="bg-muted text-foreground"
            >
              首頁
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/skills"
              class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              active-class="bg-muted text-foreground"
            >
              <Map class="size-4" />
              技能地圖
            </RouterLink>
          </li>
          <li>
            <details class="rounded-md border" :open="isThemeRoute">
              <summary class="inline-flex w-full cursor-pointer list-none items-center justify-between px-3 py-2 text-sm text-foreground">
                <span class="inline-flex items-center gap-2">
                  <Presentation class="size-4" />
                  產品規劃主題
                </span>
                <ChevronDown class="size-4 text-muted-foreground" />
              </summary>
              <div class="border-t bg-muted/20 px-2 py-2">
                <p class="px-2 pb-1 text-xs font-medium tracking-wide text-muted-foreground">第一層：主題群組</p>
                <details
                  v-for="group in themeNavGroups"
                  :key="group.id"
                  class="mt-2 rounded-md border bg-card"
                  :open="openMobileGroupIds.includes(group.id)"
                >
                  <summary
                    class="inline-flex w-full cursor-pointer list-none items-center justify-between px-3 py-2 text-sm text-foreground"
                    @click.prevent="toggleMobileThemeGroup(group.id)"
                  >
                    <span>{{ group.label }}</span>
                    <ChevronDown class="size-4 text-muted-foreground" />
                  </summary>
                  <div class="border-t px-2 py-2">
                    <p class="px-1 pb-1 text-xs font-medium tracking-wide text-muted-foreground">第二層：子頁</p>
                    <ul class="space-y-1">
                      <li v-for="item in group.items" :key="item.to">
                        <RouterLink
                          :to="item.to"
                          class="block rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                          active-class="bg-muted text-foreground"
                        >
                          {{ item.label }}
                        </RouterLink>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </details>
          </li>
        </ul>
      </nav>
    </header>

    <RouterView />
  </div>
</template>
