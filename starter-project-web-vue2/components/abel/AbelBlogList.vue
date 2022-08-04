<template>
  <v-row>
    <v-col v-for="blog in allBlogs" :key="blog.title" cols="12" sm="4">
      <SingleBlog
        :title="blog.title"
        :fullName="blog.authorUserId.fullName"
        :tag="blog.tag"
        :content="blog.content"
      />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SingleBlog from '../../pages/abel/_id.vue'
export default {
  components: { SingleBlog },
  computed: mapGetters('abel', ['allBlogs']),
  created() {
    this.fetchBlogs()
  },
  methods: {
    ...mapActions('abel', ['fetchBlogs']),
  },
}
</script>
