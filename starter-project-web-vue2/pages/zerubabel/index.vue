<template>
  <v-app>
    <v-main md="xl">
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
