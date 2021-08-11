<template>
  <article>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />

    <blog-posts :articles="articles" />
  </article>
</template>

<script>
import AppBox from '~/components/box.vue';

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
    const page = await $content('blog').fetch()
    const articles = await $content('articles').fetch()

    return {
      page,
      articles
    }
  },
  components: {
    AppBox,
    BlogPosts: () => import("@/components/blogPosts")
  }
}
</script>

<style lang="scss" scoped>

</style>
