<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { DefaultHeader } from '~/widgets/header'

const route = useRoute()
const layout = computed(() => route?.meta?.layout || 'default-layout')
</script>

<template>
  <NuxtLayout :name="layout">
    <template #header>
      <DefaultHeader />
    </template>
    <NuxtPage />
  </NuxtLayout>
</template>
