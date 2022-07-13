<template>
  <v-app>
    <v-main class="white">
      <BlogPost />
    </v-main>
  </v-app>
</template>

<script>
import BlogPost from '../components/AbrahamBlogPost.vue'
export default {
  name: 'IndexPage',
  components: { BlogPost },
}
</script>
<style>
.padd {
  padding-top: 5rem;
}
</style>
