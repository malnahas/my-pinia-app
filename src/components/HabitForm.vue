<script setup>
import { ref } from 'vue'
import { useHabitStore } from '../stores/habitStore'

const habitStore = useHabitStore()
const title = ref('')
const category = ref('Study')

function handleSubmit() {
  if (!title.value.trim()) return
  habitStore.addHabit(title.value, category.value)
  title.value = ''
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="habit-form">
    <input
      v-model="title"
      type="text"
      placeholder="Enter a new habit..."
      required
    />
    <select v-model="category">
      <option value="Study">Study</option>
      <option value="Health">Health</option>
      <option value="Creative">Creative</option>
      <option value="General">General</option>
    </select>
    <button type="submit">Add Habit</button>
  </form>
</template>
