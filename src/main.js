import './assets/main.css'

import 'flowbite/dist/flowbite.js'

import 'flowbite';



//import 'animate.css';


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


// ..
AOS.init();

const app = createApp(App)

app.use(router)

app.mount('#app')
