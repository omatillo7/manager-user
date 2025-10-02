<template>
  <transition name="smooth-fade">
    <div
      v-if="visible"
      class="flex flex-col items-center justify-center text-center py-8"
    >
      <!-- Icon -->
      <div class="mb-2">
        <slot name="icon">
          <Inbox class="w-12 h-12 text-purple-500 opacity-90" />
        </slot>
      </div>

      <!-- Title -->
      <h2 class="text-sm sm:text-base font-semibold mb-1">
        <slot name="title">{{ t("empty_title") }}</slot>
      </h2>

      <!-- Description -->
      <p
        class="text-xs text-gray-500 dark:text-gray-400 mb-3 max-w-xs leading-relaxed"
      >
        <slot name="description">
          {{ t("empty_description") }}
        </slot>
      </p>

      <!-- Action button -->
      <slot name="action">
        <router-link
          to="/courses"
          class="px-2.5 py-1 rounded-md bg-purple-600 text-white text-xs hover:bg-purple-700 shadow transition transform hover:scale-105"
        >
          {{ t("create_button") }}
        </router-link>
      </slot>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { Inbox } from "lucide-vue-next"
import { useLocale } from "../useLocale" // path moslash kerak

const { t } = useLocale()
const visible = ref(false)

onMounted(() => {
  setTimeout(() => {
    visible.value = true
  }, 100)
})
</script>

<style scoped>
.smooth-fade-enter-active {
  transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}
.smooth-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}
.smooth-fade-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
