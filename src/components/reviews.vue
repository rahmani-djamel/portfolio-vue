<template >
  <section id="reviews" class="dark:bg-gray-900">
    <h1 class="text-4xl text-center font-extrabold dark:text-white mb-6">
                        Hear from my <span class="text-cyan-500">Clients</span>  
    </h1>
  <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="border-cyan-400 border-2"  v-for="(review, index) in reviews" :key="index">

   
      <section class="bg-white dark:bg-gray-900 w-full">
  <div class="max-w-screen-xl  py-8 mx-auto text-center lg:py-16 lg:px-6">
      <figure class="max-w-screen-md mx-auto">
          <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
          <blockquote class="w-[95%] lg:w-full mx-auto">
              <p class="text-sm font-medium  text-gray-900 dark:text-white break-words">"{{ review.review.description }}"</p>
          </blockquote>
          <div class="">
            <figcaption class="flex flex-col items-center justify-center mt-6 space-y-3 lg:space-y-0 lg:flex-row lg:items-center lg:justify-center">
    <img class="w-6 h-6 rounded-full lg:order-1 lg:ml-6" :src="review.client.country.flag" alt="profile picture">
    <div class="flex flex-col items-center lg:flex-row lg:divide-x-2 divide-gray-500 dark:divide-gray-700">
        <div class="lg:pr-3 font-medium text-gray-900 dark:text-white">{{ review.client.name }}</div>
        <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400 lg:pl-6">
            <div class="flex items-center space-x-1">
                <svg v-for="index in 5" :key="index" class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
        </div>
    </div>
</figcaption>

        </div>
      </figure>
  </div>
</section>

    </swiper-slide>


  </swiper>
</section>
</template>
<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/effect-cards';

  import { EffectCards } from 'swiper/modules';

  const modules = [EffectCards];

let reviews = [
  {
    "client": {
      "name": "brand99a",
      "country": {
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "name": "United Kingdom"
      }
    },
    "review": {
      "stars": 5,
      "date": "4 weeks ago",
      "description": "Great seller that fixed an ongoing PHP issue with my website!"
    }
  },
  {
    "client": {
      "name": "albinmedoc",
      "country": {
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f8-1f1ea.png",
        "name": "Sweden"
      }
    },
    "review": {
      "stars": 4.3,
      "date": "1 week ago",
      "description": "Quick responses, good price"
    }
  },
  {
    "client": {
      "name": "thustleyt",
      "country": {
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f3.png",
        "name": "India"
      }
    },
    "review": {
      "stars": 5,
      "date": "1 month ago",
      "description": "Rahmani has always been my favorite web developer when it comes to professional works. He does his job the right way we wanted"
    }
  },
  {
    "client": {
      "name": "vassilisziogkos",
      "country": {
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png",
        "name": "Germany"
      }
    },
    "review": {
      "stars": 5,
      "date": "1 month ago",
      "description": "Thanks again! its a pleasure to work with you again!"
    }
  },
  {
    "client": {
      "name": "earth3d",
      "country": {
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "name": "United States"
      }
    },
    "review": {
      "stars": 5,
      "date": "1 month ago",
      "description": "Rahmani got right to it as I told him I had an urgent task. Very professional and efficient and highly recommended him."
    }
  },
  {
    "client": {
      "name": "frank1stfml",
      "country": {
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "name": "United States"
      }
    },
    "review": {
      "stars": 5,
      "date": "2 months ago",
      "description": "Very communicative and works fast and gets the job done well! Definitely recommend!"
    }
  },
  {
    "client": {
      "name": "bilaljavid356",
      "country": {
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "name": "United Kingdom"
      }
    },
    "review": {
      "stars": 5,
      "date": "3 months ago",
      "description": "I liked working with the seller a lot, he delivered the final product very fast and stayed in communication with me the whole time."
    }
  },
  {
    "client": {
      "name": "jxyna27",
      "country": {
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ea-1f1f8.png",
        "name": "Spain"
      }
    },
    "review": {
      "stars": 5,
      "date": "3 months ago",
      "description": "Great experience!!! Thank you very much, recommend"
    }
  },
  {
    "client": {
      "name": "atnets",
      "country": {
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f7-1f1f4.png",
        "name": "Romania"
      }
    },
    "review": {
      "stars": 5,
      "date": "3 months ago",
      "description": "awesome seller to work with. incredible results...fast delivery, easy to communicate with. i highly recommend this gig. Fiverr Allstar!"
    }
  },
  {
    "client": {
      "name": "saif1417",
      "country": {
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f8-1f1e6.png",
        "name": "Saudi Arabia"
      }
    },
    "review": {
      "stars": 5,
      "date": "4 months ago",
      "description": "Quick response, excellent work, highly recommended"
    }
  }
]


</script>

<style scoped>


.swiper {
  
  height: 320px;

}


@media (max-width: 56rem) {
  .swiper {
    width: 48%;
    margin: auto;
    height: 100%;
   
  }
}


@media (min-width: 56rem) {
  .swiper {
    width: 40%;
    
  }
}




.swiper-slide {
  display: flex;
  align-items: start;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  word-wrap: break-word;
  
  
  
}

.swiper-slide:nth-child(1n) {
  background-color: rgb(6, 182, 212);
}

.swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
}

.swiper-slide:nth-child(6n) {
  background-color: rgb(180, 10, 47);
}

.swiper-slide:nth-child(7n) {
  background-color: rgb(35, 99, 19);
}

.swiper-slide:nth-child(8n) {
  background-color: rgb(0, 68, 255);
}

.swiper-slide:nth-child(9n) {
  background-color: rgb(218, 12, 218);
}

.swiper-slide:nth-child(10n) {
  background-color: rgb(54, 94, 77);
}

</style>