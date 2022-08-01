<template>
  <v-app>
    <h1>{{ blog.title }}</h1>
    <hr />
    <p>{{ blog.content }}</p>
  </v-app>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      blogs: 'yohans/blogs',
    }),
    blog() {
      return this.blogs.find(
        (item) => +item.id === +this.$route.params.blogDetail
      )
    },
  },
}
</script>
