<template>
  <div>
    <!-- Header -->
    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
      <h1 class="text-xl  font-semibold">
        {{ t("courses") }}
      </h1>

      <!-- Filters -->
      <div class="flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-3 w-full lg:max-w-xl">
        <!-- Select -->
        <BaseSelect :label="t('search_by_speciality')" placeholder="" v-model="SpecialityFilter" :options="specialities"
          class="flex-1 w-full" />

        <!-- Search -->
        <div class="relative flex-1 w-full mt-6">
          <span class="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3
                 a7.5 7.5 0 016.15 13.65z" />
            </svg>
          </span>

          <input v-model="q" :placeholder="t('search_course')"
            class="w-full h-[45px] pl-10 pr-3 py-2 rounded bg-gray-100 dark:bg-transparent border border-gray-400 dark:border-gray-600 placeholder-gray-400 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 focus:outline-none transition" />
        </div>
      </div>
    </div>

    <!-- Courses grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <CourseCard v-for="c in filtered" :key="c.id"
        @click="$router.push({ name: 'admin-coursedetail', params: { id: c.id } })" :title="c.title" :type="c.category"
        :description="c.description"
        class="w-full h-auto p-4 rounded-xl shadow hover:shadow-lg transition transform hover:scale-[1.02] cursor-pointer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import CourseCard from "../components/CourseCard.vue";
import { useCoursesStore } from "../stores/courses";
import BaseSelect from "../components/BaseSelect.vue";
import { infoService } from '../service/info.service';
import { useLocale } from "../useLocale"
const { t } = useLocale()

const q = ref("");
const store = useCoursesStore();


onMounted(() => {
  infoService.getByMySpeciality("","")
    .then(res => {
      Data.value = res.data;
      console.log("Data:", res.data);
    })
    .catch(err => {
      console.error("Error:", err);
    });
});


const specialities = ["Barchasi", "Kasbiy", "Pedagogik", "Kasbiy-pedagogik"];
const SpecialityFilter = ref("Barchasi");

const filtered = computed(() =>
  store.list.filter((c) => {
    const matchesSearch =
      !q.value || c.title.toLowerCase().includes(q.value.toLowerCase());

    const matchesSpeciality =
      SpecialityFilter.value === "Barchasi" || c.category === SpecialityFilter.value;

    return matchesSearch && matchesSpeciality;
  })
);
</script>
