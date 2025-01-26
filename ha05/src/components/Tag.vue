<script setup>
defineProps({
  tagValue: {
    type: String,
    required: true
  }
});

function getBadgeColor(tag){
  const colorMap = {
    'Feature': 'primary',
    'Bug': 'primary',
    'In concept': 'secondary',
    'Shelved': 'secondary',
    'Abandoned': 'secondary',
    'Assigned': 'success',
    'Client request': 'warning',
    'Urgend': 'danger',
    default: 'light'
  }
  return `bg-${colorMap[tag] || colorMap.default}`
}
</script>

<template>
  <span class="badge rounded-pill me-2" :class="getBadgeColor(tagValue)">
    {{ tagValue }}
  </span>
</template>