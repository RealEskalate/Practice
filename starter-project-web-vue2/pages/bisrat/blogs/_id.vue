<template>
  <div>
    <div style="display: flex; justify-content: center; padding-bottom: 30px">
      <nuxt-link style="text-decoration: none; color: inherit" :to="/bisrat/">
        <v-btn color="primary"> Back to List of Blogs </v-btn>
      </nuxt-link>
    </div>
    <BlogDetail />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BlogDetail from '../../../components/bisrat/BlogDetail.vue'

export default {
  components: { BlogDetail },
  computed: { ...mapState('bisrat', ['blogs']) },
  created() {
    const id = this.$route.params.id
    for (const blog of this.blogs) {
      if (blog._id === id) {
        this.setBlogDetail(blog)
        break
      }
    }
  },
  methods: {
    ...mapActions('bisrat', ['setBlogDetail']),
  },
}
</script>
