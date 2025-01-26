<script setup>
import { ref } from 'vue'
import Tag from './Tag.vue'

const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card bg-light mb-3">
    <div class="card-header">
      <h5 class="mb-0">{{ task.title }}</h5>
    </div>
    <div class="card-body">
      {{task.text}}
    </div>
  </div>
</template>
