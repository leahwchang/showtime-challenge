<template>
  <div class="moviescontainer">
    <div class="movielist">
      <div :key="title.id" v-for="title in titles">
        <Movie :title="title" />
      </div>
    </div>

  </div>
</template>

<script>
  import Movie from './Movie.vue'
  export default {
    name: 'MovieList',
    components: {
      Movie
    },
    props: {
      titles: Array
    }
  }
</script>