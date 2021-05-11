<template>
  <img
    :src="images[0].url"
    width="200"
    :alt="altText"
  >
</template>

<script>
  export default {
    name: 'Image',
    props: {
      images: {
        type: Array,
        default () {
          return []
        }
      },
      altText: {
        type: String,
        default: ''
      }
    },
  }
</script>