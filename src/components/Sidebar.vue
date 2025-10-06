<template>
  <div v-if="route.name !== 'TrainingCourseReference'">
    <div
      v-if="ui.sidebarOpen"
      class="fixed inset-0 bg-black/50 z-40 lg:hidden"
      @click="ui.toggleSidebar"
    ></div>

    <aside
      :class="[
        'fixed lg:static top-0 left-0 z-50 h-full w-80',
        'bg-white text-gray-800 shadow-sm',
        'dark:bg-[#191c24] dark:text-gray-300',
        'transform transition-transform duration-300',
        ui.sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
      ]"
    >
      <nav class="flex flex-col p-3 space-y-2">
        <!-- Menu links -->
        <RouterLink
          v-for="item in menu"
          :key="item.path"
          :to="item.path"
          class="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200"
          :class="
            $route.path === `/admin/${item.path}`
              ? 'bg-gray-100 text-black dark:bg-[#0F1015] dark:text-white'
              : 'hover:bg-gray-200 hover:text-black dark:hover:bg-[#0F1015] dark:hover:text-white'
          "
          @click="ui.sidebarOpen = false"
        >
          <component :is="item.icon" class="w-5 h-5" />
          <span>{{ item.label }}</span>
        </RouterLink>

        <!-- Logout faqat mobile da chiqadi -->
        <button
          class="lg:hidden flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200
         text-purple-600 hover:bg-purple-100 hover:text-purple-800
         dark:text-purple-400 dark:hover:bg-purple-900 dark:hover:text-purple-200"
          @click="handleLogout"
        >
          <LogOut class="w-5 h-5" />
          <span>{{ t('Logout') }}</span>
        </button>
      </nav>
    </aside>
  </div>
</template>

<script setup lang="ts">
import {
  BookOpen,
  User,
  FileText,
  FileSpreadsheet,
  Box,
  LogOut,
  Notebook,
} from "lucide-vue-next"
import { useRoute, useRouter } from "vue-router"
import { useUiStore } from "../stores/ui"
import { useLocale } from "../useLocale"
import { computed } from "vue"
import { retrainService } from "../service/auth.service"
import StorageService from "../service/storage.service"

const route = useRoute()
const router = useRouter();
const { t } = useLocale()
const ui = useUiStore()

const menu = computed(() => [
  { path: "profile", label: t("profile"), icon: User },
  { path: "courses", label: t("courses"), icon: BookOpen },
  { path: "trainingcourse", label: t("my_courses"), icon: Notebook },
  { path: "applications", label: t("Applications"), icon: FileText },
  { path: "contracts", label: t("contracts"), icon: FileSpreadsheet },
  { path: "resources", label: t("resources"), icon: Box },
])

const handleLogout = async () => {
  try {
    await retrainService.logOut();
    retrainService.logout();
    router.push("/");
    StorageService.removeToken();
  } catch (err) {
    alert("Error during logout: " + (err instanceof Error ? err.message : err));
  }
};
</script>
