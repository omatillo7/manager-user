<template>
  <div>
    <label v-if="label" class="block mb-1 text-sm font-medium">
      {{ label }}
    </label>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleInput"
      @blur="handleBlur"
      class="w-full p-2.5 rounded-md border bg-gray-50 text-gray-900 border-gray-300
             dark:bg-[#0F1015] dark:text-gray-200 dark:border-gray-600
             focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none"
    />
  </div>
</template>

<script setup lang="ts">
import { useMask } from "../composables/useMask"

const props = defineProps<{
  label?: string
  placeholder?: string
  type?: string
  modelValue: string | number
  maskType?: 'phone'
  validation?: 'gmail'
}>()

const emit = defineEmits(["update:modelValue"])
const { formatPhone } = useMask()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  let value = target.value
  
  if (props.maskType === 'phone') {
    value = formatPhone(value)
    target.value = value
  }
  
  emit("update:modelValue", value)
}

const handleBlur = (event: Event) => {
  if (props.validation !== 'gmail') return
  
  const target = event.target as HTMLInputElement
  let value = target.value.trim()
  
  if (value && !value.includes('@gmail.com')) {
    if (value.includes('@')) {
      value = value.split('@')[0] + '@gmail.com'
    } else {
      value = value + '@gmail.com'
    }
    target.value = value
    emit("update:modelValue", value)
  }
}
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
