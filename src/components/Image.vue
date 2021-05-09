<template>
  <img :src="images[0].url" width="200"
:alt="altText" />
</template>

<script>
export default {
  name: 'Image',
  props: {
    images: Object,
    altText: String
  },
  methods: {
    getSrcset(images) {
      let srcsets = [];
      images.forEach(function(image) {
        srcsets.push(`${image.url} ${image.width}w`);
      });
      return srcsets.toString();
    }
  }
}
</script>