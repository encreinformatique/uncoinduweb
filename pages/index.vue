<template>
  <article>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />

    <blog-posts :articles="articles" />
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
            title: this.page.meta_title
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
    AppBox,
    BlogPosts: () => import("@/components/blogPosts")
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
    flex-basis: 100%;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
}

@media (min-width: 700px) {
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
}
</style>
