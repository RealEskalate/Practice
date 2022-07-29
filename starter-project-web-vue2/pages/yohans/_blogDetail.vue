<template>
  <v-app>
    <h1>{{ blog.title }}</h1>
    <hr />
    <p>{{ blog.content }}</p>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      blogs: [
        { id: 1, title: 'a', content: 'content of a' },
        { id: 2, title: 'b', content: 'content of b' },
        { id: 3, title: 'c', content: 'content of c' },
        { id: 4, title: 'd', content: 'content of d' },
      ],
    }
  },
  computed: {
    blog() {
      return this.blogs[+this.$route.params.blogDetail - 1]
    },
  },
}
</script>
