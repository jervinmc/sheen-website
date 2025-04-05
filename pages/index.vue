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
      title: 'Anyana Antel | House and Lot for Sale in Tanza Cavite',
      meta: [
        { hid: 'description', name: 'description', content: 'Discover Anyana Antel in Tanza, Cavite – a premier residential community by Antel Group offering elegant homes, resort-style amenities, and a peaceful suburban lifestyle just outside Metro Manila.' },
        { hid: 'keywords', name: 'keywords', content: 'Anyana Antel, Antel Tanza Cavite, House and Lot for Sale, Cavite Real Estate, Antel Group, Tanza Housing' },

        // Open Graph
        { hid: 'og:title', property: 'og:title', content: 'Anyana Antel | House and Lot for Sale in Tanza Cavite' },
        { hid: 'og:description', property: 'og:description', content: 'Live in elegance and comfort at Anyana Antel by Antel Group, located in the heart of Tanza, Cavite. Spacious homes and family-friendly amenities await you.' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://sheen-antel.homeagent.site' },
        { hid: 'og:image', property: 'og:image', content: 'https://sheen-antel.homeagent.site/images/anyana-antel.jpg' },

        // Twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Anyana Antel | House and Lot for Sale in Tanza Cavite' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Explore premium homes at Anyana Antel, Tanza Cavite. A peaceful, secure, and vibrant community developed by Antel Group.' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://sheen-antel.homeagent.site/images/anyana-antel.jpg' }
      ],
      link: [
        { rel: 'canonical', href: 'https://sheen-antel.homeagent.site' }
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            "@context": "https://schema.org",
            "@type": "Residence",
            "name": "Anyana Antel",
            "url": "https://sheen-antel.homeagent.site",
            "image": "https://sheen-antel.homeagent.site/images/anyana-antel.jpg",
            "description": "Discover Anyana Antel in Tanza, Cavite – a premier residential community by Antel Group offering elegant homes, resort-style amenities, and a peaceful suburban lifestyle just outside Metro Manila.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tanza",
              "addressRegion": "Cavite",
              "addressCountry": "PH"
            },
            "brand": {
              "@type": "Organization",
              "name": "Antel Group"
            }
          }
        }
      ]
    }
  },
  components: { Hero, About, PromoContent, ServiceContainer, GalleryContainer, AboutContainer, ContactContainer  },

}
</script>

<style>

</style>