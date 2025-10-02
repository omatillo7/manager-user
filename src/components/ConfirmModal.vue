<template>
  <Transition name="fade-scale">
    <div
      v-if="modelValue"
      class="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
    >
      <div
        class="bg-white dark:bg-[#191c24] rounded-xl shadow-lg w-full max-w-sm p-6 transform transition-all"
      >
        <!-- Title -->
        <h3 class="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
          {{ title }}
        </h3>

        <!-- Message -->
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-5">
          {{ message }}
        </p>

        <!-- Actions -->
        <div class="flex justify-end gap-3">
          <button
            @click="$emit('update:modelValue', false)"
            class="px-4 py-2 rounded-md text-sm bg-gray-200 text-gray-700 hover:bg-gray-300
                   dark:bg-[#0F1015] dark:text-gray-300 dark:hover:bg-[#242730]"
          >
            {{ t("cancel") }}
          </button>
          <button
            @click="$emit('confirm')"
            class="px-4 py-2 rounded-md text-sm bg-red-600 text-white hover:bg-red-700"
          >
            {{ confirmText }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useLocale } from "../useLocale"
const { t } = useLocale()

defineProps<{
  modelValue: boolean
  title: string
  message: string
  confirmText: string
}>()

defineEmits(["update:modelValue", "confirm"])
</script>

<style scoped>
/* Fade + Scale Animation */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.25s ease;
}
.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
.fade-scale-enter-to {
  opacity: 1;
  transform: scale(1);
}
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
