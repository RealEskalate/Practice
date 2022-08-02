<template>
  <div>
    <div class="title">
      <h1>List of Blogs</h1>
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
    ...mapActions('yared', ['fetchBlogs']),
  },
  created() {
    this.fetchBlogs()
  },
}
</script>
<style scoped>
.title {
  width: 100%;
  display: inline-flex;
  margin: 20px 10px;
  align-items: center;
}
</style>
