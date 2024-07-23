export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
  ],
  app: {
    head: {
      meta: [
        {charset: 'utf8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      ],
      link: [
        {rel:"stylesheet", href:"/css/main.css"},
        {rel:"stylesheet", href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"},
        {rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"},
        {rel:"stylesheet", href:"https://fonts.googleapis.com/css?family=Poppins"},
      ],
      script:[
        {src: 'https://code.jquery.com/jquery-3.6.0.min.js'}, // Ensure jQuery is loaded first
        {src: 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.7/js/tether.min.js'}, // Include Tether.js
        {src: '/js/main1.js'},
      ],
    },
  },
  plugins: [
    '~/plugins/markdown.js'
  ],
  modules: ["usebootstrap"]
})