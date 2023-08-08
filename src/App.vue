<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue';
import hero from './components/hero.vue';
import about from './components/about.vue'
import skills from './components/skills.vue'
</script>

<template>

<navbar />
<hero />

<about />

<skills />





  <RouterView />
</template>

<style scoped>

</style>
