<template>
  <div
    class="p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-200 ease-in-out cursor-pointer hover:shadow-md hover:border-purple-500 dark:hover:border-purple-400 bg-white dark:bg-[#1e1f29] h-full flex flex-col"
  >
    <div class="flex items-start gap-4 flex-1">
      <!-- Icon -->
      <div
        class="w-14 h-14 bg-purple-50 dark:bg-white/5 rounded-full flex items-center justify-center flex-shrink-0"
      >
      <BookOpen class="text-[#9ca3af]" />
        <!-- <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9ca3af"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M22 10L12 4 2 10l10 6 10-6z" />
          <path d="M6 12v5c3 1.5 9 1.5 12 0v-5" />
        </svg> -->
      </div>

      <!-- Content -->
      <div class="flex-1">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-xs px-2 py-1 rounded bg-purple-600 text-white">
            {{ type }}
          </span>
          <h3 class="text-base sm:text-lg font-medium leading-snug">
            {{ title }}
          </h3>
        </div>
        <p class="mt-2 text-sm text-gray-500 dark:text-gray-300 line-clamp-3">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
 BookOpen
} from "lucide-vue-next"

defineProps<{ title: string; type: string; description?: string }>();
</script>
