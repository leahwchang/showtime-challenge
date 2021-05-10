<template>
  <div class="movie">
    <Image :images="title.images" :altText="title.name" />
    <h3 @click="clickShowMovieDetails(title)">{{ title.name }}</h3>
  </div>
</template>

<script>
  import {
    store
  } from "@/store";
  import Image from './Image.vue'

  export default {
    name: 'Movie',
    components: {
      Image
    },
    props: {
      title: Object
    },
    data() {
      return {
        sharedState: store.state
      }
    },
    methods: {
      clickShowMovieDetails(title) {
        let titleObj = {
          name: title.name,
          rating: title.titleRating,
          description: title.description.short
        }
        store.setMovieTitleAction(titleObj)
      }
    }
  }
</script>

<style scoped>
  .movie {
    width: 285px;
    margin-right: 20px;
    float: left;
    text-align: left;
  }

  h3 {
    height: 44px;
  }
</style>