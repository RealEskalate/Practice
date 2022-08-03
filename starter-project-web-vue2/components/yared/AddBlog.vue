<template>
  <div>
    <v-dialog max-width="600px">
      <template #activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          color="blue"
          fab
          dark
          elevation="10"
          style="position: fixed; bottom: 10%; right: 5%"
          v-on="on"
        >
          <v-icon>mdi-plus-thick</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h2>Add a New Blog</h2>
        </v-card-title>
        <v-form class="px-12">
          <v-text-field
            v-model="newBlog.title"
            :counter="20"
            label="Title"
            required
          ></v-text-field>

          <v-text-field
            v-model="newBlog.content"
            label="Content"
            required
          ></v-text-field>

          <v-text-field v-model="newBlog.imageUrl" label="image"></v-text-field>

          <v-btn color="success" class="ma-4" @click="onSubmit">
            Add Blog
          </v-btn>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddBlog',
  data() {
    return {
      newBlog: {
        title: '',
        content: '',
        description: 'this is a sample description',
        imageUrl: '',
      },
    }
  },
  methods: {
    ...mapActions({
      addBlog: 'yared/addBlog',
    }),
    clearForm() {
      this.newBlog.title = ''
      this.newBlog.content = ''
      this.newBlog.imageUrl = ''
    },
    onSubmit() {
      // e.preventDefault()
      this.addBlog(this.newBlog)
      this.clearForm()
    },
  },
}
</script>
