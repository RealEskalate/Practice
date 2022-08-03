<template>
  <v-app>
    <v-main class="white">
      <NavBar />
      <BlogPost />
    </v-main>
  </v-app>
</template>

<script>
import BlogPost from '../../components/keiredin/KeiredinBlogPost.vue'
import NavBar from '../../components/keiredin/NavBar.vue'
export default {
  name: 'IndexPage',
  components: { BlogPost, NavBar },
}
</script>
