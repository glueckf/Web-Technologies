<script setup>
defineProps({
  column: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div>
    <h4> ({column.name}) </h4>
  </div>
</template>

<style scoped>
</style>

