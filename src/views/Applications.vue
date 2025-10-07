<template>
  <div class="space-y-4">
    <h2 class="text-xl font-bold mb-4">{{ t("Applications") }}</h2>

    <!-- Loader -->
    <Loader v-if="!Data" />

    <!-- Applications -->
    <div
      v-else
      v-for="c in Data.list"
      :key="c.id"
      class="p-4 rounded-lg border bg-gray-50 text-gray-900 border-gray-300 dark:bg-[#191c24] dark:text-gray-200 dark:border-gray-700 transition-colors duration-500 hover:border-purple-500 dark:hover:border-purple-400 shadow-sm flex flex-col gap-3"
    >
      <!-- Title + Status -->
      <div
        class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2"
      >
        <h3 class="font-semibold text-base sm:text-lg">
          {{ c.lessonTypeDto?.nameUz }}
        </h3>

        <div
          class="flex flex-wrap sm:flex-nowrap items-center gap-2 text-sm font-medium"
        >
          <!-- Code -->
          <span class="text-gray-500 dark:text-gray-400">{{ c.code }}</span>

          <!-- Dot -->
          <span
            class="w-2 h-2 rounded-full"
            :class="{
              'bg-green-500':
                c.status === 'ACCEPTED' || c.status === 'CONTRACT',
              'bg-yellow-500': c.status === 'SEEN' || c.status === 'SEND',
              'bg-red-500': c.status === 'CANCELLED',
            }"
          ></span>

          <!-- Status -->
          <span
            :class="{
              'text-green-600 dark:text-green-400':
                c.status === 'ACCEPTED' || c.status === 'CONTRACT',
              'text-yellow-600 dark:text-yellow-400':
                c.status === 'SEEN' || c.status === 'SEND',
              'text-red-600 dark:text-red-400': c.status === 'CANCELLED',
            }"
          >
            {{
              c.status === "ACCEPTED"
                ? "Tasdiqlangan"
                : c.status === "CONTRACT"
                ? "Tasdiqlangan"
                : c.status === "SEND"
                ? "Yuborilgan"
                : c.status === "SEEN"
                ? "Ko‘rilgan"
                : c.status === "CANCELLED"
                ? "Bekor qilingan"
                : c.status
            }}
          </span>
        </div>
      </div>

      <!-- Sub info -->
      <div
        class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400"
      >
        <div
          class="text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400"
        >
          {{ c.lessonTypeDto?.parentNameUz }}
        </div>

        <div class="flex items-center gap-2">
          <User class="w-4 h-4" />
          <span> {{ c.listenerLastName }} {{ c.listenerFirstName }} </span>
        </div>
      </div>
      <div
        class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400"
      >
        <div
          class="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400"
        >
          <Calendar class="w-4 h-4" />
          <span>{{ c.createdDate }}</span>
        </div>

        <div
          class="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400"
        >
          <Users class="w-4 h-4" />
          {{ c.announcementDto.countCurrentListener }}/{{ c.kvota || 25 }}
          {{ t("applied") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Calendar, Users, User } from "lucide-vue-next";
import { useLocale } from "../useLocale";
const { t } = useLocale();
import { onMounted, ref } from "vue";
import { infoService } from "../service/info.service";
import Loader from "../../src/components/Loader.vue";

const Data = ref<any | null>(null);

onMounted(() => {
  infoService
    .ownList("", "SEND,SEEN,ACCEPTED,CANCELLED,CONTRACT", "RETRAINING")
    .then((res) => {
      Data.value = res.data;
    })
    .catch((err) => {
      console.error("❌ Xato:", err);
    });
});
</script>
