<template>
    <div>
      <!-- Header -->
      <v-card width="100vw" height="20vh" color="#f8741d" class="d-flex justify-center align-center">
        <div class="white--text pa-10">
          <div class="text-h5 pb-5" align="center">Our Gallery</div>
          <div class="text-h2">WE SHAPE A BETTER WORLD</div>
        </div>
      </v-card>
  
      <!-- Gallery -->
      <v-row no-gutters>
        <v-col
          v-for="(img, index) in images"
          :key="index"
          align="center"
          cols="4"
          class="pa-0"
        >
          <div class="image-wrapper flip-card" :class="`delay-${(index % 3) + 1}`">
            <div class="img-container" @click="zoomImage(`/images/${img}`)">
              <v-img
                class="flip-card-inner"
                :src="`/images/${img}`"
                height="50vh"
                width="50vw"
                cover
              />
              <div class="dark-overlay" />
            </div>
          </div>
        </v-col>
      </v-row>
  
      <!-- Zoom Modal -->
      <div v-if="zoomedImage" class="zoom-overlay" @click="zoomedImage = null">
        <img :src="zoomedImage" class="zoomed-image" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          'gallery-image-1.jpg',
          'gallery-image-2.jpg',
          'gallery-image-3.jpg',
          'gallery-image-4.jpg',
          'gallery-image-5.jpg',
          'gallery-image-6.jpg',
        ],
        zoomedImage: null,
      };
    },
    methods: {
      zoomImage(src) {
        this.zoomedImage = src;
      },
    },
    mounted() {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
  
      const cards = document.querySelectorAll('.flip-card');
      cards.forEach((el) => observer.observe(el));
    },
  };
  </script>
  
  <style scoped>
  .image-wrapper {
    perspective: 1000px;
    display: inline-block;
    opacity: 0;
    transform: rotateY(90deg);
    transition: transform 0.8s ease, opacity 0.8s ease;
    position: relative;
  }
  
  .image-wrapper.animate {
    transform: rotateY(0);
    opacity: 1;
  }
  
  .img-container {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: zoom-in;
  }
  
  .dark-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 1;
  }
  
  .flip-card-inner {
    z-index: 0;
  }
  
  .zoom-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    cursor: zoom-out;
  }
  
  .zoomed-image {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    border-radius: 12px;
  }
  
  .delay-1 {
    transition-delay: 0.1s;
  }
  .delay-2 {
    transition-delay: 0.3s;
  }
  .delay-3 {
    transition-delay: 0.5s;
  }
  </style>
  