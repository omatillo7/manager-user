<template>
  <div>
    <label v-if="label" class="block mb-1 text-sm font-medium">
      {{ label }}
    </label>
    <input
      :type="type"
      :placeholder="placeholder"
      v-model="model"
      v-mask="mask"
      class="w-full p-2.5 rounded-md border bg-gray-50 text-gray-900 border-gray-300
             dark:bg-[#0F1015] dark:text-gray-200 dark:border-gray-600
             focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  label?: string
  placeholder?: string
  type?: string
  modelValue: string | number
  mask?: string
}>()

const emit = defineEmits(["update:modelValue"])

const model = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
})
</script>

<style>
/* Chrome, Safari, Edge uchun */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox uchun */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
