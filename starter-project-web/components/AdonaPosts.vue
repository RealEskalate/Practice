<template>
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import AdonaPost from './AdonaPost.vue'
export default Vue.extend({
  name: 'AdonaPosts',
  components: {
    AdonaPost
  },
  data () {
    return {
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
  }
})
</script>
<style scoped>
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
</style>
