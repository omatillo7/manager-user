<template>
  <div class="space-y-4">
    <h2 class="text-xl font-bold mb-4">{{ t("contracts") }}</h2>

    <div v-for="contract in contracts" :key="contract.id" class="p-4 rounded-lg border bg-gray-50 text-gray-900 border-gray-300 
             dark:bg-[#191c24] dark:text-gray-200 dark:border-gray-700
             transition-colors duration-500 hover:border-purple-500 dark:hover:border-purple-400 
             shadow-sm flex flex-col gap-3">
      <!-- Title + Status -->
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
        <h3 class="font-semibold text-base sm:text-lg">
          {{ contract.title }}
        </h3>

        <div class="flex flex-wrap sm:flex-nowrap items-center gap-2 text-sm font-medium">
          <!-- Code -->
          <span class="text-gray-500 dark:text-gray-400">{{ contract.code }}</span>

          <!-- Dot -->
            <span class="w-2 h-2 rounded-full"
              :class="contract.status === 'Imzolangan' ? 'bg-green-500' : 'bg-red-500'"></span>

          <!-- Status -->
          <span :class="contract.status === 'Imzolangan'
            ? 'text-green-600 dark:text-green-400'
            : 'text-red-600 dark:text-red-400'">
            {{ contract.status }}
          </span>
        </div>
      </div>

      <!-- Sub info -->
      <div
        class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
        <div class="text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400">
          {{ contract.category }}
        </div>
        <div class="flex items-center gap-2">
          <Users class="w-4 h-4" />
          <span>{{ contract.current }} / {{ contract.total }} {{ t("applications") }}</span>
        </div>
      </div>

      <!-- Date -->
      <div class="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
        <Calendar class="w-4 h-4" />
        <span>{{ contract.date }}</span>
      </div>

      <!-- Accordion: Faqat Imzolanganlarda -->
      <div v-if="contract.status === 'Imzolangan'" class="mt-2">
        <!-- HR chiziq -->
        <hr class="border-gray-300 dark:border-gray-700 mb-2" />

        <button @click="toggle(contract.id)" class="flex items-center justify-between w-full text-sm font-medium py-1">
          <div class="flex items-center gap-2">
            <ChevronDown :class="[
              'w-6 h-6 transform transition-transform duration-300',
              openId === contract.id ? 'rotate-180' : ''
            ]" />
            <span>{{ t("payment_info") }}</span>
          </div>
        </button>

        <!-- SlideDown animatsiya -->
        <transition name="slide-fade">
          <div v-if="openId === contract.id" class="mt-2 rounded-md text-xs sm:text-sm overflow-hidden border 
         border-gray-200 dark:border-gray-700 
         bg-white dark:bg-[#14151b] text-gray-700 dark:text-gray-200">
            <!-- Paid row -->
            <div class="flex items-center justify-between border-b 
           border-gray-200 dark:border-gray-700 px-3 py-2">
              <div class="flex items-center gap-1 sm:gap-2 text-green-600 dark:text-green-500 font-medium">
                <Check class="w-4 h-4" />
                {{ contract.paid.toLocaleString() }} so‘m
              </div>
              <div class="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs">
                <Calendar class="w-4 h-4" />
                <span>{{ contract.date }}</span>
              </div>
            </div>

            <!-- Remaining row -->
            <div class="flex items-center justify-between px-3 py-2">
              <div class="font-semibold text-gray-800 dark:text-gray-100">
                {{ t("remaining") }}: {{ contract.remaining.toLocaleString() }} so‘m
              </div>
              <button @click="openModal(contract)" class="px-1 py-0.5 sm:px-3 sm:py-1.5 rounded-md
                  bg-purple-600 text-white text-[10px] sm:text-sm
                  hover:bg-purple-700 shadow transition">
                {{ t("pay_remaining") }}
              </button>

            </div>
          </div>

        </transition>
      </div>

    </div>

    <!-- Modal -->
    <transition name="fade">
      <div v-if="modalOpen" class="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <div class="bg-[#191c24] text-gray-200 p-6 rounded-lg shadow-lg w-[300px] text-center space-y-4">
          <h3 class="text-lg font-semibold">{{ t("choose_payment") }}</h3>

          <!-- Payme button with white background -->
          <div @click="$router.push({ name: 'admin-payment' })" class="w-full rounded-md bg-white hover:bg-gray-100 transition 
           flex items-center justify-center py-2 cursor-pointer">
            <img src="../assets/img/payme-logo.png" alt="Payme" class="h-6 object-contain" />
          </div>

          <!-- Cancel button -->
          <button class="w-full py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-gray-200 transition"
            @click="modalOpen = false">
            {{ t("cancel") }}
          </button>
        </div>

      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Calendar, Users, Check, Wallet, ChevronDown } from "lucide-vue-next"
import { useLocale } from "../useLocale"

const { t } = useLocale()

// Accordion holati (faqat bitta ochiq bo‘ladi)
const openId = ref<number | null>(null)
const toggle = (id: number) => {
  openId.value = openId.value === id ? null : id
}

// Modal holati
const modalOpen = ref(false)
const selectedContract = ref<any>(null)

const openModal = (contract: any) => {
  selectedContract.value = contract
  modalOpen.value = true
}


// Fake data
const contracts = [
  {
    id: 1,
    title:
      "Informatika fanini o‘qitish huquqini berish bo‘yicha kasbiy va pedagogik qayta tayyorlash",
    category: "Kasbiy-pedagogik",
    code: "27871/73",
    status: "Bekor qilingan",
    date: "18-09-2025 16:13",
    current: 10,
    total: 25,
    paid: 2000000,
    remaining: 4314956,
  },
  {
    id: 2,
    title:
      "Ixtisoslashtirilgan ta’lim muassasasi o‘qituvchisi va tarbiyachisi (tiflopedagogika) huquqini berish bo‘yicha kasbiy qayta tayyorlash",
    category: "Kasbiy qayta tayyorlash",
    code: "24787/13133",
    status: "Imzolangan",
    date: "25-07-2025 09:58",
    current: 1,
    total: 25,
    paid: 2000000,
    remaining: 4314956,
  },
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* SlideDown animatsiya */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  max-height: 500px;
  /* kontent sig‘ishi uchun katta qiymat */
  opacity: 1;
}
</style>
