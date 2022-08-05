<template>
  <v-row>
    <v-col v-for="blog in allBlogs" :key="blog.title" cols="12" sm="8" md="4">
      <AbelSingleBlogVue
        :id="blog._id"
        :title="blog.title"
        :description="blog.description"
        :content="blog.content"
      />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AbelSingleBlogVue from './AbelSingleBlog.vue'
export default {
  components: { AbelSingleBlogVue },
  computed: mapGetters('abel', ['allBlogs']),
  created() {
    this.fetchBlogs()
  },
  methods: {
    ...mapActions('abel', ['fetchBlogs']),
  },
}
</script>
