<template>
  <v-dialog
    v-model="dialog"
    width="550"
    class="d-flex flex-column align-center"
  >
    <v-card>
      <v-card-text class="pa-10">
        <h1>Add Blog</h1>
      </v-card-text>
      <v-container class="input-container pa-5">
        <v-text-field
          v-model="blog.title"
          class="input"
          label="Title"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="blog.content"
          class="input"
          label="Content"
          clearable
        ></v-text-field>
        <v-textarea
          v-model="blog.description"
          class="input"
          label="Description"
        ></v-textarea>
        <v-btn class="ma-2" color="primary" dark @click="add"
          ><span @click="dialog = false">Add</span></v-btn
        >
      </v-container>
    </v-card>
    <template #activator="{ on }">
      <v-btn
        class="add-btn ma-15 pa-9 text-center mr-1 mb-1"
        color="primary"
        fab
        dark
        fixed
        bottom
        right
        v-on="on"
      >
        <v-icon class="icon" dark> mdi-plus </v-icon>
      </v-btn>
    </template>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddBlog',
  data() {
    return {
      blog: {
        _id: Math.floor(Math.random() * 1000),
        title: '',
        content: '',
        description: '',
      },
      dialog: false,
    }
  },
  methods: {
    ...mapActions('zerubabel', ['addBlog']),
    add() {
      this.addBlog(this.blog)
    },
  },
}
</script>
