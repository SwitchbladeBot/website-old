<template>
  <section class="hero is-vcentered">
    <div class="has-text-centered">
      <div v-if="error.statusCode == 404">
        <h1 class="title">404</h1>
        <h2 class="subtitle">Not found</h2>
      </div>
      <div v-else>
        <h1 class="error">An error occurred</h1>
      </div>

      <nuxt-link 
        class="button is-normal is-rounded is-primary" 
        to="/">
        <span class="icon">
          <i class="mdi mdi-arrow-left-bold mdi-24px"/>
        </span>
        <span>
          Go back to the home page
        </span>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ErrorPage',
    props: {
      error: {
        type: Object,
        default: null
      }
    },
    layout: 'blog' // you can set a custom layout for the error page
  }
</script>

<style scoped>
.title {
  color: #fff;
  font-size: 150px;
  font-style: italic;
}

.subtitle {
  color: #fff;
  font-size: 50px;
  padding-bottom: 30px;
}

.error {
  color: #fff;
  font-size: 50px;
  font-style: italic;
  padding-bottom: 30px;
}

</style>
