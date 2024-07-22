<script setup lang="ts">
import { Routes as routes } from '~/shared/constants/routes'
</script>

<template>
  <ul>
    <li v-for="({ name, path }, idx) in routes" :key="idx">
      <nuxt-link
        class="block duration-200 hover:bg-neutral-500/20 p-2 hover:opacity-70"
        :to="path"
      >
        {{ name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<style scoped>
.router-link-active {
  @apply bg-neutral-500/10 font-semibold;
}
</style>
