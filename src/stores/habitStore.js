import { defineStore } from 'pinia'

export const useHabitStore = defineStore('habit', {
  state: () => ({
    habits: [
      { id: 1, title: 'Review Security & Networking Notes', category: 'Study', completed: true },
      { id: 2, title: '30-Min Workout or Stretch', category: 'Health', completed: false },
      { id: 3, title: 'Practice Beat Arrangement / Mixing', category: 'Creative', completed: false },
    ],
    selectedCategory: 'All',
  }),

  getters: {
    categories(state) {
      const unique = new Set(state.habits.map((h) => h.category))
      return ['All', ...unique]
    },

    filteredHabits(state) {
      if (state.selectedCategory === 'All') {
        return state.habits
      }
      return state.habits.filter((h) => h.category === state.selectedCategory)
    },

    completedCount(state) {
      return state.habits.filter((h) => h.completed).length
    },

    totalCount(state) {
      return state.habits.length
    },

    completionRate(state) {
      if (state.habits.length === 0) return 0
      return Math.round((this.completedCount / state.habits.length) * 100)
    },
  },

  actions: {
    addHabit(title, category = 'General') {
      const cleanTitle = title.trim()
      if (!cleanTitle) return

      this.habits.push({
        id: Date.now(),
        title: cleanTitle,
        category: category.trim() || 'General',
        completed: false,
      })
    },

    toggleHabit(id) {
      const habit = this.habits.find((h) => h.id === id)
      if (habit) {
        habit.completed = !habit.completed
      }
    },

    deleteHabit(id) {
      this.habits = this.habits.filter((h) => h.id !== id)
    },

    setCategory(category) {
      this.selectedCategory = category
    },
  },
})
