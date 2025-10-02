<template>
  <div class="relative">
    <!-- Button -->
    <button
      @click="isOpen = !isOpen"
      class="flex items-center gap-2 px-3 py-1.5 border rounded-md
             bg-transparent text-sm font-medium
             border-gray-300 dark:border-gray-600
             hover:border-purple-500 dark:hover:border-purple-500
             transition-colors"
    >
      <span :class="`fis fi-${getFlag(currentLang)}`" class="w-4 h-4 rounded-full"></span>
      {{ currentLang.toUpperCase() }}
    </button>

    <!-- Dropdown -->
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-32 bg-white dark:bg-[#191c24]
             border border-gray-300 dark:border-gray-700 rounded-md shadow-lg z-50"
    >
      <ul class="py-1">
        <li
          v-for="lang in languages"
          :key="lang.code"
          @click="setLanguage(lang.code)"
          class="flex items-center gap-2 px-3 py-2 cursor-pointer text-sm
                 hover:bg-gray-100 dark:hover:bg-[#242730]
                 transition-colors"
          :class="{
            'bg-purple-100 dark:bg-purple-600/30 text-purple-600 dark:text-purple-100 font-semibold':
              lang.code === currentLang
          }"
        >
          <span :class="`fis fi-${getFlag(lang.code)}`" class="w-4 h-4 rounded-full"></span>
          {{ lang.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useLocale } from "./useLocale"

const { currentLang, setLang } = useLocale()
const isOpen = ref(false)

const languages = [
  { code: "uz", label: "Uz" },
  { code: "ru", label: "Ru" },
  { code: "en", label: "En" },
]

function getFlag(code: string) {
  switch (code) {
    case "uz":
      return "uz" // 🇺🇿
    case "ru":
      return "ru" // 🇷🇺
    case "en":
      return "gb" // 🇬🇧 yoki "us"
    default:
      return "un"
  }
}

function setLanguage(code: "uz" | "ru" | "en") {
  setLang(code)
  isOpen.value = false
}
</script>
