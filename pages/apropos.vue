<template>
  <article>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
import AppBox from '~/components/box'
export default {
    head() {
        return {
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.page.description
                },
            ],
            title: this.page.title
        }
    },
  async asyncData ({ $content }) {
    const page = await $content('apropos').fetch()

    return {
      page
    }
  },
  components: {
    AppBox
  }
}
</script>
