<template>
  <div class="min-h-screen flex flex-col font-sans
           bg-gray-50 text-gray-800
           dark:bg-[#05070D] dark:text-gray-200">
    <!-- Navbar -->
    <Navbar v-if="!isBlankLayout" />

    <!-- Layout -->
    <div class="flex flex-1">
      <!-- Sidebar -->
      <Sidebar v-if="!isBlankLayout" />

      <!-- Main -->
      <main class="flex-1 p-6 overflow-y-auto">
        <div class="bg-white rounded-lg shadow-sm p-6
                 dark:bg-[#191c24]">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/Navbar.vue"
import Sidebar from "../components/Sidebar.vue"

import { computed } from "vue"
import { useRoute } from "vue-router"
const route = useRoute();
const isBlankLayout = computed(() => route.meta.layout === "blank");

</script>
