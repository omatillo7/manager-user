<template>
  <div class="border-2 border-dashed rounded-md p-6 text-center cursor-pointer transition-colors" :class="[
    fileName
      ? 'border-green-500 hover:border-green-600 dark:border-green-400 dark:hover:border-green-500'
      : 'border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400'
  ]" @click="triggerFileInput" @dragover.prevent @drop.prevent="handleDrop">
    <!-- Upload Icon -->
    <Upload class="w-6 h-6 mx-auto mb-2" :class="fileName ? 'text-green-500' : 'text-purple-500'" />

    <!-- Label -->
    <p class="text-sm font-medium">{{ label }}</p>

    <!-- 🔽 Faqat shu 3ta matn kichraytirilgan -->
    <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
      {{ t("drag_and_drop") }}
    </p>
    <p class="text-[10px] sm:text-xs mt-1 text-gray-400">
      5 MB • PNG, JPG, PDF, DOC
    </p>

    <!-- File Input (hidden) -->
    <input ref="fileInput" type="file" class="hidden" @change="handleFileChange" />

    <!-- Selected file -->
    <div v-if="fileName"
      class="mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
      <span class="font-medium">{{ t("uploade_file") }}:</span> {{ fileName }}
      <button type="button" @click.stop="clearFile"
        class="ml-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600 transition-colors"
        title="Faylni o‘chirish">
        <Trash class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
import { Upload, Trash } from "lucide-vue-next"
import { useLocale } from "../useLocale"
const { t } = useLocale()


interface Props {
  label: string
  modelValue?: File | null
}

const props = defineProps<Props>()
const emit = defineEmits(["update:modelValue"])

const fileInput = ref<HTMLInputElement | null>(null)
const fileName = ref("")

function triggerFileInput() {
  fileInput.value?.click()
}

function handleFileChange(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    const file = target.files[0]
    fileName.value = file.name
    emit("update:modelValue", file)
  }
}

function handleDrop(event: DragEvent) {
  if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
    const file = event.dataTransfer.files[0]
    fileName.value = file.name
    emit("update:modelValue", file)
  }
}

function clearFile() {
  fileName.value = ""
  emit("update:modelValue", null)
  if (fileInput.value) {
    fileInput.value.value = "" // reset input
  }
}

watch(
  () => props.modelValue,
  (newVal) => {
    if (!newVal) fileName.value = ""
  }
)
</script>
