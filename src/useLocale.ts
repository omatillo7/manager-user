// src/composables/useLocale.ts
import { ref } from "vue"
import { messages } from "./locales"

const currentLang = ref<keyof typeof messages>(
  (localStorage.getItem("lang") as keyof typeof messages) || "uz"
)

export function useLocale() {
  const t = (key: keyof typeof messages["uz"]) =>
    messages[currentLang.value][key] || key

  const setLang = (lang: keyof typeof messages) => {
    currentLang.value = lang
    localStorage.setItem("lang", lang) // tanlangan tilni saqlab qo‘yadi
  }

  return {
    currentLang,
    t,
    setLang,
  }
}
