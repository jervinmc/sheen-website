<template>
    <v-card class="pa-16 parent-card" color="#fb7c1c">
      <v-row class="section-container">
        <!-- Left Image -->
        <v-col align="center" cols="4" class="pa-0 fade-bee delay-1">
          <v-img
            src="/images/service-image-1.jpg"
            height="50vh"
            width="50vw"
            cover
          />
        </v-col>
  
        <!-- Middle Image -->
        <v-col align="center" cols="4" class="pa-0 fade-bee delay-2">
          <v-img
            src="/images/service-image-1.jpg"
            height="50vh"
            width="50vw"
            cover
          />
        </v-col>
  
        <!-- Right Image -->
        <v-col align="center" cols="4" class="pa-0 fade-bee delay-3">
          <v-img
            src="/images/service-image-1.jpg"
            height="50vh"
            width="50vw"
            cover
          />
        </v-col>
  
        <!-- Lowered Overlapped Card on All Three Images -->
        <v-card class="overlapped-card ">
          <div class="text-h5 text-center">
            <b>Building a House?</b>
          </div>
          <div class="text-body1 text-center">
            You'll get to personalize the details of your house when you're building a house from the ground up—from the layout.
          </div>
          <v-text-field
            label="Enter a valid email address"
            type="email"
            class="email-input"
            outlined
          />
        </v-card>
      </v-row>
    </v-card>
  </template>
  
  <style scoped>
  /* Parent card styling */
  .parent-card {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    height: 80vh; /* Adjust height to ensure content fits */
  }
  
  /* To ensure the section height accommodates the card and images */
  .section-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start; /* Align the images properly in the container */
    position: relative;
  }
  
  /* To make sure the card overlaps the images */
  .overlapped-card {
    position: absolute;
    top: 100%; /* Further lowered */
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.9); /* Slightly more opaque */
    padding: 16px;
    max-width: 90%;
    z-index: 10; /* Ensure it floats above the images */
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  }
  
  /* Styling for the email input */
  .email-input {
    margin-top: 16px;
    width: 100%;
  }
  
  /* Fade animation styling */
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
  </style>
  
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
  