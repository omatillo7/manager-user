<template>
  <div class="space-y-4">
    <h2 class="text-xl font-bold mb-4">{{ t("Applications") }}</h2>
    <Loader v-if="!Data" />
    <div
      v-if="Data"
      v-for="app in applications"
      :key="app.id"
      class="p-4 rounded-lg border bg-gray-50 text-gray-900 border-gray-300 dark:bg-[#191c24] dark:text-gray-200 dark:border-gray-700 transition-colors duration-500 hover:border-purple-500 dark:hover:border-purple-400 shadow-sm flex flex-col gap-3"
    >
      <!-- Title + Status -->
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
        <h3 class="font-semibold text-base sm:text-lg">
          {{ app.title }}
        </h3>

        <div class="flex flex-wrap sm:flex-nowrap items-center gap-2 text-sm font-medium">
          <!-- Code -->
          <span class="text-gray-500 dark:text-gray-400">{{ app.code }}</span>

          <!-- Dot -->
          <span
            class="w-2 h-2 rounded-full"
            :class="app.status === 'Tasdiqlangan' ? 'bg-green-500' : 'bg-yellow-500'"
          ></span>

          <!-- Status -->
          <span
            :class="app.status === 'Tasdiqlangan'
                ? 'text-green-600 dark:text-green-400'
                : 'text-yellow-600 dark:text-yellow-400'"
          >
            {{ app.status }}
          </span>
        </div>
      </div>

      <!-- Sub info -->
      <div
        class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400"
      >
        <div class="text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400">
          {{ app.category }}
        </div>
        <div class="flex items-center gap-2">
          <Users class="w-4 h-4" />
          <span>{{ app.current }} / {{ app.total }} {{ t("applications") }}</span>
        </div>
      </div>

      <!-- Date -->
      <div class="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
        <Calendar class="w-4 h-4" />
        <span>{{ app.date }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Calendar, Users } from "lucide-vue-next";
import { useLocale } from "../useLocale"
const { t } = useLocale()
import { onMounted, ref } from "vue";
import { infoService } from "../service/info.service";
import Loader from "../../src/components/Loader.vue";

const Data = ref(null);

onMounted(() => {
  infoService.ownList("", "SEND,SEEN,ACCEPTED,CANCELLED,CONTRACT", "RETRAINING")
    .then(res => {
      Data.value = res.data
    })
    .catch(err => {
      console.error('❌ Xato:', err)
    })
})

const applications = [
  {
    id: 1,
    title: "Informatika fanini o‘qitish huquqini berish bo‘yicha kasbiy va pedagogik qayta tayyorlash",
    category: "Kasbiy-pedagogik",
    code: "27871/73",
    status: "Tasdiqlangan",
    date: "18-09-2025 16:13",
    current: 10,
    total: 25,
  },
];
</script>
