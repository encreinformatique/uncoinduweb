<template>
  <article>
    <h1>{{ page.title }}</h1>

    <nav>
      <ul>
        <li v-for="link of page.toc" :key="link.id">
          <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
        </li>
      </ul>
    </nav>

    <hr>

    <nuxt-content :document="page" />
  </article>
</template>

<script>
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
  async asyncData ({ $content, params }) {
      console.log(params);
    const page = await $content('articles/'+params.slug).fetch()

    return {
      page
    }
  }
}
</script>
