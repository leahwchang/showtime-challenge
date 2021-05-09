<template>
  <div class="movie">
    <Image :images="title.images" :altText="title.name" />
    <h3 @click="onClick(title)">{{ title.name }}</h3>
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
      onClick(title) {
        let titleObj = {
          name: title.name,
          rating: title.titleRating,
          description: title.description.short
        }
        this.$emit('show-title-details', titleObj);
        console.log(title.name, title.titleRating, title.description.short);
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