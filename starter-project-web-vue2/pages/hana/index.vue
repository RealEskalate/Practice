<template>
  <v-app>
    <v-container ma-10>
      <v-row>
        <HanaAddBlog />
      </v-row>
      <v-row v-for="blog in blogs" :key="blog.id">
        <HanaBlogPost :blog="blog" />
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import HanaAddBlog from '../../components/hana/HanaAddBlog.vue'
import HanaBlogPost from '../../components/hana/HanaBlogPost.vue'

export default {
  name: 'App',
  components: { HanaAddBlog, HanaBlogPost },
  computed: { ...mapState('hana', ['blogs']) },
  created() {
    this.fetchBlogs()
  },
  methods: {
    ...mapActions('hana', ['fetchBlogs']),
  },
}
</script>
