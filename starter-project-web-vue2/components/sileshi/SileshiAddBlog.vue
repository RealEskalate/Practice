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
import { mapActions } from 'vuex'
export default {
  name: 'AddBlog',
  data() {
    return {
    blog:{
        blogTitle: '',
        blogContent: '',
        blogPost: {},
      }
    }
  },
  methods: {
    ...mapActions("sileshi", ["addBlog"]),
    createBlog(e) {
      e.preventDefault()
      this.blog.blogPost = {
        title: this.blog.blogTitle,
        content: this.blog.blogContent,
        description: 'description',
      }
      this.addBlog(this.blog.blogPost)
      this.clearBlog()
    },
    clearBlog(){
      this.blog.blogTitle = ''
      this.blog.blogContent = ''
    },
  },
}
</script>
