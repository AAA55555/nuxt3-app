<script setup lang="ts">
const props = withDefaults(defineProps<{ as?: string }>(), {
  as: 'h1',
})
</script>

<template>
  <component
    :is="props.as"
    :class="{ '2xl:text-4xl text-3xl font-semibold': props.as === 'h1' }"
    class="mb-10 2xl:mb-12"
  >
    <slot />
  </component>
</template>
