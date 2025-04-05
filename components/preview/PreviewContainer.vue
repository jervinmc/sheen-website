<template>
    <div>
      <v-row class="pa-0">
        <v-col align="center" cols="12">
          <div class="image-wrapper" ref="heroSection">
            <v-img
              src="/images/preview-image-2.jpeg"
              class="d-flex justify-center align-center"
              height="70vh"
              cover
            >
              <div class="overlay"></div> <!-- dark overlay placed properly -->
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
          observer.disconnect(); // only trigger once
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
<style>
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
  background-color: rgba(0, 0, 0, 0.4); /* controls how dark it is */
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


</style>  