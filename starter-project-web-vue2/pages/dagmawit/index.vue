<template>
  <v-app>
    <v-main class="white">
      <BlogPost />
    </v-main>
  </v-app>
</template>

<script>
import BlogPost from '../../components/dagmawit/BlogPost.vue'
export default {
  name: 'Index',
  components: {
    BlogPost,
  },
}
</script>
