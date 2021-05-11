<template>
  <button class="movie">
    <Image
      :images="title.images"
      :alt-text="title.name"
    />
    <h3 @click="handleMovieDetailsClick(title)">
      {{ title.name }}
    </h3>
  </button>
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
      title: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data() {
      return {
        sharedState: store.state
      }
    },
    methods: {
      handleMovieDetailsClick(title) {
        let titleObj = {
          name: title.name,
          rating: title.titleRating,
          description: title.description.short,
          flags: title.flags
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
    background-color: transparent;
    color: white;
    border: none;
  }

  :focus-visible {
    border: none;
    outline: none;
    text-decoration: 2px underline #B10000;
  }

  h3 {
    height: 44px;
    font-size: 18px; 
    cursor: pointer;
  }

  h3:hover{
    text-decoration: 2px underline #B10000;
  }
</style>