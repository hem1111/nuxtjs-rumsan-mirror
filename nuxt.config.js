
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  modules: [
    // provide path to the file with resources
    ['nuxt-sass-resources-loader', './assets/main.scss']
  ],
  

  loading: { color: 'rgb(221, 209, 209)' },


  /*
  ** Global CSS
  */
  css: ['~assets/scss/main.scss'],
    styleResources:{
      scss: ['~assets/scss/main.scss']
    },
    modules:[
      '@nuxtjs/style-resources',
      '@nuxtjs/axios'
    ],
  
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // '@nuxtjs/bulma',
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */

  build: {
    /*
    ** Run ESLint on save
    */
   extend (config, { isDev, isClient }) {
    if (isDev && isClient) {
      config.module.rules.push({
      enforce: 'pre',
      test: /\.(js|vue)$/,
      exclude: /(node_modules)/
    })
  }
},
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  }
}
