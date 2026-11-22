<script setup>
import { useHabitStore } from '../stores/habitStore'

const habitStore = useHabitStore()
</script>

<template>
  <section class="habit-stats">
    <div class="stat-card">
      <strong>Completed</strong>
      <p>{{ habitStore.completedCount }} / {{ habitStore.totalCount }}</p>
    </div>
    <div class="stat-card">
      <strong>Completion Rate</strong>
      <p>{{ habitStore.completionRate }}%</p>
    </div>
  </section>
</template>