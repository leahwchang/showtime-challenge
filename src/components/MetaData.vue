<template>
  <div class="metadata">
    <h1>SIDEBAR METADATA</h1>
    <p @on="$emit('show-movie-details', title.name)"><strong>movie title</strong></p>
    <p><strong>Rating:</strong> movie title rating</p>
    <p><strong>Description:</strong> movie description.short</p>
  </div>
</template>

bus.$on('cool_event_name', function(interesting_data) {
   console.log(interesting_data)
})

<script>
  export default {
    name: 'MetaData',
    props: {
      title: Object
    },
  }
</script>

<style scoped>
.metadata {
  text-align: left;
}
</style>