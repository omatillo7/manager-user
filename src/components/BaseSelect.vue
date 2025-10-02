<template>
  <div>
    <label v-if="label" class="block mb-1 text-sm font-medium">{{ label }}</label>
    <Listbox v-model="model">
      <div class="relative">
        <ListboxButton
          class="relative w-full cursor-pointer rounded-md border
                 bg-white dark:bg-[#0F1015] py-2.5 pl-3 pr-10 text-left text-gray-900 dark:text-gray-200
                 border-gray-300 dark:border-gray-600 focus:ring-1 focus:ring-accent focus:border-accent"
        >
          <span>{{ model }}</span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ChevronDown class="w-4 h-4 text-gray-400" />
          </span>
        </ListboxButton>

        <transition
          enter="transition ease-out duration-100"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <ListboxOptions
            class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border
                   bg-white dark:bg-[#191c24] py-1 shadow-lg ring-1 ring-black/10
                   border-gray-200 dark:border-gray-600 focus:outline-none text-sm"
          >
            <ListboxOption
              v-for="option in options"
              :key="option"
              :value="option"
              class="relative cursor-pointer select-none py-2 pl-10 pr-4
                     text-gray-900 dark:text-gray-200 hover:bg-accent hover:text-white"
            >
              <span>{{ option }}</span>
              <span
                v-if="model === option"
                class="absolute inset-y-0 left-0 flex items-center pl-2 text-accent"
              >
                <Check class="w-4 h-4" />
              </span>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue"
import { Check, ChevronDown } from "lucide-vue-next"

// Props
const props = defineProps<{
  label?: string
  options: string[]
  modelValue: string
}>()

const emit = defineEmits(["update:modelValue"])

// Ichki binding
const model = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
})
</script>
