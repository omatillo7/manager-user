<template>
  <div class="p-4 sm:p-6">
    <h1 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
      {{ t("resources") }}
    </h1>

    <!-- Amaliy topshiriqlar fayllari -->
    <div class="bg-white dark:bg-transparent rounded-lg p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
        {{ t("tasks") }}
      </h2>

      <div v-if="pdfFiles.length > 0" class="space-y-2">
        <div v-for="(file, index) in pdfFiles" :key="index" class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 
                 bg-gray-50 dark:bg-transparent 
                 hover:border-purple-500 dark:hover:border-purple-400 transition-colors duration-300">
          <!-- Fayl nomi va izoh -->
          <div class="flex items-start gap-2 w-full sm:w-auto">
            <!-- Icon -->
            <FileText class="w-6 h-6 text-purple-600 dark:text-purple-600 mt-1 shrink-0 hidden sm:block" />

            <!-- Fayl ma’lumotlari -->
            <div class="w-full max-w-[800px]">
              <!-- Nomi -->
              <span class="block text-sm sm:text-lg font-medium text-gray-700 dark:text-gray-300">
                {{ file.name }}
              </span>
              <!-- Izoh -->
              <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex gap-1">
                <span class="text-white">{{ t("description") }}:</span>{{ file.description }}
              </p>
            </div>
          </div>

          <!-- Yuklab olish tugmasi -->
          <div class="w-full sm:w-auto">
            <a :href="file.url" :download="file.name"
              class="flex justify-center sm:justify-start items-center gap-2 w-full sm:w-auto px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm transition">
              <Download class="w-4 h-4" />
              {{ t("download") }}
            </a>
          </div>
        </div>
      </div>

      <p v-else class="text-gray-600 dark:text-gray-400 text-sm">
        {{ t("noFiles") }}
      </p>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from "vue"
import { Download, FileText } from "lucide-vue-next"
import { useLocale } from "../useLocale"
const { t } = useLocale()

// PDF fayllar (admin yuklagan)
const pdfFiles = ref([
  {
    name: "Qayta tayyorlov kursiga oid resurslarni ushbu telegram kanalida topishingiz mumkin",
    description: "Telegram kanal orqali qo‘shimcha materiallarni kuzatib boring",
    url: "/pdfs/task1.pdf"
  },
  {
    name: "Amaliy topshiriq 2",
    description: "Ikkinchi topshiriqning to‘liq PDF fayli",
    url: "/pdfs/task2.pdf"
  },
])
</script>
