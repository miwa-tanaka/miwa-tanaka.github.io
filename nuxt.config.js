export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Miwa's Work",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Welcome to Miwa's Work page" },
      { hid: 'og:site_name', property: 'og:site_name', content: "Miwa's Work" },
      { hid: 'og:url', property: 'og:url', content: 'https://miwa-tanaka.github.io/' },
      { hid: 'og:title', property: 'og:title', content: "Miwa's Work" },
      { hid: 'og:description', property: 'og:description', content: "Welcome to Miwa's Work page" },
      { hid: 'og:image', property: 'og:image', content: 'https://miwa-tanaka.github.io/img/miwa-ogp.png' },
      { hid: 'theme-color', property: 'theme-color', content: '#3A4A2F' }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/miwa-favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src: '@assets/scss/main.scss'}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
