module.exports = {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ]
    },
    modules: [
      '@nuxt/content'
    ],
    buildModules: [
      '@nuxtjs/pwa',
    ],
    content: {
      markdown: {
        prism: {
          theme: 'static/css/prism-vsc-dark-plus.css'
        }
      }
    },
    css: ['@/assets/scss/layout.scss'],
    pwa: {
      manifest: {
        name: 'Un Coin du Web',
        lang: 'fr',
        short_name: 'UCDW',
        useWebmanifestExtension: true
      },
      meta: {
        theme_color: '#417796'
      }
    }
}
