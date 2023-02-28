<template>
  <article>
    <h1>{{ page.title }}</h1>
    <ContentRenderer :value="page" />
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

const { page } = await useAsyncData('apropos', () => queryContent('/apropos').findOne())
</script>
