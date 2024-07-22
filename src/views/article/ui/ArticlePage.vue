<script lang="ts" setup>
import { CardPreview } from '~/entities/cards'
import { AppTitle } from '~/shared/ui/title'
import Article from '~/views/article/api/article'

console.log(1235, useRuntimeConfig())

const res = new Article().get()
console.log(res)
</script>

<template>
  <UContainer>
    <app-title class="mt-14"> Список статьей </app-title>
    <ul>
      <CardPreview />
    </ul>
  </UContainer>
</template>
