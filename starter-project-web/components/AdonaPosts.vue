<template>
  <div>
    <v-card color="white">
      <v-card-title class="black--text">
        <h3>Adona's Posts</h3>
      </v-card-title>
      <v-card-action>
        <v-btn left> Add Post </v-btn>
      </v-card-action>
      <v-spacer />
      <AdonaPost v-for="post in posts" :key="post.id" :post="post" />
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import AdonaPost from './AdonaPost.vue'
export default Vue.extend({
  name: 'AdonaPosts',
  components: {
    AdonaPost
  },
  data () {
    return {
      posts: []
    }
  },
  async created () {
    const response = await axios.get('http://jsonplaceholder.typicode.com/posts')
    this.posts = response.data
    console.log(response.data)
  }
})
</script>
