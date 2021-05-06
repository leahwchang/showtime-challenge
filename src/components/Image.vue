<template>
  <img v-bind:src="images[0].url" :alt="altText" />
</template>

<script>
export default {
  name: 'Image',
  props: {
    images: Object,
    altText: String
  }
}
</script>