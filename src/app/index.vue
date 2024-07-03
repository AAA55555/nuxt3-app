<script setup lang="ts">
const route = useRoute()
const layout = route.meta.layout || 'default-layout'
</script>
<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
