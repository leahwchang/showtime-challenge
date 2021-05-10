<template>
  <div class="metadata">
    <div v-if="sharedState.title.name ? true : false">
      <p><strong>{{sharedState.title.name}}</strong></p>
      <p><strong>Rating:</strong> {{sharedState.title.rating}}</p>
      <p><strong>Description:</strong> {{sharedState.title.description }} </p>
    </div>    
  </div>
</template>

<script>
  import {
    store
  } from "@/store";

  export default {
    name: 'MetaData',
    props: {
      title: Object
    },
    data() {
      return {
        sharedState: store.state
      };
    }
  }
</script>

<style scoped>
  .metadata {
    text-align: left;
  }
</style>