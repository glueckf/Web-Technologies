<script setup>
import { ref } from 'vue'
import Tag from './Tag.vue'

const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

let collapsed = ref('collapsed')

function toggleCollapsed(){
  if(collapsed.value.length === 0){
    collapsed.value = 'collapsed'
  }else{
    collapsed.value = ''
  }
}
</script>

<template>
  <div class="card bg-light mb-3">
    <div class="card-header">
      <h5 class="mb-0">{{ task.title }}</h5>
    </div>
    <div class="['card-body', collapsed]" @click="toggleCollapsed()">
      {{task.text}}
    </div>
    <div class="card-footer">
      <Tag v-for="tag in task.tags" :tag-value="tag" />
  </div>
</template>

<style scoped>
.collapsed {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
}
</style>
