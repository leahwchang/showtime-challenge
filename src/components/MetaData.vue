<template>
  <div class="metadata">
    <div v-if="sharedState.title.name ? true : false">
      <h2 id="title-name">
        {{ sharedState.title.name }}
      </h2>
      <p><strong>Rating:</strong> <span id="rating">{{ replaceUnderscore(sharedState.title.rating) }}</span></p>
      <p><strong>Description:</strong> <span id="description">{{ sharedState.title.description }}</span></p>
      <div class="flags">
        <span
          v-for="flag in sharedState.title.flags"
          :key="flag"
          class="flag"
        >
          {{ replaceUnderscore(flag) }}
        </span>
      </div>
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
      title: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data() {
      return {
        sharedState: store.state
      }
    },
    methods: {
      replaceUnderscore(text) {
        return text.replace(/_/g, " ")
      }
    }
  }
</script>

<style scoped>
  .metadata {
    text-align: left;
  }

  #title-name:before {
    content: '';
    display: block;
    margin-bottom: 15px;
    width: 40px;
    border-bottom: 5px solid #B10000;
  }

  .flags {
    display: flex;
    flex-wrap: wrap;
  }

  .flag {
    list-style: none;
    background-color: #B10000;
    padding: 5px 11px;
    border-radius: 20px;
    margin: 0 10px 10px 0;
  }
</style>