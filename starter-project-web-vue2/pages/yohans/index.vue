<template>
  <v-app>
    <v-main>
      <AddBlog></AddBlog>
      <BlogList></BlogList>
    </v-main>
  </v-app>
</template>
<script>
import { mapActions } from 'vuex'
import BlogList from '../../components/yohans/BlogList.vue'
import AddBlog from '../../components/yohans/AddBlog.vue'
export default {
  name: 'IndexPage',
  components: { BlogList, AddBlog },

  methods: {
    ...mapActions({
      fetchBlogs: 'yohans/fetchBlogs',
    }),
  },

  created() {
    this.fetchBlogs()
  },
}
</script>
