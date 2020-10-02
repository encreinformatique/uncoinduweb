<template>
  <article>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />

    <app-box v-for="article in articles" :key="article.slug">
       <template slot="body">
        <nuxt-link :to="{name:'blog-slug', params: {slug: article.slug}}">{{ article.title }}</nuxt-link>
        <p v-if="article.excerpt">{{ article.excerpt }}</p>
       </template>
    </app-box>

    <!-- <div class="box" v-for="article in articles" :key="article.slug">
      <nuxt-link :to="{name:'blog-slug', params: {slug: article.slug}}">{{ article.title }}</nuxt-link>
      <p v-if="article.excerpt">{{ article.excerpt }}</p>
    </div> -->
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
    AppBox
  }
}
</script>

<style lang="scss" scoped>

</style>
