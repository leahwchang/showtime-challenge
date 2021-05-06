<template>
  <div class="movie">
    <Image :images="title.images" :altText="title.name" />
    <h3>{{ title.name }}</h3>
  </div>
</template>

<script>
  import Image from './Image.vue'

  export default {
    name: 'Movie',
    components: {
      Image
    },
    props: {
      title: Object
    },
    methods: {
      onClick() {
        console.log('clicked movie')
      }
    }
  }
</script>