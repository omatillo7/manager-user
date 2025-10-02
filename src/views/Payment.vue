<template>
  <div class="p-4 sm:p-6">
    <!-- Breadcrumb -->
    <div class="flex items-center text-xl mb-4 gap-2">
      <button
        @click="$router.push({ name: 'admin-contracts' })"
        class="p-2 rounded-full 
          bg-gray-200 hover:bg-gray-300 
          dark:bg-gray-700 dark:hover:bg-gray-600 
          transition">
        <ArrowLeft class="w-5 h-5 text-purple-500" />
      </button>

      <h1 class="text-gray-900 dark:text-gray-100">{{ t("contracts") }}</h1>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <!-- Chap qism: form -->
      <div
        class="md:col-span-2 rounded-lg p-5 border 
          bg-white border-gray-200 text-gray-900 
          dark:bg-[#191c24] dark:border-gray-700 dark:text-gray-100">
        <label
          class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
          {{ t("enter_amount") }}
        </label>
        <BaseInput type="number" placeholder="0" />

        <button
          @click="pay"
          class="mt-4 w-full py-2 rounded-md 
            bg-purple-600 hover:bg-purple-700 
            text-white font-medium transition">
          {{ t("pay") }}
        </button>
      </div>

      <!-- O‘ng qism: ma’lumotlar -->
      <div
        class="rounded-lg p-5 border
          bg-white border-gray-200 text-gray-900 
          dark:bg-[#191c24] dark:border-gray-700 dark:text-gray-100">
        <h3 class="text-xl font-semibold leading-snug mb-1">
          {{ t("contract_title") }}
        </h3>
        <div class="text-purple-600 dark:text-purple-400 text-sm font-medium mb-3">
          {{ t("category") }}
        </div>

        <div class="text-[11px] sm:text-[12px] flex justify-between border-t pt-3 border-gray-200 dark:border-gray-700">
          <span>{{ t("course_price") }}</span>
          <span class="font-medium bg-purple-600 text-white px-2 rounded w-[110px]">
            {{ contract.price.toLocaleString() }} so‘m
          </span>
        </div>

        <div class="text-[11px] sm:text-[12px] flex justify-between pt-2">
          <span>{{ t("paid_amount") }}</span>
          <span class="font-medium bg-purple-600 text-white px-2 rounded w-[110px]">
            {{ contract.paid.toLocaleString() }} so‘m
          </span>
        </div>

        <div class="text-[11px] sm:text-[12px] flex justify-between pt-2">
          <span>{{ t("remaining_amount") }}</span>
          <span class="font-medium bg-purple-600 text-white px-2 rounded w-[110px]">
            {{ contract.remaining.toLocaleString() }} so‘m
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { ArrowLeft } from "lucide-vue-next"
import BaseInput from "../components/BaseInput.vue"
import { useLocale } from "../useLocale"
const { t } = useLocale()

const amount = ref(0)

const contract = {
  price: 6314956,
  paid: 2000000,
  remaining: 4314956,
}

const pay = () => {
  if (amount.value <= 0) {
    alert("To‘lov summasini kiriting!") // buni ham $t("enter_amount") qilib qo‘ysak bo‘ladi
    return
  }
  console.log("To‘lov boshlandi:", amount.value)
}
</script>
