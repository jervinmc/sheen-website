<template>
  <div>
    <hero />
    <div>
      <!-- 2nd section -->
      <PreviewContainer />
      <!-- <promo-content /> -->
    </div>
    <div>
      <ServiceContainer />
      <!-- 3rd section -->
    </div>
    <div>
      <GalleryContainer />
      <!-- 4th section gallery -->
    </div>
    <div>
      <!-- 5th section -->
      <AboutContainer />
    </div>
    <div>
      <ContactContainer />
      <!-- 6th section -->
    </div>
  </div>
</template>

<script>
import AboutContainer from '../components/about/AboutContainer.vue';
import ContactContainer from '../components/contact/ContactContainer.vue';
import GalleryContainer from '../components/gallery/GalleryContainer.vue';
import About from '../components/home/About.vue'
import Hero from '../components/home/Hero.vue'
import PromoContent from '../components/home/PromoContent.vue'
import PreviewContainer from '../components/preview/PreviewContainer.vue';
import ServiceContainer from '../components/services/ServiceContainer.vue';
export default {
  head() {
    return {
      title: 'Home - Your Website',
      meta: [
        { hid: 'description', name: 'description', content: 'Welcome to the homepage of your website.' },
      ],
    }
  },
  components: { Hero, About, PromoContent, ServiceContainer, GalleryContainer, AboutContainer, ContactContainer  },

}
</script>

<style>

</style>