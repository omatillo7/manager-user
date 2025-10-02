import { defineStore } from 'pinia'

export type Course = {
  id: number
  title: string
  category: string
  description: string
}

export const useCoursesStore = defineStore('courses', {
  state: () => ({
    list: [
      { id: 1, title: "Matematika fani o'qitish huquqini berish", category: 'Kasbiy', description: 'Math course description' },
      { id: 2, title: "Fizika va astronomiya fanlarini o'qitish", category: 'Kasbiy', description: 'Physics course description' },
      { id: 3, title: "Tiflopedagogika mutaxassisligi", category: 'Kasbiy-pedagogik', description: 'Special course' }
    ] as Course[]
  }),
  getters: {
    categories: (state) => Array.from(new Set(state.list.map(c => c.category)))
  }
})
