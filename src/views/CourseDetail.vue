<template>
  <div>
    <!-- Back -->
    <div class="flex items-center gap-2 cursor-pointer mb-4">
      <button @click="$router.back()" class="p-2 rounded-full 
         bg-gray-200 hover:bg-gray-300 
         dark:bg-gray-700 dark:hover:bg-gray-600 
         transition">
        <ArrowLeft @click="$router.push({ name: 'admin-courses' })" class="w-5 h-5 text-purple-500" />
      </button>

      <span class="text-xl">{{ t("courses") }}</span>
    </div>

    <!-- Main content -->
    <div class="flex flex-col lg:flex-row gap-6">
      <!-- Left side -->
      <div
        class="flex-1 mt-3 p-4 border border-gray-300 border-opacity-50 dark:border-white dark:border-opacity-40 rounded-lg">
        <span class="text-sm px-2 py-1 rounded bg-purple-600 text-white">
          {{ t("professional") }}
        </span>
        <div class="flex items-start gap-4 flex-col sm:flex-row">
          <h3 class="text-2xl sm:text-3xl font-medium mt-3 leading-snug">
            {{ t("course_math_title") }}
          </h3>
        </div>
        <h2 class="mt-6 text-lg sm:text-xl text-gray-400">{{ t("who_for") }}</h2>

        <!-- Scroll list -->
        <div
          class="max-h-[350px] sm:max-h-[430px] overflow-y-auto pr-2 custom-scroll grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-4 text-sm leading-relaxed">
          <!-- 1-column on mobile, 2-column on larger -->
          <div class="space-y-2">
            <p v-for="n in 14" :key="n"
              class="bg-gray-100 dark:bg-[#1e1f29] rounded-lg p-3 transition w-full h-auto min-h-[60px] flex items-start gap-3 text-sm">
              <span
                class="w-7 h-7 flex items-center justify-center rounded-full bg-purple-600 text-white text-xs font-bold flex-shrink-0">{{
                  n }}</span>
              <span class="flex-1">
                {{ itemsLeft[n - 1] }}
              </span>
            </p>
          </div>

          <div class="space-y-2">
            <p v-for="(item, i) in itemsRight" :key="i"
              class="bg-gray-100 dark:bg-[#1e1f29] rounded-lg p-3 transition w-full h-auto min-h-[60px] flex items-start gap-3 text-sm">
              <span
                class="w-7 h-7 flex items-center justify-center rounded-full bg-purple-600 text-white text-xs font-bold flex-shrink-0">{{
                  i + 15 }}</span>
              <span class="flex-1">
                {{ item }}
              </span>
            </p>
          </div>
        </div>
      </div>

      <!-- Right side (price & details) -->
      <div
        class="w-[300px] h-[280px] flex-shrink-0 flex flex-col justify-between mt-3 border border-gray-300 border-opacity-50 dark:border-white dark:border-opacity-40 rounded-lg p-5 shadow-sm">
        <div>
          <h2 class="text-xl sm:text-2xl font-bold mb-2">9 421 343 {{ t("currency") }}</h2>
          <p class="text-gray-400 text-xs sm:text-sm mb-4">8/25 {{ t("applied") }}</p>

          <button class="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm 
         py-2 rounded mb-4 transition flex items-center justify-center gap-2">
            <span>{{ t("apply") }}</span>
          </button>

          <h3 class="font-medium mb-2 text-sm sm:text-base">{{ t("course_includes") }}</h3>
          <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-2">
            <li class="flex items-center gap-2">
              <Calendar class="w-3.5 h-3.5 text-purple-500" />
              7 {{ t("months") }}
            </li>
            <li class="flex items-center gap-2">
              <Video class="w-4 h-4 text-purple-500" />
              972 {{ t("video_lessons") }}
            </li>
            <li class="flex items-center gap-2">
              <GraduationCap class="w-4 h-4 text-purple-500" />
              {{ t("certificate") }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Calendar, Video, GraduationCap } from "lucide-vue-next";
import { useLocale } from "../useLocale";
import { ArrowLeft, Check } from "lucide-vue-next"

const { t } = useLocale();

defineProps<{ title: string; type: string; description?: string }>();

const itemsLeft = [
  "Aniq va tabiiy fanlarni oʻqitish metodikasi (fizika va astronomiya)",
  "Fizika (yoʻnalishlar boʻyicha)",
  "Astronomiya (tadqiqot yoʻnalishi boʻyicha)",
  "Matematika va informatika",
  "Buxgalteriya hisobi va audit (tarmoqlar boʻyicha)",
  "Fizika",
  "Tibbiyot fizikasi",
  "Axborot-kommunikatsiya texnologiyalari sohasida kasb taʼlimi",
  "Materialshunoslik va yangi materiallar texnologiyasi (tarmoqlar boʻyicha)",
  "Mashinasozlik texnologiyasi, mashinasozlik ishlab chiqarishni jihozlash va avtomatlashtirish",
  "O'qituvchi (Fizika va astranomiya)",
  "Kasb ta'limi (Mashinasozlik texnologiyasi, mashinasozlik ishlab chiqarishni jihozlash va avtomatlashtirish)",
  "Kasb ta'limi (Informatika va Axborot texnologiyasi)",
  "Fizika"
];

const itemsRight = [
  "Fizika va astranomiya",
  "Informatika O'qitish metodikasi",
  "Axborot-kommunikatsiya texnologiyalari sohasida kasb ta’limi",
  "Informatika o'qitish metodikasi",
  "Axborot tizimlarining matematik va dasturiy ta'minot",
  "Milliy istiqlol g'oyasi, huquq va ma'naviyat asoslari",
  "Kasb ta'limi (Kimyo texnoligiya)",
  "Kasb ta'limi (Yer usti transport tizimlari ekplutatsiyasi)",
  "Fizika",
  "Kasb ta'limi. Energetika (issiqlik energetikasi)",
  "Kasb ta'limi (Transport inshootlarining ekspluatatsiyasi)",
  "Astranomiya",
  "Kasb ta'limi (Kimyo texnologiya)",
  "Kasb ta'limi (Yerusti transport tizimlari va ularning eksplutatsiyasi)"
];
</script>

<style scoped>
/* Custom Scroll */
.custom-scroll::-webkit-scrollbar {
  width: 4px;
}

.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background-color: rgba(107, 70, 193, 0.6);
  border-radius: 9999px;
}

.custom-scroll::-webkit-scrollbar-thumb:hover {
  background-color: rgba(107, 70, 193, 0.8);
}
</style>
