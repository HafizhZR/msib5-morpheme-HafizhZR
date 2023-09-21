<script lang="ts" setup>
import type { VDataTableHeader } from '@morpheme/table'

const items = [...Array(0)].map((_, index) => ({
  index,
  name: `User-${index}`,
  email: `user-${index}@example.com`,
  age: index + 1 * 10,
}))

const itemsTab = ref([
  {
    text: 'Tab Item 1',
  },
  {
    text: 'Tab Item 1',
  },
  {
    text: 'Tab Item 1',
  },
  // ...
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
</script>

<template>
  <VContainer padded>
    <div class="v-app-shell-container--padded md:px-10 v-app-shell-container">
      <div class="mb-6">
        <VText variant="display-md">
          Transactions
        </VText>
        <p class="text-gray-500 dark:text-neutral-500">
          Manage your products here
        </p>
      </div>
      <VTabs :items="itemsTab" />
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
