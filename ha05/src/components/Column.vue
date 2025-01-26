<script setup>
import TaskCard from './TaskCard.vue'

defineProps({
  column: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div>
    <h4 class="text-light pt-4">{{column.name}}</h4>
    <div v-for="task in column.tasks" :key="task.id">
      <TaskCard :task="task" />
    </div>
  </div>
</template>

<style scoped>
</style>

