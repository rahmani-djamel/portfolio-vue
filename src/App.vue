<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue';
import hero from './components/hero.vue';
import about from './components/about.vue'
</script>

<template>

<navbar />
<hero />

<about />





  <RouterView />
</template>

<style scoped>

</style>
