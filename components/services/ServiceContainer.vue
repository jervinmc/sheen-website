<template>
    <div>
      <div>
        <v-row>
          <v-col align="center" cols="4" class="pa-0 fade-bee delay-1">
            <v-img src="/images/service-image-1.jpg" height="50vh" width="50vw" cover />
          </v-col>
          <v-col align="center" cols="4" class="pa-0 fade-bee delay-2">
            <v-card class="d-flex justify-center align-center" color="#e8e4e4" elevation="0" height="50vh">
              <div class="text-h3">
                <b>WE ARE ARCHITECTS, PLANNERS, AND DESIGNERS</b>
              </div>
            </v-card>
          </v-col>
          <v-col align="center" cols="4" class="pa-0 fade-bee delay-3">
            <v-img src="/images/service-image-2.jpg" height="50vh" width="50vw" cover />
          </v-col>
        </v-row>
      </div>
      <div>
        <v-row class="pa-0">
          <v-col align="center" cols="4" class="pa-0 fade-bee delay-2">
            <v-card class="d-flex justify-center align-center" color="#e8e4e4" elevation="0" height="50vh">
              <div>
                <div class="text-h3 pb-10">
                  <b>About</b>
                </div>
                <div>
                  Our multicultural leaders have deep start-up and enterprise experience, with rich mobile and data
                  expertise.
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col align="center" cols="4" class="pa-0 fade-bee delay-1">
            <v-img src="/images/hero-right-side.jpg" height="50vh" width="50vw" cover />
          </v-col>
          <v-col align="center" cols="4" class="pa-0 fade-bee delay-3">
            <v-card class="d-flex justify-center align-center" color="#e8e4e4" elevation="0" height="50vh">
              <div>
                <div class="text-h3 pb-10">
                  <b>Services</b>
                </div>
                <div>
                  Our multicultural leaders have deep start-up and enterprise experience, with rich mobile and data
                  expertise.
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
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
  </style>
  