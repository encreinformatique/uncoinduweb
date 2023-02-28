<template>
  <article>
    <ContentDoc path="/accueil" />

    <BlogPosts :articles="articles" />
  </article>
</template>

<script setup>
const articles = await queryContent('articles').sort({ publication: -1 }).find()
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
