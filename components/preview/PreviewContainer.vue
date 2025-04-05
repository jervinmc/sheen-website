<template>
    <div>
      <!-- Hero Section Row -->
      <v-row class="pa-0">
        <v-col align="center" cols="12">
          <div class="image-wrapper" ref="heroSection">
            <v-img
              src="/images/preview-image-2.jpeg"
              class="d-flex justify-center align-center"
              height="70vh"
              max-width="100%"
              cover
            >
              <div class="overlay"></div> <!-- Dark overlay placed properly -->
              <div
                class="text-h1 white--text text-content"
                :class="{ 'animate-in': isVisible }"
              >
                Residential Architect<br />
                design
              </div>
            </v-img>
          </div>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: false
      };
    },
    mounted() {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            observer.disconnect(); // Only trigger once
          }
        },
        {
          threshold: 0.3
        }
      );
  
      observer.observe(this.$refs.heroSection);
    }
  };
  </script>
  
  <style scoped>
  .image-wrapper {
    position: relative;
  }
  
  .v-img {
    position: relative;
    overflow: hidden;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4); /* Controls how dark it is */
    z-index: 1;
  }
  
  .text-content {
    position: absolute;
    z-index: 2;
    text-align: center;
    width: 100%;
    top: 50%;
    transform: translateY(20px) translateY(-50%);
    opacity: 0;
    transition: opacity 2s ease, transform 3s ease;
  }
  
  .text-content.animate-in {
    opacity: 1;
    transform: translateY(-50%);
  }
  
  /* Mobile responsiveness */
  @media screen and (max-width: 600px) {
    .v-img {
      height: 50vh; /* Adjust image height for smaller screens */
    }
  
    .text-content {
      font-size: 1.5rem; /* Adjust text size on mobile */
      padding: 0 20px; /* Add padding to text for better readability */
      top: 60%; /* Adjust the vertical position of text for smaller screens */
    }
  }
  
  /* Larger screens */
  @media screen and (min-width: 600px) {
    .v-img {
      height: 70vh; /* Maintain height for larger screens */
    }
  
    .text-content {
      font-size: 2rem; /* Larger text size for better readability */
      top: 50%; /* Keep text centered vertically on larger screens */
    }
  }
  </style>
  