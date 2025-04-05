import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    // middleware: ["authenticated"]
  },


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Anyana Antel Tanza Cavite',
    title: 'Anyana Antel | House and Lot for Sale in Tanza Cavite',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Discover Anyana Antel in Tanza, Cavite – a premier residential community by Antel Group offering elegant homes, resort-style amenities, and a peaceful suburban lifestyle just outside Metro Manila.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Anyana Antel, Antel Tanza Cavite, House and Lot for Sale, Cavite Real Estate, Antel Group, Tanza Housing'
      },
      { hid: 'format-detection', name: 'format-detection', content: 'telephone=no' },
  
      // Open Graph / Facebook
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  auth: {
    strategies: {
      local: {
        scheme: "refresh",
        token: {
          property: "access",
          maxAge: 900
        },
        refreshToken: {
          property: "refresh",
          data: "refresh",
          maxAge: 1 * 24 * 60 * 60
        },
        user: {
          property: "user"
          // autoFetch: false
        },
        endpoints: {
          login: { url: "/auth/login/", method: "post",propertyName: 'access' },
          refresh: { url: "/auth/refresh/", method: "post" },
          user: { url: "/auth/user/", method: "get" },
          logout: { url: "/auth/logout/", method: "post" }
        },
        autoLogout: false
      }
    },
    redirect: {
      login: "/login",
      logout: "/",
      callback: "/login",
      home: "/dashboard"
    }
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~layouts/global.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/global.js','~/plugins/enums.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
   "~/components",
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/auth',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  sitemap: {
    hostname: 'https://sheen-antel.homeagent.site',
    gzip: true,
    routes: ['/']
  },
  robots: {
    UserAgent: '*',
    Disallow: ['/admin', '/login'],
    Allow: '/',
  },
  axios: {
    baseURL: process.env.BASE_URL_DEV
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],
  
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: '#ef5777',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
