<template>
  <v-container>
    <v-form v-show="edit">
      <v-text-field
        v-model="blog.title"
        type="text"
        name="title"
        label="Title"
        required
      ></v-text-field>
      <v-text-field
        v-model="blog.content"
        type="text"
        name="content"
        label="Content"
        required
      ></v-text-field>
      <v-text-field
        v-model="blog.description"
        type="text"
        name="description"
        label="Description"
        required
      ></v-text-field>
      <v-btn @click="onSubmit" value="Submit" class="mb-3">Update Blog</v-btn>
    </v-form>
    <v-card elevation="10" class="pa-3">
      <nuxt-link to="/abel/">
        <v-btn>Go Back</v-btn>
      </nuxt-link>
      <v-card-title>
        {{ blog.title }}
      </v-card-title>
      <v-card-text>
        {{ blog.description }}
      </v-card-text>
      <v-card-text>{{ blog.content }}</v-card-text>
      <v-card-actions>
        <v-btn @click="toggleEdit">Edit blog</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      blog: {},
      edit: false,
    }
  },
  async created() {
    const res = await axios.get(
      `https://blog-app-backend.onrender.com/api/articles/${this.$route.params.id}`
    )
    this.blog = res.data
  },
  methods: {
    toggleEdit() {
      this.edit = !this.edit
    },
  },
}
</script>

<style>
a {
  text-decoration: none;
}
</style>
