<template>
  <v-app>
    <v-container>
      <v-row class="my-12">
        <AddBlog />
      </v-row>
      <v-row class="my-12">
        <BlogPost />
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import BlogPost from '../../components/amanabiy/AmanBlog.vue'
import AddBlog from '../../components/amanabiy/AmanAddBlog.vue'

export default {
  name: 'BlogPosts',
  components: {
    BlogPost,
    AddBlog,
  },
}
</script>
