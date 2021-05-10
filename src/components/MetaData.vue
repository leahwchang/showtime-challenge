<template>
  <div class="metadata">
    <div v-if="sharedState.title.name ? true : false">
      <h2>{{ sharedState.title.name }}</h2>
      <p><strong>Rating:</strong> <span id="rating">{{ sharedState.title.rating }}</span></p>
      <p><strong>Description:</strong> <span id="description">{{ sharedState.title.description }}</span></p>
    </div>    
  </div>
</template>

<script>
  import {
    store
  } from "@/store"

  export default {
    name: 'MetaData',
    props: {
      title: Object
    },
    data() {
      return {
        sharedState: store.state
      }
    }
  }
</script>

<style scoped>
  .metadata {
    text-align: left;
  }
</style>