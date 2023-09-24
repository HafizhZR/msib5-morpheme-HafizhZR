<script lang="ts" setup>
const { judul, totalRevenue, iconsHome } = defineProps({
  judul: String,
  totalRevenue: String,
  footerText: String,
  iconsHome: String,
})
</script>

<template>
  <VContainer class="flex">
    <VCard
      color="teal"
      bodyless
      class="p-4 w-[95%] gap-4 mt-6"
    >
      <div class="flex justify-between">
        <VText>{{ judul }}</VText>
        <VIcon :name="iconsHome" size="xs" />
      </div>
      <VText class="font-semibold text-2xl">
        {{ totalRevenue }}
      </VText>
      <VText>{{ footerText }}</VText>
    </VCard>
  </VContainer>
</template>

<style>

</style>
