<script lang="ts" setup>

</script>

<template>
  <VList>
    <NuxtLink to="/">
      <VListItem prepend-icon="streamline:interface-dashboard-layout-square-app-application-dashboard-home-layout-square">
        Home
      </VListItem>
    </NuxtLink>
    <VListItemDivider />
    <NuxtLink to="/products">
      <VListItem prepend-icon="icon-park-outline:ad-product">
        Products
      </VListItem>
    </NuxtLink>
    <VListItemDivider />
    <NuxtLink to="/transactions">
      <VListItem prepend-icon="uil:transaction">
        Transactions
      </VListItem>
    </NuxtLink>

    <VListItemDivider />
  </VList>
</template>

<style>

</style>
