<template>
  <div>
    <!-- comment: Hero -->
    <v-row class="pa-0 hero-row">
      <!-- Left Image -->
      <v-col 
        align="center" 
        cols="12" md="6" 
        class="d-flex justify-center"
      >
        <v-img
          class="slide-in-left"
          src="/images/hero-left-side.jpeg"
          height="auto"
          max-height="100vh"
          width="100%"
          cover
        ></v-img>
      </v-col>

      <!-- Right Image -->
      <v-col 
        align="center" 
        cols="12" md="6" 
        class="d-flex justify-center"
      >
        <v-img
          class="slide-in-right"
          src="/images/hero-right-side.jpg"
          height="auto"
          max-height="100vh"
          width="100%"
          cover
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<style>
/* Animation for sliding images from left */
@keyframes slideLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Animation for sliding images from right */
@keyframes slideRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Apply slide-in animation for left image */
.slide-in-left {
  animation: slideLeft 0.5s ease-out forwards;
}

/* Apply slide-in animation for right image */
.slide-in-right {
  animation: slideRight 0.5s ease-out forwards;
}

/* Mobile Adjustments for smoother animations */
@media screen and (max-width: 600px) {
  .slide-in-left, .slide-in-right {
    animation-duration: 0.8s; /* Slightly slower for smaller screens */
  }
}

/* Optional: Add spacing adjustments or additional styling for mobile if needed */
.hero-row {
  margin-bottom: 0; /* Remove any extra margin */
}

/* Ensure that the images fill up the space while maintaining their aspect ratio */
.v-img {
  object-fit: cover;
  width: 100%;
  height: auto;
}
</style>
