<template>

        <section class="bg-white dark:bg-gray-900">
            <h1 class="text-4xl text-center font-extrabold dark:text-white">
                        About <span class="text-cyan-500">Me</span>  
                    </h1>
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7" data-aos="fade-up"
     data-aos-duration="3000">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none
             md:text-5xl xl:text-6xl dark:text-white">Who are <span class="text-cyan-400">Rahmani Djamel</span>  Abderrahmen</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl
             dark:text-gray-400" id="about">
            </p>

        </div>
        <div class=" lg:mt-0 lg:col-span-5 lg:flex mx-4 md:mx-0" data-aos="fade-left"
        data-aos-duration="3000">
           
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
      <li v-for="item in items" :key="item.id" class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <!-- Use the custom SVG path for the item -->
          <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" :fill="item.svgColor" viewBox="0 0 20 20">
            <path :d="item.svgPath"/>
          </svg>
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{{ item.title }}</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ item.releaseDate }}</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">{{ item.description }}</p>
      </li>
    </ol>

        </div>                
    </div>
</section>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import TypeIt from 'typeit';

  let descreption = 'Im an accomplished web developer specializing in Laravel and Livewire, with extensive experience in PHP and a knack for harnessing the power of frontend libraries like Alpine and Vue.js. My passion lies in crafting dynamic and efficient web solutions that seamlessly marry functionality and aesthetics. With a keen eye for detail and a dedication to creating user-centric experiences, I bring a unique blend of technical prowess and creative flair to every project I undertake.'
  
  const items = [
  {
    id: 1,
    title: "Teacher of Computer Science",
    releaseDate: "From September 2021 until now",
    description: "Providing instruction and guidance in computer science subjects.",
    svgPath: "",
    svgColor: "#ff6347" // Change this to your desired color
  },
  {
    id: 2,
    title: "Master in Networking and System Distribution",
    releaseDate: "From 2019 until 2021",
    description: "Studied advanced networking and system distribution concepts.",
    svgPath: "",
    svgColor: "#3498db" // Change this to your desired color
  },
  {
    id: 3,
    title: "Bachelor's Degree in Information Technology",
    releaseDate: "From 2015 until 2019",
    description: "Attained a comprehensive understanding of information technology.",
    svgPath: "",
    svgColor: "#2ecc71" // Change this to your desired color
  }
  // Add more items as needed
];
  // Use the onMounted hook to initialize TypeIt when the component is mounted
  onMounted(() => {
    // Initialize TypeIt with the appropriate selector and options
    new TypeIt('#about', {
      strings: descreption,
    }).go();
  });
  </script>
  