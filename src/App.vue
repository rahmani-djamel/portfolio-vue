<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue';
import hero from './components/hero.vue';
</script>

<template>

<navbar />
<hero />



  <RouterView />
</template>

<style scoped>

</style>
