<script setup lang="ts">
import { object, string, type InferType } from "yup";
import { reactive } from "vue";
import type { FormSubmitEvent } from "#ui/types";
import { VForm } from "~/shared/ui/form";

const schema = object({
  email: string().email("Invalid email").required(),
  password: string().min(8, "Must be at least 8 characters").required(),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
});

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  console.log(event.data);
};
</script>

<template>
  <VForm
    class="flex w-6/12 flex-col space-y-8 rounded-lg p-14 shadow-xl transition-all duration-200 hover:shadow-2xl"
    :schema="schema"
    :state="state"
    @submit="onSubmit"
  >
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" size="lg" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" size="lg" type="password" />
    </UFormGroup>
  </VForm>
</template>
