<script setup>
import { useHabitStore } from '../stores/habitStore'

const habitStore = useHabitStore()
</script>

<template>
  <section class="habit-list">
    <div class="filter-bar">
      <label for="category-filter">Filter:</label>
      <select
        id="category-filter"
        :value="habitStore.selectedCategory"
        @change="habitStore.setCategory($event.target.value)"
      >
        <option v-for="cat in habitStore.categories" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>
    </div>

    <p v-if="habitStore.filteredHabits.length === 0">
      No habits in this category yet.
    </p>

    <ul v-else>
      <li v-for="habit in habitStore.filteredHabits" :key="habit.id" class="habit-item">
        <label>
          <input
            type="checkbox"
            :checked="habit.completed"
            @change="habitStore.toggleHabit(habit.id)"
          />
          <span :class="{ done: habit.completed }">
            {{ habit.title }}
          </span>
          <small>({{ habit.category }})</small>
        </label>
        <button type="button" @click="habitStore.deleteHabit(habit.id)">
          Delete
        </button>
      </li>
    </ul>
  </section>
</template>