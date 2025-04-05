<template>
    <div>
      <v-card flat>
        <v-row no-gutters class="full-height-row">
          <!-- Left Image -->
          <v-col :cols="12" :md="4" class="pa-0 fade-bee delay-1 full-height">
            <v-img
              src="/images/service-image-1.jpg"
              height="auto"
              max-height="100vh"
              width="100%"
              cover
            >
              <div class="dark-overlay" />
            </v-img>
          </v-col>
  
          <!-- Center Cards (Stacked) -->
          <v-col :cols="12" :md="4" class="pa-0 full-height">
            <v-row no-gutters class="full-height">
              <v-col cols="12" class="fade-bee delay-2">
                <v-card color="#e8e4e4" class="d-flex justify-center align-center pa-10" height="100%">
                  <div class="text-h4 text-center">
                    <b>INTERIOR<br />TRENDS<br />2020</b>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" class="fade-bee delay-3">
                <v-card dark class="d-flex justify-center align-center pa-10" color="#302c34" height="100%">
                  <div class="text-h4 text-center">
                    <b>INTERIOR<br />TRENDS<br />2020</b>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
  
          <!-- Right Image -->
          <v-col :cols="12" :md="4" class="pa-0 fade-bee delay-4 full-height">
            <v-card dark class="d-flex justify-center full-height align-center" color="#fb7c1c"> 
                <div>
                    <div align="center" class="text-h6">
                        Interior
                    </div>
                    <div align="center" class="text-h2">
                        Plants
                    </div>
                </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
  
      document.querySelectorAll('.fade-bee').forEach((el) => {
        observer.observe(el);
      });
    },
  };
  </script>
  
  <style scoped>
  .full-height-row {
    height: 100vh; /* Makes the row take the full height */
    display: flex;
    flex-wrap: wrap; /* Ensure columns wrap on smaller screens */
    justify-content: space-between;
  }
  
  .full-height {
    height: 100%; /* Makes each column take up full height */
  }
  
  .dark-overlay {
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    position: absolute;
  }
  
  .fade-bee {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease-out;
  }
  
  .fade-bee.animate {
    opacity: 1;
    transform: translateY(0);
  }
  
  .delay-1 {
    transition-delay: 0.2s;
  }
  .delay-2 {
    transition-delay: 0.4s;
  }
  .delay-3 {
    transition-delay: 0.6s;
  }
  .delay-4 {
    transition-delay: 0.8s;
  }
  
  /* Mobile Styles */
  @media (max-width: 600px) {
    .full-height-row {
      flex-direction: column; /* Stack items vertically on mobile */
    }
  
    .dark-overlay {
      background-color: rgba(0, 0, 0, 0.4); /* Darker overlay on mobile */
    }
  
    .text-h4 {
      font-size: 1.5rem; /* Adjust the font size on mobile */
    }
  
    .text-h6 {
      font-size: 1.2rem; /* Adjust the font size on mobile */
    }
  
    .text-h2 {
      font-size: 2rem; /* Adjust the font size on mobile */
    }
  
    .fade-bee {
      transform: translateY(10px); /* Reduce vertical movement on mobile */
    }
  }
  
  /* Tablet Styles */
  @media (min-width: 600px) and (max-width: 960px) {
    .text-h4 {
      font-size: 2rem; /* Adjust the font size for tablets */
    }
  
    .text-h6 {
      font-size: 1.5rem; /* Adjust the font size for tablets */
    }
  
    .text-h2 {
      font-size: 2.5rem; /* Adjust the font size for tablets */
    }
  }
  
  /* Desktop Styles */
  @media (min-width: 960px) {
    .text-h4 {
      font-size: 2.5rem; /* Adjust the font size for desktop */
    }
  
    .text-h6 {
      font-size: 1.8rem; /* Adjust the font size for desktop */
    }
  
    .text-h2 {
      font-size: 3rem; /* Adjust the font size for desktop */
    }
  }
  </style>
  