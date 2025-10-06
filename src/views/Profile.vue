<template>
  <div class="space-y-6">
    <div class="flex items-center gap-2 cursor-pointer mb-4">
      <button
        v-if="activeTab === 'education'"
        class="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
      >
        <ArrowLeft
          @click="activeTab = 'personal'"
          class="w-5 h-5 text-purple-500"
        />
      </button>
      <span class="text-xl">{{ t("profile") }}</span>
    </div>

    <!-- Tablar -->
    <div
      class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
    >
      <!-- Tabs -->
      <div class="flex flex-wrap gap-2">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          @click="activeTab = tab.key"
          :class="[
            'flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-sm transition-colors w-full sm:w-auto',
            activeTab === tab.key
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-[#0F1015] dark:text-gray-300 dark:hover:bg-[#191c24]',
          ]"
        >
          <component :is="tab.icon" class="w-4 h-4" />
          <span>{{ t(tab.label) }}</span>
        </button>
      </div>

      <!-- Actions -->
      <div class="flex gap-2 sm:ml-auto">
        <!-- Refresh -->
        <BaseButton
          variant="outline"
          class="flex items-center justify-center gap-2"
        >
          <RefreshCw class="w-4 h-5" />
          <span>{{ t("refresh") }}</span>
        </BaseButton>

        <!-- Qo'shish -->
        <BaseButton
          @click="$router.push({ name: 'admin-educationadd' })"
          variant="outline"
          class="flex items-center justify-center gap-2"
        >
          <Plus class="w-4 h-4" />
          <span>{{ t("add") }}</span>
        </BaseButton>
      </div>
    </div>

    <!-- Shaxsiy ma’lumotlar -->
    <div
      v-if="activeTab === 'personal'"
      class="grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      <!-- Chap card -->
      <div
        class="p-5 rounded-lg border bg-gray-50 text-gray-900 border-gray-300 dark:bg-[#191c24] dark:text-gray-200 dark:border-gray-700"
      >
        <div class="flex items-center gap-4 mb-6">
          <img
            src="../assets/img/person.jpg"
            alt="User"
            class="w-[90px] h-[110px] object-cover rounded-md shadow"
          />
          <h1 class="font-bold text-2xl leading-snug">
            <!-- {{ Data.fullName }} <br /> -->
            JUMAQULOV <br />
            BOBURJON <br />
            SHERALI O‘G‘LI
          </h1>
        </div>
        <div class="space-y-3 text-sm" v-if="Data">
          <div>
            <p class="text-gray-500 dark:text-gray-400">
              {{ t("passport_number") }}
            </p>
            <p class="font-medium">{{ Data.passportSerial }}  {{ Data.passportNumber }}</p>
          </div>
          <div>
            <p class="text-gray-500 dark:text-gray-400">{{ t("jshshir") }}</p>
            <p class="font-medium">{{ Data.inps ? Data.inps : '-' }}</p>
          </div>
          <div>
            <p class="text-gray-500 dark:text-gray-400">
              {{ t("birth_date") }}
            </p>
            <p class="font-medium">{{ Data.birthday ? Data.birthday : '-' }}</p>
          </div>
          <div>
            <p class="text-gray-500 dark:text-gray-400">
              {{ t("expiry_date") }}
            </p>
            <p class="font-medium">{{ Data.passportEndDate ? Data.passportEndDate : '-' }}</p>
          </div>
          <div>
            <p class="text-gray-500 dark:text-gray-400">{{ t("issued_by") }}</p>
            <p class="font-medium">{{ Data.passportGivenWho ? Data.passportGivenWho : '-' }}</p>
          </div>
        </div>
      </div>

      <!-- O‘ng card -->
      <div
        class="p-5 rounded-lg border bg-gray-50 text-gray-900 border-gray-300 dark:bg-[#191c24] dark:text-gray-200 dark:border-gray-700"
      >
        <div class="space-y-4">
          <!-- <BaseInput :label="t('phone')" type="text" placeholder="+998 (99) 999-99-99" v-model="phone" v-maska="'+998 (##) ###-##-##'" /> -->
          <BaseInput
            :label="t('phone')"
            type="text"
            placeholder="+998 (99) 999-99-99"
            v-model="phone"
            maskType="phone"
          />
          <BaseInput
            :label="t('email')"
            type="email"
            placeholder="test@gmail.com"
            v-model="email"
            validation="gmail"
          />
          <BaseSelect
            :label="t('region')"
            v-model="selectedRegion"
            :options="regions"
          />
          <BaseSelect
            :label="t('district')"
            v-model="selectedDistrict"
            :options="districts"
          />
          <BaseInput
            :label="t('address')"
            type="text"
            placeholder="Toshkent shahar Mirobod tumani"
            v-model="address"
          />
        </div>
      </div>
    </div>

    <!-- Ta’lim ma’lumotlari -->
    <div v-else-if="activeTab === 'education'" class="space-y-3">
      <div
        v-for="edu in educations"
        :key="edu.id"
        class="p-4 rounded-md border bg-gray-50 text-gray-900 border-gray-300 dark:bg-[#191c24] dark:text-gray-200 dark:border-gray-700 flex flex-col justify-between transition-colors duration-500 hover:border-purple-500 dark:hover:border-purple-400 transition-colors duration-500"
      >
        <div class="flex justify-between items-center mb-2">
          <h3 class="font-semibold text-lg">{{ edu.university }}</h3>
          <span class="text-xs font-medium text-gray-500 dark:text-gray-400">
            {{ t("student_id") }} {{ edu.studentId }}
          </span>
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ edu.specialty }} ·
          <span class="text-indigo-500">{{ edu.degree }}</span>
        </p>
        <div class="flex items-center gap-1.5 text-xs text-gray-400 mt-2">
          <Calendar class="w-3.5 h-3.5" />
          <span>{{ edu.start }} / {{ edu.end }}</span>
        </div>
        <div class="flex justify-end gap-1.5 -mt-[20px]">
          <!-- Pencil button -->
          <div class="relative group">
            <button
              @click="$router.push(`/admin/profile/education/edit`)"
              class="p-2 rounded-md bg-gray-200 text-indigo-500 hover:bg-gray-300 dark:bg-[#0F1015] dark:hover:bg-[#242730]"
            >
              <Pencil class="w-4 h-4" />
            </button>
            <!-- Tooltip -->
            <span
              class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-xs text-white bg-gray-900 opacity-0 group-hover:opacity-100 transition pointer-events-none"
            >
              {{ t("edit") }}
            </span>
          </div>

          <!-- Trash button -->
          <div class="relative group">
            <!-- Delete button -->
            <button
              @click="showDelete = true"
              class="p-2 rounded-md bg-gray-200 text-red-500 hover:bg-gray-300 dark:bg-[#0F1015] dark:hover:bg-[#242730]"
            >
              <Trash class="w-4 h-4" />
            </button>

            <!-- Tooltip -->
            <span
              class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-xs text-white bg-gray-900 opacity-0 group-hover:opacity-100 transition pointer-events-none"
            >
              {{ t("delete") }}
            </span>

            <!-- Confirm Modal -->
            <ConfirmModal
              v-model="showDelete"
              :title="t('confirm_delete_title')"
              :message="t('confirm_delete_message')"
              :confirmText="t('delete')"
              @confirm="deleteItem"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Pastki tugmalar -->
    <div class="flex justify-between">
      <!-- <BaseButton @click="activeTab = 'personal'" class="flex items-center gap-2" v-if="activeTab === 'education'">
        <ArrowLeft class="w-4 h-4" />
        {{ t("back") }}
      </BaseButton> -->

      <BaseButton variant="primary" class="ml-auto" @click="goNext">
        <template v-if="activeTab === 'personal'">
          {{ t("next") }}
          <ArrowRight class="w-4 h-4" />
        </template>
        <template v-else>
          {{ t("save") }}
          <Check class="w-4 h-4" />
        </template>
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../components/BaseButton.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseSelect from "../components/BaseSelect.vue";
import {
  User,
  GraduationCap,
  Calendar,
  Pencil,
  Trash,
  ArrowRight,
  Check,
  ArrowLeft,
  Plus,
  RefreshCw,
} from "lucide-vue-next";
import { ref, onMounted } from "vue";
import { useLocale } from "../useLocale";
import ConfirmModal from "../components/ConfirmModal.vue"; // shu fa
import { infoService } from "../service/info.service";
const { t } = useLocale();

const Data = ref(null);

onMounted(() => {
  infoService.getById(45441)
    .then(res => {
      Data.value = res.data
    })
    .catch(err => {
      console.error('❌ Xato:', err)
    })
})

const tabs = [
  { key: "personal", label: "personal_info", icon: User },
  { key: "education", label: "education_info", icon: GraduationCap },
];

const activeTab = ref("personal");

// Inputs
const phone = ref("");
const email = ref("");
const address = ref("");

// Selects
const regions = ["Farg'ona viloyati", "Toshkent viloyati", "Namangan viloyati"];
const selectedRegion = ref(regions[0]);

const districts = ["Dang‘ara tumani", "Oltiariq tumani", "Qo‘qon shahri"];
const selectedDistrict = ref(districts[0]);

// Education data
const educations = ref([
  {
    id: 1,
    university: "Guliston davlat universiteti",
    specialty: "Informatika o‘qitish metodikasi",
    degree: "Bakalavr",
    start: "03-07-2023",
    end: "03-07-2023",
    studentId: "00327657",
  },
  {
    id: 2,
    university: "Guliston davlat universiteti",
    specialty: "Informatika o‘qitish metodikasi",
    degree: "Bakalavr",
    start: "03-07-2023",
    end: "03-07-2023",
    studentId: "456564",
  },
]);

function goNext() {
  if (activeTab.value === "personal") {
    activeTab.value = "education";
  } else {
    alert(t("data_saved"));
  }
}

const showDelete = ref(false);

function deleteItem() {
  console.log("O‘chirildi ✅");
  showDelete.value = false;
}
</script>
