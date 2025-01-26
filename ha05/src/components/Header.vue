<script setup>
import logo from '@/assets/logo.svg'

defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <span class="navbar-brand mb-0">
        <img :src="logo" alt="Vue Logo" height="24" class="d-inline-block align-text-top"/>
        {{ title }}
      </span>
    </div>
  </nav>
</template>

<style scoped>
</style>