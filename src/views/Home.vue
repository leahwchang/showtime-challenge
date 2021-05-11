<template>
  <div class="main-container">
    <div class="header">
      <h1>Showtime Movielist</h1>
    </div>
    <div class="content-wrapper">
      <div class="movies-container">
        <MovieList
          class="scrollable"
          :titles="titles"
        />
      </div>
      <div class="sidebar">
        <MetaData />
      </div>
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
    async created() {
      this.titles = await this.fetchTitles()
    },
    methods: {
      async fetchTitles() {
        try {
          const res = await fetch('api/titles')
          const data = await res.json()
          return data
        } catch (err) {
          console.error(err);
        }
      },
    },
  }
</script>

<style scoped>
  .main-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: absolute;
  }

  .header {
    height: 60px;
    width: calc(100% - 40px);
    padding: 20px;
    text-align: center;
    background-color: #000000;
  }

  h1 {
    text-transform: uppercase;
    font-weight: 600;
  }

  .content-wrapper {
    display: flex;
    flex: 1;
    min-height: 0;
    padding: 0 30px;
  }

  .movies-container {
    flex: 1;
    overflow: auto;
  }

  .scrollable {
    height: 2000px;
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