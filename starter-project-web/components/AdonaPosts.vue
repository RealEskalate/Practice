<template>
  <div class="posts">
    <v-row>
      <v-col cols="10">
        <v-card-title class="title black--text">
          <h3>Adona's Posts</h3>
        </v-card-title>
      </v-col>
      <v-col cols="2">
        <v-card-action>
          <v-btn left>
            Add Post
          </v-btn>
        </v-card-action>
      </v-col>
      <v-spacer />
    </v-row>

    <AdonaPost v-for="post in posts" :key="post.id" :post="post" />
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
    const response = await axios.get(
      'http://jsonplaceholder.typicode.com/posts'
    )
    this.posts = response.data
  }
})
</script>
<style scoped>
.posts {
  max-width: 85% !important;
  margin: 3rem auto;
}
.title {
  margin: 0 1rem;
}
</style>
