<template>
    <div class="max-w-5xl mx-auto p-8 rounded-lg border bg-gray-50 text-gray-900 border-gray-300
           dark:bg-[#191c24] dark:text-gray-200 dark:border-gray-700 space-y-6">
        <!-- Sarlavha -->
        <div class="flex items-center gap-2 cursor-pointer mb-4">
            <button class="p-2 rounded-full 
         bg-gray-200 hover:bg-gray-300 
         dark:bg-gray-700 dark:hover:bg-gray-600 
         transition">
                <ArrowLeft @click.prevent="$router.push({ name: 'admin-profile' })" class="w-5 h-5 text-purple-500" />
            </button>
            <span class="text-xl">{{ isEdit ? t("education_edit") : t("education_add") }}</span>
        </div>

        <!-- Forma -->
        <form class="space-y-5">
            <!-- Universitet + Mutaxassislik -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BaseSelect :label="t('university')" v-model="selectedEduSpeciality" :options="eduspeciality" />
                <BaseSelect :label="t('speciality')" v-model="selectedSpeciality" :options="speciality" />
            </div>

            <!-- Daraja + Diplom seriyasi -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BaseSelect :label="t('degree')" v-model="selectedDegree" :options="degree" />
                <BaseSelect :label="t('diploma_series')" v-model="diplomSeries" :options="diplom" />
            </div>

            <!-- Diplom raqami + Diplom berilgan sana -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BaseInput type="number" :label="t('diploma_number')" v-model="form.diplomaNumber" />
                <BaseDatepicker :label="t('diploma_date')" v-model="form.diplomaDate" />
            </div>

            <!-- O‘qish boshlangan sana + tugagan sana -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BaseDatepicker :label="t('study_start')" v-model="form.startDate" />
                <BaseDatepicker :label="t('study_end')" v-model="form.endDate" />
            </div>

            <!-- File upload -->
            <div class="space-y-4">
                <FileUpload :label="t('diploma_file')" v-model="form.diplomaFile" />
                <FileUpload :label="t('attachment_file')" v-model="form.attachmentFile" />
            </div>

            <!-- Tugmalar -->
            <div class="flex justify-end pt-6">
                <!-- <BaseButton @click.prevent="$router.push('/profile')">
                    <ArrowLeft class="w-4 h-4" />
                    {{ t("back") }}
                </BaseButton> -->
                <BaseButton variant="primary">
                    {{ t("save") }}
                    <ArrowRight class="w-4 h-4" />
                </BaseButton>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { useRoute } from "vue-router"
import BaseSelect from "../components/BaseSelect.vue"
import BaseInput from "../components/BaseInput.vue"
import BaseButton from "../components/BaseButton.vue"
import FileUpload from "../components/FileUpload.vue"
import BaseDatepicker from "../components/BaseDatepicker.vue"
import { ArrowRight, ArrowLeft } from "lucide-vue-next"
import { useLocale } from "../useLocale"

const { t } = useLocale()

const route = useRoute()
const isEdit = computed(() => route.path.includes("edit"))

const eduspeciality = [
    "Toshkent davlat universiteti",
    "Narxoz davlat universiteti",
    "Mediana universiteti"
]
const selectedEduSpeciality = ref(eduspeciality[0])

const speciality = ["Pedagogik", "Kattalar ta'limi", "Kichiklar ta'limi"]
const selectedSpeciality = ref(speciality[0])

const degree = ["Magistr", "Bakalavr"]
const selectedDegree = ref(degree[0])

const diplom = ["A", "AB"]
const diplomSeries = ref(diplom[0])

const form = ref({
    diplomaNumber: "",
    diplomaDate: "",
    startDate: "",
    endDate: "",
    diplomaFile: null as File | null,
    attachmentFile: null as File | null,
})
</script>
