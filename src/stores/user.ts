import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const name = ref('Ism Familiya')
  const email = ref('user@example.com')
  const language = ref('UZ')
  function toggleLang() {
    language.value = language.value === 'UZ' ? 'EN' : 'UZ'
  }
  return { name, email, language, toggleLang }
})
