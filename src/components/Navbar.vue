<template>
  <header v-if="route.name !== 'TrainingCourseReference'" class="sticky top-0 z-50 w-full flex items-center justify-between px-6 py-5 
           border-b bg-white text-gray-800 border-gray-200 shadow-sm 
           dark:bg-[#191c24] dark:text-white dark:border-gray-700">
    <div class="flex items-center gap-3">
      <div>
        <img src="../assets/img/logo.png" alt="logo"
          class="h-10 object-contain dark:invert dark:brightness-0 dark:contrast-200" />
      </div>
    </div>

    <div class="flex items-center gap-3 sm:gap-4">
      <!-- Theme toggle -->
      <button @click="theme.toggleTheme" class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
        <!-- 🌙 Dark mode → oq oy -->
        <svg v-if="theme.theme === 'dark'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white"
          fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.64 13.34A9 9 0 1 1 10.66 2.36
               a7 7 0 1 0 10.98 10.98z" />
        </svg>
        <!-- ☀️ Light mode → qora oy -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-black" fill="currentColor"
          viewBox="0 0 24 24">
          <path d="M21.64 13.34A9 9 0 1 1 10.66 2.36
               a7 7 0 1 0 10.98 10.98z" />
        </svg>
      </button>

      <!-- Language select -->
      <LanguageSelect />
      <div>
        <button @click="ui.toggleSidebar" class="lg:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <!-- Profile button -->
      <button
       @click="handleLogout"
        class="hidden sm:flex items-center gap-2 bg-purple-600 px-4 py-1.5 rounded text-white font-medium hover:bg-purple-700">
        <LogOut class="w-4 h-4" />
        <span class="text-sm">{{ t("Logout") }}</span>
    </button>
    </div>
  </header>
</template>


<script setup lang="ts">
import { useUserStore } from "../stores/user";
import { useThemeStore } from "../stores/theme";
import { useUiStore } from "../stores/ui";
import LanguageSelect from "../LanguageSelect.vue";
import { LogOut } from "lucide-vue-next";
import { useLocale } from "../useLocale"
import { useRoute } from "vue-router"
import { retrainService } from "../service/auth.service"

const route = useRoute()
const { t } = useLocale()
import { useRouter } from "vue-router";
const router = useRouter();
const user = useUserStore();
const theme = useThemeStore();
const ui = useUiStore();

const handleLogout = async () => {
  try {
    await retrainService.logOut();
    retrainService.logout();
    router.push("/");
  } catch (err) {
    console.error("Logout error:", err);
    alert("Error during logout: " + (err instanceof Error ? err.message : err));
  }
};
</script>
