<script setup>
import { ref } from 'vue'
import Tag from './Tag.vue'

const props = defineProps({
  task: {
    type: Object,
    required: true,
    validator: (value) => {
      return value.title && value.text && Array.isArray(value.tags)
    }
  }
})

const isCollapsed = ref(true)

function toggleCollapsed() {
  isCollapsed.value = !isCollapsed.value
}
</script>

<template>
  <div class="card bg-light mb-3">
    <div class="card-header">
      <h5 class="mb-0">{{ task.title }}</h5>
    </div>
    <div class="card-body" :class="{ collapsed: isCollapsed }" @click="toggleCollapsed">
      {{task.text}}
    </div>
    <div class="card-footer">
      <Tag v-for="tag in task.tags" :key="tag" :tag-value="tag" />
    </div>
  </div>
</template>

<style scoped>
.collapsed {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
}
.card{
  margin-bottom: 1rem;
}
</style>
