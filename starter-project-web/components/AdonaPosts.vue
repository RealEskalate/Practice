<template>
<<<<<<< HEAD
  <div class="post-section">
    <div class="add-title">
      <h2>Add new Post</h2>
    </div>
    <v-form ref="form" lazy-validation @submit="addPost">
      <v-text-field
        v-model="title"
        light
        color="purple"
        label="Title"
        class="black--text"

        required
      />
      <v-textarea
        v-model="body"
        color="purple"
        light
        label="Body"
        class="black--text"
        rows="3"
        required
      />
      <v-btn type="submit" class="button mr-4" color="purple">
        Add Post
      </v-btn>
    </v-form>
    <div class="posts">
      <h2>Posts</h2>
      <AdonaPost v-for="post in allPosts" :key="post.id" :post="post" />
    </div>
=======
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
>>>>>>> 44ae52b264db15a4f3719a41de1a9805eccae6bd
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
<<<<<<< HEAD
import { mapGetters } from 'vuex'
=======
import axios from 'axios'
>>>>>>> 44ae52b264db15a4f3719a41de1a9805eccae6bd
import AdonaPost from './AdonaPost.vue'
export default Vue.extend({
  name: 'AdonaPosts',
  components: {
    AdonaPost
  },
  data () {
    return {
<<<<<<< HEAD
      title: '',
      body: ''
    }
  },
  computed: {
    ...mapGetters('adona', ['allPosts'])
  },
  created () {
    this.$store.dispatch('adona/fetchPosts')
    // const response = await axios.get(
    //   'http://jsonplaceholder.typicode.com/posts'
    // )
    // this.posts = response.data
  },
  methods: {
    addPost (e: { preventDefault: () => void; }) {
      e.preventDefault()
      if (this.title !== '' && this.body !== '') {
        this.$store.dispatch('adona/addPost', { title: this.title, body: this.body })
      }
    }
=======
      posts: []
    }
  },
  async created () {
    const response = await axios.get(
      'http://jsonplaceholder.typicode.com/posts'
    )
    this.posts = response.data
>>>>>>> 44ae52b264db15a4f3719a41de1a9805eccae6bd
  }
})
</script>
<style scoped>
<<<<<<< HEAD
.post-section {
  max-width: 85% !important;
  margin: 3rem auto;
}
.add-title{
  margin: 1% 0;
}
.title {
  margin: 0 1rem;
}
.button{
  margin: 0 1%;
}
.posts{
  margin:  4rem 0;
}
=======
.posts {
  max-width: 85% !important;
  margin: 3rem auto;
}
.title {
  margin: 0 1rem;
}
>>>>>>> 44ae52b264db15a4f3719a41de1a9805eccae6bd
</style>
