<template>
  <article>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />

    <div class="row">
      <app-box class="col" v-for="article in articles" :key="article.slug">
        <template slot="body">
          <nuxt-link :to="{name:'blog-slug', params: {slug: article.slug}}">{{ article.title }}</nuxt-link>
          <p v-if="article.excerpt">{{ article.excerpt }}</p>
        </template>
      </app-box>
    </div>
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
    const page = await $content('accueil').fetch()
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
li {
  border-bottom: 1px solid #f0f0f2;
  padding: 0.5rem;

  p {
    margin: 0;
  }
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: -15px;
  margin-left: -15px;
  align-items: stretch;

  .col {
    display: flexbox;
    flex-basis: 25%;
    max-width: 25%;
    padding-right: 15px;
    padding-left: 15px;
  }
}
</style>
