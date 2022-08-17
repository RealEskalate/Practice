<template>
  <v-app>
    <v-main class="white">
      <BlogPost />
    </v-main>
  </v-app>
</template>

<script>
import BlogPost from '../../components/tibebu/TibebuBlogList.vue'
export default {
  name: 'IndexPage',
  components: { BlogPost },
}
</script>
