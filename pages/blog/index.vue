<script setup>
const articles = await queryContent('articles').sort({ publication: -1 }).find()
</script>

<template>
  <article>
    <ContentDoc path="/blog" />

    <BlogPosts :articles="articles" />
  </article>
</template>
