<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('sm') // only smaller than lg
const isAsideOpen = ref(true)
const isMini = ref(true)
watchEffect(() => {
  isAsideOpen.value = !isMobile.value
})
</script>

<template>
  <VAppShell padded-content>
    <!-- header -->
    <template #navigation />

    <!-- aside -->
    <template #aside>
      <div class="flex h-full">
        <VNavDrawer
          v-model:mini="isMini"
          v-model="isAsideOpen"
          :fixed="isMobile"
          :overlay="isMobile"
          :close-on-overlay-click="isMobile"
          :class="{ 'z-20 !w-10/12 sidebar': isMobile }"
          height="auto"
          bordered
          color="teal"
        >
          <main class="bg-default h-screen p-1 transition-all duration-300 w-full ">
            <div class="flex justify-between mb-5">
              <div class="flex justify-start py-2 items-center">
                <VText v-if="!isMini" font-weight="semibold" variant="display-xs">
                  E-Commerce
                </VText>
              </div>
              <div class="py-2">
                <VBtn class="flex" color="teal" @click="isMini = !isMini">
                  <VIcon name="solar:hamburger-menu-outline" size="2xl" />
                </VBtn>
              </div>
            </div>
            <DashboardListMenu />
          </main>
        </VNavDrawer>
      </div>
    </template>

    <!-- footer -->
    <template #content.after>
      <VText variant="sm" color="gray.500" class="mt-4">
        Copyright &copy; 2023 &middot; All rights reserved.
      </VText>
    </template>

    <!-- content -->
    <MainContent />
    <slot />
  </VAppShell>
</template>
