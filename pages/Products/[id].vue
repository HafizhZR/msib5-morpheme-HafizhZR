<script setup lang="ts">
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs'

const idString = useRoute().params.id
const id = +idString
const productStore = useProductStore()
const detailProduct = productStore.getDetailProduct(id)

const itemsBread = ref<VBreadcrumbItemProps[]>([
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Products',
    to: '/products',
  },
  {
    title: 'Detail Product',
    to: `/products/${id}`,
  },
])
</script>

<template>
  <VContainer padded>
    <div class="flex justify-between">
      <VBreadcrumbs :items="itemsBread" />
      <ColorModeSwitcher />
    </div>
    <div class="mb-6">
      <VText variant="display-md" font-weight="bold">
        Detail Product
      </VText>
    </div>
    <div class="flex">
      <NuxtImg :src="detailProduct?.image" class="flex justify-center w-1/3" />
      <div class="flex flex-col gap-10 mx-10 w-2/3">
        <div class="flex flex-col gap-2">
          <VText variant="display-md" font-weight="bold">
            {{ detailProduct?.name }}
          </VText>
          <VText variant="md">
            ${{ detailProduct?.price }}
          </VText>
        </div>
        <div class="flex flex-col gap-2">
          <VText variant="md" font-weight="bold">
            Category
          </VText>
          <VText variant="md">
            {{ detailProduct?.category }}
          </VText>
        </div>
        <div class="flex flex-col gap-2">
          <VText variant="md" font-weight="bold">
            Description
          </VText>
          <VText variant="md">
            {{ detailProduct?.description }}
          </VText>
        </div>
      </div>
    </div>
  </VContainer>
</template>
