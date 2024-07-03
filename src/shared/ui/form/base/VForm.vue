<script setup lang="ts">
const props = defineProps<{ state: object, schema: object }>()
</script>

<template>
  <UForm
    :state="props.state"
    :schema="props.schema"
  >
    <slot />

    <slot name="btn">
      <UButton
        type="submit"
        block
        size="lg"
      >
        <slot name="btn-value">
          Отправить
        </slot>
      </UButton>
    </slot>
  </UForm>
</template>
