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
    <div class="row g-4">
      <div v-for="column in columns"
           :key="column.id"
           class="col-12 col-md-6 col-lg-4">
        <Column :column="column" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>