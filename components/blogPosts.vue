<template>
  <ul class="blog-posts">
    <li v-for="article in articles" :key="article.slug">
      <nuxt-link :to="{name:'blog-slug', params: {slug: article.slug}}">
        {{ article.title }}
        <p class="text-italic">Première publication le {{ formatDate(article.publication) }}.</p>
        <p v-if="article.excerpt">{{ article.excerpt }}</p>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      default: []
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('fr', options)
    }
  }
}
</script>
