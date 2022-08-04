<template>
  <v-form>
    <v-text-field v-model="blog.title" type="text" name="title" label="Title" required></v-text-field>
    <v-text-field v-model="blog.content" type="text" name="content" label="Content" required></v-text-field>
    <v-text-field v-model="blog.description" type="text" name="description" label="Description" required></v-text-field>
    <v-btn @click="onSubmit" value="Submit">Submit Blog</v-btn>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddTask',
  props: {
    show: Boolean,
  },
  data() {
    return {
      blog: {
        title: '',
        content: '',
        description: '', 
      },
    }
  },
  methods: {
    ...mapActions('abel', ['addBlog']),
    onSubmit() {
      this.addBlog(this.blog)
    },
  },
}
</script>