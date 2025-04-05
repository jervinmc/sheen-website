<template>
  <div>
    <!-- comment: Hero -->
    <v-row class="pa-0 hero-row">
      <v-col align="center" cols="6">
        <v-img
          class="slide-in-left"
          src="/images/hero-left-side.jpeg"
          height="100vh"
          width="50vw"
          cover
        ></v-img>
      </v-col>
      <v-col align="center" cols="6">
        <v-img
          class="slide-in-right"
          src="/images/hero-right-side.jpg"
          height="100vh"
          width="50vw"
          cover
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>
<style>
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

.slide-in-left {
  animation: slideLeft 0.5s ease-out forwards;
}

.slide-in-right {
  animation: slideRight 0.5s ease-out forwards;
}

</style>