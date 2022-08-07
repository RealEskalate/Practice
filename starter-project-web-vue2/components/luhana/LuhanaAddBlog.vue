<template>
  <v-dialog max-width="600px">
    <template #activator="{ on }">
    
      <v-btn
      class="mx-3"
        fab
        dark
        small
        color="grey" 
        v-on="on">
        <v-icon dark>
          mdi-plus
        </v-icon>
        </v-btn
      >
    </template>
    <v-card>
      <v-card-title>
        <h2>New Blog</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field v-model="title" label="Title" />
          <v-textarea v-model="desc" label="Desc" />
          <v-spacer></v-spacer>
          <v-btn class=" mx-0 mt-3" color="aqua" @click="onSubmit">Add Blog</v-btn>
          
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
      title: '',
      desc: '',
      blogPost: {},
    }
  },
  methods: {
    
    ...mapActions(['addBlog']),
    onSubmit(e) {
      e.preventDefault()
      this.blogPost = {
        title: this.title,
        desc: this.desc,
        description: 'description',
      }
      this.addBlog(this.blogPost)
      this.title = ''
      this.desc = ''
    },
    reset () {
        this.$v.$reset()
        this.title = ''
        this.desc = ''
      },
  },
}
</script>
