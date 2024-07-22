<script setup lang="ts">
// import type { NewCard } from 'entities/cards'

const props = withDefaults(defineProps<{ as?: string }>(), {
  as: 'li',
})
</script>

<template>
  <UCard :as="props.as">
    <template #header>
      <div class="flex flex-col lg:flex-row lg:items-center max-lg:gap-4">
        <div class="w-1/12">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 20.3333V15M15 9.66666H15.0133M28.3333 15C28.3333 22.3638 22.3638 28.3333 15 28.3333C7.63621 28.3333 1.66667 22.3638 1.66667 15C1.66667 7.63619 7.63621 1.66666 15 1.66666C22.3638 1.66666 28.3333 7.63619 28.3333 15Z"
              stroke="#02542D"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="w-11/12">
          <h3 class="font-semibold line-clamp-1">title</h3>
        </div>
      </div>
    </template>

    <div class="flex items-center">
      <div class="hidden lg:block w-1/12" />
      <div class="lg:w-11/12">
        <p class="line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda
          atque dolores est explicabo fuga laboriosam maxime minima natus
          necessitatibus neque nesciunt nihil nisi pariatur, quos repellat sequi
          similique soluta.
        </p>
      </div>
    </div>
  </UCard>
</template>
