<template>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

      <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        Contact <span class="text-cyan-500"> Me</span>
      </h2>
    </div>
    <div class="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-6" id="app">
    <div v-for="contact in contacts" :key="contact.id" class="flex flex-col items-center">
      <img class="object-cover w-20 h-20 mb-2 rounded-full shadow" :src="contact.image" alt="contact" />
      <div class="flex flex-col items-center">
        <p class="text-lg font-bold">{{ contact.name }}</p>
        <p class="text-lg font-semibold  text-gray-800">
            <a  :href="contact.link" :class="contact.color">
                {{ contact.title }}
            </a>
        </p>
      </div>
    </div>
  </div>
    </div>
  </template>
  <script setup>
  import whatsapp from '@/assets/images/contacts/whatsapp.svg'
  import telgram from '@/assets/images/contacts/telegram.svg'
  import linkedin from '@/assets/images/contacts/linkedin.svg'


  let contacts = [
    {
              id: 1,
              name: 'WhatsApp',
              title: 'Call Now',
              image: whatsapp,
              link : 'https://wa.me/213656881308',
              color : 'text-green-500'
    },
    {
              id: 2,
              name: 'Telegram',
              title: 'Call Now',
              image: telgram,
              link : 'https://t.me/leo_rd',
              color : 'text-sky-600'
    },
    {
              id: 2,
              name: 'Linkedin',
              title: 'Contact Now',
              image: linkedin,
              link : 'https://t.me/leo_rd',
              color : 'text-blue-600'
    },
  ]

 </script>