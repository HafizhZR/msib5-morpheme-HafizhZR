<script lang="ts" setup>
import type { VDataTableHeader } from '@morpheme/table'

const dataProducts = useProductStore()
const search = ref('')

const headers = ref<VDataTableHeader[]>([
  {
    value: 'image',
    text: 'Image',
  },
  {
    value: 'name',
    text: 'Name',
  },
  {
    value: 'price',
    text: 'Price',
  },
  {
    value: 'category',
    text: 'Category',
  },
  {
    value: 'action',
    text: 'Action',
    align: 'center',
  },
])
</script>

<template>
  <VContainer padded>
    <div class="v-app-shell-container--padded md:px-10 v-app-shell-container">
      <div class="mb-6">
        <VText variant="display-md">
          Products
        </VText>
        <p class="text-gray-500 dark:text-neutral-500">
          Manage your products here
        </p>
      </div>

      <div class="flex justify-between">
        <VInput
          v-model="search"
          placeholder="Search..."
          wrapper-class="mb-4"
          prepend-icon="ri:search-line"
        />
        <NuxtLink to="/products/add-product">
          <VBtn>
            <VIcon name="ic:baseline-plus" />
            <VText>Tambah</VText>
          </VBtn>
        </NuxtLink>
      </div>

      <VDataTable
        v-model:search="search"
        hover
        :items="dataProducts.Products"
        :headers="headers"
      >
        <template #item.image="{ item }">
          <div class="overflow-hidden rounded-md w-12 h-12 object-cover">
            <NuxtImg :src="String(item.image)" />
          </div>
        </template>
        <template #item.action="{ item }">
          <VBtn suffix-icon="ic:outline-remove-red-eye" />
          <VBtn suffix-icon="ic:baseline-edit" />
          <VBtn
            suffix-icon="ic:baseline-delete"
            @click="dataProducts.deleteProduct(item.id)"
          />
        </template>
      </VDataTable>
    </div>
  </VContainer>
</template>

<style>

</style>
