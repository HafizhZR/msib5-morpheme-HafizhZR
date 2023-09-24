<script lang="ts" setup>
import type { VDataTableHeader } from '@morpheme/table'
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs'

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

const itemsBread = ref<VBreadcrumbItemProps[]>([
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Products',
    to: '/products',
  },
])

const isOpen = ref(false)
const loading = ref(false)
const itemId = ref<number>(0)
function getIdProduct(id: number) {
  isOpen.value = true
  itemId.value = id
}
function removeProduct(id: number) {
  dataProducts.deleteProduct(id)
  isOpen.value = false
}
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
        <NuxtLink to="/products/add">
          <VBtn color="teal">
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
          <div class="flex gap-1 justify-center">
            <NuxtLink :to="`/products/${item.id}`">
              <VBtn suffix-icon="ic:outline-remove-red-eye" />
            </NuxtLink>
            <NuxtLink :to="`/products/edit/${item.id}`">
              <VBtn suffix-icon="ic:baseline-edit" />
            </NuxtLink>
            <VBtn
              suffix-icon="ic:baseline-delete"
              @click="getIdProduct(item.id)"
            />
          </div>
        </template>
      </VDataTable>
    </div>
    <VModal
      v-model="isOpen"
      title="Delete Item"
      confirm
      confirm-text="Delete"
      confirm-color="error"
      :loading="loading"
      centered
      footer-class="flex-row-reverse"
      close-text="Cancel"
      @confirm="removeProduct(itemId)"
    >
      <p>Are you sure want to delete this item?</p>
    </VModal>
  </VContainer>
</template>

<style>

</style>
