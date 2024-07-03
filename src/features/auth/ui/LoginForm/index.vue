<script setup lang="ts">
import { VForm } from '~/shared/ui/form'
import type { FormSubmitEvent } from '#ui/types'
import { object, string, type InferType } from 'yup'

const schema = object({
  email: string().email('Invalid email').required(),
  password: string().min(8, 'Must be at least 8 characters').required(),
})

type Schema = InferType<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined,
})

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  console.log(event.data)
}
</script>

<template>
  <VForm
    class="flex w-6/12 flex-col space-y-8 rounded-lg p-14 shadow-xl transition-all duration-200 hover:shadow-2xl"
    @submit="onSubmit"
    :schema="schema"
    :state="state"
  >
    <UFormGroup label="Email" name="email">
      <UInput size="lg" v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput size="lg" v-model="state.password" type="password" />
    </UFormGroup>
  </VForm>
</template>
