<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue';
import hero from './components/hero.vue';
import about from './components/about.vue'
import skills from './components/skills.vue'
import contact from './components/contact.vue'

</script>

<template>
  
  <LoadingScreen :isLoading="isLoading" />
<navbar />





<hero />

<about />

<skills />


<contact  />



  <RouterView />
</template>

<style scoped>

</style>
