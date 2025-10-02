<template>
  <div class="flex items-center gap-2 cursor-pointer mb-4">
    <button
      class="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
    >
      <ArrowLeft
        @click.prevent="$router.push({ name: 'admin-trainingcourse' })"
        class="w-5 h-5 text-purple-500"
      />
    </button>
    <span class="text-xl">{{ t("my_courses") }}</span>
  </div>

  <div class="grid lg:grid-cols-3 gap-6 p-4 sm:p-6">
    <div class="lg:col-span-2 space-y-6">
      <!-- Tabs -->
      <div
        class="flex w-full rounded-md overflow-hidden border border-gray-300 dark:border-gray-700"
      >
        <button
          v-for="tab in tabs"
          :key="tab.key"
          @click="activeTab = tab.key"
          class="flex-1 py-2 text-center transition text-sm sm:text-base"
          :class="
            activeTab === tab.key
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 dark:bg-transparent text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white'
          "
        >
          {{ t(tab.label) }}
        </button>
      </div>

      <!-- Kurslar -->
      <div
        v-if="activeTab === 'courses'"
        class="w-full aspect-video bg-black rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800"
      >
        <iframe
          class="w-full h-full"
          :src="activeLesson?.url"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <!-- Tab contents -->
      <div
        class="bg-white dark:bg-transparent rounded-lg p-4 border border-gray-200 dark:border-gray-700"
      >
        <!-- O‘quv kurslarim -->
        <div v-if="activeTab === 'courses'" class="space-y-4">
          <div class="flex items-center justify-between flex-wrap gap-3">
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ t("lesson") }} №
              {{ activeLesson?.title || lessonNumber }}
            </h2>
            <button
              class="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium text-white transition"
            >
              {{ t("confirm") }}
            </button>
          </div>
        </div>

        <!-- Amaliy topshiriqlar -->
        <div v-else-if="activeTab === 'tasks'" class="space-y-3">
          <h3 class="text-base font-semibold text-gray-900 dark:text-white">
            {{ t("tasks") }}
          </h3>

          <div v-if="pdfFiles.length > 0" class="space-y-2">
            <div
              v-for="(file, index) in pdfFiles"
              :key="index"
              class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 sm:p-4 min-h-[70px] rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-transparent hover:border-purple-500 dark:hover:border-purple-400 transition-colors duration-300"
            >
              <!-- Fayl nomi -->
              <div class="flex items-center gap-2">
                <FileText
                  class="hidden sm:block w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400"
                />
                <span
                  class="text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                >
                  {{ file.name }}
                </span>
              </div>

              <!-- Yuklab olish tugmasi -->
              <div class="w-full sm:w-auto">
                <a
                  :href="file.url"
                  :download="file.name"
                  class="flex justify-center sm:justify-start items-center gap-2 w-full sm:w-auto px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-xs sm:text-sm transition"
                >
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

      <!-- Links -->
      <div
        v-if="activeTab === 'courses'"
        class="bg-white dark:bg-transparent rounded-lg p-4 border border-gray-200 dark:border-gray-700"
      >
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
          {{ t("usefulLinks") }}
        </p>
        <a
          :href="activeLesson?.url.replace('embed/', 'watch?v=')"
          target="_blank"
          class="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline text-sm break-all"
        >
          <Link class="w-4 h-4" />
          {{ activeLesson?.url.replace("embed/", "watch?v=") }}
        </a>
      </div>
    </div>

    <!-- Right side -->
    <div
      v-if="activeTab === 'courses'"
      class="space-y-4 border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-[400px] sm:h-[500px] overflow-y-auto bg-white dark:bg-transparent"
    >
      <h2 class="text-lg font-bold text-gray-900 dark:text-white">
        {{ course.title }}
      </h2>

      <div
        v-for="(section, i) in sections"
        :key="i"
        class="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
      >
        <!-- Accordion -->
        <button
          class="flex items-center justify-between w-full px-4 py-3 text-left font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-800 dark:text-gray-200"
          @click="toggleSection(i)"
        >
          {{ section.title }}
          <span
            class="transition-transform"
            :class="{ 'rotate-180': openSection === i }"
          >
            <ChevronDown />
          </span>
        </button>

        <div v-if="openSection === i" class="px-4 pb-3 space-y-2">
          <div
            v-for="lesson in section.lessons"
            :key="lesson.id"
            class="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            @click="playLesson(lesson)"
          >
            <div
              class="w-6 h-6 flex items-center justify-center rounded-full"
              :class="
                lesson.id === activeLesson?.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              "
            >
              <PlayCircle class="w-4 h-4" />
            </div>
            <span class="text-sm text-gray-800 dark:text-gray-200">
              {{ lesson.title }}
            </span>
          </div>
        </div>
      </div>

      <!-- Info -->
      <router-link
        target="_blank"
        :to="{ name: 'admin-trainingcoursereference' }"
        class="flex items-center gap-2 w-full justify-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition text-white"
      >
        <Eye class="w-5 h-5" />
        {{ t("reference") }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  ChevronDown,
  PlayCircle,
  Eye,
  ArrowLeft,
  Link,
  FileText,
  Download,
} from "lucide-vue-next";
import { useLocale } from "../useLocale";
const { t } = useLocale();

const course = {
  title:
    "Ixtisoslashtirilgan ta’lim muassasasi o‘qituvchisi va tarbiyachisi (tiflopedagogika) huquqini berish bo‘yicha kasbiy qayta tayyorlash",
};

const sections = [
  {
    title: "Ixtisoslik fanlari",
    lessons: [
      {
        id: 1,
        title: "15",
        url: "https://www.youtube.com/embed/7lKoRm-Brag",
      },
      {
        id: 2,
        title: "2",
        url: "https://www.youtube.com/embed/tgbNymZ7vqY",
      },
    ],
  },
  {
    title: "Tiflopedagogika Yakuniy test",
    lessons: [
      {
        id: 3,
        title: "Test 1",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    ],
  },
];

const openSection = ref<number | null>(null);
const activeLesson = ref(sections[0].lessons[0]);
const lessonNumber = ref(1);

const tabs = [
  { key: "courses", label: "courses" },
  { key: "tasks", label: "tasks" },
];
const activeTab = ref("courses");

// PDF fayllar (admin yuklagan)
const pdfFiles = ref([
  {
    name: "Qayta tayyorlov kursiga oid resurslarni ushbu telegram kanalida topishingiz mumkin",
    description:
      "Telegram kanal orqali qo‘shimcha materiallarni kuzatib boring",
    url: "/pdfs/task1.pdf",
  },
  {
    name: "Amaliy topshiriq 2",
    description: "Ikkinchi topshiriqning to‘liq PDF fayli",
    url: "/pdfs/task2.pdf",
  },
]);

function toggleSection(index: number) {
  openSection.value = openSection.value === index ? null : index;
}

function playLesson(lesson: any) {
  activeLesson.value = lesson;
  lessonNumber.value = lesson.title;
}
</script>
