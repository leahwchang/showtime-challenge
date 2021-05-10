<template>
  <div class="main-wrapper">
    <div class="movies-container">
      <MovieList class="scrollable" :titles="titles" />
    </div>
    <div class="sidebar">
      <MetaData />
    </div>
  </div>
</template>

<script>
  import MovieList from '@/components/MovieList.vue'
  import MetaData from '@/components/MetaData.vue'

  export default {
    name: 'Home',
    components: {
      MovieList,
      MetaData
    },
    data() {
      return {
        titles: []
      }
    },
    methods: {
      async fetchTitles() {
        const res = await fetch('api/titles')
        const data = await res.json()
        return data
      },
    },
    async created() {
      this.titles = await this.fetchTitles()
    },
  }
</script>

<style scoped>
  .header {
    height: 60px;
    width: 100%;
    text-align: center;
  }

  .main-wrapper {
    height: 100%;
    width: 100%;
    position: absolute;
  }

  .movies-container {
    height: 100%;
    position: fixed;
    padding: 0px;
    margin-left: 20px;
    width: 75%;
  }

  .scrollable {
    height: 100%;
    position: relative;
    overflow-y: scroll;
  }

  .sidebar {
    height: 100%;
    overflow: auto;
    position: relative;
    padding: 0px;
    width: 20%;
    margin-right: 20px;
    float: right;
  }
</style>