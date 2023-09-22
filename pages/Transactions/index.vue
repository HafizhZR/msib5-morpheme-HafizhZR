<script lang="ts" setup>
import type { VDataTableHeader } from '@morpheme/table'
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs'

const items = [...Array(0)].map((_, index) => ({
  index,
  name: `User-${index}`,
  email: `user-${index}@example.com`,
  age: index + 1 * 10,
}))

const selectedTab = ref()

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
      <div class="mb-6">
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
      />
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
