<template>
  <div class="relative w-full">
    <!-- Input with calendar icon -->
    <label v-if="label" class="text-sm font-medium text-gray-700 dark:text-gray-300">
      {{ label }}
    </label>
    <div class="relative">

      <input type="text" :value="displayValue" readonly @click="toggleCalendar" placeholder="Sanani tanlang" class="w-full pr-10 pl-3 py-3 border rounded-md shadow-sm text-sm
         bg-white text-gray-900 border-gray-300
         focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none
         dark:bg-[#0F1015] dark:text-gray-200 dark:border-gray-600
         dark:focus:ring-purple-400 dark:focus:border-purple-400
         cursor-pointer" />
      <!-- Calendar icon - moved to right -->
      <Calendar
        class="w-4 h-4 text-gray-500 dark:text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>

    <!-- Calendar -->
    <div v-if="showCalendar" class="absolute mt-2 w-56 bg-white dark:bg-[#0F1015] border border-gray-300 dark:border-gray-600
             rounded-lg shadow-lg z-50 p-3">
      <!-- Header -->
      <div class="flex justify-between items-center mb-2">
        <button @click="previousMonth"
          class="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200" type="button">
          <ChevronLeft class="w-4 h-4 text-gray-700 dark:text-gray-300" />
        </button>
        <div class="flex items-center gap-1 text-xs font-medium text-gray-700 dark:text-gray-200">
          <span>{{ months[currentMonth] }}</span>
          <span>{{ currentYear }}</span>
        </div>
        <button @click="nextMonth"
          class="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200" type="button">
          <ChevronRight class="w-4 h-4 text-gray-700 dark:text-gray-300" />
        </button>
      </div>

      <!-- Days of week -->
      <div class="grid grid-cols-7 text-[11px] text-center font-medium text-gray-500 dark:text-gray-400 mb-1">
        <span v-for="day in daysOfWeek" :key="day">{{ day }}</span>
      </div>

      <!-- Calendar grid -->
      <div class="grid grid-cols-7 gap-1">
        <button v-for="date in calendarDays" :key="date.key" @click="selectDate(date)" :disabled="!date.isCurrentMonth"
          type="button"
          class="h-7 w-7 flex items-center justify-center rounded-md text-xs transition-colors duration-200" :class="{
            'text-gray-400 dark:text-gray-600 cursor-not-allowed': !date.isCurrentMonth,
            'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-200 cursor-pointer':
              date.isCurrentMonth && !date.isSelected && !date.isToday,
            'bg-indigo-600 text-white hover:bg-indigo-700': date.isSelected,
            'bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white': date.isToday && !date.isSelected,
          }">
          {{ date.day }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-vue-next'

interface Props {
  modelValue: string
  label?: string
}
interface CalendarDay {
  day: number
  date: Date
  isCurrentMonth: boolean
  isSelected: boolean
  isToday: boolean
  key: string
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const showCalendar = ref(false)
const currentMonth = ref(new Date().getMonth())
const currentYear = ref(new Date().getFullYear())

const months = [
  'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
  'Iyul', 'Avgust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'
]
const daysOfWeek = ['Du', 'Se', 'Cho', 'Py', 'Ju', 'Sha', 'Ya']

const displayValue = computed(() => {
  if (!props.modelValue) return ''
  const date = new Date(props.modelValue)
  if (isNaN(date.getTime())) return ''
  return date.toLocaleDateString('uz-UZ')
})

const calendarDays = computed(() => {
  const year = currentYear.value
  const month = currentMonth.value
  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)
  const firstDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7

  const days: CalendarDay[] = []
  const prevMonthLastDay = new Date(year, month, 0).getDate()
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    const day = prevMonthLastDay - i
    const date = new Date(year, month - 1, day)
    days.push({ day, date, isCurrentMonth: false, isSelected: false, isToday: false, key: `prev-${day}` })
  }

  const today = new Date()
  const selectedDate = props.modelValue ? new Date(props.modelValue) : null
  for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
    const date = new Date(year, month, day)
    const isToday = date.toDateString() === today.toDateString()
    const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString()
    days.push({ day, date, isCurrentMonth: true, isSelected: !!isSelected, isToday, key: `current-${day}` })
  }

  const remainingCells = 42 - days.length
  for (let day = 1; day <= remainingCells; day++) {
    const date = new Date(year, month + 1, day)
    days.push({ day, date, isCurrentMonth: false, isSelected: false, isToday: false, key: `next-${day}` })
  }
  return days
})

const toggleCalendar = () => { showCalendar.value = !showCalendar.value }
const previousMonth = () => {
  if (currentMonth.value === 0) { currentMonth.value = 11; currentYear.value-- }
  else currentMonth.value--
}
const nextMonth = () => {
  if (currentMonth.value === 11) { currentMonth.value = 0; currentYear.value++ }
  else currentMonth.value++
}
const selectDate = (date: CalendarDay) => {
  if (!date.isCurrentMonth) return
  emit('update:modelValue', date.date.toISOString().split('T')[0])
  showCalendar.value = false
}

watch(() => props.modelValue, (val) => {
  if (val) {
    const date = new Date(val)
    if (!isNaN(date.getTime())) {
      currentMonth.value = date.getMonth()
      currentYear.value = date.getFullYear()
    }
  }
}, { immediate: true })
</script>