<template>
  <ul class="blog-posts">
    <li v-for="article in articles" :key="article.slug">
      <nuxt-link :to="{name:'blog-slug', params: {slug: article.slug}}">
        {{ article.title }}
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
  }
}
</script>
