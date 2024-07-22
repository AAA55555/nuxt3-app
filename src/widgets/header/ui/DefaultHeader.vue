<script setup lang="ts">
import { BaseLogo } from '../../../shared/ui/logo'
import RouteList from '~/widgets/header/ui/RouteList.vue'

const isOpen = ref(false)
</script>

<template>
  <UContainer>
    <header>
      <div class="flex py-6 items-center gap-5">
        <ULink to="/">
          <BaseLogo />
        </ULink>
        <p
          class="hover:opacity-70 duration-200 cursor-pointer"
          @click="isOpen = !isOpen"
        >
          Menu
        </p>
      </div>
      <USlideover v-model="isOpen" side="left">
        <div class="p-4 flex-1">
          <UButton
            color="gray"
            variant="ghost"
            size="sm"
            icon="i-heroicons-x-mark-20-solid"
            class="flex sm:hidden absolute end-5 top-5 z-10"
            square
            padded
            @click="isOpen = false"
          />

          <div class="h-full">
            <RouteList @click="isOpen = false" />
          </div>
        </div>
      </USlideover>
    </header>
  </UContainer>
</template>
