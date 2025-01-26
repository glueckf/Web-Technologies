<script setup>
import Column from './Column.vue'

defineProps({
  columns: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="column in columns"
           :key="column.id"
           class="col">
        <Column :column="column" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>