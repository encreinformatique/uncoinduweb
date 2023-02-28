<template>
  <article>
    <h1>{{ page.title }}</h1>
    <ContentRenderer :value="page" />

    <BlogPosts :articles="articles" />
  </article>
</template>

<script setup>
useHead({
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: this.page.description
    },
  ],
  title: this.page.title
});

const { page } = await useAsyncData('blog', () => queryContent('/blog').findOne())
const { articles } = await useAsyncData('articles', () => queryContent('/articles').sortBy('publication', 'desc').find())
</script>
