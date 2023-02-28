<template>
  <article>
    <h1>{{ page.title }}</h1>
    <p class="text-italic">Première publication le {{ formatDate(page.publication) }}.</p>

    <nav>
      <ul>
        <li v-for="link of page.body.toc.links" :key="link.id">
          <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
        </li>
      </ul>
    </nav>

    <hr>
    
    <ContentDoc :path="'/articles/'+route.params.slug" />
  </article>
</template>

<script setup>
const route = useRoute()

const page = await queryContent('/articles/'+route.params.slug).findOne()

// useHead({
//   meta: [
//     {
//       hid: 'description',
//       name: 'description',
//       content: this.page.description
//     },
//   ],
//   title: this.page.title
// })

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('fr', options)
};
</script>

<style lang="scss">
img {
  border: 1px solid #cccccc;
  border-radius: 4px;
  max-width: 100%;
}
.text-italic {
  font-style: italic;
}
</style>
