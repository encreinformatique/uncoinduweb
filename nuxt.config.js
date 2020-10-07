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
    content: {
      markdown: {
        prism: {
          theme: 'static/css/prism-vsc-dark-plus.css'
        }
      }
    },
    css: ['@/assets/scss/layout.scss']
}
