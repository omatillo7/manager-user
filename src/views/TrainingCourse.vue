<template>
  <div class="p-4 sm:p-6">
    <h1 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
      {{ t('my_courses') }}
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      <div
        @click="$router.push({ name: 'admin-trainingcourseview' })"
        v-for="course in animatedCourses"
        :key="course.id"
        class="h-[140px] group relative border border-gray-300 dark:border-gray-700 rounded-xl p-4 
               bg-white dark:bg-transparent text-gray-900 dark:text-white transition-all duration-300 
               cursor-pointer hover:border-purple-500 dark:hover:border-purple-400"
      >
        <!-- Icon + Title -->
        <div class="flex items-center gap-2 mb-3">
          <div class="p-2 rounded-full bg-purple-100 dark:bg-gray-700 flex items-center justify-center">
            <Notebook class="w-6 h-6 text-purple-500" />
          </div>
          <h3 class="text-sm sm:text-base font-semibold leading-snug line-clamp-2 sm:line-clamp-3">
            {{ course.title }}
          </h3>
        </div>

        <!-- Guruh -->
        <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">
          {{ course.group }} - {{ t('group') }}
        </p>

        <!-- Progress qatori -->
        <div class="flex items-center gap-2 text-xs sm:text-sm">
          <!-- Progress bar -->
          <div class="flex-1 h-[5px] bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              class="h-full bg-purple-500 transition-[width] duration-[1500ms] ease-in-out"
              :style="{ width: course.animatedProgress + '%' }"
            ></div>
          </div>

          <!-- Progress % -->
          <span class="text-purple-600 dark:text-purple-400 whitespace-nowrap">
            {{ course.animatedProgress }}%
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onActivated } from "vue"
import { Notebook } from "lucide-vue-next"
import { useLocale } from "../useLocale"
const { t } = useLocale()

const courses = [
  {
    id: 1,
    title: "Ixtisoslashtirilgan ta’lim muassasasi o‘qituvchisi va tarbiyachisi (tiflopedagogika) huquqini berish bo‘yicha kasbiy qayta tayyorlash",
    group: 377,
    progress: 30,
  },
  {
    id: 2,
    title: "Front-end dasturlash bo‘yicha kurs",
    group: 122,
    progress: 45,
  },
  {
    id: 3,
    title: "Ingliz tili kursi (Intermediate)",
    group: 89,
    progress: 90,
  },
]

const animatedCourses = ref(courses.map((c) => ({ ...c, animatedProgress: 0 })))

function startAnimation() {
  animatedCourses.value.forEach((course, i) => {
    course.animatedProgress = 0
    setTimeout(() => {
      course.animatedProgress = course.progress
    }, i * 200) // har bir kurs ketma-ket chiqishi uchun delay
  })
}

onMounted(startAnimation)
onActivated(startAnimation)
</script>

<style scoped>
.line-clamp-2,
.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  -webkit-line-clamp: 2;
}

.line-clamp-3 {
  -webkit-line-clamp: 3;
}
</style>
