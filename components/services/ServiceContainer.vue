<template>
    <div>
      <!-- First Row (Image + Text + Image) -->
      <v-row class="pa-0">
        <v-col align="center" cols="12" md="4" class="pa-0 fade-bee delay-1">
          <v-img 
            src="/images/service-image-1.jpg" 
            height="auto" 
            max-height="50vh" 
            width="100%" 
            cover
          />
        </v-col>
  
        <v-col align="center" cols="12" md="4" class="pa-0 fade-bee delay-2">
          <v-card class="d-flex justify-center align-center" color="#e8e4e4" elevation="0" height="50vh">
            <div class="text-h3">
              <b>WE ARE ARCHITECTS, PLANNERS, AND DESIGNERS</b>
            </div>
          </v-card>
        </v-col>
  
        <v-col align="center" cols="12" md="4" class="pa-0 fade-bee delay-3">
          <v-img 
            src="/images/service-image-2.jpg" 
            height="auto" 
            max-height="50vh" 
            width="100%" 
            cover
          />
        </v-col>
      </v-row>
  
      <!-- Second Row (Text + Image + Text) -->
      <v-row class="pa-0">
        <v-col align="center" cols="12" md="4" class="pa-0 fade-bee delay-2">
          <v-card class="d-flex justify-center align-center" color="#e8e4e4" elevation="0" height="50vh">
            <div>
              <div class="text-h3 pb-10">
                <b>About</b>
              </div>
              <div>
                Our multicultural leaders have deep start-up and enterprise experience, with rich mobile and data expertise.
              </div>
            </div>
          </v-card>
        </v-col>
  
        <v-col align="center" cols="12" md="4" class="pa-0 fade-bee delay-1">
          <v-img 
            src="/images/hero-right-side.jpg" 
            height="auto" 
            max-height="50vh" 
            width="100%" 
            cover
          />
        </v-col>
  
        <v-col align="center" cols="12" md="4" class="pa-0 fade-bee delay-3">
          <v-card class="d-flex justify-center align-center" color="#e8e4e4" elevation="0" height="50vh">
            <div>
              <div class="text-h3 pb-10">
                <b>Services</b>
              </div>
              <div>
                Our multicultural leaders have deep start-up and enterprise experience, with rich mobile and data expertise.
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
              observer.unobserve(entry.target); // Only once
            }
          });
        },
        {
          threshold: 0.2,
        }
      );
  
      const elements = document.querySelectorAll('.fade-bee');
      elements.forEach(el => observer.observe(el));
    },
  };
  </script>
  
  <style scoped>
  .fade-bee {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
  }
  
  .fade-bee.animate {
    opacity: 1;
    transform: translateY(0);
  }
  
  .delay-1 {
    transition-delay: 0.3s;
  }
  .delay-2 {
    transition-delay: 0.5s;
  }
  .delay-3 {
    transition-delay: 0.7s;
  }
  
  /* Mobile responsiveness for images and columns */
  @media screen and (max-width: 600px) {
    .v-img {
      height: auto !important; /* Allow images to adjust height based on content */
      max-height: 100vh; /* Ensure the images are not too tall */
      width: 100% !important; /* Ensure images take full width on smaller screens */
    }
  
    .v-card {
      height: auto; /* Allow cards to adjust height */
      padding: 10px; /* Provide space between content on mobile */
    }
  
    /* Make sure columns stack on mobile */
    .v-col {
      padding: 10px 0; /* Add spacing between columns */
    }
  
    .text-h3 {
      font-size: 1.2rem; /* Adjust text size for smaller screens */
    }
  }
  
  /* Medium and above screens */
  @media screen and (min-width: 600px) {
    .v-img {
      height: auto;
      max-height: 50vh; /* Limit max-height for larger screens */
      width: 100%;
    }
  
    .v-card {
      height: 50vh; /* Make sure the card is consistent in size */
    }
  
    .text-h3 {
      font-size: 2rem; /* Adjust text size for larger screens */
    }
  }
  </style>
  