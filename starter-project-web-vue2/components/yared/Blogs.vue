<template>
  <div>
    <div class="d-flex">
      <h1>List of Blogs</h1>
      <v-spacer />
      <div v-if="$auth.loggedIn">
        <v-btn color="red" text @click="$auth.logout()">Log Out</v-btn>
      </div>
      <div v-else>
        <v-btn text to="yared/login">Log In</v-btn>
        <v-btn text to="yared/register">Sign Up</v-btn>
      </div>
    </div>
    <hr />
    <div v-for="blog in blogs" :key="blog.id">
      <Blog :blog="blog" />
    </div>
    <AddBlog />
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import Blog from './Blog.vue'
import AddBlog from './AddBlog.vue'

export default {
  name: 'Blogs',
  components: {
    Blog,
    AddBlog,
  },
  computed: {
    ...mapState('yared', ['blogs']),
  },
  methods: {
    ...mapActions({
      fetchBlogs: 'yared/fetchBlogs',
    }),
  },
  created() {
    this.fetchBlogs()
  },
}
</script>
