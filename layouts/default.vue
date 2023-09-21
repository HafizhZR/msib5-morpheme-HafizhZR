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
    <template #navigation>
      <DashboardAppBar />
    </template>

    <!-- aside -->
    <template #aside>
      <div class="flex h-full">
        <VNavDrawer
          v-model:mini="isMini"
          :fixed="isMobile"
          :overlay="isMobile"
          :close-on-overlay-click="isMobile"
          :class="{ 'z-20 !w-10/12 sidebar': isMobile }"
          bordered
        >
          <main class="bg-default h-screen p-1 transition-all duration-300 w-full ">
            <div class="flex justify-between mb-5">
              <VText v-if="!isMini">
                E-Commerce
              </VText>
              <VBtn class="flex" color="primary" @click="isMini = !isMini">
                <VIcon name="solar:hamburger-menu-outline" size="2xl" />
              </VBtn>
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
