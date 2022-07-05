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
          <v-text-field v-model="blogTitle" label="Title" />
          <v-textarea v-model="blogContent" label="Content" />
          <v-spacer></v-spacer>
          <v-btn @click="onSubmit" class="success mx-0 mt-3">Add Blog</v-btn>
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
      blogTitle: '',
      blogContent: '',
      blogPost: {},
    }
  },
  methods: {
    ...mapActions(['addBlog']),
    onSubmit(e) {
      e.preventDefault()
      this.blogPost = {
        title: this.blogTitle,
        body: this.blogContent,
        userId: 1,
      }
      this.addBlog(this.blogPost)
      this.blogTitle = ''
      this.blogContent = ''
    },
  },
}
</script>
