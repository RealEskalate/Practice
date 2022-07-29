<template>
  <v-app>
    <v-main>
      <AddBlog></AddBlog>
      <BlogList></BlogList>
    </v-main>
  </v-app>
</template>
<script>
import BlogList from '../../components/yohans/BlogList.vue'
export default {
  name: 'IndexPage',
  components: { BlogList },
}
</script>
