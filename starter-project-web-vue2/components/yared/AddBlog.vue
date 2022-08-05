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
            v-model="title"
            :counter="20"
            label="Title"
            required
          ></v-text-field>

          <v-text-field
            v-model="description"
            label="Description"
            required
          ></v-text-field>
          <v-text-field
            v-model="content"
            label="Content"
            required
          ></v-text-field>
          <input ref="file" type="file" label="image" @change="uploadImage" />

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
      title: '',
      content: '',
      description: 'this is a sample description',
      imageUrls: null,
    }
  },
  methods: {
    ...mapActions({
      addBlog: 'yared/addBlog',
    }),
    uploadImage() {
      this.imageUrls = this.$refs.file.files[0]
    },
    clearForm() {
      this.title = ''
      this.content = ''
      this.description = ''
      this.imageUrls = null
    },
    onSubmit() {
      const fd = new FormData()
      fd.append('image', this.imageUrls)
      fd.append('title', this.title)
      fd.append('description', this.description)
      fd.append('content', this.content)
      this.addBlog(fd)
      this.clearForm()
    },
  },
}
</script>
