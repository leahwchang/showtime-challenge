<template>
  <div class="moviescontainer">
    <div class="movielist">
      <Movie
        v-for="title in titles"
        :key="title.id"
        :title="title"
      />
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
      titles: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>