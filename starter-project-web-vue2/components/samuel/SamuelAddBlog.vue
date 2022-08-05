<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">
        <v-icon left> mdi-plus </v-icon>
        Add Blog</v-btn
      >
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a New Blog</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field label="Title" v-model="blog.blogTitle"  />
          <v-textarea label="Content" v-model="blog.blogContent" />
          <v-spacer></v-spacer>
          <v-btn class="success mx-0 mt-3" @click="createBlog">Add Blog</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import {mapState, mapActions } from 'vuex'
export default {
  name: 'AddBlog',
  data() {
    return {
      blog:{
        blogTitle: '',
        blogContent: '',
        imageUrl: '',
        blogPost: {},
      }
    }
  },
  computed: { ...mapState('samuel', ['blogs']) },
  methods: {
    ...mapActions('samuel', ['addBlog']),
    createBlog(e) {
      e.preventDefault()
      this.blogPost = {
        title: this.blog.blogTitle,
        content: this.blog.blogContent,
        imageUrls: this.imageUrl,
        description: 'description',
      }
      this.addBlog(this.blogPost)
      this.blogTitle = ''
      this.blogContent = ''
      this.imageUrl = ''
    },
  },
}
</script>
