<script setup lang="ts">
import { HomePage } from '~/views/home'
import { Routes } from '~/shared/constants/routes'

useHead({
  title: Routes.HOME.name,
})
</script>

<template>
  <HomePage />
</template>
