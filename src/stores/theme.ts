import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(localStorage.getItem('theme') as 'dark' | 'light' || 'dark')
  watch(theme, (val) => {
    localStorage.setItem('theme', val)
    document.documentElement.classList.toggle('dark', val === 'dark')
  }, { immediate: true })
  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }
  return { theme, toggleTheme }
})
