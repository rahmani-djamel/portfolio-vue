<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue';
import hero from './components/hero.vue';
import about from './components/about.vue'
import skills from './components/skills.vue'
import contact from './components/contact.vue'
import reviews from './components/reviews.vue'
import LoadingScreen from './components/loading.vue'
import { onMounted,ref } from 'vue';

let isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
      isLoading.value = false;
    }, 1500);
})

</script>

<template>
  
  <LoadingScreen v-if="isLoading"></LoadingScreen>

  <div v-else>

<navbar />



<hero />

<about />

<skills />

<reviews />


<contact  />

</div>

  <RouterView />
</template>

<style scoped>

</style>
