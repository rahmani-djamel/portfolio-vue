<template>

        <section class="bg-white dark:bg-gray-900">
            <h1 class="text-4xl text-center font-extrabold">
                        About <span class="text-cyan-500">Me</span>  
                    </h1>
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none
             md:text-5xl xl:text-6xl dark:text-white">Who are <span class="text-cyan-400">Rahmani Djamel</span>  Abderrahmen</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl
             dark:text-gray-400" id="about">
            </p>

        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup">
        </div>                
    </div>
</section>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import TypeIt from 'typeit';

  let descreption = 'Im an accomplished web developer specializing in Laravel and Livewire, with extensive experience in PHP and a knack for harnessing the power of frontend libraries like Alpine and Vue.js. My passion lies in crafting dynamic and efficient web solutions that seamlessly marry functionality and aesthetics. With a keen eye for detail and a dedication to creating user-centric experiences, I bring a unique blend of technical prowess and creative flair to every project I undertake.'
  
  // Use the onMounted hook to initialize TypeIt when the component is mounted
  onMounted(() => {
    // Initialize TypeIt with the appropriate selector and options
    new TypeIt('#about', {
      strings: descreption,
    }).go();
  });
  </script>
  