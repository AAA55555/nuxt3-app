<script setup lang="ts">
import { ArticlePage } from '~/views/article'
import { Routes } from '~/shared/constants/routes'

useHead({
  title: Routes.ARTICLE.name,
})
</script>

<template>
  <ArticlePage />
</template>
