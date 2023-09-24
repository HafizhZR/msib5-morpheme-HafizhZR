<script lang="ts" setup>
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs'

const home = ref([
  {
    judul: 'Total Revenue',
    totalRevenue: '$45,231.89',
    footerText: '+20.1% from last month',
    iconsHome: 'ph:currency-circle-dollar',
  },
  {
    judul: 'Transactions',
    totalRevenue: '+2350',
    footerText: '+180.1% from last month',
    iconsHome: 'mdi:hand-coin',
  },
  {
    judul: 'Categories',
    totalRevenue: '142',
    footerText: '+19% from last month',
    iconsHome: 'ic:twotone-dashboard',
  },
  {
    judul: 'Cancelled',
    totalRevenue: '2',
    footerText: '+0,0002% since last hour',
    iconsHome: 'ic:baseline-close',
  },
])

const items = ref<VBreadcrumbItemProps[]>([
  {
    title: 'Home',
    to: '/',
  },
])
</script>

<template>
  <VContainer>
    <div class="flex justify-between mx-4">
      <VBreadcrumbs
        :items="items"
      />
      <ColorModeSwitcher />
    </div>
    <div class="v-app-shell-container--padded md:px-10 v-app-shell-container">
      <VText variant="display-md">
        Dashboard
      </VText>
      <p class="text-gray-500 dark:text-neutral-500">
        Monitor your metrics for shipping, transactions, product and many more in here
      </p>
      <div class="grid grid-cols-2 xl:grid-cols-4 justify-between ">
        <DashboardCardHome
          v-for="(dashboard, index) in home"
          :key="index"
          :judul="dashboard.judul"
          :total-revenue="dashboard.totalRevenue"
          :footer-text="dashboard.footerText"
          :icons-home="dashboard.iconsHome"
        />
      </div>
    </div>
  </VContainer>
</template>

<style lang="scss">
:root {
  --breadcrumbs-item-active-color: var(--color-white);
  --breadcrumbs-item-active-bg-color: var(--color-teal-600);
  --breadcrumbs-item-hover-color: var(--color-teal-900);
}
</style>
