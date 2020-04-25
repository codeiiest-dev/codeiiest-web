const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/codeiiest/'
  }
} : {
}

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
 ...routerBase,
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
  /*
  ** Customize the progress-bar color
  */
  //loading: { color: '#fff' },
  loading: '~/components/base/Spinner.vue',

  /*
  ** Global CSS
  */
  css: [
    '~/assets/bulma.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
   { src: '~/plugins/particles.js', ssr: false},
  ],
  /*
  ** Nuxt.js dev-modules
  */
 buildModules: [
  [
    'nuxt-fontawesome',
    {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: [
            'faEnvelope',
            'faSearch',
            'faUser',
            'faKey',
            'faCode',
            'faRobot',
            'faUserSecret'
          ]
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: [
            'faFacebook',
            'faGithub',
            'faHtml5',
            'faAndroid',
            'faLinkedin'
          ]
        }
      ]
    }
  ],
  [
    '@nuxtjs/firebase',
    {
      config: {
        apiKey: "AIzaSyBifvNEDZkYp_rN5fKAnozQvwfKibhHSKo",
        authDomain: "codeiiest-e1578.firebaseapp.com",
        databaseURL: "https://codeiiest-e1578.firebaseio.com",
        projectId: "codeiiest-e1578",
        storageBucket: "codeiiest-e1578.appspot.com",
        messagingSenderId: "128931784454",
        appId: "1:128931784454:web:ee274377ea49a0f532a087",
        measurementId: "G-XQTE56BH99"
      },
      services: {
        auth: true,
        firestore: true,  
        //analytics: true
      }
    }
  ]
],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    'nuxt-buefy',
  ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
