<template>
  <v-app>
    <v-main class="white">
      <BlogPost />
    </v-main>
  </v-app>
</template>

<script>
import BlogPost from '../../components/zerubabel/Blogs.vue'
export default {
  name: 'IndexPage',
  components: { BlogPost },
}
</script>
<style>
.white{
  width: 100%;
}
</style>
