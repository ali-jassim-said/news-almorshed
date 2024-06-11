export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        {charset: 'utf8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      ],
      link: [
        {rel:"stylesheet", href:"/css/bootstrap.css"},
        {rel:"stylesheet", href:"/css/bootstrap.css.map"},
        {rel:"stylesheet", href:"/css/animate.css"},
        {rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"},
        {rel:"stylesheet", href:"/css/media_query.css"},
        {rel:"stylesheet", href:"/css/owl.carousel.css"},
        {rel:"stylesheet", href:"/css/owl.theme.default.css"},
        {rel:"stylesheet", href:"/css/style_1.css"},
        {rel:"stylesheet", href:"/css/style_1.css.map"},
        {rel:"stylesheet", href:"/sass/style_1.scss"},
        {rel:"stylesheet", href:"https://fonts.googleapis.com/css?family=Poppins"},
        {rel:"stylesheet", href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"},
      ],
      script:[
        {src: 'https://code.jquery.com/jquery-3.6.0.min.js'}, // Ensure jQuery is loaded first
        {src: 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.7/js/tether.min.js'}, // Include Tether.js
        {src: '/js/bootstrap.js'}, // Bootstrap.js requires Tether.js
        {src: '/js/jquery.stellar.min.js'},
        {src: '/js/jquery.waypoints.min.js'},
        {src: '/js/main.js'},
        {src: '/js/modernizr-3.5.0.min.js'},
        {src: '/js/owl.carousel.min.js'}, // Ensure this file exists in the correct directory
      ],
    },
  },
})
