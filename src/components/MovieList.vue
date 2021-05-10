<template>
  <div class="moviescontainer">
    <div class="movielist">
      <Movie ref="movie" :key="title.id" v-for="title in titles" :title="title" />
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