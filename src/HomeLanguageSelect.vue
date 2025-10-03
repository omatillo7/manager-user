<template>
    <div class="relative font-[Helvetica Neue]">
        <!-- Button -->
        <button @click="isOpen = !isOpen" class="flex items-center gap-2 px-3 py-1.5 rounded
             text-gray-700 text-sm font-medium
             border border-gray-400">
            <span :class="`fis fi-${getFlag(currentLang)}`" class="w-4 h-4 rounded-full"></span>
            {{ currentLang.toUpperCase() }}
        </button>

        <!-- Dropdown -->
        <div v-if="isOpen" class="absolute right-0 mt-2 w-32 bg-white
           border border-gray-300 rounded-lg shadow-lg z-50">
            <ul class="py-1">
                <li v-for="lang in languages" :key="lang.code" @click="setLanguage(lang.code)"
                    class="flex items-center gap-2 px-3 py-2 cursor-pointer text-sm transition-colors" :class="[
                        lang.code === currentLang
                            ? 'bg-[#9657ff] text-white font-semibold'   // active
                            : 'text-gray-700 hover:bg-gray-200'        // faqat active bo‘lmaganlarga hover
                    ]">
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
            return "gb" // 🇬🇧
        default:
            return "un"
    }
}

function setLanguage(code: "uz" | "ru" | "en") {
    setLang(code)
    isOpen.value = false
}
</script>
