export default defineNuxtConfig({
    head: {
      titleTemplate: '%s - Un Coin du Web',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ]
    },
    modules: [
      '@nuxt/content',
      '@nuxtjs/robots',
      // ['nuxt-matomo', {
      //   matomoUrl: '//matomo.encre-informatique.com/',
      //   siteId: 13
      // }],
      '@kevinmarrec/nuxt-pwa',
    ],
    content: {
      markdown: {
        prism: {
          theme: 'static/css/prism-vsc-dark-plus.css'
        },
        externalLinks: {
          target: "_blank",
          rel: "noopener"
        }
      }
    },
    css: ['@/assets/scss/layout.scss'],
    pwa: {
      manifest: {
        name: 'Un Coin du Web',
        lang: 'fr',
        short_name: 'UCDW'
      },
      meta: {
        theme_color: '#417796'
      }
    },
    robots: [
      {
        UserAgent: '*',
        Allow: '/'
      }
    ]
});
