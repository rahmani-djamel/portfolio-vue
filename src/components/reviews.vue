<template >
  <section id="reviews" class="dark:bg-gray-900">
  <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide  v-for="(review, index) in reviews" :key="index">

      <div class="flex items-center space-x-4">
      <img class="w-10 h-10 rounded-full" :src="review.client.country.flag" alt="">
    <div class="font-medium dark:text-white">
        <div>{{ review.client.name }}</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
    </div>
</div>



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
  },
  {
    "client": {
      "name": "digitalsstore",
      "country": {
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ed-1f1f0.png",
        "name": "Hong Kong"
      }
    },
    "rating": {
      "stars": 5,
      "date": "4 months ago"
    },
    "description": "I am extremely pleased with the outstanding work done by the talented developer I found on Fiverr. They created a PHP website that not only looks fantastic, but also functions seamlessly. Their attention to detail and commitment to delivering a high-quality product within the given timeframe has exceeded my expectations. I highly recommend their services to anyone seeking professional and efficient web development."
  }
]


</script>

<style scoped>


.swiper {
  width: 50%;
  height: 320px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
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