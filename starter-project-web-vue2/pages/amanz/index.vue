<template>
  <div>
    <!-- <v-btn color="success" class="my-3 ml-5 py-5 px-7">add blog</v-btn> -->
    <AddBlog />
    <div v-if="blogs.length > 0">
      <v-row v-for="blog in blogs" :key="blog._id">
        <AmanzBlog :blog="blog" />
      </v-row>
    </div>
    <div v-else>loading...</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AmanzBlog from '~/components/amanz/AmanzBlog.vue'
import AddBlog from '~/components/amanz/AddBlog.vue'

export default {
  name: 'App',
  components: { AmanzBlog, AddBlog },
  computed: { ...mapState('amanz', ['blogs']) },
  mounted() {
    this.fetchBlogs()
  },
  methods: {
    ...mapActions('amanz', ['fetchBlogs']),
  },
}
</script>
