<template>
  <v-app>
    <h1>{{ blog.title }}</h1>
    <hr />
    <p>{{ blog.content }}</p>
  </v-app>
</template>
<script>
export default {
  computed: {
    blogs() {
      return this.$store.state.yohans.blogs
    },
    blog() {
      return this.blogs[+this.$route.params.blogDetail - 1]
    },
  },
}
</script>
