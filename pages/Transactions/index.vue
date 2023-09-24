<script lang="ts" setup>
import type { VDataTableHeader } from '@morpheme/table'
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs'

const items = [...Array(0)].map((_, index) => ({
  index,
  name: `User-${index}`,
  email: `user-${index}@example.com`,
  age: index + 1 * 10,
}))

const selectedTab = ref(0)

const itemsTab = ref([
  {
    text: 'Pending',
  },
  {
    text: 'Sending',
  },
  {
    text: 'Complete',
  },
])

const headers = ref<VDataTableHeader[]>([
  {
    value: 'index',
    text: 'ORDER NUMBER',
  },
  {
    value: 'name',
    text: 'PRODUCT NAME',
  },
  {
    value: 'price',
    text: 'QUANTITY',
  },
  {
    value: 'category',
    text: 'PHONE NUMBER',
  },
  {
    value: 'action',
    text: 'ADDRESS',
  },
])

const itemsBread = ref<VBreadcrumbItemProps[]>([
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Transactions',
    to: '/transactions',
  },
])
</script>

<template>
  <VContainer>
    <div class="flex justify-between mx-2">
      <VBreadcrumbs :items="itemsBread" />
      <ColorModeSwitcher />
    </div>
    <div class="v-app-shell-container--padded md:px-10 v-app-shell-container">
      <div class="mb-2">
        <VText variant="display-md">
          Transactions
        </VText>
        <p class="text-gray-500 dark:text-neutral-500">
          Manage your products here
        </p>
      </div>
      <VTabs
        v-model="selectedTab"
        :items="itemsTab"
        :style="{
          '--v-tabs-item-padding-x': '1rem',
          '--v-tabs-item-padding-y': '0.25rem',
          '--v-tabs-item-active-bg-color': 'teal',
          '--v-tabs-item-active-text-color': 'white',
          '--v-tabs-item-hover-bg-color': 'teal',
          '--v-tabs-item-hover-text-color': 'white',
          '--v-tabs-slider-height': '5px',
          '--v-tabs-slider-bg-color': 'white',
          '--v-tabs-slider-border-color': 'white ',
        }"
      />
      <div class="p-4">
        <div v-if="selectedTab === 0 ">
          <VText variant="xl" font-weight="semibold">
            Pending
          </VText>
        </div>
        <div v-if="selectedTab === 1 ">
          <VText variant="xl" font-weight="semibold">
            Sending
          </VText>
        </div>
        <div v-if="selectedTab === 2 ">
          <VText variant="xl" font-weight="semibold">
            Complete
          </VText>
        </div>
      </div>
      <VDataTable
        hover
        :items="items"
        :headers="headers"
      />
    </div>
  </VContainer>
</template>

<style>

</style>
