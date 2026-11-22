<script setup>
import HabitStats from './components/HabitStats.vue'
import HabitForm from './components/HabitForm.vue'
import HabitList from './components/HabitList.vue'
</script>

<template>
  <main class="container">
    <header>
      <h1>Daily Habit Tracker</h1>
      <p>Vue 3 + Pinia Centralized State</p>
    </header>

    <HabitStats />
    <HabitForm />
    <HabitList />
  </main>
</template>

<style scoped>
.container {
  max-width: 680px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-family: system-ui, -apple-system, sans-serif;
}

.habit-stats {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.stat-card {
  flex: 1;
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}

.habit-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.habit-form input {
  flex: 1;
  padding: 0.5rem 0.75rem;
}

.habit-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.done {
  text-decoration: line-through;
  color: #6b7280;
}
</style>