<template>
  <div class="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center justify-center lg:max-w-2xl md:mb-12">
      <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold text-center leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span class="relative inline-block">
          <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0  w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block animate-spin-slow">
            <defs>
              <pattern id="247432cb-6e6c-4bec-9766-564ed7c230dc" x="0" y="0" width=".135" height=".30">
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)" width="52" height="24"></rect>
          </svg>
          <span class="relative">My</span>
        </span>
        Skills
      </h2>
    </div>
    <div class="grid my-10 gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
    <div
      v-for="(language, index) in languages"
      :key="index"
      class="py-4 flex flex-col items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-700 transform origin-center md:origin-top group"
      style="opacity: 1; transform: none;"
    >
      <div
        class="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none"
      >
        <img :src="language.icon" :alt="language.name" class="w-12 h-12" />
      </div>
      <p class="text-sm md:text-base font-semibold select-none pointer-events-none">{{ language.name }}</p>
    </div>
  </div>

  </div>
</template>

<script setup>
import htmlIcon from '@/assets/images/skills/html.svg';
import cssIcon from '@/assets/images/skills/css.svg';
import jsIcon from '@/assets/images/skills/js.svg';
import vuejsIcon from '@/assets/images/skills/vuejs.svg';
import laravelIcon from '@/assets/images/skills/laravel.svg';
import phpIcon from '@/assets/images/skills/php.svg';
import livewireIcon from '@/assets/images/skills/livewire.svg';
import bootstrapIcon from '@/assets/images/skills/bootstrap.svg';
import tailwindIcon from '@/assets/images/skills/tailwindcss.svg';
import mysqlIcon from '@/assets/images/skills/mysql.svg';
import alpineIcon from '@/assets/images/skills/Alpinejs.svg';
import PostgresSQL from '@/assets/images/skills/PostgresSQL.svg'


const languages = [
  {
    name: 'HTML',
    icon: htmlIcon,
  },
  {
    name: 'CSS',
    icon: cssIcon,
  },
  {
    name: 'JavaScript',
    icon: jsIcon,
  },
  {
    name: 'Vue.js',
    icon: vuejsIcon,
  },
  {
    name: 'Laravel',
    icon: laravelIcon,
  },
  {
    name: 'PHP',
    icon: phpIcon,
  },
  {
    name: 'Livewire',
    icon: livewireIcon,
  },
  {
    name: 'Bootstrap',
    icon: bootstrapIcon,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwindIcon,
  },
  {
    name: 'Alpine.js',
    icon: alpineIcon,
  },
  {
    name: 'MySQL',
    icon: mysqlIcon,
  },
  {
    name: 'PostgresSQL',
    icon: PostgresSQL,
  },

];
</script>


<style scoped>
@keyframes spin-slow {
  0% {
    transform: rotate(0);
    color: brown;
  }
  100% {
    transform: rotate(360deg);
    color: blue;
  }
}

.animate-spin-slow {
  animation: spin-slow 10s linear infinite;
}
</style>