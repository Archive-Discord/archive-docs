const path = require('path')
const fs = require('graceful-fs')

export default {
  telemetry: false,

  // ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Archive Docs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { name: 'naver-site-verification', content: 'cb6c0591270b1f2f703cc09f13790b60ae7858d0' },
      { hid: 'description', name: 'description', content: '아카이브의 공식 문서입니다.' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fontawesome.appie.dev/css/all.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: "https://polyfill.appie.dev/polyfill.min.js?features=default%2CJSON%2CNumber.parseInt%2CNumber.parseFloat%2CNumber.isNaN%2CNumber.isInteger%2Ces2019%2Ces2018%2Ces2017%2Ces2016%2Ces2015%2Ces7%2Ces6%2Ces5%2CArray.isArray%2CArray.prototype.forEach%2CArray.prototype.indexOf%2CArray.prototype.sort%2CArray.prototype.map" },
      { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', 'data-ad-client': "ca-pub-2701426579223876", async: true, defer: true, },
      { src: "https://www.googletagmanager.com/gtag/js?id=G-RFPEC5GRBW", async: true},
      { src: "/ga.js"}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
    '@nuxtjs/composition-api/module'
  ],

  tailwindcss: {

  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/dayjs',
    '@nuxt/content',
    'cookie-universal-nuxt'
  ],
  
  generate: {
    fallback: '404.html',
    routes: ['/']
  },

  hooks: {
    'content:file:beforeInsert': (document) => {
      const regexp = new RegExp(`^/(ko)`, 'gi')
      const { dir, slug, category } = document
      const _dir = dir.replace(regexp, '')
      const _slug = slug.replace(/^index/, '')
      const _category = category && typeof category === 'string' ? category : ''

      document.to = `${_dir}/${_slug}`
      document.category = _category
    }
  },

  googleAnalytics: {
    id: 'G-RFPEC5GRBW'
  },

  publicRuntimeConfig: {
    googleAnalytics: {
      id: 'G-RFPEC5GRBW',
      debug: {
        sendHitTask: true
      }
    }
  },

  dayjs: {
    locales: ['en', 'ko'],
    defaultLocale: 'ko',
    defaultTimeZone: 'Asia/Seoul',
    plugins: [
      'utc', // import 'dayjs/plugin/utc'
      'timezone' // import 'dayjs/plugin/timezone'
    ] // Your Day.js plugin
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    credentials: true,
    withCredentials : true,
  },

  // loading: '~/components/loading.vue',

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      source: 'icon.png',
    },
    manifest: {
      name: 'Archive Documents',
      short_name: "Docs",
      description: 'Archive 의 공식 문서를 지금 확인해보세요.',
      lang: 'ko',
      useWebmanifestExtension: false
    }
  }
}


